import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SpeciesFilter from '../components/species/SpeciesFilter';
import { mockSpecies } from '../data/mockSpecies';

const SpeciesListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [familyFilter, setFamilyFilter] = useState('');
  const [habitatFilter, setHabitatFilter] = useState('');
  const [migrationFilter, setMigrationFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Filter species based on all criteria
  const filteredSpecies = useMemo(() => {
    return mockSpecies.filter((species) => {
      const matchesSearch =
        searchTerm === '' ||
        species.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        species.scientificName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFamily = familyFilter === '' || species.family === familyFilter;

      const matchesHabitat =
        habitatFilter === '' || species.habitat.some((h) => h.includes(habitatFilter));

      const matchesMigration =
        migrationFilter === '' || species.migration.type === migrationFilter;

      const matchesStatus =
        statusFilter === '' || species.conservationStatus === statusFilter;

      return (
        matchesSearch &&
        matchesFamily &&
        matchesHabitat &&
        matchesMigration &&
        matchesStatus
      );
    });
  }, [searchTerm, familyFilter, habitatFilter, migrationFilter, statusFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Species Accounts
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Explore {mockSpecies.length} bird species documented in Illinois. Click on any species to view detailed information.
        </p>
      </div>

      {/* Filters */}
      <SpeciesFilter
        onSearchChange={setSearchTerm}
        onFamilyChange={setFamilyFilter}
        onHabitatChange={setHabitatFilter}
        onMigrationChange={setMigrationFilter}
        onStatusChange={setStatusFilter}
      />

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm font-semibold" style={{ color: '#374151' }}>
          Showing {filteredSpecies.length} of {mockSpecies.length} species
        </p>
      </div>

      {/* Species List with Thumbnails */}
      {filteredSpecies.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {filteredSpecies.map((species) => {
            const featuredImage = species.images.find(img => img.isFeatured) || species.images[0];
            
            return (
              <Link
                key={species.id}
                to={`/species/${species.id}`}
                className="flex items-center p-4 hover:bg-gray-50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-200 mr-4">
                  {featuredImage ? (
                    <img
                      src={featuredImage.url}
                      alt={species.commonName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#E5E7EB' }}>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>No image</span>
                    </div>
                  )}
                </div>

                {/* Species Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold" style={{ color: '#2E5266' }}>
                    {species.commonName}
                  </h3>
                  <p className="text-sm italic" style={{ color: '#6B7280' }}>
                    {species.scientificName}
                  </p>
                  <p className="text-sm mt-1" style={{ color: '#374151' }}>
                    {species.family}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 ml-4">
                  <svg className="w-6 h-6" style={{ color: '#4A7C59' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl font-semibold mb-2" style={{ color: '#6B7280' }}>
            No species found
          </p>
          <p style={{ color: '#9CA3AF' }}>
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default SpeciesListPage;
