import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

interface SpeciesFilterProps {
  onSearchChange: (search: string) => void;
  onFamilyChange: (family: string) => void;
  onHabitatChange: (habitat: string) => void;
  onMigrationChange: (migration: string) => void;
  onStatusChange: (status: string) => void;
}

const SpeciesFilter: React.FC<SpeciesFilterProps> = ({
  onSearchChange,
  onFamilyChange,
  onHabitatChange,
  onMigrationChange,
  onStatusChange,
}) => {
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const families = ['All Families', 'Cardinalidae', 'Fringillidae', 'Accipitridae', 'Corvidae', 'Turdidae', 'Columbidae', 'Trochilidae', 'Picidae'];
  const habitats = ['All Habitats', 'Woodland edges', 'Suburban areas', 'Open woodlands', 'Fields', 'Gardens'];
  const migrationTypes = ['All Types', 'Resident', 'Migrant', 'Partial Migrant'];
  const statuses = ['All Statuses', 'Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered'];

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#9CA3AF' }} size={20} />
          <input
            type="text"
            placeholder="Search by common or scientific name..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg"
            style={{ borderColor: '#E5E7EB', color: '#1F2937' }}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: '#4A7C59', color: 'white' }}
        >
          <FiFilter size={20} />
          Filters
        </button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Family Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>
                Family
              </label>
              <select
                onChange={(e) => onFamilyChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{ borderColor: '#E5E7EB', color: '#1F2937' }}
              >
                {families.map((family) => (
                  <option key={family} value={family === 'All Families' ? '' : family}>
                    {family}
                  </option>
                ))}
              </select>
            </div>

            {/* Habitat Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>
                Habitat
              </label>
              <select
                onChange={(e) => onHabitatChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{ borderColor: '#E5E7EB', color: '#1F2937' }}
              >
                {habitats.map((habitat) => (
                  <option key={habitat} value={habitat === 'All Habitats' ? '' : habitat}>
                    {habitat}
                  </option>
                ))}
              </select>
            </div>

            {/* Migration Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>
                Migration
              </label>
              <select
                onChange={(e) => onMigrationChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{ borderColor: '#E5E7EB', color: '#1F2937' }}
              >
                {migrationTypes.map((type) => (
                  <option key={type} value={type === 'All Types' ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Conservation Status Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>
                Conservation Status
              </label>
              <select
                onChange={(e) => onStatusChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{ borderColor: '#E5E7EB', color: '#1F2937' }}
              >
                {statuses.map((status) => (
                  <option key={status} value={status === 'All Statuses' ? '' : status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeciesFilter;
