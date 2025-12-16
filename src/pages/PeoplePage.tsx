import React from 'react';
import { FiUser, FiMail } from 'react-icons/fi';

const PeoplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">People</h1>
          <p className="text-lg text-gray-700">
            Meet the researchers, students, and collaborators who make up the Illinois BirdLab team.
          </p>
        </div>

        {/* Principal Investigators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiUser className="mr-2" />
            Principal Investigators
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-blue mb-2">Dr. [Name]</h3>
              <p className="text-gray-600 mb-2">Professor, Department of Natural Resources and Environmental Sciences</p>
              <p className="text-gray-700 mb-4">
                Research interests: Migration ecology, conservation biology, population dynamics
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-blue mb-2">Dr. [Name]</h3>
              <p className="text-gray-600 mb-2">Research Scientist, Illinois Natural History Survey</p>
              <p className="text-gray-700 mb-4">
                Research interests: Bird monitoring, habitat ecology, species distribution modeling
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Graduate Students */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Graduate Students</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Student Name]</h3>
              <p className="text-gray-600 mb-2">PhD Candidate</p>
              <p className="text-sm text-gray-700 mb-3">
                Research: [Brief description of research focus]
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Student Name]</h3>
              <p className="text-gray-600 mb-2">MS Student</p>
              <p className="text-sm text-gray-700 mb-3">
                Research: [Brief description of research focus]
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Student Name]</h3>
              <p className="text-gray-600 mb-2">MS Student</p>
              <p className="text-sm text-gray-700 mb-3">
                Research: [Brief description of research focus]
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research Staff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Research Staff</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Staff Name]</h3>
              <p className="text-gray-600 mb-2">Research Specialist</p>
              <p className="text-sm text-gray-700 mb-3">
                Responsibilities: Field research coordination, data management, laboratory analysis
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2" />
                <a href="mailto:email@illinois.edu" className="hover:text-primary-green">
                  email@illinois.edu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Collaborators</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              We work closely with numerous organizations and individuals across Illinois and beyond:
            </p>
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
                <span>Bird Conservation Network</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Various Audubon chapters across Illinois</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Alumni */}
        <section>
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Alumni</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Alumni Name], PhD</h3>
              <p className="text-gray-600 text-sm mb-1">Graduated: [Year]</p>
              <p className="text-gray-700 text-sm mb-2">Thesis: [Title]</p>
              <p className="text-gray-600 text-sm">Current position: [Current role and institution]</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">[Alumni Name], MS</h3>
              <p className="text-gray-600 text-sm mb-1">Graduated: [Year]</p>
              <p className="text-gray-700 text-sm mb-2">Thesis: [Title]</p>
              <p className="text-gray-600 text-sm">Current position: [Current role and institution]</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PeoplePage;
