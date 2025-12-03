import type {
  EBirdObservation,
  ProcessedObservation,
  ObservationCluster,
  DistributionStats,
} from '../types';

/**
 * Transform eBird API observation to our internal format
 */
export function processObservation(obs: EBirdObservation): ProcessedObservation {
  return {
    id: obs.subId,
    speciesCode: obs.speciesCode,
    commonName: obs.comName,
    scientificName: obs.sciName,
    location: {
      id: obs.locId,
      name: obs.locName,
      latitude: obs.lat,
      longitude: obs.lng,
      isPrivate: obs.locationPrivate,
    },
    date: new Date(obs.obsDt),
    count: obs.howMany || 0,
    verified: obs.obsValid,
    reviewed: obs.obsReviewed,
    hasMedia: obs.hasRichMedia || false,
    observer: obs.firstName && obs.lastName ? `${obs.firstName} ${obs.lastName}` : undefined,
    checklistId: obs.subId,
  };
}

/**
 * Process multiple observations
 */
export function processObservations(observations: EBirdObservation[]): ProcessedObservation[] {
  return observations.map(processObservation);
}

/**
 * Cluster observations by location
 * Groups observations that are at the same coordinates
 */
export function clusterObservationsByLocation(
  observations: ProcessedObservation[],
  precision: number = 4 // decimal places for lat/lng
): ObservationCluster[] {
  const clusters = new Map<string, ProcessedObservation[]>();

  // Group by rounded coordinates
  for (const obs of observations) {
    const lat = obs.location.latitude.toFixed(precision);
    const lng = obs.location.longitude.toFixed(precision);
    const key = `${lat},${lng}`;

    if (!clusters.has(key)) {
      clusters.set(key, []);
    }
    clusters.get(key)!.push(obs);
  }

  // Convert to cluster objects
  return Array.from(clusters.entries()).map(([key, obs]) => {
    const [lat, lng] = key.split(',').map(Number);
    return {
      latitude: lat,
      longitude: lng,
      count: obs.length,
      observations: obs,
    };
  });
}

/**
 * Calculate distribution statistics
 */
export function calculateDistributionStats(
  observations: ProcessedObservation[]
): DistributionStats {
  if (observations.length === 0) {
    return {
      totalObservations: 0,
      uniqueLocations: 0,
      dateRange: {
        start: new Date(),
        end: new Date(),
      },
      topCounties: [],
      observationsByDate: [],
    };
  }

  // Unique locations
  const uniqueLocations = new Set(observations.map(o => o.location.id)).size;

  // Date range
  const dates = observations.map(o => o.date.getTime());
  const startDate = new Date(Math.min(...dates));
  const endDate = new Date(Math.max(...dates));

  // Count by county (extract from location name if available)
  const countyMap = new Map<string, number>();
  for (const obs of observations) {
    // Try to extract county from location name (many locations include county)
    const locationParts = obs.location.name.split(',');
    if (locationParts.length >= 2) {
      const county = locationParts[locationParts.length - 2].trim();
      countyMap.set(county, (countyMap.get(county) || 0) + 1);
    }
  }

  const topCounties = Array.from(countyMap.entries())
    .map(([county, count]) => ({ county, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Observations by date
  const dateMap = new Map<string, number>();
  for (const obs of observations) {
    const dateStr = obs.date.toISOString().split('T')[0];
    dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1);
  }

  const observationsByDate = Array.from(dateMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    totalObservations: observations.length,
    uniqueLocations,
    dateRange: {
      start: startDate,
      end: endDate,
    },
    topCounties,
    observationsByDate,
  };
}

/**
 * Filter observations by date range
 */
export function filterByDateRange(
  observations: ProcessedObservation[],
  startDate: Date,
  endDate: Date
): ProcessedObservation[] {
  return observations.filter(obs => {
    const obsTime = obs.date.getTime();
    return obsTime >= startDate.getTime() && obsTime <= endDate.getTime();
  });
}

/**
 * Filter observations by verification status
 */
export function filterByVerification(
  observations: ProcessedObservation[],
  verifiedOnly: boolean = false,
  reviewedOnly: boolean = false
): ProcessedObservation[] {
  return observations.filter(obs => {
    if (verifiedOnly && !obs.verified) return false;
    if (reviewedOnly && !obs.reviewed) return false;
    return true;
  });
}

/**
 * Filter observations by media presence
 */
export function filterByMedia(
  observations: ProcessedObservation[],
  mediaOnly: boolean = false
): ProcessedObservation[] {
  if (!mediaOnly) return observations;
  return observations.filter(obs => obs.hasMedia);
}

/**
 * Sort observations by date (newest first by default)
 */
export function sortObservationsByDate(
  observations: ProcessedObservation[],
  ascending: boolean = false
): ProcessedObservation[] {
  return [...observations].sort((a, b) => {
    const diff = a.date.getTime() - b.date.getTime();
    return ascending ? diff : -diff;
  });
}

/**
 * Sort observations by count (highest first by default)
 */
export function sortObservationsByCount(
  observations: ProcessedObservation[],
  ascending: boolean = false
): ProcessedObservation[] {
  return [...observations].sort((a, b) => {
    const diff = a.count - b.count;
    return ascending ? diff : -diff;
  });
}

/**
 * Get unique observers from observations
 */
export function getUniqueObservers(observations: ProcessedObservation[]): string[] {
  const observers = new Set<string>();
  for (const obs of observations) {
    if (obs.observer) {
      observers.add(obs.observer);
    }
  }
  return Array.from(observers).sort();
}

/**
 * Calculate observation frequency by location
 * Returns a score (0-1) for each location based on observation frequency
 */
export function calculateLocationFrequency(
  observations: ProcessedObservation[]
): Map<string, number> {
  const locationCounts = new Map<string, number>();
  
  for (const obs of observations) {
    const count = locationCounts.get(obs.location.id) || 0;
    locationCounts.set(obs.location.id, count + 1);
  }

  // Normalize to 0-1 scale
  const maxCount = Math.max(...Array.from(locationCounts.values()));
  const normalized = new Map<string, number>();
  
  for (const [locId, count] of locationCounts.entries()) {
    normalized.set(locId, count / maxCount);
  }

  return normalized;
}

/**
 * Get observations for heatmap
 * Returns array of [lat, lng, intensity] tuples
 */
export function getHeatmapData(
  observations: ProcessedObservation[]
): Array<[number, number, number]> {
  // Cluster by location and use count as intensity
  const clusters = clusterObservationsByLocation(observations);
  
  return clusters.map(cluster => [
    cluster.latitude,
    cluster.longitude,
    Math.min(cluster.count / 10, 1), // Normalize intensity, cap at 1
  ]);
}

/**
 * Aggregate observations by time period (day, week, month)
 */
export function aggregateByTimePeriod(
  observations: ProcessedObservation[],
  period: 'day' | 'week' | 'month'
): Map<string, ProcessedObservation[]> {
  const grouped = new Map<string, ProcessedObservation[]>();

  for (const obs of observations) {
    let key: string;
    const date = obs.date;

    switch (period) {
      case 'day':
        key = date.toISOString().split('T')[0];
        break;
      case 'week': {
        // Get week number
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const weekNum = Math.ceil(
          ((date.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7
        );
        key = `${date.getFullYear()}-W${weekNum}`;
        break;
      }
      case 'month':
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        break;
    }

    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(obs);
  }

  return grouped;
}
