/**
 * Mapping of common bird species names to eBird taxonomy codes
 * eBird species codes are typically 6-letter codes
 * Full taxonomy: https://ebird.org/science/use-ebird-data/the-ebird-taxonomy
 */

export interface SpeciesCodeMapping {
  commonName: string;
  scientificName: string;
  ebirdCode: string;
}

export const SPECIES_CODE_MAP: SpeciesCodeMapping[] = [
  {
    commonName: 'Northern Cardinal',
    scientificName: 'Cardinalis cardinalis',
    ebirdCode: 'norcar',
  },
  {
    commonName: 'American Goldfinch',
    scientificName: 'Spinus tristis',
    ebirdCode: 'amegfi',
  },
  {
    commonName: 'Red-tailed Hawk',
    scientificName: 'Buteo jamaicensis',
    ebirdCode: 'rethaw',
  },
  {
    commonName: 'Blue Jay',
    scientificName: 'Cyanocitta cristata',
    ebirdCode: 'blujay',
  },
  {
    commonName: 'American Robin',
    scientificName: 'Turdus migratorius',
    ebirdCode: 'amerob',
  },
  {
    commonName: 'Mourning Dove',
    scientificName: 'Zenaida macroura',
    ebirdCode: 'moudov',
  },
  {
    commonName: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    ebirdCode: 'rthumd',
  },
  {
    commonName: 'Downy Woodpecker',
    scientificName: 'Dryobates pubescens',
    ebirdCode: 'dowwoo',
  },
];

/**
 * Get eBird species code from common name
 */
export function getEbirdCode(commonName: string): string | null {
  const species = SPECIES_CODE_MAP.find(
    s => s.commonName.toLowerCase() === commonName.toLowerCase()
  );
  return species?.ebirdCode || null;
}

/**
 * Get common name from eBird species code
 */
export function getCommonName(ebirdCode: string): string | null {
  const species = SPECIES_CODE_MAP.find(
    s => s.ebirdCode.toLowerCase() === ebirdCode.toLowerCase()
  );
  return species?.commonName || null;
}

/**
 * Get all available eBird codes
 */
export function getAllEbirdCodes(): string[] {
  return SPECIES_CODE_MAP.map(s => s.ebirdCode);
}

/**
 * Illinois geographic boundaries
 */
export const ILLINOIS_BOUNDS = {
  north: 42.508,
  south: 36.970,
  east: -87.495,
  west: -91.513,
  center: [40.6331, -89.3985] as [number, number],
};

/**
 * Illinois region code for eBird API
 */
export const ILLINOIS_REGION_CODE = 'US-IL';
