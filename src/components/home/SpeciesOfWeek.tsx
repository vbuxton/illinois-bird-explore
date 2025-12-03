import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockSpecies } from '../../data/mockSpecies';

interface SpeciesFeature {
  commonName: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  funFact: string;
}

const SpeciesOfWeek: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Featured species using data from mockSpecies
  const featuredSpeciesData = mockSpecies
    .filter(s => ['northern-cardinal', 'american-goldfinch', 'red-tailed-hawk'].includes(s.id));

  const featuredSpecies: SpeciesFeature[] = [
    {
      commonName: featuredSpeciesData.find(s => s.id === 'american-goldfinch')?.commonName || 'American Goldfinch',
      scientificName: featuredSpeciesData.find(s => s.id === 'american-goldfinch')?.scientificName || 'Spinus tristis',
      description: featuredSpeciesData.find(s => s.id === 'american-goldfinch')?.description.slice(0, 150) + '...' || 'A bright yellow songbird that visits feeders year-round.',
      imageUrl: featuredSpeciesData.find(s => s.id === 'american-goldfinch')?.images[0]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/American_Goldfinch_male_breeding_plumage.jpg/800px-American_Goldfinch_male_breeding_plumage.jpg',
      funFact: featuredSpeciesData.find(s => s.id === 'american-goldfinch')?.funFacts[0] || 'One of the latest nesting birds in North America.',
    },
    {
      commonName: featuredSpeciesData.find(s => s.id === 'northern-cardinal')?.commonName || 'Northern Cardinal',
      scientificName: featuredSpeciesData.find(s => s.id === 'northern-cardinal')?.scientificName || 'Cardinalis cardinalis',
      description: featuredSpeciesData.find(s => s.id === 'northern-cardinal')?.description.slice(0, 150) + '...' || 'Illinois\' state bird, recognizable by its vibrant red plumage.',
      imageUrl: featuredSpeciesData.find(s => s.id === 'northern-cardinal')?.images[0]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cardinal.jpg/800px-Cardinal.jpg',
      funFact: featuredSpeciesData.find(s => s.id === 'northern-cardinal')?.funFacts[0] || 'Both male and female cardinals sing, unlike most songbirds.',
    },
    {
      commonName: featuredSpeciesData.find(s => s.id === 'red-tailed-hawk')?.commonName || 'Red-tailed Hawk',
      scientificName: featuredSpeciesData.find(s => s.id === 'red-tailed-hawk')?.scientificName || 'Buteo jamaicensis',
      description: featuredSpeciesData.find(s => s.id === 'red-tailed-hawk')?.description.slice(0, 150) + '...' || 'One of the most common hawks in North America.',
      imageUrl: featuredSpeciesData.find(s => s.id === 'red-tailed-hawk')?.images[0]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Red-tailed_Hawk_Buteo_jamaicensis_Full_Body_1880px.jpg/800px-Red-tailed_Hawk_Buteo_jamaicensis_Full_Body_1880px.jpg',
      funFact: featuredSpeciesData.find(s => s.id === 'red-tailed-hawk')?.funFacts[0] || 'Their iconic scream is often used in movies for any large bird, even eagles!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredSpecies.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [featuredSpecies.length]);

  const currentSpecies = featuredSpecies[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#2E5266' }}>
            Species of the Week
          </h2>
          <p style={{ color: '#6B7280' }}>
            Learn about a featured Illinois bird species
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-green/10 to-primary-blue/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={currentSpecies.imageUrl}
                  alt={currentSpecies.commonName}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2E5266' }}>
                  {currentSpecies.commonName}
                </h3>
                <p className="italic mb-4" style={{ color: '#6B7280' }}>
                  {currentSpecies.scientificName}
                </p>
                <p className="mb-4" style={{ color: '#374151' }}>
                  {currentSpecies.description}
                </p>
                <div className="p-4 mb-6" style={{ 
                  backgroundColor: 'rgba(217, 131, 58, 0.1)', 
                  borderLeft: '4px solid #D9833A' 
                }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>
                    Did you know?
                  </p>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    {currentSpecies.funFact}
                  </p>
                </div>
                <Link
                  to="/species"
                  className="inline-block text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  style={{ backgroundColor: '#4A7C59' }}
                >
                  View All Species
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredSpecies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? '#4A7C59' : '#D1D5DB',
                  transition: 'background-color 0.3s'
                }}
                aria-label={`Go to species ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeciesOfWeek;
