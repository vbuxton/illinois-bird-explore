import React from 'react';
import { FiTrendingUp, FiMapPin, FiRadio, FiLayers } from 'react-icons/fi';

const CurrentResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Current Research</h1>
          <p className="text-lg text-gray-700">
            Ongoing studies and projects investigating bird ecology, conservation, and behavior in Illinois.
          </p>
        </div>

        {/* Active Research Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Active Research Projects</h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start mb-4">
                <FiTrendingUp className="text-primary-green text-2xl mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Migration Ecology and Stopover Habitat Use
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Principal Investigator: [Name]</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This project investigates how migratory birds use Illinois habitats during spring and fall migration. 
                Using GPS tracking, automated radio telemetry, and stable isotope analysis, we're documenting 
                stopover site selection, duration, and refueling rates.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Key Questions:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>How do migrants select stopover sites across the agricultural landscape?</li>
                  <li>What habitat features promote successful refueling?</li>
                  <li>How does habitat quality affect migration timing and survival?</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start mb-4">
                <FiMapPin className="text-primary-green text-2xl mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Grassland Bird Conservation in Working Landscapes
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Principal Investigator: [Name]</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This collaborative project examines how agricultural practices and conservation programs affect 
                grassland bird populations in Illinois. We're working with farmers and land managers to identify 
                sustainable practices that support both agriculture and bird conservation.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Research Components:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Breeding bird surveys across different land management types</li>
                  <li>Nest survival monitoring</li>
                  <li>Habitat assessment and vegetation analysis</li>
                  <li>Economic analysis of conservation practices</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start mb-4">
                <FiRadio className="text-primary-green text-2xl mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Automated Acoustic Monitoring Network
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Principal Investigator: [Name]</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                We've deployed a network of autonomous recording units across Illinois to continuously monitor bird 
                vocalizations. Machine learning algorithms help us identify species and track changes in bird 
                communities over time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Applications:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Long-term monitoring of population trends</li>
                  <li>Detection of rare and secretive species</li>
                  <li>Assessment of habitat quality and restoration success</li>
                  <li>Training data for machine learning models</li>
                </ul>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start mb-4">
                <FiLayers className="text-primary-green text-2xl mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Climate Change Impacts on Illinois Birds
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Principal Investigator: [Name]</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This project uses historical data and current monitoring to understand how climate change is affecting 
                Illinois bird populations. We're examining shifts in phenology, distribution, and abundance.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Research Focus:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Changes in spring arrival dates for migrants</li>
                  <li>Range shifts of breeding and wintering species</li>
                  <li>Mismatches between bird phenology and food resources</li>
                  <li>Projections of future distribution changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Research Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Field Methods</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Point count surveys</li>
                <li>Mist netting and banding</li>
                <li>Nest monitoring</li>
                <li>Behavioral observations</li>
                <li>Habitat assessment</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Technology</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>GPS and satellite transmitters</li>
                <li>Radio telemetry</li>
                <li>Automated recording units</li>
                <li>Trail cameras</li>
                <li>Drones for aerial surveys</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Laboratory Analysis</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Stable isotope analysis</li>
                <li>Genetic analysis</li>
                <li>Feather analysis</li>
                <li>Specimen preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Data Analysis</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Population modeling</li>
                <li>GIS and spatial analysis</li>
                <li>Statistical modeling</li>
                <li>Machine learning</li>
                <li>Occupancy analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section>
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Research Collaborations</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Our research benefits from partnerships with:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Illinois Natural History Survey</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Illinois Department of Natural Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>U.S. Fish and Wildlife Service</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>U.S. Geological Survey</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bird Conservation Network</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The Nature Conservancy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Various universities and research institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local Audubon chapters</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentResearchPage;
