/**
 * Test file to verify eBird API setup
 * Run this by importing and calling testEBirdAPI() from a component
 */

import { fetchRecentObservations, fetchHotspots, getCacheStats } from '../services/ebirdApi';
import { getEbirdCode } from '../data/ebirdSpeciesCodes';
import { processObservations, calculateDistributionStats } from '../utils/ebirdDataProcessor';

export async function testEBirdAPI() {
  console.log('🧪 Testing eBird API Setup...\n');

  try {
    // Test 1: Species code lookup
    console.log('1️⃣ Testing species code lookup...');
    const cardinalCode = getEbirdCode('Northern Cardinal');
    console.log(`   ✓ Northern Cardinal code: ${cardinalCode}\n`);

    // Test 2: Fetch observations
    console.log('2️⃣ Fetching recent Northern Cardinal observations...');
    const observations = await fetchRecentObservations(cardinalCode!, 7, 50);
    console.log(`   ✓ Found ${observations.length} observations`);
    if (observations.length > 0) {
      console.log(`   Example: ${observations[0].comName} at ${observations[0].locName}`);
      console.log(`   Date: ${observations[0].obsDt}, Count: ${observations[0].howMany}\n`);
    }

    // Test 3: Process observations
    console.log('3️⃣ Processing observation data...');
    const processed = processObservations(observations);
    console.log(`   ✓ Processed ${processed.length} observations\n`);

    // Test 4: Calculate statistics
    console.log('4️⃣ Calculating distribution statistics...');
    const stats = calculateDistributionStats(processed);
    console.log(`   ✓ Total observations: ${stats.totalObservations}`);
    console.log(`   ✓ Unique locations: ${stats.uniqueLocations}`);
    console.log(`   ✓ Date range: ${stats.dateRange.start.toLocaleDateString()} - ${stats.dateRange.end.toLocaleDateString()}`);
    if (stats.topCounties.length > 0) {
      console.log(`   ✓ Top county: ${stats.topCounties[0].county} (${stats.topCounties[0].count} obs)\n`);
    }

    // Test 5: Fetch hotspots
    console.log('5️⃣ Fetching Illinois hotspots...');
    const hotspots = await fetchHotspots();
    console.log(`   ✓ Found ${hotspots.length} hotspots`);
    if (hotspots.length > 0) {
      console.log(`   Example: ${hotspots[0].locName}`);
      console.log(`   Species all-time: ${hotspots[0].numSpeciesAllTime}\n`);
    }

    // Test 6: Cache statistics
    console.log('6️⃣ Checking cache...');
    const cacheStats = getCacheStats();
    console.log(`   ✓ Cache size: ${cacheStats.size} entries`);
    console.log(`   ✓ Cache duration: ${cacheStats.duration / 60000} minutes\n`);

    console.log('✅ All tests passed! eBird API is configured correctly.\n');
    
    return {
      success: true,
      observations: processed,
      stats,
      hotspots,
    };
  } catch (error) {
    console.error('❌ Test failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
