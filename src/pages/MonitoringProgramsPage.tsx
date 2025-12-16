import React, { useState } from 'react';
import { FiCalendar, FiUsers, FiExternalLink, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const MonitoringProgramsPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Bird Monitoring Programs in Illinois
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Illinois hosts numerous long-term bird monitoring programs that provide critical data for 
          understanding population trends, distribution, and conservation needs.
        </p>
      </div>

      {/* Monitoring Programs Dropdown Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('monitoring-programs')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiCalendar className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Monitoring Programs
            </h2>
          </div>
          {openSection === 'monitoring-programs' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'monitoring-programs' && (
          <div className="px-8 pb-8">
            <div className="space-y-4">
          {/* eBird */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
                  eBird
                </h3>
                <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
                  Global citizen science database tracking bird observations year-round
                </p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                  2002 - Present
                </span>
              </div>
              <a
                href="https://ebird.org/region/US-IL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-sm font-semibold flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                Visit eBird <FiExternalLink />
              </a>
            </div>
          </div>

          {/* BBS */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Breeding Bird Survey (BBS)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              North American standardized roadside survey monitoring breeding bird populations
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              1966 - Present
            </span>
          </div>

          {/* CBC */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Christmas Bird Count (CBC)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Annual winter bird census conducted in circles across North America
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              1966 - Present
            </span>
          </div>

          {/* SBC */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Spring Bird Count (SBC)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Illinois-specific coordinated one-day count during spring migration
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              1972 - Present
            </span>
          </div>

          {/* MAPS */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Monitoring Avian Productivity and Survivorship (MAPS)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Constant-effort mist netting program tracking demographic parameters
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              1989 - Present
            </span>
          </div>

          {/* Harvest */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Harvest Surveys (Ducks)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Annual waterfowl harvest monitoring through hunter surveys and wing collection
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* Upland Game */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Upland Game Surveys
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Population monitoring for upland game birds including pheasants and quail
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              19xx - Present
            </span>
          </div>

          {/* BBA */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Breeding Bird Atlas (BBA)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Comprehensive surveys documenting breeding bird distribution and evidence
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Project-based
            </span>
          </div>

          {/* EORs */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Element Occurrence Records (EORs)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Documentation of rare and endangered species occurrences
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* SAFE/Pollinator */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              SAFE / Pollinator Programs
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              State Acres For wildlife Enhancement monitoring grassland bird response to habitat management
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* BCN */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Bird Conservation Network (BCN)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Chicago region grassland and savanna bird monitoring network
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* Ag Fields */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Agricultural Field Surveys
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Monitoring birds in cover crops and fallow fields across agricultural landscapes
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* Moon Surveys */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Moon Surveys
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Nocturnal migration monitoring using moon-watching techniques
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Seasonal
            </span>
          </div>

          {/* Duck Counts */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Duck Counts (Aerial)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Aerial surveys monitoring waterfowl abundance during migration and winter
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Seasonal
            </span>
          </div>

          {/* 100-year Bird Survey */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              100-year Bird Survey
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Long-term resurvey comparing current bird communities to historical baselines
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Project-based
            </span>
          </div>

          {/* OWLS */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              OWLS (Organized Waterfowl Lake Surveys)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Coordinated waterfowl surveys on Illinois lakes and wetlands
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Seasonal
            </span>
          </div>

          {/* CREP */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              CREP (Conservation Reserve Enhancement Program)
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Monitoring bird response to riparian and wetland habitat restoration
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* IL Breeding Bird Atlas */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Illinois Breeding Bird Atlas
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Comprehensive statewide atlas documenting breeding bird distribution
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Project-based
            </span>
          </div>

          {/* Hunting Data */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Hunting Data
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Hunter harvest reports and surveys for game bird population monitoring
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Annual
            </span>
          </div>

          {/* Pheasant Habitat Areas */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Pheasant Habitat Areas
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Targeted monitoring in managed pheasant habitat areas
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Ongoing
            </span>
          </div>

          {/* Grassland Bird Migration Areas */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Grassland Bird Migration Areas
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Focused surveys in key grassland stopover and staging areas
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Seasonal
            </span>
          </div>

          {/* Marsh Birds */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Marsh Birds - USFWS & IDNR
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Coordinated call-playback surveys for secretive marsh birds
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Seasonal
            </span>
          </div>

          {/* Hawk Routes */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Hawk Migration Routes
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Raptor migration counts at key concentration points
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Spring & Fall
            </span>
          </div>

          {/* Hawk Watch */}
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2E5266' }}>
              Hawk Watch
            </h3>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
              Standardized raptor migration monitoring at established watch sites
            </p>
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
              Spring & Fall
            </span>
          </div>
        </div>
          </div>
        )}
      </section>

      {/* How to Get Involved Dropdown Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('get-involved')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiUsers className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              How to Get Involved
            </h2>
          </div>
          {openSection === 'get-involved' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'get-involved' && (
          <div className="px-8 pb-8">
        <p className="text-base mb-8" style={{ color: '#6B7280' }}>
          Many of these monitoring programs rely on volunteer participation. Here's how you can contribute 
          to bird conservation in Illinois:
        </p>

        <div className="space-y-6">
          {/* eBird Map */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              eBird
            </h3>
            <p className="text-sm mb-4" style={{ color: '#374151' }}>
              Start contributing bird observations today with the eBird mobile app. Every checklist helps 
              scientists understand bird distribution and abundance patterns.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://ebird.org/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                style={{ backgroundColor: '#4A7C59', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d6449'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A7C59'}
              >
                Visit eBird <FiExternalLink />
              </a>
              <a
                href="https://ebird.org/explore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors border-2"
                style={{ borderColor: '#4A7C59', color: '#4A7C59' }}
              >
                Explore Data
              </a>
            </div>
          </div>

          {/* SBC */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              Spring Bird Count (SBC)
            </h3>
            <p className="text-sm mb-4" style={{ color: '#374151' }}>
              Join the annual statewide spring bird count. This one-day event in early May brings together 
              birders across Illinois to document spring migrants and breeding birds.
            </p>
            <a
              href="https://hollycoates.shinyapps.io/ebird_effort_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              style={{ backgroundColor: '#4A7C59', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d6449'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A7C59'}
            >
              Learn More <FiExternalLink />
            </a>
          </div>

          {/* CBC */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              Christmas Bird Count (CBC)
            </h3>
            <p className="text-sm mb-4" style={{ color: '#374151' }}>
              Participate in the nation's longest-running citizen science project. Find a count circle near you 
              and help document winter bird populations.
            </p>
            <a
              href="https://www.audubon.org/conservation/science/christmas-bird-count"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              style={{ backgroundColor: '#4A7C59', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d6449'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A7C59'}
            >
              Find a Count Circle <FiExternalLink />
            </a>
          </div>

          {/* Moon Surveys */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              Moon Surveys
            </h3>
            <p className="text-sm" style={{ color: '#374151' }}>
              Help monitor nocturnal migration by observing birds silhouetted against the moon during migration peaks. 
              Training and protocols available for interested volunteers.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 rounded-lg p-6" style={{ borderColor: '#4A7C59' }}>
          <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
            💡 Getting Started Tips
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Start with eBird - it's easy to use and helps multiple monitoring efforts</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Join local bird clubs to learn about volunteer opportunities in your area</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Attend training workshops to improve your bird identification skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Connect with experienced birders who can mentor you</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#4A7C59' }}>•</span>
              <span>Consider participating in multiple programs to contribute year-round data</span>
            </li>
          </ul>
        </div>
          </div>
        )}
      </section>

      {/* Bird Banding Stations Dropdown Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('banding-stations')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiMapPin className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Bird Banding Stations
            </h2>
          </div>
          {openSection === 'banding-stations' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'banding-stations' && (
          <div className="px-8 pb-8">
        <p className="text-base mb-8" style={{ color: '#6B7280' }}>
          Bird banding stations across Illinois provide critical data on survival, dispersal, migration routes, 
          and population demographics. These stations operate during migration seasons and breeding periods to 
          monitor bird populations through capture-mark-recapture techniques.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg mb-6">
          <div className="flex items-center justify-center mb-4">
            <FiMapPin className="w-16 h-16" style={{ color: '#6B7280' }} />
          </div>
          <p className="text-center mb-4" style={{ color: '#6B7280' }}>
            Interactive map of bird banding stations in Illinois
          </p>
          <p className="text-center text-sm" style={{ color: '#9CA3AF' }}>
            Map integration coming soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border-2" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
              Northern Illinois Stations
            </h3>
            <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
              Stations monitoring migration along Lake Michigan and through Chicago region
            </p>
            <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Illinois Beach State Park</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Montrose Point Bird Observatory</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Chicago Botanic Garden</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-2" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
              Central Illinois Stations
            </h3>
            <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
              Stations in river valleys and prairie regions
            </p>
            <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Forbes Biological Station</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Allerton Park</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Weldon Springs State Park</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-2" style={{ borderColor: '#4A7C59' }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2E5266' }}>
              Southern Illinois Stations
            </h3>
            <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
              Stations in forested and wetland habitats
            </p>
            <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Shawnee National Forest sites</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Crab Orchard NWR</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#4A7C59' }}>•</span>
                <span>Cache River sites</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
            🔍 What Bird Banding Tells Us
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Survival rates:</strong> How many birds return year after year</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Migration routes:</strong> Where birds go and how they get there</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Site fidelity:</strong> Whether birds return to the same locations</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Age structure:</strong> Ratios of young to adult birds in populations</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Body condition:</strong> Health indicators during migration and breeding</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Population connectivity:</strong> How different populations are linked across the landscape</span>
            </li>
          </ul>
        </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MonitoringProgramsPage;
