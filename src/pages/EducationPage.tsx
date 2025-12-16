import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiBook, FiBarChart2, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

const EducationPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Bird Curiosity / Education
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Discover where to see birds, learn about birdwatching, and explore resources for education and research.
        </p>
      </div>

      {/* Where You Can See Birds Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('where-to-see-birds')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiMapPin className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Where You Can See Birds
            </h2>
          </div>
          {openSection === 'where-to-see-birds' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'where-to-see-birds' && (
          <div className="px-8 pb-8">
            <p className="text-base mb-6" style={{ color: '#6B7280' }}>
              Illinois offers diverse birding locations across the state, from urban parks to vast natural areas. 
              Here are some of the best places to observe birds throughout the year.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Northern Illinois
                </h3>
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

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Central Illinois
                </h3>
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

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Southern Illinois
                </h3>
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

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Migration Hotspots
                </h3>
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

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
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
        )}
      </section>

      {/* Opportunities in Your Area Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('opportunities')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiCalendar className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Opportunities in Your Area
            </h2>
          </div>
          {openSection === 'opportunities' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'opportunities' && (
          <div className="px-8 pb-8">
            {/* Owl Nights Subsection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                Owl Nights
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-4">
                <p className="text-base mb-4" style={{ color: '#374151' }}>
                  Many nature centers, forest preserves, and parks host owl prowl events during winter months 
                  when owls are most vocal and active. These guided nighttime walks offer opportunities to hear 
                  and see owls in their natural habitat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>What to Expect</h4>
                    <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                      <li>• Evening walks (typically 6-8 PM)</li>
                      <li>• Owl call playback to elicit responses</li>
                      <li>• Educational information about owl ecology</li>
                      <li>• Family-friendly programs</li>
                      <li>• Dress warmly for winter weather</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Target Species</h4>
                    <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                      <li>• Great Horned Owl</li>
                      <li>• Eastern Screech-Owl</li>
                      <li>• Barred Owl</li>
                      <li>• Long-eared Owl (occasional)</li>
                      <li>• Short-eared Owl (grasslands)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Audubon Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                Audubon
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-4">
                <p className="text-base mb-4" style={{ color: '#374151' }}>
                  Illinois Audubon and local Audubon chapters offer year-round programs, field trips, and 
                  educational opportunities for birders of all levels.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Programs & Activities</h4>
                    <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Guided bird walks:</strong> Weekly or monthly outings to local birding spots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Educational programs:</strong> Monthly meetings with guest speakers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Conservation projects:</strong> Habitat restoration and monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Youth programs:</strong> Bird camps and educational activities for kids</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Festival participation:</strong> Migration celebrations and bird festivals</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://www.illinoisaudubon.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    style={{ backgroundColor: '#4A7C59', color: 'white' }}
                  >
                    Visit Illinois Audubon <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Etc. (Other Opportunities) Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                Other Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Nature Centers</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    Local nature centers offer bird-watching programs, festivals, and educational exhibits throughout the year.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Bird Clubs</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    Join local bird clubs for regular outings, social connections, and learning opportunities with experienced birders.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>State Parks</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    Illinois state parks host birding events, particularly during migration seasons and for special species.
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Festivals</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    Annual bird festivals celebrate migration and provide guided tours, workshops, and vendor exhibitions.
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Universities</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    University programs offer public lectures, field trips, and citizen science opportunities.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Photography Workshops</h4>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    Learn bird photography techniques through workshops at nature centers and photography groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* What is Birdwatching Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('what-is-birdwatching')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiBook className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              What is Birdwatching
            </h2>
          </div>
          {openSection === 'what-is-birdwatching' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'what-is-birdwatching' && (
          <div className="px-8 pb-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Introduction to Birding
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
                  Birdwatching (or birding) is the observation of birds in their natural habitat as a recreational 
                  activity or citizen science. It's one of the fastest-growing outdoor activities, appealing to people 
                  of all ages and physical abilities. Birding can be as simple as watching birds at your backyard 
                  feeder or as involved as traveling to see rare species.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Why Bird?</h4>
                    <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                      <li>• Connect with nature</li>
                      <li>• Reduce stress and improve mental health</li>
                      <li>• Lifelong learning opportunities</li>
                      <li>• Social connections with like-minded people</li>
                      <li>• Contribute to scientific research</li>
                      <li>• Accessible and affordable hobby</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Getting Started</h4>
                    <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                      <li>• Binoculars (8x42 recommended)</li>
                      <li>• Field guide or bird ID app</li>
                      <li>• Notebook or eBird app</li>
                      <li>• Patience and curiosity</li>
                      <li>• Join a local bird walk</li>
                      <li>• Start in your own backyard</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Bird Identification Basics
                </h3>
                <p className="text-base mb-4" style={{ color: '#374151' }}>
                  Learning to identify birds takes practice, but following a systematic approach helps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Size & Shape</h4>
                    <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                      <li>• Overall body size</li>
                      <li>• Bill shape and size</li>
                      <li>• Tail length and shape</li>
                      <li>• Wing shape and length</li>
                      <li>• Leg length</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Color & Pattern</h4>
                    <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                      <li>• Overall color</li>
                      <li>• Wing bars and patches</li>
                      <li>• Eye rings or stripes</li>
                      <li>• Breast patterns</li>
                      <li>• Tail patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Behavior & Habitat</h4>
                    <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                      <li>• Flight pattern</li>
                      <li>• Feeding behavior</li>
                      <li>• Habitat preference</li>
                      <li>• Song and calls</li>
                      <li>• Seasonal presence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  🔍 Tips for Beginning Birders
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <span><strong>Start local:</strong> Learn the common birds in your area before seeking rarities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <span><strong>Use technology:</strong> Apps like Merlin Bird ID can help identify birds by photo or song</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <span><strong>Take notes:</strong> Record what you see to reinforce learning and track your progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <span><strong>Join others:</strong> Bird with experienced birders who can teach you field marks and calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <span><strong>Be patient:</strong> Bird ID skills develop over time through repeated observation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Current Issues Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('current-issues')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiCalendar className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Current Issues
            </h2>
          </div>
          {openSection === 'current-issues' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'current-issues' && (
          <div className="px-8 pb-8">
            <p className="text-base mb-6" style={{ color: '#6B7280' }}>
              Stay informed about current bird conservation issues, recent research findings, and emerging threats 
              affecting Illinois bird populations.
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Ongoing Conservation Challenges
                </h3>
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

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Recent News & Updates
                </h3>
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
            </div>
          </div>
        )}
      </section>

      {/* Example Data for Schools Section */}
      <section className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('example-data')}
          className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiBarChart2 className="w-8 h-8" style={{ color: '#4A7C59' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Example Data for Schools
            </h2>
          </div>
          {openSection === 'example-data' ? (
            <FiChevronUp className="w-6 h-6" style={{ color: '#4A7C59' }} />
          ) : (
            <FiChevronDown className="w-6 h-6" style={{ color: '#4A7C59' }} />
          )}
        </button>

        {openSection === 'example-data' && (
          <div className="px-8 pb-8">
            {/* Population Trends, Distribution Subsection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                Population Trends & Distribution
              </h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-4">
                <p className="text-base mb-4" style={{ color: '#374151' }}>
                  Educational resources demonstrating how to use real bird data for classroom learning about 
                  ecology, statistics, and conservation biology.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Available Datasets</h4>
                    <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Breeding Bird Survey data:</strong> Long-term population trends (1966-present)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Christmas Bird Count data:</strong> Winter distribution and abundance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>eBird data:</strong> Occurrence, distribution, and migration timing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span><strong>Illinois Breeding Bird Atlas:</strong> Statewide distribution maps</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Educational Activities</h4>
                    <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Graphing population changes over time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Creating distribution maps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Calculating species diversity indices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Analyzing migration timing patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Comparing habitat preferences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CAGO (Chicago Audubon) Subsection */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                Chicago Area Resources (CAGO)
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <p className="text-base mb-4" style={{ color: '#374151' }}>
                  Special educational programs and datasets focused on the Chicago metropolitan area, one of the 
                  most studied urban bird populations in North America.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Urban Birding Studies</h4>
                    <p className="text-sm mb-2" style={{ color: '#374151' }}>
                      Chicago provides unique opportunities to study:
                    </p>
                    <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                      <li>• Urban vs. suburban bird diversity</li>
                      <li>• Green space importance for migrants</li>
                      <li>• Window collision impacts</li>
                      <li>• Light pollution effects on migration</li>
                      <li>• Native plant benefits in urban areas</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Educational Programs</h4>
                    <p className="text-sm mb-2" style={{ color: '#374151' }}>
                      Chicago-area organizations offer:
                    </p>
                    <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                      <li>• School field trip programs</li>
                      <li>• Classroom presentations</li>
                      <li>• Teacher workshops</li>
                      <li>• Youth birding clubs</li>
                      <li>• Data collection projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                📊 Using Bird Data in the Classroom
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Bird monitoring data provides excellent opportunities for teaching:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Data analysis and statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Graphing and visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Population ecology concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Climate change impacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Scientific method and inquiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Conservation biology principles</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default EducationPage;
