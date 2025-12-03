import React from 'react';
import { FiLayers, FiMapPin, FiActivity, FiFilter, FiDownload } from 'react-icons/fi';
import type { MapControlsState } from '../../types';

interface MapControlsProps {
  state: MapControlsState;
  onStateChange: (newState: Partial<MapControlsState>) => void;
  observationCount: number;
  onRefresh?: () => void;
  onExport?: () => void;
  isLoading?: boolean;
}

/**
 * Control panel for map layers and filters
 */
const MapControls: React.FC<MapControlsProps> = ({
  state,
  onStateChange,
  observationCount,
  onRefresh,
  onExport,
  isLoading = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b">
        <h3 className="font-heading font-semibold text-lg text-gray-900">
          Map Controls
        </h3>
        <FiFilter className="text-gray-400" />
      </div>

      {/* Layer Toggles */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
          Map Layers
        </h4>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={state.showObservations}
            onChange={(e) => onStateChange({ showObservations: e.target.checked })}
            className="w-4 h-4 text-primary-blue rounded focus:ring-primary-blue"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-900">Observations</span>
            <p className="text-xs text-gray-500">{observationCount} points</p>
          </div>
          <FiMapPin className="text-primary-blue" />
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={state.showHeatmap}
            onChange={(e) => onStateChange({ showHeatmap: e.target.checked })}
            className="w-4 h-4 text-primary-blue rounded focus:ring-primary-blue"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-900">Heatmap</span>
            <p className="text-xs text-gray-500">Density visualization</p>
          </div>
          <FiActivity className="text-orange-500" />
        </label>
      </div>

      {/* Date Range Filter */}
      <div className="pt-3 border-t space-y-2">
        <h4 className="text-sm font-semibold text-gray-700">Time Period</h4>
        
        <div className="space-y-2">
          <label className="block">
            <span className="text-xs text-gray-600">Last {state.daysBack} days</span>
            <input
              type="range"
              min="7"
              max="30"
              step="1"
              value={state.daysBack}
              onChange={(e) => onStateChange({ daysBack: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>7 days</span>
              <span>30 days</span>
            </div>
          </label>
        </div>
      </div>

      {/* Quality Filters */}
      <div className="pt-3 border-t space-y-2">
        <h4 className="text-sm font-semibold text-gray-700">Quality Filters</h4>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={state.verifiedOnly}
            onChange={(e) => onStateChange({ verifiedOnly: e.target.checked })}
            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
          />
          <span className="text-sm text-gray-700">Verified observations only</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={state.mediaOnly}
            onChange={(e) => onStateChange({ mediaOnly: e.target.checked })}
            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
          />
          <span className="text-sm text-gray-700">Photos/media only</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t space-y-2">
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Refreshing...
              </>
            ) : (
              <>
                <FiActivity className="w-4 h-4" />
                Refresh Data
              </>
            )}
          </button>
        )}

        {onExport && (
          <button
            onClick={onExport}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <FiDownload className="w-4 h-4" />
            Export Data
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="pt-3 border-t">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Legend</h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600 border border-white"></div>
            <span className="text-gray-600">Verified observation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600 border border-white"></div>
            <span className="text-gray-600">Reviewed observation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-600 border border-white"></div>
            <span className="text-gray-600">Unreviewed observation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
