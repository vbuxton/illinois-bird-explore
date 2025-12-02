import React, { useEffect, useState } from 'react';
import TrendChart from '../components/dataExplorer/TrendChart';
import SummaryStatCard from '../components/dataExplorer/SummaryStatCard';
import SpeciesSelector from '../components/dataExplorer/SpeciesSelector';
import {
  fetchTrendEstimates,
  fetchSummaryResults,
  getTrendDataForSpecies,
  getSummaryForSpecies,
  getUniqueSpecies,
} from '../utils/csvParser';
import type { TrendEstimate, SummaryResult } from '../types';

const PopulationTrendsPage: React.FC = () => {
  const [trendData, setTrendData] = useState<TrendEstimate[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryResult[]>([]);
  const [availableSpecies, setAvailableSpecies] = useState<string[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [trends, summaries] = await Promise.all([
          fetchTrendEstimates(),
          fetchSummaryResults(),
        ]);

        setTrendData(trends);
        setSummaryData(summaries);

        const species = getUniqueSpecies(trends);
        setAvailableSpecies(species);

        // Auto-select first species
        if (species.length > 0 && !selectedSpecies) {
          setSelectedSpecies(species[0]);
        }
      } catch (err) {
        setError('Failed to load population trend data. Please try again later.');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSpeciesSelect = (species: string) => {
    setSelectedSpecies(species);
  };

  // Get data for selected species
  const selectedTrendData = selectedSpecies
    ? getTrendDataForSpecies(trendData, selectedSpecies)
    : [];
  
  const selectedSummary = selectedSpecies
    ? getSummaryForSpecies(summaryData, selectedSpecies)
    : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading population trend data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold text-primary-blue mb-4">
          Population Trends
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Explore long-term population trends for bird species in Illinois based on Breeding Bird Survey data. 
          These trends are derived from statistical models that estimate population changes from 1980 to 2024.
        </p>
      </div>

      {/* Species Selector */}
      <div className="mb-8">
        <SpeciesSelector
          species={availableSpecies}
          selectedSpecies={selectedSpecies}
          onSelectSpecies={handleSpeciesSelect}
        />
      </div>

      {/* Main Content */}
      {selectedSpecies && selectedSummary ? (
        <div className="space-y-8">
          {/* Summary Statistics Card */}
          <div>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Overall Change
            </h2>
            <SummaryStatCard
              speciesName={selectedSpecies}
              lower={selectedSummary.lower}
              upper={selectedSummary.upper}
            />
          </div>

          {/* Trend Chart */}
          <div>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Annual Trend Analysis
            </h2>
            <TrendChart data={selectedTrendData} speciesName={selectedSpecies} />
          </div>

          {/* Interpretation Guide */}
          <div className="bg-blue-50 border-l-4 border-primary-blue rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              📊 How to Interpret These Results
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>Population Index:</strong> Values are relative to a baseline of 1.0 in 1980. 
                  A value of 2.0 means the population has doubled; 0.5 means it has halved.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>Confidence Intervals:</strong> The shaded area shows the statistical uncertainty 
                  around the trend estimate. Wider intervals indicate less certainty.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>Percent Change:</strong> Shows the overall population change over the entire study period, 
                  accounting for year-to-year fluctuations.
                </span>
              </li>
            </ul>
          </div>

          {/* Data Notes */}
          <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600">
            <h4 className="font-semibold text-gray-900 mb-2">Data & Methods</h4>
            <p className="mb-2">
              These population trends are estimated using hierarchical Bayesian models applied to 
              North American Breeding Bird Survey (BBS) data collected in Illinois from 1980 to 2024.
            </p>
            <p>
              The models account for observer effects, survey effort, and spatial variation to provide 
              robust estimates of long-term population changes. Confidence intervals reflect statistical 
              uncertainty in the estimates.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">Select a species to view population trend data</p>
        </div>
      )}
    </div>
  );
};

export default PopulationTrendsPage;
