import React from 'react';
import { FiAlertCircle, FiSun, FiHome } from 'react-icons/fi';

const ConservationIssuesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Conservation Issues
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Illinois birds face numerous threats to their survival. Understanding and addressing these issues 
          is critical for bird conservation.
        </p>
      </div>

      {/* Lights Out Section */}
      <section id="lights-out" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiSun className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Lights Out
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              The Problem
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Artificial light at night disrupts the natural behaviors of migratory birds. During migration, 
              billions of birds fly at night, using stars and moonlight for navigation. City lights can 
              disorient them, causing them to circle buildings for hours, depleting energy reserves they need 
              to complete their journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Impact on Birds</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• Disorientation during migration</li>
                  <li>• Energy depletion from circling</li>
                  <li>• Increased collision risk with buildings</li>
                  <li>• Disruption of feeding and rest behaviors</li>
                  <li>• Up to 1 billion birds killed annually in North America</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Peak Risk Times</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• <strong>Spring:</strong> Late March through early June</li>
                  <li>• <strong>Fall:</strong> Late August through early November</li>
                  <li>• Highest risk on foggy or overcast nights</li>
                  <li>• Peak migration occurs between midnight and dawn</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
              Lights Out Programs
            </h3>
            <p className="text-base mb-4" style={{ color: '#6B7280' }}>
              Lights Out programs encourage building owners and residents to turn off unnecessary lights 
              during migration periods. These simple actions save energy, reduce costs, and save bird lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  For Homeowners
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Turn off exterior decorative lighting at night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Close blinds and curtains at night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Use motion sensors for security lights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Turn off lights in unoccupied rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Use warm-colored (amber/red) lights instead of white/blue</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  For Businesses & Buildings
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Turn off lobby and atrium lights after closing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Dim or turn off architectural lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Install automated lighting controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Use task lighting instead of overhead lights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span>Join local Lights Out programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              💡 Illinois Lights Out Programs
            </h4>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Several Illinois cities participate in Lights Out programs during spring and fall migration. 
              Chicago has one of the most successful programs in North America, with many buildings turning 
              off lights to protect migrating birds.
            </p>
            <ul className="space-y-1 text-sm" style={{ color: '#374151' }}>
              <li>• <strong>Chicago Lights Out:</strong> Active participant since 1995</li>
              <li>• <strong>Program Dates:</strong> March 15 - May 31 (Spring), August 15 - November 15 (Fall)</li>
              <li>• Contact your local Audubon chapter to start a program in your community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bird Collisions Section */}
      <section id="bird-collisions" className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiHome className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Bird Collisions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              The Scope of the Problem
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Window collisions are one of the leading causes of bird mortality in North America, killing 
              an estimated 365 million to 1 billion birds annually in the United States alone. Birds cannot 
              perceive glass as a barrier and collide when they see reflections of sky, trees, or habitat, 
              or try to reach habitat visible through windows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Scale</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• 365M-1B birds/year in US</li>
                  <li>• 44-54% of collisions are fatal</li>
                  <li>• Affects over 300 species</li>
                  <li>• Year-round threat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Risk Factors</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• Large windows</li>
                  <li>• Reflective glass</li>
                  <li>• Corner windows</li>
                  <li>• Near bird habitat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Most Vulnerable</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• Warblers</li>
                  <li>• Thrushes</li>
                  <li>• Sparrows</li>
                  <li>• Woodpeckers</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
              Why Birds Hit Windows
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Daytime Collisions</h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Most common cause: birds see reflections of sky, clouds, or trees in the glass and 
                  perceive it as habitat they can fly through.
                </p>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Mirror-like reflections of habitat</li>
                  <li>• Potted plants visible through windows</li>
                  <li>• Bird feeders near reflective windows</li>
                  <li>• Territorial birds attacking their reflection</li>
                </ul>
              </div>

              <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>Nighttime Collisions</h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  Nocturnal migrants are attracted to and disoriented by lights in buildings, leading 
                  them to collide with illuminated windows.
                </p>
                <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                  <li>• Attraction to artificial light</li>
                  <li>• Disorientation from bright lights</li>
                  <li>• Peak during migration periods</li>
                  <li>• Worse on foggy or overcast nights</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
              Solutions: Making Windows Bird-Safe
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  The 2x4 Rule
                </h4>
                <p className="text-sm mb-3" style={{ color: '#374151' }}>
                  To be effective, window treatments should follow the "2x4 rule": markers should be spaced 
                  no more than 2 inches apart horizontally or 4 inches apart vertically. This spacing prevents 
                  birds from attempting to fly through the gaps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                    External Solutions (Most Effective)
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Window films/tape:</strong> Commercial products with patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Exterior screens:</strong> Block reflections completely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Netting:</strong> Suspended a few inches from glass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Zen Curtains/Acopian BirdSavers:</strong> Paracord hung vertically</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                    Internal Solutions
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Interior screens:</strong> Light-colored and close to glass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Blinds/curtains:</strong> Keep partially closed during day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Window films:</strong> Applied to inside of glass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Tempera paint:</strong> DIY patterns on inside</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                    Architectural Solutions
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Fritted glass:</strong> Built-in ceramic patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>UV-patterned glass:</strong> Visible to birds, not humans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>Angled glass:</strong> Reflects ground instead of sky</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span><strong>External shading:</strong> Awnings, louvers, overhangs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              ⚠️ What Doesn't Work
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span><strong>Window decals (single):</strong> Birds fly between them - need to follow 2x4 rule</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span><strong>Hawk silhouettes:</strong> Ineffective and don't follow proper spacing</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span><strong>UV stickers alone:</strong> Birds can see UV but it's not always visible in all conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span><strong>Moving feeders far away:</strong> Most collisions aren't from feeders - it's reflections</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              🏠 Take Action at Home
            </h4>
            <ol className="space-y-2 text-sm list-decimal list-inside" style={{ color: '#374151' }}>
              <li>Identify problem windows by looking for bird strikes or checking reflections from outside</li>
              <li>Apply treatment to the exterior surface when possible (most effective)</li>
              <li>Follow the 2x4 spacing rule for any markers or patterns</li>
              <li>Move bird feeders either very close (less than 3 feet) or far (more than 30 feet) from windows</li>
              <li>Turn off interior lights or close curtains at night during migration</li>
              <li>Report bird strikes to local monitoring programs to help track the issue</li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              Resources for Bird-Safe Buildings
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>American Bird Conservancy:</strong> ABC Bird-Friendly Materials database and Bird-Safe Building Guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Bird-Safe Buildings Act:</strong> Federal legislation requiring bird-safe design for public buildings</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>LEED Bird Collision Deterrence Credit:</strong> Green building certification recognizes bird-safe design</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Local Audubon chapters:</strong> Many offer window collision monitoring and education programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConservationIssuesPage;
