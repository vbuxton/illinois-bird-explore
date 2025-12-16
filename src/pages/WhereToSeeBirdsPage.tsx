import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const WhereToSeeBirdsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Where You Can See Birds
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Illinois offers diverse birding locations across the state, from urban parks to vast natural areas. 
          Here are some of the best places to observe birds throughout the year.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FiMapPin className="w-6 h-6" style={{ color: '#4A7C59' }} />
            <h3 className="text-xl font-bold" style={{ color: '#2E5266' }}>
              Northern Illinois
            </h3>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Montrose Point & Magic Hedge (Chicago):</strong> Premier migration hotspot</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Illinois Beach State Park:</strong> Lakefront diversity</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Chicago Botanic Garden:</strong> Year-round birding</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Nachusa Grasslands:</strong> Grassland specialists</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FiMapPin className="w-6 h-6" style={{ color: '#4A7C59' }} />
            <h3 className="text-xl font-bold" style={{ color: '#2E5266' }}>
              Central Illinois
            </h3>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Emiquon Preserve:</strong> Waterfowl and wetland birds</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Allerton Park:</strong> Forest birds and migrants</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Clinton Lake:</strong> Gulls and waterfowl</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Meredosia National Wildlife Refuge:</strong> River valley species</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FiMapPin className="w-6 h-6" style={{ color: '#4A7C59' }} />
            <h3 className="text-xl font-bold" style={{ color: '#2E5266' }}>
              Southern Illinois
            </h3>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Shawnee National Forest:</strong> Southern forest specialties</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Cache River State Natural Area:</strong> Swamp and bottomland birds</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Crab Orchard National Wildlife Refuge:</strong> Diverse habitats</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Rend Lake:</strong> Water birds and bald eagles</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FiMapPin className="w-6 h-6" style={{ color: '#4A7C59' }} />
            <h3 className="text-xl font-bold" style={{ color: '#2E5266' }}>
              Migration Hotspots
            </h3>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Lake Michigan shoreline:</strong> Spring and fall migration</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Illinois River valley:</strong> Waterfowl migration</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Mississippi River corridor:</strong> Diverse migrants</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span><strong>Forest preserves near Chicago:</strong> Landbird fallouts</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
          🗺️ Planning Your Visit
        </h4>
        <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Check eBird hotspot pages for recent sightings and site information</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Visit during peak migration (April-May and September-October) for maximum diversity</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Early morning hours (dawn to mid-morning) are typically best for birding</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Contact site managers for accessibility information and any special requirements</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhereToSeeBirdsPage;
