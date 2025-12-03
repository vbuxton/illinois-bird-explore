import type { EBirdObservation, EBirdHotspot, EBirdRegionalStats } from '../types';
import { ILLINOIS_REGION_CODE } from '../data/ebirdSpeciesCodes';

const EBIRD_API_BASE = 'https://api.ebird.org/v2';
const API_KEY = import.meta.env.VITE_EBIRD_API_KEY;

// Cache duration in milliseconds (30 minutes)
const CACHE_DURATION = 30 * 60 * 1000;

interface CachedData<T> {
  data: T;
  timestamp: number;
}

/**
 * Cache manager for API responses
 */
class CacheManager {
  private cache: Map<string, CachedData<any>> = new Map();

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const age = Date.now() - cached.timestamp;
    if (age > CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  clear(): void {
    this.cache.clear();
  }

  clearExpired(): void {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > CACHE_DURATION) {
        this.cache.delete(key);
      }
    }
  }
}

const cache = new CacheManager();

/**
 * Make authenticated request to eBird API
 */
async function ebirdFetch<T>(endpoint: string): Promise<T> {
  if (!API_KEY) {
    throw new Error('eBird API key not configured. Please add VITE_EBIRD_API_KEY to your .env file.');
  }

  const url = `${EBIRD_API_BASE}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'x-ebirdapitoken': API_KEY,
      },
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      throw new Error(`eBird API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to fetch data from eBird API');
  }
}

/**
 * Fetch recent observations for a species in Illinois
 * @param speciesCode - eBird species code (e.g., 'norcar' for Northern Cardinal)
 * @param daysBack - Number of days to look back (1-30, default 30)
 * @param maxResults - Maximum number of results (1-10000, default 1000)
 */
export async function fetchRecentObservations(
  speciesCode: string,
  daysBack: number = 30,
  maxResults: number = 1000
): Promise<EBirdObservation[]> {
  const cacheKey = `obs-${speciesCode}-${daysBack}-${maxResults}`;
  
  // Check cache first
  const cached = cache.get<EBirdObservation[]>(cacheKey);
  if (cached) {
    console.log(`Using cached data for ${speciesCode}`);
    return cached;
  }

  // Fetch from API
  const endpoint = `/data/obs/${ILLINOIS_REGION_CODE}/recent/${speciesCode}?back=${daysBack}&maxResults=${maxResults}`;
  const data = await ebirdFetch<EBirdObservation[]>(endpoint);
  
  // Cache the result
  cache.set(cacheKey, data);
  
  return data;
}

/**
 * Fetch all hotspots in Illinois
 * @param format - Response format ('csv' or 'json', default 'json')
 */
export async function fetchHotspots(format: 'json' | 'csv' = 'json'): Promise<EBirdHotspot[]> {
  const cacheKey = `hotspots-${ILLINOIS_REGION_CODE}`;
  
  // Check cache first
  const cached = cache.get<EBirdHotspot[]>(cacheKey);
  if (cached) {
    console.log('Using cached hotspot data');
    return cached;
  }

  // Fetch from API
  const endpoint = `/ref/hotspot/${ILLINOIS_REGION_CODE}?fmt=${format}`;
  const data = await ebirdFetch<EBirdHotspot[]>(endpoint);
  
  // Cache the result
  cache.set(cacheKey, data);
  
  return data;
}

/**
 * Fetch notable observations in Illinois
 * @param daysBack - Number of days to look back (1-30, default 14)
 * @param maxResults - Maximum number of results (1-10000, default 100)
 */
export async function fetchNotableObservations(
  daysBack: number = 14,
  maxResults: number = 100
): Promise<EBirdObservation[]> {
  const cacheKey = `notable-${daysBack}-${maxResults}`;
  
  // Check cache first
  const cached = cache.get<EBirdObservation[]>(cacheKey);
  if (cached) {
    console.log('Using cached notable observations');
    return cached;
  }

  // Fetch from API
  const endpoint = `/data/obs/${ILLINOIS_REGION_CODE}/recent/notable?back=${daysBack}&maxResults=${maxResults}`;
  const data = await ebirdFetch<EBirdObservation[]>(endpoint);
  
  // Cache the result
  cache.set(cacheKey, data);
  
  return data;
}

/**
 * Fetch regional statistics for Illinois
 * @param year - Year (4-digit)
 * @param month - Month (1-12)
 * @param day - Day (1-31)
 */
export async function fetchRegionalStats(
  year: number,
  month: number,
  day: number
): Promise<EBirdRegionalStats> {
  const cacheKey = `stats-${year}-${month}-${day}`;
  
  // Check cache first
  const cached = cache.get<EBirdRegionalStats>(cacheKey);
  if (cached) {
    console.log('Using cached regional stats');
    return cached;
  }

  // Fetch from API
  const endpoint = `/product/stats/${ILLINOIS_REGION_CODE}/${year}/${month}/${day}`;
  const data = await ebirdFetch<EBirdRegionalStats>(endpoint);
  
  // Cache the result
  cache.set(cacheKey, data);
  
  return data;
}

/**
 * Fetch recent observations for multiple species
 * Batches requests to avoid rate limiting
 */
export async function fetchMultipleSpeciesObservations(
  speciesCodes: string[],
  daysBack: number = 30
): Promise<Map<string, EBirdObservation[]>> {
  const results = new Map<string, EBirdObservation[]>();
  
  // Process sequentially to avoid rate limiting
  for (const code of speciesCodes) {
    try {
      const observations = await fetchRecentObservations(code, daysBack);
      results.set(code, observations);
      
      // Add small delay between requests (200ms)
      if (speciesCodes.indexOf(code) < speciesCodes.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      console.error(`Failed to fetch observations for ${code}:`, error);
      results.set(code, []);
    }
  }
  
  return results;
}

/**
 * Clear all cached data
 */
export function clearCache(): void {
  cache.clear();
  console.log('Cache cleared');
}

/**
 * Clear expired cache entries
 */
export function clearExpiredCache(): void {
  cache.clearExpired();
  console.log('Expired cache entries cleared');
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { size: number; duration: number } {
  return {
    size: cache['cache'].size,
    duration: CACHE_DURATION,
  };
}
