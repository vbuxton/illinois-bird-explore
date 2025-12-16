import React from 'react';
import { FiGlobe, FiMapPin, FiTrendingUp } from 'react-icons/fi';

const FullAnnualCycleConservationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Full Annual Cycle Conservation for Illinois Birds
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Protecting Illinois birds requires conservation action throughout their entire annual cycle—
          from breeding grounds in Illinois to migration routes and wintering areas across the hemisphere.
        </p>
      </div>

      {/* Introduction Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              Why Full Annual Cycle Conservation Matters
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Most Illinois birds are migratory, spending only part of the year in the state. To ensure 
              their survival, we must protect them throughout their entire annual cycle: on their breeding 
              grounds (often in Illinois), along migration routes, and on their wintering grounds (often in 
              Latin America and the Caribbean).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Breeding Season</h4>
                <p className="text-sm" style={{ color: '#374151' }}>
                  Spring and summer in Illinois - birds nest, raise young, and build energy reserves
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Migration</h4>
                <p className="text-sm" style={{ color: '#374151' }}>
                  Spring and fall journeys - birds travel thousands of miles, requiring stopover habitat
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Non-Breeding Season</h4>
                <p className="text-sm" style={{ color: '#374151' }}>
                  Winter in Central/South America - birds depend on tropical and subtropical habitats
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              ⚠️ Conservation Challenges
            </h4>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Bird populations can decline due to threats at any stage of their annual cycle. A species 
              might have excellent breeding habitat in Illinois but face deforestation on its wintering 
              grounds or lack of stopover sites during migration. Effective conservation requires 
              international cooperation and habitat protection across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Southern Wings Section */}
      <section id="southern-wings" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiGlobe className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Southern Wings
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              About Southern Wings
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Southern Wings is a partnership between U.S. bird conservation organizations and Latin American 
              conservation groups working to protect migratory birds on their wintering grounds. The program 
              recognizes that protecting birds in the U.S. is not enough—we must also conserve the tropical 
              and subtropical habitats where they spend the non-breeding season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 p-6 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                How It Works
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>U.S. state and local bird conservation organizations partner with groups in Latin America</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Focus on protecting habitat used by shared migratory species</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Support local conservation through funding and capacity building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Engage local communities in bird conservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Create connections between bird enthusiasts across borders</span>
                </li>
              </ul>
            </div>

            <div className="border-2 p-6 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Key Conservation Activities
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Habitat protection and restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Bird monitoring and research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Environmental education programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Sustainable agriculture and agroforestry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Community-based conservation initiatives</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              Illinois Birds Protected Through Southern Wings
            </h4>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Many Illinois breeding birds benefit from Southern Wings partnerships:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h5 className="text-xs font-semibold mb-2" style={{ color: '#2E5266' }}>Warblers</h5>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Cerulean Warbler</li>
                  <li>• Prothonotary Warbler</li>
                  <li>• Kentucky Warbler</li>
                  <li>• Worm-eating Warbler</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-semibold mb-2" style={{ color: '#2E5266' }}>Thrushes</h5>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Wood Thrush</li>
                  <li>• Veery</li>
                  <li>• Swainson's Thrush</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-semibold mb-2" style={{ color: '#2E5266' }}>Other Species</h5>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Baltimore Oriole</li>
                  <li>• Scarlet Tanager</li>
                  <li>• Rose-breasted Grosbeak</li>
                  <li>• Bobolink</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Latin America Section */}
      <section id="latin-america-work" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiMapPin className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Our Work in Latin America
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Illinois conservation organizations participate in partnerships throughout Latin America and 
            the Caribbean to protect the wintering grounds and migration routes of our shared bird species.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Mexico & Central America
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Many Illinois breeding birds winter in Mexico, Guatemala, Honduras, Nicaragua, Costa Rica, 
                and Panama. These regions provide critical habitat for dozens of species.
              </p>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Conservation Focus</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Cloud forest protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Shade-grown coffee production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Mangrove restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Tropical dry forest conservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Community-based ecotourism</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Caribbean
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                The Caribbean islands are critical stopover sites during migration and wintering areas 
                for many species, including shorebirds and waterfowl.
              </p>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Conservation Focus</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Wetland protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Coastal habitat restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Marine protected areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Invasive species management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Hurricane resilience planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                South America
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Some Illinois birds migrate as far as South America, including the Amazon basin and 
                southern grasslands.
              </p>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Conservation Focus</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Rainforest conservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Grassland protection (Bobolink)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Sustainable ranching practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Indigenous land rights support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Bird monitoring networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Key Partners
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Illinois organizations work with conservation groups throughout the Americas:
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Local Audubon societies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>National bird conservation NGOs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Community-based organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Universities and research institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Government agencies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              💡 How You Can Support Latin American Conservation
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Buy bird-friendly coffee:</strong> Support shade-grown, certified coffee that protects bird habitat</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Support international partnerships:</strong> Donate to organizations working in Latin America</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Advocate for conservation funding:</strong> Support U.S. funding for international bird conservation</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Participate in citizen science:</strong> Data from Illinois helps prioritize Latin American conservation</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Visit responsibly:</strong> Ecotourism supports local conservation efforts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Midwest Migration Network Section */}
      <section id="midwest-migration-network" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiTrendingUp className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Midwest Migration Network
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              About the Network
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              The Midwest Migration Network is a collaborative effort to protect and restore stopover 
              habitat for migratory birds across the Midwest region. Illinois is a critical component of 
              this network, providing essential resources for billions of birds during spring and fall migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 p-6 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Why Stopover Habitat Matters
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Migration is the most dangerous time in a bird's annual cycle. Birds need high-quality 
                stopover sites to rest and refuel during their journey.
              </p>
              <ul className="space-y-2 text-xs" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Birds can lose 25-50% of body weight during migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Need abundant food to rebuild energy reserves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Require safe places to rest away from predators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Must find suitable habitat at precisely the right time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Loss of stopover sites contributes to population declines</span>
                </li>
              </ul>
            </div>

            <div className="border-2 p-6 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Illinois Migration Corridors
              </h4>
              <p className="text-sm mb-3" style={{ color: '#374151' }}>
                Illinois sits at a critical junction of major North American migration routes:
              </p>
              <ul className="space-y-2 text-xs" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Mississippi Flyway:</strong> Major waterfowl and waterbird route</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Great Lakes shoreline:</strong> Concentrates landbird migrants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>River valleys:</strong> Natural migration highways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Prairie remnants:</strong> Critical for grassland species</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Urban areas:</strong> Increasingly important as natural habitat declines</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
              Network Conservation Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Habitat Protection
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Identify key stopover sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Acquire and protect land</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Create conservation easements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Work with private landowners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Habitat Restoration
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Restore wetlands and floodplains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Reconstruct prairies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Enhance forest structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Remove invasive species</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Research & Monitoring
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Track migration timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Identify high-use stopover sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Study habitat use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Assess conservation effectiveness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              🌟 Support Migration Conservation
            </h4>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Everyone can help protect migration stopover habitat:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>1.</span>
                <span><strong>Create stopover habitat at home:</strong> Plant native trees and shrubs that provide food during migration</span>
              </li>
              <li className="flex items-start gap-2">
                <span>2.</span>
                <span><strong>Reduce migration hazards:</strong> Make windows visible and turn off lights during migration</span>
              </li>
              <li className="flex items-start gap-2">
                <span>3.</span>
                <span><strong>Monitor migration:</strong> Participate in citizen science projects like eBird</span>
              </li>
              <li className="flex items-start gap-2">
                <span>4.</span>
                <span><strong>Support habitat conservation:</strong> Donate to organizations protecting stopover sites</span>
              </li>
              <li className="flex items-start gap-2">
                <span>5.</span>
                <span><strong>Advocate for birds:</strong> Support policies that protect migratory bird habitat</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              Important Illinois Stopover Sites
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Globally Important</h5>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Lake Michigan shoreline (Chicago area)</li>
                  <li>• Illinois River valley</li>
                  <li>• Mississippi River corridor</li>
                  <li>• Emiquon Preserve</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-2" style={{ color: '#2E5266' }}>Regionally Significant</h5>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Montrose Point and Magic Hedge</li>
                  <li>• Cache River wetlands</li>
                  <li>• Carlyle Lake</li>
                  <li>• Shawnee National Forest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullAnnualCycleConservationPage;
