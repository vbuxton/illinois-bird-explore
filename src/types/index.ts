// Species Types
export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  order: string;
  conservationStatus: ConservationStatus;
  images: Image[];
  audio: AudioFile[];
  habitat: string[];
  diet: string[];
  nesting: NestingInfo;
  migration: MigrationPattern;
  identification: IdentificationGuide;
  funFacts: string[];
  description: string;
}

export type ConservationStatus = 
  | 'Least Concern' 
  | 'Near Threatened' 
  | 'Vulnerable' 
  | 'Endangered' 
  | 'Critically Endangered';

export interface Image {
  url: string;
  caption: string;
  credit: string;
  isFeatured: boolean;
}

export interface AudioFile {
  url: string;
  description: string;
  recordist: string;
}

export interface NestingInfo {
  nestType: string;
  eggCount: string;
  incubationPeriod: string;
  fledgingPeriod: string;
}

export interface MigrationPattern {
  type: 'Resident' | 'Migrant' | 'Partial Migrant';
  springArrival?: string;
  fallDeparture?: string;
  winteringRange?: string;
}

export interface IdentificationGuide {
  size: string;
  wingspan: string;
  fieldMarks: string[];
  similarSpecies: string[];
  vocalizations: string;
}

// Observation Types
export interface Observation {
  id: string;
  speciesId: string;
  location: Location;
  date: Date;
  count: number;
  observer: string;
  protocol: string;
  verified: boolean;
  photos: string[];
  notes?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  county: string;
  site: string;
  habitat: string;
}

// Population Trend Types
export interface TrendData {
  speciesId: string;
  year: number;
  abundance: number;
  confidenceIntervalLow: number;
  confidenceIntervalHigh: number;
  trend: number; // percentage change per year
  significance: 'increasing' | 'decreasing' | 'stable' | 'uncertain';
}

export interface PopulationTrend {
  speciesId: string;
  speciesName: string;
  timeframe: string;
  annualTrend: number;
  data: TrendData[];
  modelInfo: ModelInfo;
}

// CSV Data Types for R Model Results
export interface TrendEstimate {
  year: number;
  trend: number;
  lowerCi: number;
  upperCi: number;
  species: string;
}

export interface SummaryResult {
  species: string;
  upperAndLower: string; // "2.5%" or "97.5%"
  percentChangeSmooth: number;
  ciSmoothed: number;
  percentChangeLog: number;
  ciLog: number;
  start: number;
  end: number;
}

export interface ModelInfo {
  method: string;
  lastUpdated: Date;
  sampleSize: number;
  dataSource: string;
}

// Migration Timing Types
export interface MigrationTiming {
  speciesId: string;
  speciesName: string;
  springMigration: SeasonalTiming;
  fallMigration: SeasonalTiming;
  peakObservationDates: Date[];
}

export interface SeasonalTiming {
  firstArrival: string; // format: "MM-DD"
  peakDate: string;
  lastObservation: string;
  historicalShift: number; // days shifted over time
}

// Habitat & Land Cover Types
export interface HabitatAssociation {
  speciesId: string;
  habitatType: string;
  preference: number; // 0-1 scale
  seasonalUse: 'Year-round' | 'Breeding' | 'Migration' | 'Winter';
}

export interface LandCoverData {
  type: string;
  percentage: number;
  quality: 'High' | 'Medium' | 'Low';
}

// Educational Content Types
export interface LessonPlan {
  id: string;
  title: string;
  gradeLevel: string[];
  subject: string[];
  duration: string;
  objectives: string[];
  materials: string[];
  procedure: string[];
  assessment: string;
  downloadUrl: string;
}

export interface Dataset {
  id: string;
  title: string;
  description: string;
  format: 'CSV' | 'JSON' | 'Shapefile' | 'GeoJSON';
  size: string;
  lastUpdated: Date;
  downloadUrl: string;
  citation: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  publishedDate: Date;
  readTime: string;
  summary: string;
  content: string;
  relatedSpecies: string[];
}

// Team & About Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  photo: string;
  email?: string;
}

export interface Collaborator {
  name: string;
  logo: string;
  website: string;
  description: string;
}

// Alert Types
export interface MigrationAlert {
  id: string;
  speciesId: string;
  speciesName: string;
  alertType: 'Arriving' | 'Peak' | 'Departing';
  date: Date;
  location: string;
  details: string;
}

export interface KeyFinding {
  id: string;
  title: string;
  statistic: string;
  description: string;
  icon: string;
  link?: string;
}
