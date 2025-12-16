import React from 'react';
import { FiExternalLink, FiUsers, FiMapPin } from 'react-icons/fi';

const ConservationOrganizationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Bird Conservation Organizations
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          These organizations are working to protect Illinois birds and their habitats. Join, volunteer, 
          or support their critical conservation work.
        </p>
      </div>

      {/* Illinois Audubon Section */}
      <section id="illinois-audubon" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🦅</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Illinois Audubon
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Illinois Audubon Society is a statewide organization dedicated to protecting birds and other 
              wildlife through habitat preservation, restoration, and education. Founded in 1897, it is one 
              of the oldest conservation organizations in the state.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Key Programs</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Important Bird Area (IBA) program</li>
                  <li>• Education and outreach programs</li>
                  <li>• Habitat restoration projects</li>
                  <li>• Bird monitoring and citizen science</li>
                  <li>• Conservation advocacy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Get Involved</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Become a member</li>
                  <li>• Volunteer for habitat projects</li>
                  <li>• Participate in bird counts</li>
                  <li>• Attend field trips and workshops</li>
                  <li>• Support legislative action alerts</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.illinoisaudubon.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit Illinois Audubon <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* BCN (Bird Conservation Network) Section */}
      <section id="bcn" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiUsers className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Bird Conservation Network (BCN)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              The Bird Conservation Network is a coalition of organizations and individuals working together 
              to study and protect birds in the Chicago Wilderness region. BCN coordinates monitoring efforts 
              and promotes bird conservation through collaboration and education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Key Initiatives</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Chicago Bird Collision Monitors</li>
                  <li>• Breeding Bird Monitoring Program</li>
                  <li>• Lights Out Chicago</li>
                  <li>• Bird-friendly Communities</li>
                  <li>• Habitat conservation advocacy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Monitoring Programs</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Coordinate volunteer bird monitoring</li>
                  <li>• Track population trends</li>
                  <li>• Document window strikes</li>
                  <li>• Monitor Important Bird Areas</li>
                  <li>• Collect migration timing data</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.bcnbirds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit BCN <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* ABC (American Bird Conservancy) Section */}
      <section id="abc" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🌎</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            American Bird Conservancy (ABC)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              American Bird Conservancy is dedicated to conserving wild birds and their habitats throughout 
              the Americas. ABC takes action to address the greatest threats to birds through direct 
              conservation, policy advocacy, and building the bird conservation movement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>National Programs</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Bird-Smart Glass solutions</li>
                  <li>• Cats Indoors program</li>
                  <li>• Pesticides and Birds</li>
                  <li>• Habitat conservation</li>
                  <li>• Policy and legislation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Resources</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Bird-Smart Glass database</li>
                  <li>• Window collision solutions</li>
                  <li>• Native plants database</li>
                  <li>• Conservation guides</li>
                  <li>• Research and reports</li>
                </ul>
              </div>
            </div>

            <a
              href="https://abcbirds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit American Bird Conservancy <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* IDNR Section */}
      <section id="idnr" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiMapPin className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Illinois Department of Natural Resources (IDNR)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              IDNR is responsible for managing and protecting Illinois' natural resources, including wildlife 
              and their habitats. The Division of Wildlife Resources leads bird conservation efforts in the state.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Wildlife Programs</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Wildlife Action Plan implementation</li>
                  <li>• Endangered species recovery</li>
                  <li>• Habitat restoration on public lands</li>
                  <li>• Wildlife health monitoring</li>
                  <li>• Conservation education</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Public Resources</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• State parks and natural areas</li>
                  <li>• Wildlife viewing opportunities</li>
                  <li>• Educational programs</li>
                  <li>• Technical assistance for landowners</li>
                  <li>• Wildlife research and data</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www2.illinois.gov/dnr/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit IDNR <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* Illinois Ornithological Society Section */}
      <section id="illinois-outdoors" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Illinois Ornithological Society (IOS)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              The Illinois Ornithological Society promotes the study, appreciation, and conservation of 
              Illinois birds through research, education, and publication of ornithological information.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Activities</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Quarterly journal publication</li>
                  <li>• Annual meetings and conferences</li>
                  <li>• Field trips throughout Illinois</li>
                  <li>• Research grants and awards</li>
                  <li>• Rare bird alerts and documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Membership Benefits</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Illinois Birds & Birding journal</li>
                  <li>• Access to rare bird information</li>
                  <li>• Networking with ornithologists</li>
                  <li>• Field trip opportunities</li>
                  <li>• Support research and conservation</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.illinoisbirds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit IOS <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* TNC (The Nature Conservancy) Section */}
      <section id="tnc" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🌳</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            The Nature Conservancy (TNC) - Illinois
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-teal-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              The Nature Conservancy works to protect the lands and waters on which all life depends. In 
              Illinois, TNC protects and restores prairies, forests, and wetlands that provide critical 
              habitat for birds and other wildlife.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Illinois Conservation</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Grand Prairie landscape restoration</li>
                  <li>• Wetland and floodplain conservation</li>
                  <li>• Forest preserve partnerships</li>
                  <li>• Agricultural conservation practices</li>
                  <li>• Climate adaptation strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Protected Areas</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li>• Nachusa Grasslands</li>
                  <li>• Emiquon Preserve</li>
                  <li>• Cache River wetlands</li>
                  <li>• Multiple prairie preserves</li>
                  <li>• Partnership sites statewide</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.nature.org/en-us/about-us/where-we-work/united-states/illinois/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Visit TNC Illinois <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* Great Lakes Audubon Section */}
      <section id="great-lakes-audubon" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🌊</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Great Lakes Audubon Chapters
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-sky-50 p-6 rounded-lg">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Several Audubon chapters serve northern Illinois and the Chicago region, focusing on 
              conservation and education in the Great Lakes ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Chicago Audubon Society
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Serving the Chicago metropolitan area with conservation, education, and advocacy programs.
                </p>
                <ul className="text-xs space-y-1 mb-3" style={{ color: '#374151' }}>
                  <li>• Urban bird conservation</li>
                  <li>• Lights Out Chicago partnership</li>
                  <li>• Educational programs for all ages</li>
                  <li>• Birding field trips</li>
                </ul>
              </div>

              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Evanston North Shore Bird Club
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Active birding and conservation community on Chicago's North Shore.
                </p>
                <ul className="text-xs space-y-1 mb-3" style={{ color: '#374151' }}>
                  <li>• Lakefront bird monitoring</li>
                  <li>• Monthly meetings and programs</li>
                  <li>• Regular birding outings</li>
                  <li>• Citizen science participation</li>
                </ul>
              </div>

              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  DuPage Birding Club
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Promoting birding and conservation in DuPage County and surrounding areas.
                </p>
                <ul className="text-xs space-y-1 mb-3" style={{ color: '#374151' }}>
                  <li>• Forest preserve partnerships</li>
                  <li>• Bird monitoring programs</li>
                  <li>• Educational workshops</li>
                  <li>• Habitat restoration projects</li>
                </ul>
              </div>

              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Find Your Local Chapter
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Many communities have local bird clubs and Audubon chapters.
                </p>
                <a
                  href="https://www.audubon.org/chapters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold inline-flex items-center gap-2"
                  style={{ color: '#4A7C59' }}
                >
                  Find a Chapter <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Organizations Section */}
      <section id="small-organizations" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🤝</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Small Organizations & Local Groups
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Numerous smaller organizations and volunteer groups across Illinois are making significant 
            contributions to bird conservation through local action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Local Bird Clubs
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Community-based birding clubs exist throughout Illinois, offering:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Regular birding outings</li>
                <li>• Educational presentations</li>
                <li>• Citizen science projects</li>
                <li>• Social networking for birders</li>
                <li>• Local conservation advocacy</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Land Trusts
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Local and regional land trusts protect bird habitat through:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Conservation easements</li>
                <li>• Land acquisition</li>
                <li>• Habitat restoration</li>
                <li>• Stewardship programs</li>
                <li>• Public access for birding</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Nature Centers
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Nature centers provide critical education and engagement:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Bird watching facilities</li>
                <li>• Educational programs for all ages</li>
                <li>• Citizen science coordination</li>
                <li>• Trail systems and habitat</li>
                <li>• Community events</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Wildlife Rehabilitation
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Rehabilitation centers care for injured and orphaned birds:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Emergency bird care</li>
                <li>• Release programs</li>
                <li>• Public education</li>
                <li>• Window strike response</li>
                <li>• Volunteer opportunities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                University Programs
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Academic institutions contribute through:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Research on Illinois birds</li>
                <li>• Student training and education</li>
                <li>• Long-term monitoring studies</li>
                <li>• Public outreach programs</li>
                <li>• Campus habitat management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Conservation Districts
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Soil and water conservation districts support bird habitat:
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Technical assistance to landowners</li>
                <li>• Conservation practice implementation</li>
                <li>• Educational programs</li>
                <li>• Funding opportunities</li>
                <li>• Partnership coordination</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              🔍 Find Local Organizations
            </h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              To find bird conservation organizations in your area, search for bird clubs, nature centers, 
              land trusts, and conservation districts in your county. Many operate volunteer programs and 
              welcome new members. Your local library, nature center, or county extension office can help 
              connect you with groups working in your community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConservationOrganizationsPage;
