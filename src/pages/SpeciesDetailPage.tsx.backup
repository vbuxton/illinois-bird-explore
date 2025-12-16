import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiMapPin, FiCalendar, FiInfo } from 'react-icons/fi';
import { mockSpecies } from '../data/mockSpecies';

type TabType = 'overview' | 'identification' | 'habitat' | 'conservation';

const SpeciesDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const species = mockSpecies.find((s) => s.id === id);

  if (!species) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#2E5266' }}>
            Species Not Found
          </h1>
          <Link to="/species" style={{ color: '#4A7C59' }} className="font-semibold">
            ← Back to Species List
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = species.images.find((img) => img.isFeatured) || species.images[0];

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <FiInfo /> },
    { id: 'identification', label: 'Identification', icon: <FiMapPin /> },
    { id: 'habitat', label: 'Habitat & Behavior', icon: <FiMapPin /> },
    { id: 'conservation', label: 'Conservation', icon: <FiCalendar /> },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Least Concern':
        return '#22C55E';
      case 'Near Threatened':
        return '#EAB308';
      case 'Vulnerable':
        return '#F97316';
      case 'Endangered':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/species"
        className="inline-flex items-center gap-2 mb-6 font-semibold"
        style={{ color: '#4A7C59' }}
      >
        <FiChevronLeft /> Back to Species List
      </Link>

      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          {/* Image */}
          <div className="md:w-1/2">
            {featuredImage ? (
              <img
                src={featuredImage.url}
                alt={species.commonName}
                className="w-full h-96 object-cover"
              />
            ) : (
              <div
                className="w-full h-96 flex items-center justify-center"
                style={{ backgroundColor: '#E5E7EB' }}
              >
                <span style={{ color: '#9CA3AF' }}>No image available</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#2E5266' }}>
              {species.commonName}
            </h1>
            <p className="text-xl italic mb-4" style={{ color: '#6B7280' }}>
              {species.scientificName}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: '#374151' }}>
                  Family:
                </span>
                <span style={{ color: '#6B7280' }}>{species.family}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: '#374151' }}>
                  Order:
                </span>
                <span style={{ color: '#6B7280' }}>{species.order}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: '#374151' }}>
                  Migration:
                </span>
                <span style={{ color: '#6B7280' }}>{species.migration.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: '#374151' }}>
                  Conservation Status:
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${getStatusColor(species.conservationStatus)}20`,
                    color: getStatusColor(species.conservationStatus),
                  }}
                >
                  {species.conservationStatus}
                </span>
              </div>
            </div>

            <p style={{ color: '#374151' }}>{species.description}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tab Headers */}
        <div className="border-b" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap transition-colors"
                style={{
                  color: activeTab === tab.id ? '#4A7C59' : '#6B7280',
                  borderBottom: activeTab === tab.id ? '3px solid #4A7C59' : '3px solid transparent',
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  About This Species
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                  {species.description}
                </p>
              </div>

              {species.funFacts && species.funFacts.length > 0 && (
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', borderLeft: '4px solid #4A7C59' }}
                >
                  <h4 className="font-bold mb-3" style={{ color: '#2E5266' }}>
                    Did You Know?
                  </h4>
                  <ul className="space-y-2">
                    {species.funFacts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: '#4A7C59' }}>•</span>
                        <span style={{ color: '#374151' }}>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Nesting Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Nest Type: </span>
                    <span style={{ color: '#6B7280' }}>{species.nesting.nestType}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Egg Count: </span>
                    <span style={{ color: '#6B7280' }}>{species.nesting.eggCount}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Incubation: </span>
                    <span style={{ color: '#6B7280' }}>{species.nesting.incubationPeriod}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Fledging: </span>
                    <span style={{ color: '#6B7280' }}>{species.nesting.fledgingPeriod}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'identification' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Field Identification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#374151' }}>Size</h4>
                    <p style={{ color: '#6B7280' }}>{species.identification.size}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#374151' }}>Wingspan</h4>
                    <p style={{ color: '#6B7280' }}>{species.identification.wingspan}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Key Field Marks
                </h4>
                <ul className="space-y-2">
                  {species.identification.fieldMarks.map((mark, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#4A7C59' }}>✓</span>
                      <span style={{ color: '#374151' }}>{mark}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Similar Species
                </h4>
                <p style={{ color: '#6B7280' }}>
                  {species.identification.similarSpecies.join(', ')}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Vocalizations
                </h4>
                <p style={{ color: '#374151' }}>{species.identification.vocalizations}</p>
              </div>
            </div>
          )}

          {activeTab === 'habitat' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Habitat Preferences
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {species.habitat.map((h, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg font-medium"
                      style={{ backgroundColor: '#F3F4F6', color: '#374151' }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Diet
                </h4>
                <div className="flex flex-wrap gap-2">
                  {species.diet.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded"
                      style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
                  Migration Pattern
                </h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold" style={{ color: '#374151' }}>Type: </span>
                    <span style={{ color: '#6B7280' }}>{species.migration.type}</span>
                  </p>
                  {species.migration.springArrival && (
                    <p>
                      <span className="font-semibold" style={{ color: '#374151' }}>Spring Arrival: </span>
                      <span style={{ color: '#6B7280' }}>{species.migration.springArrival}</span>
                    </p>
                  )}
                  {species.migration.fallDeparture && (
                    <p>
                      <span className="font-semibold" style={{ color: '#374151' }}>Fall Departure: </span>
                      <span style={{ color: '#6B7280' }}>{species.migration.fallDeparture}</span>
                    </p>
                  )}
                  {species.migration.winteringRange && (
                    <p>
                      <span className="font-semibold" style={{ color: '#374151' }}>Wintering Range: </span>
                      <span style={{ color: '#6B7280' }}>{species.migration.winteringRange}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'conservation' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Conservation Status
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-4 py-2 rounded-lg text-lg font-bold"
                    style={{
                      backgroundColor: `${getStatusColor(species.conservationStatus)}20`,
                      color: getStatusColor(species.conservationStatus),
                    }}
                  >
                    {species.conservationStatus}
                  </span>
                </div>
                <p style={{ color: '#374151' }}>
                  The {species.commonName} is currently listed as {species.conservationStatus} by the IUCN Red List.
                  {species.conservationStatus === 'Least Concern' && (
                    ' This species has a large range and population, with no immediate threats to its survival.'
                  )}
                </p>
              </div>

              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: '#F3F4F6' }}
              >
                <h4 className="font-bold mb-3" style={{ color: '#2E5266' }}>
                  How You Can Help
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>•</span>
                    <span style={{ color: '#374151' }}>
                      Provide appropriate native plants in your yard for food and shelter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>•</span>
                    <span style={{ color: '#374151' }}>
                      Keep cats indoors to protect birds from predation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>•</span>
                    <span style={{ color: '#374151' }}>
                      Participate in citizen science programs like eBird
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#4A7C59' }}>•</span>
                    <span style={{ color: '#374151' }}>
                      Support conservation organizations working to protect bird habitats
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeciesDetailPage;
