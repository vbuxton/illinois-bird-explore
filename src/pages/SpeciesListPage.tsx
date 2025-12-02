import React, { useState, useMemo } from 'react';
import SpeciesFilter from '../components/species/SpeciesFilter';
import SpeciesCard from '../components/species/SpeciesCard';
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
          Explore {mockSpecies.length} bird species documented in Illinois. Use the search and
          filters below to find specific species by name, family, habitat, or conservation status.
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

      {/* Species Grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpecies.map((species) => (
            <SpeciesCard key={species.id} species={species} />
          ))}
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
