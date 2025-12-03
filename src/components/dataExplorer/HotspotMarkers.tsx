import React, { useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { EBirdHotspot } from '../../types';
import { format } from 'date-fns';

interface HotspotMarkersProps {
  hotspots: EBirdHotspot[];
  minSpecies?: number;
}

/**
 * Create custom hotspot icon
 */
const createHotspotIcon = () => {
  return L.divIcon({
    className: 'custom-hotspot-marker',
    html: `
      <div style="
        background-color: #dc2626;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span style="color: white; font-size: 14px; font-weight: bold;">🔥</span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
};

/**
 * Component to display eBird hotspots on the map
 */
const HotspotMarkers: React.FC<HotspotMarkersProps> = ({
  hotspots,
  minSpecies = 0,
}) => {
  const icon = useMemo(() => createHotspotIcon(), []);

  // Filter hotspots by minimum species count
  const filteredHotspots = useMemo(() => {
    return hotspots.filter(h => h.numSpeciesAllTime >= minSpecies);
  }, [hotspots, minSpecies]);

  if (filteredHotspots.length === 0) {
    return null;
  }

  return (
    <>
      {filteredHotspots.map((hotspot) => (
        <Marker
          key={hotspot.locId}
          position={[hotspot.lat, hotspot.lng]}
          icon={icon}
        >
          <Popup>
            <div className="min-w-[220px]">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {hotspot.locName}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    eBird Hotspot
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 border border-blue-200 rounded p-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Species (All-time):</span>
                    <span className="ml-2 text-2xl font-bold text-primary-blue">
                      {hotspot.numSpeciesAllTime}
                    </span>
                  </p>
                </div>
                
                <p className="text-gray-700">
                  <span className="font-semibold">Location ID:</span>{' '}
                  <span className="font-mono text-xs">{hotspot.locId}</span>
                </p>
                
                {hotspot.latestObsDt && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Latest Observation:</span>{' '}
                    {format(new Date(hotspot.latestObsDt), 'MMM d, yyyy')}
                  </p>
                )}
                
                <p className="text-gray-700">
                  <span className="font-semibold">Coordinates:</span>{' '}
                  <span className="text-xs">
                    {hotspot.lat.toFixed(4)}, {hotspot.lng.toFixed(4)}
                  </span>
                </p>
              </div>
              
              <div className="mt-3 pt-3 border-t space-y-2">
                <a
                  href={`https://ebird.org/hotspot/${hotspot.locId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary-blue text-white py-2 px-3 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  View on eBird →
                </a>
                
                <p className="text-xs text-gray-500 text-center">
                  Hotspots are top birding locations with regular activity
                </p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default HotspotMarkers;
