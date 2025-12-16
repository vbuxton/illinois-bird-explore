import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiInfo, FiMap, FiTrendingUp, FiHeart } from 'react-icons/fi';
import { mockSpecies } from '../data/mockSpecies';
import TrendChart from '../components/dataExplorer/TrendChart';
import SummaryStatCard from '../components/dataExplorer/SummaryStatCard';
import {
  fetchTrendEstimates,
  fetchSummaryResults,
  getTrendDataForSpecies,
  getSummaryForSpecies,
} from '../utils/csvParser';
import type { TrendEstimate, SummaryResult } from '../types';

type TabType = 'overview' | 'illinois-distribution' | 'illinois-trends' | 'conservation';

const SpeciesDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [trendData, setTrendData] = useState<TrendEstimate[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryResult[]>([]);
  const [loading, setLoading] = useState(true);

  const species = mockSpecies.find((s) => s.id === id);

  // Load population trend data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [trends, summaries] = await Promise.all([
          fetchTrendEstimates(),
          fetchSummaryResults(),
        ]);
        setTrendData(trends);
        setSummaryData(summaries);
      } catch (err) {
        console.error('Error loading population trend data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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
    { id: 'illinois-distribution', label: 'Illinois Distribution', icon: <FiMap /> },
    { id: 'illinois-trends', label: 'Illinois Population Trends', icon: <FiTrendingUp /> },
    { id: 'conservation', label: 'Conservation', icon: <FiHeart /> },
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

      {/* Header Section with Image and Map Side by Side */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Species Image */}
          <div className="relative">
            {featuredImage ? (
              <img
                src={featuredImage.url}
                alt={species.commonName}
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: '#E5E7EB', minHeight: '400px' }}
              >
                <span style={{ color: '#9CA3AF' }}>No image available</span>
              </div>
            )}
            
            {/* Species Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h1 className="text-4xl font-bold text-white mb-2">
                {species.commonName}
              </h1>
              <p className="text-xl italic text-white/90">
                {species.scientificName}
              </p>
            </div>
          </div>

          {/* Right: North American Distribution Map */}
          <div className="bg-gray-100 flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
            <div className="text-center">
              <FiMap className="w-16 h-16 mx-auto mb-4" style={{ color: '#6B7280' }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#2E5266' }}>
                North American Distribution Map
              </h3>
              <p style={{ color: '#6B7280' }}>
                Distribution map integration coming soon
              </p>
              <p className="text-sm mt-2" style={{ color: '#9CA3AF' }}>
                Will display breeding, migration, and wintering ranges
              </p>
            </div>
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
            <div className="space-y-8">
              {/* Basic Info Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Family: </span>
                    <span style={{ color: '#6B7280' }}>{species.family}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Order: </span>
                    <span style={{ color: '#6B7280' }}>{species.order}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Migration: </span>
                    <span style={{ color: '#6B7280' }}>{species.migration.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold" style={{ color: '#374151' }}>Conservation Status: </span>
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
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  About This Species
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                  {species.description}
                </p>
              </div>

              {/* Identification */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Identification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#374151' }}>Size</h4>
                    <p style={{ color: '#6B7280' }}>{species.identification.size}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#374151' }}>Wingspan</h4>
                    <p style={{ color: '#6B7280' }}>{species.identification.wingspan}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                  Key Field Marks
                </h4>
                <ul className="space-y-2 mb-6">
                  {species.identification.fieldMarks.map((mark, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: '#4A7C59' }}>✓</span>
                      <span style={{ color: '#374151' }}>{mark}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                  Similar Species
                </h4>
                <p className="mb-6" style={{ color: '#6B7280' }}>
                  {species.identification.similarSpecies.join(', ')}
                </p>

                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                  Vocalizations
                </h4>
                <p style={{ color: '#374151' }}>{species.identification.vocalizations}</p>
              </div>

              {/* Habitat & Behavior */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Habitat & Behavior
                </h3>
                
                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                  Habitat Preferences
                </h4>
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

                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
                  Diet
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
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

                <h4 className="text-lg font-bold mb-3" style={{ color: '#2E5266' }}>
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

              {/* Conservation in Overview */}
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

              {/* Fun Facts */}
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
            </div>
          )}

          {activeTab === 'illinois-distribution' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2E5266' }}>
                  Illinois Distribution Data
                </h3>
                <p className="mb-8" style={{ color: '#6B7280' }}>
                  Seasonal distribution patterns for {species.commonName} in Illinois based on multiple data sources.
                </p>
              </div>

              {/* Winter */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Winter Distribution
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      Christmas Bird Count
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Distribution maps and data from Christmas Bird Count surveys (coming soon)
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      eBird Winter Data
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Citizen science observations from December-February (coming soon)
                    </p>
                  </div>
                </div>
              </div>

              {/* Spring */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Spring Distribution
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      Spring Bird Count
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Distribution from coordinated spring surveys (coming soon)
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      eBird Spring Data
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Migration and arrival patterns from March-May (coming soon)
                    </p>
                  </div>
                </div>
              </div>

              {/* Breeding */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Breeding Distribution
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      Breeding Bird Survey
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Long-term breeding distribution from BBS routes (coming soon)
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      eBird Breeding Data
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Breeding season observations June-July (coming soon)
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      Illinois Breeding Bird Atlas
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Comprehensive breeding evidence and distribution (coming soon)
                    </p>
                  </div>
                </div>
              </div>

              {/* Fall */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Fall Distribution
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2" style={{ color: '#374151' }}>
                      eBird Fall Data
                    </h5>
                    <p style={{ color: '#6B7280' }}>
                      Fall migration patterns from September-November (coming soon)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'illinois-trends' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2E5266' }}>
                  Illinois Population Trends
                </h3>
                <p className="mb-8" style={{ color: '#6B7280' }}>
                  Long-term population trends for {species.commonName} in Illinois from multiple monitoring programs.
                </p>
              </div>

              {/* Breeding Bird Survey */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Breeding Bird Survey
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4" style={{ color: '#6B7280' }}>
                    Long-term breeding season population trends from standardized roadside surveys conducted annually since 1966.
                  </p>
                  <div className="h-64 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <FiTrendingUp className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
                      <p style={{ color: '#6B7280' }}>Population trend chart coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spring Bird Count */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Spring Bird Count
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4" style={{ color: '#6B7280' }}>
                    Spring migration and breeding population trends from coordinated one-day surveys across Illinois.
                  </p>
                  
                  {loading ? (
                    <div className="h-64 bg-white rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#4A7C59' }}></div>
                        <p style={{ color: '#6B7280' }}>Loading population trend data...</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Get data for this species */}
                      {(() => {
                        const speciesTrendData = getTrendDataForSpecies(trendData, species.commonName);
                        const speciesSummary = getSummaryForSpecies(summaryData, species.commonName);
                        
                        if (speciesTrendData.length > 0 && speciesSummary) {
                          return (
                            <div className="space-y-6">
                              {/* Summary Statistics Card */}
                              <div>
                                <h5 className="font-semibold mb-3" style={{ color: '#374151' }}>
                                  Overall Population Change
                                </h5>
                                <SummaryStatCard
                                  speciesName={species.commonName}
                                  lower={speciesSummary.lower}
                                  upper={speciesSummary.upper}
                                />
                              </div>

                              {/* Trend Chart */}
                              <div>
                                <h5 className="font-semibold mb-3" style={{ color: '#374151' }}>
                                  Annual Trend Analysis
                                </h5>
                                <TrendChart data={speciesTrendData} speciesName={species.commonName} />
                              </div>

                              {/* Interpretation Guide */}
                              <div className="bg-blue-50 border-l-4 rounded-lg p-4" style={{ borderColor: '#4A7C59' }}>
                                <h5 className="font-semibold mb-2" style={{ color: '#2E5266' }}>
                                  📊 How to Interpret These Results
                                </h5>
                                <ul className="space-y-1 text-sm" style={{ color: '#374151' }}>
                                  <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span>
                                      <strong>Population Index:</strong> Values are relative to a baseline of 1.0 in 1980. 
                                      A value of 2.0 means the population has doubled; 0.5 means it has halved.
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span>
                                      <strong>Confidence Intervals:</strong> The shaded area shows the statistical uncertainty 
                                      around the trend estimate.
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span>
                                      <strong>Percent Change:</strong> Shows the overall population change over the entire study period.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className="h-64 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                              <div className="text-center">
                                <FiTrendingUp className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
                                <p style={{ color: '#6B7280' }}>No population trend data available for this species</p>
                              </div>
                            </div>
                          );
                        }
                      })()}
                    </>
                  )}
                </div>
              </div>

              {/* Christmas Bird Count */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Christmas Bird Count
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4" style={{ color: '#6B7280' }}>
                    Winter population trends from annual Christmas Bird Count surveys conducted since 1900.
                  </p>
                  <div className="h-64 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <FiTrendingUp className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
                      <p style={{ color: '#6B7280' }}>Population trend chart coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Models */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#4A7C59' }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Integrated Models
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4" style={{ color: '#6B7280' }}>
                    Comprehensive population trends combining data from Breeding Bird Survey, Spring Bird Count, and Christmas Bird Count 
                    to provide a complete picture of population changes across all seasons.
                  </p>
                  <div className="h-64 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <FiTrendingUp className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
                      <p style={{ color: '#6B7280' }}>Integrated population trend models coming soon</p>
                    </div>
                  </div>
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

              {/* Habitat Use */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Habitat Use
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4" style={{ color: '#374151' }}>
                    The {species.commonName} primarily uses the following habitats in Illinois:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {species.habitat.map((h, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg font-medium"
                        style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)', color: '#4A7C59' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Greatest Threats */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Greatest Threats
                </h3>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">⚠</span>
                      <div>
                        <h5 className="font-semibold mb-1" style={{ color: '#374151' }}>
                          Habitat Loss
                        </h5>
                        <p style={{ color: '#6B7280' }}>
                          Conversion of natural habitats to agricultural and urban development (data integration coming soon)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">⚠</span>
                      <div>
                        <h5 className="font-semibold mb-1" style={{ color: '#374151' }}>
                          Climate Change
                        </h5>
                        <p style={{ color: '#6B7280' }}>
                          Changing temperature and precipitation patterns affecting breeding and migration timing (data integration coming soon)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">⚠</span>
                      <div>
                        <h5 className="font-semibold mb-1" style={{ color: '#374151' }}>
                          Collision Hazards
                        </h5>
                        <p style={{ color: '#6B7280' }}>
                          Window strikes and collisions with structures during migration (data integration coming soon)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Percentage of Population in Illinois */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2E5266' }}>
                  Percentage of Population in Illinois
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#374151' }}>
                        Illinois Population Share
                      </p>
                      <p className="text-4xl font-bold mt-2" style={{ color: '#2E5266' }}>
                        Coming Soon
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm" style={{ color: '#6B7280' }}>
                        of North American
                      </p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>
                        breeding population
                      </p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    This metric represents the proportion of the species' total North American breeding population 
                    that occurs in Illinois, helping to understand the state's conservation importance for this species.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeciesDetailPage;
