import React, { useState } from 'react';
import { FiCalendar, FiUsers, FiExternalLink, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import BandingStationsMap from '../components/dataExplorer/BandingStationsMap';

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

            <div className="mb-8">
              <BandingStationsMap />
            </div>

            <div className="space-y-6">
          {/* Big Marsh MAPS Station */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Big Marsh MAPS Station
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  Chicago Ornithological Society
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 2020
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Edward Warden</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 41.687950, -87.565905</p>
                <p className="text-sm mb-2"><strong>Type:</strong> MAPS (Monitoring Avian Productivity and Survivorship for Breeding Birds)</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> We occasionally welcome visitors during special demonstrations</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong> Volunteers with banding experience may be prioritized at this time and prospective volunteers without banding experience may be put on a waitlist.</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:calumet@chicagobirder.org" className="text-blue-600 hover:underline">calumet@chicagobirder.org</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Website:</strong> <a href="https://www.chicagobirder.org/calumet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">chicagobirder.org/calumet</a></p>
              <p className="text-sm mb-2"><strong>Social Media:</strong> <a href="https://www.instagram.com/chicago_birder/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram</a></p>
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 69.6 new birds/100 net hours</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Research Focus:</p>
              <p className="text-sm" style={{ color: '#374151' }}>
                Post-breeding departure timing of Yellow Warblers in relation to age and condition.
              </p>
            </div>
          </div>

          {/* Jubilee Farm MMN Bird Banding Station */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Jubilee Farm MMN Bird Banding Station
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  Lincoln Land Association of Bird Banders
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 2021
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Tony Rothering</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 39.77500, -89.77500</p>
                <p className="text-sm mb-2"><strong>Type:</strong> Migratory Monitoring</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:arothering94@gmail.com" className="text-blue-600 hover:underline">arothering94@gmail.com</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Social Media:</strong> <a href="https://www.facebook.com/LLABirdBanders/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></p>
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 59.7 new birds/100 net hours</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Research Focus:</p>
              <p className="text-sm" style={{ color: '#374151' }}>
                Determination of Gender in the Dark-eyed Junco (Junco hyemalis hyemalis); Utilizing Morphological Methods and Molecular Genetics.
              </p>
            </div>
          </div>

          {/* Springfield MAPS Station */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Springfield MAPS Station
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  Lincoln Land Association of Bird Banders
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 2015
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Tony Rothering</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 39.75833, -89.60833</p>
                <p className="text-sm mb-2"><strong>Type:</strong> MAPS (Monitoring Avian Productivity and Survivorship for Breeding Birds)</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> With prior notification</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:arothering94@gmail.com" className="text-blue-600 hover:underline">arothering94@gmail.com</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Social Media:</strong> <a href="https://www.facebook.com/LLABirdBanders/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></p>
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 25.4 new birds/100 net hours</p>
            </div>
            
            
          </div>

          {/* Sand Bluff Bird Observatory */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Sand Bluff Bird Observatory
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  Sand Bluff Bird Observatory Inc.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 1967
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Mike Eickman</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 42.483812, -89.246559</p>
                <p className="text-sm mb-2"><strong>Type:</strong> Migratory Monitoring</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:redtail15@aol.com" className="text-blue-600 hover:underline">redtail15@aol.com</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Website:</strong> <a href="https://sandbluff.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sandbluffbirdobservatory.org</a></p>
              <p className="text-sm mb-2"><strong>Social Media:</strong> <a href="https://www.facebook.com/sandbluff.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></p>
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 12.11 new birds/100 net hours</p>
            </div>
            
            
          </div>

          {/* Phillips Tract Banding Station */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Phillips Tract Banding Station
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  University of Illinois at Urbana-Champaign
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 2019
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Tara Beveroth</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 40.131101, -88.146895</p>
                <p className="text-sm mb-2"><strong>Type:</strong> Migratory Monitoring</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> With prior notification, we can accommodate individual visitors</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong> No</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:beveroth@illinois.edu" className="text-blue-600 hover:underline">beveroth@illinois.edu</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 70 new birds/100 net hours (migration)</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Research Focus:</p>
              <p className="text-sm" style={{ color: '#374151' }}>
                Migration phenology and climate change impacts; Migratory stopover and bird activity levels on stopover; How blood metabolite levels and body condition in birds reflect migration strategies during spring and fall migration.
              </p>
            </div>
          </div>

          {/* Illinois Raptor Center Bird Banding Station */}
          <div className="bg-white border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#4A7C59' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2E5266' }}>
                  Illinois Raptor Center Bird Banding Station
                </h3>
                <p className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                  Millikin University and Illinois Raptor Center
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}>
                Est. 2022
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm mb-2"><strong>Contact:</strong> Travis Wilcoxen</p>
                <p className="text-sm mb-2"><strong>Location:</strong> 39.823056, -89.0525</p>
                <p className="text-sm mb-2"><strong>Type:</strong> Species Specific Station</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Open to Visitors:</strong> Yes</p>
                <p className="text-sm mb-2"><strong>Volunteers:</strong>We always welcome new volunteers, but often have our basic needs covered</p>
                <p className="text-sm mb-2"><strong>Contact:</strong> <a href="mailto:twilcoxen@millikin.edu" className="text-blue-600 hover:underline">twilcoxen@millikin.edu</a></p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-2"><strong>Social Media:</strong> <a href="https://www.facebook.com/p/Illinois-Raptor-Center-Bird-Banding-Station-100080308883595/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></p>
              <p className="text-sm mb-2"><strong>Average Yearly Activity:</strong> 2000 birds</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Research Focus:</p>
              <p className="text-sm" style={{ color: '#374151' }}>
                We study disease dynamics in songbirds and raptors.
              </p>
            </div>
          </div>

            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MonitoringProgramsPage;
