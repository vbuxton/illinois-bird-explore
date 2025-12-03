import type { TrendEstimate, SummaryResult } from '../types';

/**
 * Parse CSV text into an array of objects
 */
function parseCSV<T>(csvText: string, mapper: (row: string[]) => T): T[] {
  const lines = csvText.trim().split('\n');
  
  return lines.slice(1).map(line => {
    // Handle quoted fields that may contain commas
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim()); // Add the last value
    
    return mapper(values);
  });
}

/**
 * Fetch and parse trend estimates CSV
 */
export async function fetchTrendEstimates(): Promise<TrendEstimate[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}all_species_trend_estimates.csv`);
  const csvText = await response.text();
  
  return parseCSV<TrendEstimate>(csvText, (values) => ({
    year: parseInt(values[0]),
    trend: parseFloat(values[1]),
    lowerCi: parseFloat(values[2]),
    upperCi: parseFloat(values[3]),
    species: values[4].replace(/"/g, ''),
  }));
}

/**
 * Fetch and parse summary results CSV
 */
export async function fetchSummaryResults(): Promise<SummaryResult[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}all_species_summary_results.csv`);
  const csvText = await response.text();
  
  return parseCSV<SummaryResult>(csvText, (values) => ({
    species: values[0].replace(/"/g, ''),
    upperAndLower: values[1].replace(/"/g, ''),
    percentChangeSmooth: parseFloat(values[2]),
    ciSmoothed: parseFloat(values[3]),
    percentChangeLog: parseFloat(values[4]),
    ciLog: parseFloat(values[5]),
    start: parseInt(values[6]),
    end: parseInt(values[7]),
  }));
}

/**
 * Get trend data for a specific species
 */
export function getTrendDataForSpecies(
  allData: TrendEstimate[],
  speciesName: string
): TrendEstimate[] {
  return allData.filter(d => d.species === speciesName);
}

/**
 * Get summary data for a specific species
 */
export function getSummaryForSpecies(
  allData: SummaryResult[],
  speciesName: string
): { lower: SummaryResult; upper: SummaryResult } | null {
  const speciesData = allData.filter(d => d.species === speciesName);
  const lower = speciesData.find(d => d.upperAndLower === '2.5%');
  const upper = speciesData.find(d => d.upperAndLower === '97.5%');
  
  if (lower && upper) {
    return { lower, upper };
  }
  return null;
}

/**
 * Get list of unique species from trend data
 */
export function getUniqueSpecies(trendData: TrendEstimate[]): string[] {
  const speciesSet = new Set(trendData.map(d => d.species));
  return Array.from(speciesSet).sort();
}
