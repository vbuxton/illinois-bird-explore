import React, { useState, useEffect, useMemo } from 'react';
import DistributionMap from '../components/dataExplorer/DistributionMap';
import ObservationMarkers from '../components/dataExplorer/ObservationMarkers';
import HeatmapLayer from '../components/dataExplorer/HeatmapLayer';
import MapControls from '../components/dataExplorer/MapControls';
import SpeciesSelector from '../components/dataExplorer/SpeciesSelector';
import { fetchRecentObservations } from '../services/ebirdApi';
import { getEbirdCode, getAllEbirdCodes, getCommonName } from '../data/ebirdSpeciesCodes';
import {
  processObservations,
  calculateDistributionStats,
  filterByVerification,
  filterByMedia,
} from '../utils/ebirdDataProcessor';
import type { ProcessedObservation, MapControlsState } from '../types';

const DistributionMapsPage: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [observations, setObservations] = useState<ProcessedObservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Map control state
  const [controlState, setControlState] = useState<MapControlsState>({
    showObservations: false,
    showHeatmap: true,
    showHotspots: false,
    daysBack: 30,
    verifiedOnly: false,
    mediaOnly: false,
  });

  // Available species
  const availableSpecies = useMemo(() => {
    return getAllEbirdCodes().map(code => getCommonName(code)).filter(Boolean) as string[];
  }, []);

  // Load observations when species or daysBack changes
  useEffect(() => {
    if (!selectedSpecies) return;

    const loadObservations = async () => {
      try {
        setLoading(true);
        setError(null);

        const ebirdCode = getEbirdCode(selectedSpecies);
        if (!ebirdCode) {
          throw new Error('Invalid species');
        }

        const rawData = await fetchRecentObservations(ebirdCode, controlState.daysBack);
        const processed = processObservations(rawData);
        setObservations(processed);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load observations');
        console.error('Error loading observations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadObservations();
  }, [selectedSpecies, controlState.daysBack]);

  // Filter observations based on control state
  const filteredObservations = useMemo(() => {
    let filtered = observations;

    if (controlState.verifiedOnly || controlState.mediaOnly) {
      filtered = filterByVerification(filtered, controlState.verifiedOnly, false);
    }

    if (controlState.mediaOnly) {
      filtered = filterByMedia(filtered, true);
    }

    return filtered;
  }, [observations, controlState.verifiedOnly, controlState.mediaOnly]);

  // Calculate statistics
  const stats = useMemo(() => {
    return calculateDistributionStats(filteredObservations);
  }, [filteredObservations]);

  // Handle control state changes
  const handleControlChange = (newState: Partial<MapControlsState>) => {
    setControlState(prev => ({ ...prev, ...newState }));
  };

  // Handle data refresh
  const handleRefresh = async () => {
    if (!selectedSpecies) return;

    const ebirdCode = getEbirdCode(selectedSpecies);
    if (!ebirdCode) return;

    try {
      setLoading(true);
      const rawData = await fetchRecentObservations(ebirdCode, controlState.daysBack);
      const processed = processObservations(rawData);
      setObservations(processed);
    } catch (err) {
      setError('Failed to refresh data');
    } finally {
      setLoading(false);
    }
  };

  // Handle data export
  const handleExport = () => {
    if (filteredObservations.length === 0) return;

    // Create CSV content
    const headers = ['Common Name', 'Scientific Name', 'Date', 'Location', 'Latitude', 'Longitude', 'Count', 'Verified', 'Has Media'];
    const rows = filteredObservations.map(obs => [
      obs.commonName,
      obs.scientificName,
      obs.date.toISOString().split('T')[0],
      obs.location.name,
      obs.location.latitude,
      obs.location.longitude,
      obs.count,
      obs.verified,
      obs.hasMedia,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    // Download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedSpecies}_observations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold text-primary-blue mb-4">
          Distribution Maps
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Explore real-time bird observations across Illinois using eBird data. 
          View observation density heatmaps and individual observation locations.
        </p>
      </div>

      {/* Species Selector */}
      <div className="mb-6">
        <SpeciesSelector
          species={availableSpecies}
          selectedSpecies={selectedSpecies}
          onSelectSpecies={setSelectedSpecies}
        />
      </div>

      {/* Main Content */}
      {selectedSpecies ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-primary-blue">
                <p className="text-sm text-gray-600 mb-1">Total Observations</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalObservations}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                <p className="text-sm text-gray-600 mb-1">Unique Locations</p>
                <p className="text-3xl font-bold text-gray-900">{stats.uniqueLocations}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
                <p className="text-sm text-gray-600 mb-1">Date Range</p>
                <p className="text-lg font-bold text-gray-900">{controlState.daysBack} days</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-600">
                <p className="text-sm text-gray-600 mb-1">Verified</p>
                <p className="text-3xl font-bold text-gray-900">{filteredObservations.filter(o => o.verified).length}</p>
              </div>
            </div>

            {/* Map */}
            {loading && observations.length === 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-blue mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Loading {selectedSpecies} observations...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-800 text-lg mb-2">❌ {error}</p>
                <button
                  onClick={handleRefresh}
                  className="mt-4 px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <DistributionMap>
                {controlState.showObservations && (
                  <ObservationMarkers observations={filteredObservations} />
                )}
                
                {controlState.showHeatmap && (
                  <HeatmapLayer observations={filteredObservations} visible={controlState.showHeatmap} />
                )}
              </DistributionMap>
            )}
          </div>

          {/* Controls Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <MapControls
                state={controlState}
                onStateChange={handleControlChange}
                observationCount={filteredObservations.length}
                onRefresh={handleRefresh}
                onExport={handleExport}
                isLoading={loading}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
            Select a Species to Begin
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Choose a species from the dropdown above to view its distribution across Illinois 
            based on recent eBird observations.
          </p>
        </div>
      )}
    </div>
  );
};

export default DistributionMapsPage;
