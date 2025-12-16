import React from 'react';
import { FiClock, FiBook, FiArchive } from 'react-icons/fi';

const HistoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">
            History of Bird Research in Illinois
          </h1>
          <p className="text-lg text-gray-700">
            A rich tradition of ornithological research spanning over a century.
          </p>
        </div>

        {/* Early History */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiClock className="mr-2" />
            Early Ornithology in Illinois (1800s - Early 1900s)
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Illinois has a distinguished history of bird research dating back to the 19th century. Early naturalists 
              documented the state's rich avifauna, including species that would later become extinct or extirpated.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">Robert Ridgway (1850-1929)</h3>
                <p className="text-gray-700">
                  One of America's foremost ornithologists, Ridgway grew up in Illinois and conducted extensive 
                  research on the state's birds. His work at the Smithsonian Institution included detailed studies 
                  of Illinois avifauna.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">Stephen A. Forbes</h3>
                <p className="text-gray-700">
                  As director of the Illinois State Laboratory of Natural History (precursor to the Illinois Natural 
                  History Survey), Forbes promoted ornithological research and conservation in the late 1800s.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Illinois Natural History Survey Era */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiBook className="mr-2" />
            Illinois Natural History Survey Era (1900s - Present)
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              The Illinois Natural History Survey (INHS) has been at the forefront of bird research in the state 
              for over a century.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">Mid-20th Century Research</h3>
                <p className="text-gray-700 mb-2">
                  INHS scientists conducted comprehensive surveys of breeding birds, migration patterns, and 
                  population dynamics throughout Illinois.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Breeding bird atlases and surveys</li>
                  <li>Migration monitoring stations</li>
                  <li>Habitat studies across diverse ecosystems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">Conservation Focus</h3>
                <p className="text-gray-700">
                  Research increasingly focused on conservation biology, habitat loss, and population declines, 
                  particularly for grassland species and migrants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* University of Illinois Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6">
            University of Illinois Ornithological Research
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              The University of Illinois has a long tradition of ornithological research through various departments 
              and programs.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Department of Natural Resources and Environmental Sciences
                </h3>
                <p className="text-gray-700">
                  Faculty and students have conducted groundbreaking research on bird ecology, behavior, migration, 
                  and conservation for decades.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">Notable Research Areas</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Migration ecology and tracking studies</li>
                  <li>Breeding biology and population dynamics</li>
                  <li>Habitat selection and landscape ecology</li>
                  <li>Effects of agriculture on bird populations</li>
                  <li>Climate change impacts on bird communities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Era */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 flex items-center">
            <FiArchive className="mr-2" />
            Modern Era (2000s - Present)
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Contemporary bird research in Illinois combines traditional field methods with cutting-edge technology.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Technological Advances
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>GPS and satellite tracking of migrants</li>
                  <li>Automated recording units for monitoring</li>
                  <li>Genomic and isotope analysis</li>
                  <li>Remote sensing and GIS analysis</li>
                  <li>Citizen science platforms (eBird, iNaturalist)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  Collaborative Research Networks
                </h3>
                <p className="text-gray-700">
                  Illinois researchers now participate in continental and global bird research networks, contributing 
                  to our understanding of bird ecology across spatial and temporal scales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy and Impact */}
        <section>
          <h2 className="text-2xl font-bold text-primary-blue mb-6">Legacy and Impact</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Illinois bird research has contributed significantly to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Understanding of bird migration patterns across the Mississippi Flyway</li>
              <li>Conservation strategies for grassland birds</li>
              <li>Documentation of long-term population trends</li>
              <li>Habitat management recommendations</li>
              <li>Training of hundreds of ornithologists and conservation biologists</li>
              <li>Public awareness and appreciation of Illinois birds</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;
