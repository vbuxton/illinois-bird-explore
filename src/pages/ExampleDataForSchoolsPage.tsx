import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

const ExampleDataForSchoolsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Example Data for Schools
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Educational resources demonstrating how to use real bird data for classroom learning about 
          ecology, statistics, and conservation biology.
        </p>
      </div>

      {/* Population Trends Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiBarChart2 className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Population Trends & Distribution
          </h2>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-4">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Available Datasets</h4>
              <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Breeding Bird Survey data:</strong> Long-term population trends (1966-present)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Christmas Bird Count data:</strong> Winter distribution and abundance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>eBird data:</strong> Occurrence, distribution, and migration timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Illinois Breeding Bird Atlas:</strong> Statewide distribution maps</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Educational Activities</h4>
              <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Graphing population changes over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Creating distribution maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Calculating species diversity indices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Analyzing migration timing patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Comparing habitat preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAGO Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏙️</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Chicago Area Resources (CAGO)
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <p className="text-base mb-4" style={{ color: '#374151' }}>
            Special educational programs and datasets focused on the Chicago metropolitan area, one of the 
            most studied urban bird populations in North America.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Urban Birding Studies</h4>
              <p className="text-sm mb-2" style={{ color: '#374151' }}>
                Chicago provides unique opportunities to study:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Urban vs. suburban bird diversity</li>
                <li>• Green space importance for migrants</li>
                <li>• Window collision impacts</li>
                <li>• Light pollution effects on migration</li>
                <li>• Native plant benefits in urban areas</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Educational Programs</h4>
              <p className="text-sm mb-2" style={{ color: '#374151' }}>
                Chicago-area organizations offer:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• School field trip programs</li>
                <li>• Classroom presentations</li>
                <li>• Teacher workshops</li>
                <li>• Youth birding clubs</li>
                <li>• Data collection projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Data in Classroom */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
          📊 Using Bird Data in the Classroom
        </h4>
        <p className="text-sm mb-3" style={{ color: '#374151' }}>
          Bird monitoring data provides excellent opportunities for teaching:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm" style={{ color: '#374151' }}>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Data analysis and statistics</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Graphing and visualization</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Population ecology concepts</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Climate change impacts</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Scientific method and inquiry</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Conservation biology principles</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ExampleDataForSchoolsPage;
