import React from 'react';
import { FiCode, FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi';

const CodeResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Code Resources</h1>
          <p className="text-lg text-gray-700">
            Open-source code, scripts, and tools developed by Illinois BirdLab for bird research and data analysis.
          </p>
        </div>

        {/* R Packages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiCode className="mr-2" />
            R Packages
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">illinoisBirds</h3>
                  <p className="text-gray-600 text-sm">R package for analyzing Illinois bird data</p>
                </div>
                <a
                  href="https://github.com/illinois-birdlab/illinoisBirds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                Tools for working with Illinois bird observation data, including functions for data cleaning, 
                visualization, and analysis of trends and patterns.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-700 mb-2">Features:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Import and clean eBird data for Illinois</li>
                  <li>Calculate species diversity metrics</li>
                  <li>Generate distribution maps</li>
                  <li>Analyze seasonal occurrence patterns</li>
                  <li>Visualize migration timing</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Install from CRAN
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  Documentation
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">migrationTracker</h3>
                  <p className="text-gray-600 text-sm">Analyze bird migration tracking data</p>
                </div>
                <a
                  href="https://github.com/illinois-birdlab/migrationTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                Process and analyze GPS and radio telemetry data from migratory birds. Includes functions for 
                calculating stopover duration, movement rates, and habitat selection.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-700 mb-2">Features:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Import tracking data from various formats</li>
                  <li>Identify stopover locations</li>
                  <li>Calculate movement metrics</li>
                  <li>Visualize migration routes</li>
                  <li>Habitat association analysis</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="mr-2" />
                  View on GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  Vignettes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Python Scripts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Python Scripts</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">acoustic-analysis</h3>
                  <p className="text-gray-600 text-sm">Process acoustic monitoring data</p>
                </div>
                <a
                  href="https://github.com/illinois-birdlab/acoustic-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                Python scripts for processing audio recordings from autonomous recording units, including species 
                detection using machine learning models.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-700 mb-2">Capabilities:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Batch process audio files</li>
                  <li>Species detection and classification</li>
                  <li>Generate spectrograms</li>
                  <li>Export detection data</li>
                  <li>Integration with BirdNET</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">ebird-data-tools</h3>
                  <p className="text-gray-600 text-sm">Work with eBird API and data</p>
                </div>
                <a
                  href="https://github.com/illinois-birdlab/ebird-data-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                Python utilities for downloading and processing eBird data, including API wrapper functions and 
                data cleaning pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* Data Processing Workflows */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Data Processing Workflows</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Complete workflows for common data processing tasks:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-green pl-4">
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Point Count Data Processing
                </h3>
                <p className="text-gray-700 mb-2">
                  End-to-end workflow for processing bird survey data from field collection to analysis.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors text-sm"
                >
                  <FiGithub className="mr-2" />
                  View workflow
                </a>
              </div>

              <div className="border-l-4 border-primary-green pl-4">
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Migration Phenology Analysis
                </h3>
                <p className="text-gray-700 mb-2">
                  Scripts for analyzing migration timing from observation data.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors text-sm"
                >
                  <FiGithub className="mr-2" />
                  View workflow
                </a>
              </div>

              <div className="border-l-4 border-primary-green pl-4">
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Habitat Association Modeling
                </h3>
                <p className="text-gray-700 mb-2">
                  Complete pipeline for analyzing bird-habitat relationships using remote sensing data.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors text-sm"
                >
                  <FiGithub className="mr-2" />
                  View workflow
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Shiny Apps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Interactive Web Applications</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Illinois Bird Explorer (Shiny)</h3>
              <p className="text-gray-700 mb-4">
                Interactive web application for exploring Illinois bird data, including distribution maps, 
                phenology charts, and species accounts.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  Launch App
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-green hover:text-primary-blue transition-colors"
                >
                  <FiGithub className="mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section>
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Contributing</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              We welcome contributions to our code repositories! Whether you've found a bug, have a feature request, 
              or want to contribute code, please:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Check the repository's issues page for existing discussions</li>
              <li>Fork the repository and create a new branch for your changes</li>
              <li>Submit a pull request with a clear description of your changes</li>
              <li>Ensure all tests pass and code follows style guidelines</li>
            </ol>
            <p className="text-gray-700 mt-4">
              For questions about our code, please open an issue on the relevant GitHub repository or 
              contact us at <a href="mailto:birdlab@illinois.edu" className="text-primary-green hover:text-primary-blue">birdlab@illinois.edu</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeResourcesPage;
