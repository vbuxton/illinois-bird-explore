import React from 'react';
import { Link } from 'react-router-dom';
import type { Species } from '../../types';

interface SpeciesCardProps {
  species: Species;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Least Concern':
        return '#22C55E'; // green
      case 'Near Threatened':
        return '#EAB308'; // yellow
      case 'Vulnerable':
        return '#F97316'; // orange
      case 'Endangered':
        return '#EF4444'; // red
      case 'Critically Endangered':
        return '#991B1B'; // dark red
      default:
        return '#6B7280'; // gray
    }
  };

  const featuredImage = species.images.find(img => img.isFeatured) || species.images[0];

  return (
    <Link
      to={`/species/${species.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-200">
        {featuredImage ? (
          <img
            src={featuredImage.url}
            alt={species.commonName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#E5E7EB' }}>
            <span style={{ color: '#9CA3AF' }}>No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1" style={{ color: '#1F2937' }}>
          {species.commonName}
        </h3>
        <p className="text-sm italic mb-3" style={{ color: '#6B7280' }}>
          {species.scientificName}
        </p>

        {/* Family */}
        <div className="text-xs mb-2" style={{ color: '#9CA3AF' }}>
          {species.family}
        </div>

        {/* Conservation Status Badge */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold px-2 py-1 rounded"
            style={{
              backgroundColor: `${getStatusColor(species.conservationStatus)}20`,
              color: getStatusColor(species.conservationStatus),
            }}
          >
            {species.conservationStatus}
          </span>

          {/* Migration Type */}
          <span className="text-xs font-medium" style={{ color: '#6B7280' }}>
            {species.migration.type}
          </span>
        </div>

        {/* Habitat tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {species.habitat.slice(0, 2).map((h, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded"
              style={{ backgroundColor: '#F3F4F6', color: '#4B5563' }}
            >
              {h}
            </span>
          ))}
          {species.habitat.length > 2 && (
            <span className="text-xs px-2 py-1" style={{ color: '#9CA3AF' }}>
              +{species.habitat.length - 2}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SpeciesCard;
