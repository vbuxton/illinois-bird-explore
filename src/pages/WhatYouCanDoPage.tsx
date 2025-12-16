import React from 'react';
import { FiHome, FiDollarSign, FiTrendingDown, FiExternalLink } from 'react-icons/fi';

const WhatYouCanDoPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          What You Can Do for Birds
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Everyone can make a difference for bird conservation. Here are practical actions you can take 
          to help protect Illinois birds and their habitats.
        </p>
      </div>

      {/* Plant Native Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🌿</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Plant Native
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Native plants are essential for supporting healthy bird populations. They provide food through seeds, 
            berries, and nectar, while also attracting the insects that many birds need to raise their young. 
            Native plants are adapted to local conditions and require less water and maintenance than non-native species.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Why Native Plants Matter
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Support 10-50x more caterpillars than non-native plants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Provide seasonal food sources throughout the year</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Create nesting sites and cover for birds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Require less water and chemical inputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span>Help preserve local biodiversity</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Top Native Plants for Illinois Birds
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>✓</span>
                  <span><strong>Oak trees</strong> - Support 500+ caterpillar species</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>✓</span>
                  <span><strong>Serviceberry</strong> - Early berries for migrants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>✓</span>
                  <span><strong>Elderberry</strong> - Berries loved by 40+ species</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>✓</span>
                  <span><strong>Native sunflowers</strong> - Seeds for winter birds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>✓</span>
                  <span><strong>Goldenrod</strong> - Late-season insects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              🌱 Getting Started
            </h4>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Start small by replacing a few non-native plants each year. Focus on plants that provide 
              food at different seasons to support birds year-round.
            </p>
            <a
              href="https://www.audubon.org/native-plants"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2"
              style={{ color: '#4A7C59' }}
            >
              Find Native Plants for Your Area <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* Habitat Enhancement Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiHome className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Habitat Enhancement
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Beyond planting natives, there are many ways to make your property more bird-friendly and create 
            quality habitat that supports breeding, migration, and overwintering birds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                Provide Water
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Birds need water year-round for drinking and bathing. Add a birdbath, small pond, or water feature.
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Keep water fresh and clean</li>
                <li>• Add a dripper or fountain</li>
                <li>• Provide shallow edges</li>
                <li>• Maintain in winter</li>
              </ul>
            </div>

            <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                Create Layers
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Plant trees, shrubs, and groundcover to create vertical structure that different species need.
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Canopy trees for warblers</li>
                <li>• Shrubs for thrushes</li>
                <li>• Groundcover for sparrows</li>
                <li>• Snags for woodpeckers</li>
              </ul>
            </div>

            <div className="border-2 p-5 rounded-lg" style={{ borderColor: '#4A7C59' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                Reduce Lawn
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                Convert lawn areas to native gardens, meadows, or woodland edges for better bird habitat.
              </p>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Start with small areas</li>
                <li>• Plant native groundcovers</li>
                <li>• Create prairie patches</li>
                <li>• Leave leaf litter</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Reduce Hazards
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Make windows visible with screens, decals, or bird tape</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Keep cats indoors or use catios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Reduce or eliminate pesticide use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Turn off unnecessary outdoor lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                Support Natural Processes
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Leave leaf litter for ground-foraging birds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Keep dead branches (snags) when safe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Let native plants go to seed in fall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Avoid fall "cleanup" until spring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Incentive Programs Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiDollarSign className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Links to Incentive Programs
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
            Landowners can access financial and technical assistance for creating and maintaining bird habitat 
            through various federal, state, and private programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Conservation Reserve Program (CRP)
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                USDA program providing annual rental payments to farmers who remove environmentally sensitive 
                land from agricultural production and plant species that improve environmental health.
              </p>
              <a
                href="https://www.fsa.usda.gov/programs-and-services/conservation-programs/conservation-reserve-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                Learn More <FiExternalLink />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Environmental Quality Incentives Program (EQIP)
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Provides financial and technical assistance to agricultural producers to plan and implement 
                conservation practices that improve soil, water, plant, animal, air and related resources.
              </p>
              <a
                href="https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                Learn More <FiExternalLink />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                SAFE - State Acres For Wildlife Enhancement
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Targets high-priority conservation areas for wildlife habitat restoration, particularly 
                for grassland birds and pollinators in Illinois.
              </p>
              <span className="text-sm font-semibold" style={{ color: '#4A7C59' }}>
                Contact local NRCS office
              </span>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                Illinois Habitat Endowment Program
              </h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>
                Provides cost-share assistance for habitat development, management, and protection projects 
                on private lands in Illinois.
              </p>
              <a
                href="https://www2.illinois.gov/dnr/conservation/wildlife/Pages/HabitatEndowment.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: '#4A7C59' }}
              >
                Learn More <FiExternalLink />
              </a>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 rounded-lg p-6" style={{ borderColor: '#4A7C59' }}>
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              💡 Getting Started with Incentive Programs
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Contact your local USDA Natural Resources Conservation Service (NRCS) office</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Work with wildlife biologists to develop a habitat management plan</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Explore multiple programs to find the best fit for your property</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Consider long-term commitments for maximum wildlife benefits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Insect Declines Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiTrendingDown className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Addressing Insect Declines
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
              The Insect Crisis
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Insect populations have declined by more than 75% in some areas over the past few decades. 
              This is catastrophic for birds, as insects are the primary food source for most species, 
              especially during breeding season when feeding nestlings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Why It Matters for Birds</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• 96% of terrestrial birds feed insects to their young</li>
                  <li>• Migrants need abundant insects to refuel</li>
                  <li>• Caterpillars are critical protein source</li>
                  <li>• Timing of insect emergence affects nesting success</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Major Causes</h4>
                <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <li>• Habitat loss and fragmentation</li>
                  <li>• Pesticide and herbicide use</li>
                  <li>• Climate change impacts</li>
                  <li>• Light pollution</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
              What You Can Do to Help Insects (and Birds)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  In Your Yard
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Plant native plants</strong> - They support 10-50x more insects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Eliminate pesticides</strong> - Even "organic" ones kill beneficial insects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Leave leaf litter</strong> - Many insects overwinter in dead leaves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Reduce mowing</strong> - Let areas go natural for insect habitat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Provide water</strong> - Insects need water sources too</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Create brush piles</strong> - Offer shelter and overwintering sites</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
                  Beyond Your Property
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Support organic agriculture</strong> - Buy organic when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Advocate for reduced pesticide use</strong> - In parks and public spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Support conservation organizations</strong> - Working to protect insect habitat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Reduce light pollution</strong> - Turn off unnecessary outdoor lights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>✓</span>
                    <span><strong>Educate others</strong> - Share the importance of insects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
              🐛 Key Takeaway
            </h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Healthy bird populations depend on abundant insect populations. By taking steps to support 
              insects in your yard and community, you're directly helping birds thrive. Native plants are 
              the foundation - they support the caterpillars, beetles, flies, and other insects that birds 
              need to survive and raise their young.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatYouCanDoPage;
