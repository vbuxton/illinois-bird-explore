import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const CurrentIssuesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Current Issues
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Stay informed about current bird conservation issues, recent research findings, and emerging threats 
          affecting Illinois bird populations.
        </p>
      </div>

      {/* Conservation Challenges */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiAlertCircle className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Ongoing Conservation Challenges
          </h2>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Habitat Loss</h4>
              <p className="text-sm" style={{ color: '#374151' }}>
                Continued loss of grasslands, wetlands, and forests threatens breeding and migratory birds. 
                Illinois has lost over 90% of its original prairie habitat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Climate Change</h4>
              <p className="text-sm" style={{ color: '#374151' }}>
                Shifting migration timing, range changes, and altered breeding success are documented across 
                multiple species in Illinois.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Collisions</h4>
              <p className="text-sm" style={{ color: '#374151' }}>
                Window strikes and communication tower collisions kill millions of birds annually, with urban 
                areas particularly hazardous during migration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Insect Decline</h4>
              <p className="text-sm" style={{ color: '#374151' }}>
                Pesticide use and habitat loss have reduced insect populations, directly impacting birds that 
                depend on insects for food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📰</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Recent News & Updates
          </h2>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-sm mb-4" style={{ color: '#374151' }}>
            Stay current with Illinois bird conservation news through these resources:
          </p>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Illinois Audubon newsletters and blog</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Bird Conservation Network updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>IDNR wildlife news releases</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Local Audubon chapter communications</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>eBird alerts for rare bird sightings</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CurrentIssuesPage;
