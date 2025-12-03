import React, { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

interface SpeciesSelectorProps {
  species: string[];
  selectedSpecies: string | null;
  onSelectSpecies: (species: string) => void;
}

const SpeciesSelector: React.FC<SpeciesSelectorProps> = ({
  species,
  selectedSpecies,
  onSelectSpecies,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecies = searchTerm
    ? species.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    : species;

  const handleSelect = (speciesName: string) => {
    onSelectSpecies(speciesName);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Species
      </label>
      
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
      >
        <span className={selectedSpecies ? 'text-gray-900 font-medium' : 'text-gray-500'}>
          {selectedSpecies || 'Choose a species...'}
        </span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-hidden">
            {/* Search Box */}
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search species..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* Species List */}
            <div className="overflow-y-auto max-h-80">
              {filteredSpecies.length > 0 ? (
                filteredSpecies.map((speciesName) => (
                  <button
                    key={speciesName}
                    onClick={() => handleSelect(speciesName)}
                    className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors ${
                      selectedSpecies === speciesName
                        ? 'bg-blue-100 text-primary-blue font-medium'
                        : 'text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{speciesName}</span>
                      {selectedSpecies === speciesName && (
                        <span className="text-primary-blue">✓</span>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  No species found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SpeciesSelector;
