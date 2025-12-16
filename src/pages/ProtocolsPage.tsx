import React from 'react';
import { FiFileText, FiDownload, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ProtocolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Research Protocols</h1>
          <p className="text-lg text-gray-700">
            Standardized protocols and methods used by Illinois BirdLab for field research and data collection.
          </p>
        </div>

        {/* Field Survey Protocols */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiFileText className="mr-2" />
            Field Survey Protocols
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Point Count Surveys</h3>
                  <p className="text-gray-600 text-sm">Version 2.1 • Updated December 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Standard protocol for conducting point count surveys to assess bird abundance and diversity.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Includes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Survey timing and duration guidelines</li>
                  <li>Distance estimation methods</li>
                  <li>Data recording procedures</li>
                  <li>Weather condition thresholds</li>
                  <li>Observer training requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Nest Monitoring Protocol</h3>
                  <p className="text-gray-600 text-sm">Version 3.0 • Updated October 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Guidelines for locating, monitoring, and recording data from bird nests while minimizing disturbance.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Covers:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nest searching techniques</li>
                  <li>Visit frequency guidelines</li>
                  <li>Data to record at each visit</li>
                  <li>Predator deterrent measures</li>
                  <li>Safety and ethical considerations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Migration Monitoring Protocol</h3>
                  <p className="text-gray-600 text-sm">Version 1.5 • Updated March 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Standardized methods for monitoring migratory birds at stopover sites.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Details:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Seasonal survey windows</li>
                  <li>Daily survey timing</li>
                  <li>Species identification guidelines</li>
                  <li>Abundance estimation methods</li>
                  <li>Weather documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capture and Banding Protocols */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Capture and Banding Protocols</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Mist Netting Protocol</h3>
                  <p className="text-gray-600 text-sm">Version 2.3 • Updated August 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Safe and effective methods for capturing birds using mist nets.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start">
                  <FiAlertCircle className="text-red-500 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-red-800">Permit Required</p>
                    <p className="text-red-700 text-sm">
                      Federal bird banding permit and IACUC approval required before conducting this activity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Net site selection and setup</li>
                  <li>Net check intervals</li>
                  <li>Extraction techniques</li>
                  <li>Weather and safety considerations</li>
                  <li>Data recording requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Bird Banding and Measurement Protocol</h3>
                  <p className="text-gray-600 text-sm">Version 4.0 • Updated June 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Detailed instructions for banding birds and taking standardized measurements.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Band size selection</li>
                  <li>Banding techniques</li>
                  <li>Age and sex determination</li>
                  <li>Morphometric measurements</li>
                  <li>Fat scoring and molt assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology and Equipment Protocols */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Technology and Equipment Protocols</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Autonomous Recording Unit Deployment
                  </h3>
                  <p className="text-gray-600 text-sm">Version 1.2 • Updated September 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Guidelines for deploying and maintaining acoustic monitoring equipment in the field.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Site selection criteria</li>
                  <li>Equipment setup and programming</li>
                  <li>Maintenance schedule</li>
                  <li>Data retrieval procedures</li>
                  <li>Battery and storage management</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">GPS Transmitter Attachment</h3>
                  <p className="text-gray-600 text-sm">Version 2.0 • Updated July 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Methods for safely attaching GPS and radio transmitters to birds.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start">
                  <FiAlertCircle className="text-red-500 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-red-800">Training Required</p>
                    <p className="text-red-700 text-sm">
                      Specialized training and IACUC approval required. Contact lab for training opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Management Protocols */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Data Management Protocols</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    Data Entry and Quality Control
                  </h3>
                  <p className="text-gray-600 text-sm">Version 3.1 • Updated November 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Standards for entering, validating, and archiving research data.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Data entry templates and standards</li>
                  <li>Quality assurance procedures</li>
                  <li>Error checking protocols</li>
                  <li>Backup and archiving guidelines</li>
                  <li>Metadata requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">Data Sharing and Publication</h3>
                  <p className="text-gray-600 text-sm">Version 1.0 • Updated May 2024</p>
                </div>
                <button className="text-primary-green hover:text-primary-blue transition-colors flex items-center">
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Guidelines for sharing research data publicly and with collaborators.
              </p>
            </div>
          </div>
        </section>

        {/* Safety and Ethics */}
        <section>
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Safety and Ethics</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-3 flex items-center">
                <FiCheckCircle className="text-primary-green mr-2" />
                Required Training and Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Field safety orientation</li>
                <li>Bird identification proficiency test</li>
                <li>IACUC training (for projects involving animal capture)</li>
                <li>Federal bird banding permit (when applicable)</li>
                <li>First aid and CPR certification (recommended)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-blue mb-3">Ethical Guidelines</h3>
              <p className="text-gray-700 mb-3">
                All research conducted by Illinois BirdLab follows ethical guidelines for the treatment of birds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Minimize disturbance to nesting birds</li>
                <li>Limit handling time to reduce stress</li>
                <li>Use appropriate techniques for each species</li>
                <li>Prioritize bird welfare over data collection</li>
                <li>Follow all federal, state, and institutional regulations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProtocolsPage;
