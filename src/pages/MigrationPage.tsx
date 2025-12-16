import React from 'react';
import { FiMapPin, FiRadio, FiCloud, FiMap, FiDatabase } from 'react-icons/fi';

const MigrationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Bird Migration in Illinois
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Explore cutting-edge technologies and research tracking bird migration through Illinois, 
          a critical corridor in the Mississippi Flyway.
        </p>
      </div>

      {/* Motus Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiRadio className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Motus Wildlife Tracking System
          </h2>
        </div>

        <div className="space-y-6">
          {/* Explanation */}
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#374151' }}>
              What is Motus?
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              The Motus Wildlife Tracking System is an international collaborative network of automated radio telemetry arrays. 
              Researchers attach tiny radio transmitters to birds, bats, and insects, and a network of receiving stations 
              (towers with antennas) detect the signals as tagged animals pass by. This allows us to track individual birds 
              throughout their entire migration journey, providing unprecedented insights into migration routes, stopover sites, 
              timing, and survival.
            </p>
          </div>

          {/* Few Examples */}
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#374151' }}>
              Illinois Motus Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                  Gray-cheeked Thrush Migration
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Tracked long-distance nocturnal migrants through Illinois, revealing critical stopover habitat 
                  along Lake Michigan and major river corridors.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                  Swainson's Thrush Connectivity
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Revealing connections between breeding grounds in Canada, stopover sites in Illinois, 
                  and wintering areas in Central/South America.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                  Survival Rate Estimates
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Using detection data to estimate survival rates during migration and identify high-risk areas 
                  where conservation efforts are most needed.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                  Stopover Duration Studies
                </h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Measuring how long birds stay at stopover sites to refuel, helping identify the most important 
                  habitats for migrating birds.
                </p>
              </div>
            </div>
          </div>

          {/* Map of Towers */}
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#374151' }}>
              Illinois Motus Tower Network
            </h3>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <FiMap className="w-16 h-16" style={{ color: '#6B7280' }} />
              </div>
              <p className="text-center mb-4" style={{ color: '#6B7280' }}>
                Interactive map of Motus receiving stations in Illinois
              </p>
              <div className="text-center">
                <a
                  href="https://motus.org/data/receiversMap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{ backgroundColor: '#4A7C59', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d6449'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A7C59'}
                >
                  <FiMapPin />
                  View Motus Receiver Map
                </a>
              </div>
              <p className="text-xs text-center mt-4" style={{ color: '#9CA3AF' }}>
                Explore the global network of Motus receivers and see real-time detection data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acoustic Monitoring Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiRadio className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Acoustic Monitoring
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Acoustic monitoring uses specialized microphones to record bird vocalizations during migration. 
            Nocturnal flight calls allow researchers to identify species, estimate abundance, and track migration timing 
            through urban areas like Chicago, where visual observation is challenging.
          </p>

          <div className="bg-blue-50 border-l-4 rounded-lg p-6" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2E5266' }}>
              Chicago Bird Migration Project
            </h3>
            <p className="mb-4" style={{ color: '#374151' }}>
              A collaborative effort using acoustic monitoring and building collision surveys to understand 
              bird migration through Chicago and reduce bird-building collisions.
            </p>
            <a
              href="https://chicagobirdmigration.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: '#4A7C59', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d6449'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A7C59'}
            >
              Visit Chicago Bird Migration Project
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FiRadio className="w-12 h-12 mx-auto mb-3" style={{ color: '#4A7C59' }} />
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                Nocturnal Flight Calls
              </h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Recording vocalizations during nighttime migration
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FiCloud className="w-12 h-12 mx-auto mb-3" style={{ color: '#4A7C59' }} />
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                Real-time Monitoring
              </h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Live data on migration intensity and species composition
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FiDatabase className="w-12 h-12 mx-auto mb-3" style={{ color: '#4A7C59' }} />
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                Long-term Datasets
              </h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Years of data revealing migration patterns and trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BirdCast Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiCloud className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            BirdCast Migration Forecasts
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            BirdCast uses weather surveillance radar and artificial intelligence to detect, track, and forecast 
            bird migration in real-time across the United States. This technology provides critical information 
            about when and where birds are migrating, helping researchers, conservationists, and the public 
            understand migration patterns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Migration Forecasts
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                3-day predictions of migration intensity to help plan conservation efforts and birding activities
              </p>
              <a
                href="https://birdcast.info/migration-forecast-maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                View Forecast Maps →
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Live Migration Maps
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Real-time radar data showing migration intensity across Illinois and the entire U.S.
              </p>
              <a
                href="https://birdcast.info/migration-tools/live-migration-maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                View Live Maps →
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
              💡 How to Use BirdCast Data
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Plan birding trips during predicted high migration nights</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Coordinate Lights Out programs to reduce bird-building collisions during peak migration</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Track seasonal migration patterns and timing changes over years</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Identify important stopover areas where birds concentrate during migration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Migration Areas Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiMap className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Important Migration Areas in Illinois
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
            Illinois sits at the heart of the Mississippi Flyway, one of four major North American migration corridors. 
            Several locations in the state are critically important for migrating birds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Lake Michigan Shoreline
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Chicago lakefront and Illinois Beach State Park serve as critical stopover sites for 
                millions of birds concentrating along the lake during migration.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Warblers, Thrushes, Shorebirds
              </span>
            </div>

            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Illinois River Valley
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Major river corridors provide essential stopover habitat and guide migrating birds 
                through the state's agricultural landscape.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Waterfowl, Gulls, Terns
              </span>
            </div>

            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Shawnee National Forest
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Southern Illinois forests provide critical stopover habitat where birds refuel 
                before crossing the Ohio and Mississippi Rivers.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Neotropical Migrants, Raptors
              </span>
            </div>

            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Chautauqua National Wildlife Refuge
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Internationally recognized Important Bird Area supporting massive concentrations 
                of migrating waterfowl and shorebirds.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Ducks, Geese, Shorebirds
              </span>
            </div>

            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Mississippi River Pools
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Lock and dam pools along the Mississippi create vital wetland habitat for 
                migrating waterbirds and shorebirds.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Pelicans, Herons, Shorebirds
              </span>
            </div>

            <div className="border-2 rounded-lg p-5" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
                Urban Parks & Greenspaces
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                City parks provide essential oases for migrants navigating urban landscapes, 
                especially during inclement weather.
              </p>
              <span className="text-xs font-semibold" style={{ color: '#4A7C59' }}>
                Key Species: Warblers, Vireos, Flycatchers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Forbes Biological Station Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiDatabase className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Forbes Biological Station Data
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            The Forbes Biological Station in Havana, Illinois, operated by the Illinois Natural History Survey, 
            has been a center for bird research and monitoring for decades. Long-term datasets from Forbes provide 
            invaluable insights into migration phenology, population dynamics, and the effects of environmental change 
            on Illinois birds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Long-term Banding Data
              </h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Decades of bird banding records documenting migration timing, age ratios, and population trends 
                for species using the Illinois River valley.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Migration Phenology Studies
              </h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Research tracking how migration timing has shifted over time in response to climate change 
                and habitat alterations.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Habitat Use Research
              </h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Studies documenting stopover habitat preferences and the importance of floodplain forests 
                and wetlands for migrating birds.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2E5266' }}>
                Species-specific Research
              </h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Detailed studies on priority species including raptors, waterfowl, and neo-tropical migrants 
                using the central Illinois flyway.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              Featured Research Areas
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>✓</span>
                <span>Impact of river management on waterfowl migration and stopover ecology</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>✓</span>
                <span>Role of backwater lakes and floodplain forests as stopover habitat</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>✓</span>
                <span>Migration timing shifts in response to climate change</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>✓</span>
                <span>Survival and recruitment patterns for species of conservation concern</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>✓</span>
                <span>Effects of land use change on migration stopover quality</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MigrationPage;
