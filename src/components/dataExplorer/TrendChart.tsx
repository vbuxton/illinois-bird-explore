import React from 'react';
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { TrendEstimate } from '../../types';

interface TrendChartProps {
  data: TrendEstimate[];
  speciesName: string;
}

const TrendChart: React.FC<TrendChartProps> = ({ data, speciesName }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        No trend data available for {speciesName}
      </div>
    );
  }

  // Format data for Recharts - need to combine upper and lower CI into single objects
  const chartData = data.map(d => ({
    year: d.year,
    trend: d.trend,
    lowerCi: d.lowerCi,
    upperCi: d.upperCi,
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
          <p className="font-semibold text-gray-900">Year: {data.year}</p>
          <p className="text-sm text-gray-700">
            Trend: <span className="font-medium">{data.trend.toFixed(2)}</span>
          </p>
          <p className="text-sm text-gray-600">
            95% CI: {data.lowerCi.toFixed(2)} - {data.upperCi.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-heading font-bold text-primary-blue mb-2">
        Population Trend: {speciesName}
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Index values relative to 1980 baseline (1.0) with 95% confidence intervals
      </p>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="year"
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            label={{ value: 'Population Index', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          
          {/* Reference line at baseline */}
          <ReferenceLine
            y={1}
            stroke="#9ca3af"
            strokeDasharray="5 5"
            label={{ value: 'Baseline (1980)', position: 'right', fill: '#6b7280' }}
          />
          
          {/* Confidence interval area */}
          <Area
            type="monotone"
            dataKey="upperCi"
            stroke="none"
            fill="#93c5fd"
            fillOpacity={0.3}
            name="95% Confidence Interval"
          />
          <Area
            type="monotone"
            dataKey="lowerCi"
            stroke="none"
            fill="#ffffff"
            fillOpacity={1}
          />
          
          {/* Main trend line */}
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
            name="Population Trend"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-4 text-xs text-gray-500 border-t pt-3">
        <p>
          <strong>Data Source:</strong> Illinois Spring Bird Count models (1980-2024)
        </p>
        <p className="mt-1">
          The trend values represent the estimated population index relative to the 1980 baseline. 
          The shaded blue area shows the 95% confidence interval around the trend estimate.
        </p>
      </div>
    </div>
  );
};

export default TrendChart;
