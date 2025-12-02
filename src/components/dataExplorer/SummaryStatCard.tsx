import React from 'react';
import type { SummaryResult } from '../../types';

interface SummaryStatCardProps {
  speciesName: string;
  lower: SummaryResult;
  upper: SummaryResult;
}

const SummaryStatCard: React.FC<SummaryStatCardProps> = ({
  speciesName,
  lower,
  upper,
}) => {
  // Use the average of lower and upper for the main percent change
  const percentChange = lower.percentChangeSmooth;
  const isPositive = percentChange >= 0;
  const isSubstantial = Math.abs(percentChange) > 10;

  // Get the confidence interval range
  const ciLower = lower.ciSmoothed;
  const ciUpper = upper.ciSmoothed;

  // Determine trend category
  let trendCategory: string;
  let trendColor: string;
  let bgColor: string;
  let icon: string;

  if (percentChange > 20) {
    trendCategory = 'Increasing';
    trendColor = 'text-green-700';
    bgColor = 'bg-green-50';
    icon = '📈';
  } else if (percentChange > 5) {
    trendCategory = 'Moderately Increasing';
    trendColor = 'text-green-600';
    bgColor = 'bg-green-50';
    icon = '↗️';
  } else if (percentChange > -5) {
    trendCategory = 'Stable';
    trendColor = 'text-gray-700';
    bgColor = 'bg-gray-50';
    icon = '➡️';
  } else if (percentChange > -20) {
    trendCategory = 'Moderately Decreasing';
    trendColor = 'text-orange-600';
    bgColor = 'bg-orange-50';
    icon = '↘️';
  } else {
    trendCategory = 'Decreasing';
    trendColor = 'text-red-700';
    bgColor = 'bg-red-50';
    icon = '📉';
  }

  return (
    <div className={`rounded-lg shadow-md p-6 ${bgColor} border-l-4 ${isPositive ? 'border-green-500' : 'border-red-500'}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {speciesName}
          </h3>
          
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl font-bold font-heading" style={{ color: isPositive ? '#059669' : '#dc2626' }}>
              {percentChange > 0 ? '+' : ''}
              {percentChange.toFixed(1)}%
            </span>
            <span className="text-xl">{icon}</span>
          </div>

          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${trendColor} ${bgColor} border ${isPositive ? 'border-green-300' : 'border-red-300'}`}>
            {trendCategory}
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Time Period:</span>
              <span>{lower.start} - {lower.end}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">95% CI:</span>
              <span>
                {ciLower.toFixed(1)}% to {ciUpper.toFixed(1)}%
              </span>
            </div>
          </div>

          {isSubstantial && (
            <div className="mt-3 text-xs text-gray-600 italic">
              {isPositive 
                ? '✓ This species shows substantial population growth over the study period.'
                : '⚠ This species shows concerning population decline.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryStatCard;
