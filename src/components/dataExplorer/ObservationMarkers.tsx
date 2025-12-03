import React, { useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import type { ProcessedObservation } from '../../types';
import { format } from 'date-fns';

interface ObservationMarkersProps {
  observations: ProcessedObservation[];
  showClusters?: boolean;
}

/**
 * Create custom bird icon
 */
const createBirdIcon = (color: string = '#2563eb') => {
  return L.divIcon({
    className: 'custom-bird-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span style="color: white; font-size: 12px;">🐦</span>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

/**
 * Observation marker with popup
 */
const ObservationMarker: React.FC<{ observation: ProcessedObservation }> = ({ observation }) => {
  const icon = useMemo(() => {
    // Color code by verification status
    const color = observation.verified ? '#059669' : observation.reviewed ? '#2563eb' : '#6b7280';
    return createBirdIcon(color);
  }, [observation.verified, observation.reviewed]);

  return (
    <Marker
      position={[observation.location.latitude, observation.location.longitude]}
      icon={icon}
    >
      <Popup>
        <div className="min-w-[200px]">
          <h3 className="font-bold text-lg text-gray-900 mb-2">
            {observation.commonName}
          </h3>
          
          <div className="space-y-1 text-sm">
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span>{' '}
              {observation.location.name}
            </p>
            
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span>{' '}
              {format(observation.date, 'MMM d, yyyy')}
            </p>
            
            <p className="text-gray-700">
              <span className="font-semibold">Count:</span>{' '}
              {observation.count > 0 ? observation.count : 'Present'}
            </p>
            
            {observation.observer && (
              <p className="text-gray-700">
                <span className="font-semibold">Observer:</span>{' '}
                {observation.observer}
              </p>
            )}
            
            <div className="flex gap-2 mt-2">
              {observation.verified && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  ✓ Verified
                </span>
              )}
              
              {observation.reviewed && !observation.verified && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  Reviewed
                </span>
              )}
              
              {observation.hasMedia && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                  📷 Media
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t text-xs text-gray-500">
            <a
              href={`https://ebird.org/checklist/${observation.checklistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:underline"
            >
              View on eBird →
            </a>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

/**
 * Component to display observation markers with optional clustering
 */
const ObservationMarkers: React.FC<ObservationMarkersProps> = ({
  observations,
  showClusters = true,
}) => {
  if (observations.length === 0) {
    return null;
  }

  // If clustering is disabled, render markers directly
  if (!showClusters) {
    return (
      <>
        {observations.map((obs) => (
          <ObservationMarker key={obs.id} observation={obs} />
        ))}
      </>
    );
  }

  // Render with clustering
  return (
    <MarkerClusterGroup
      chunkedLoading
      maxClusterRadius={50}
      spiderfyOnMaxZoom={true}
      showCoverageOnHover={false}
      zoomToBoundsOnClick={true}
      iconCreateFunction={(cluster: any) => {
        const count = cluster.getChildCount();
        let className = 'marker-cluster-small';

        if (count > 50) {
          className = 'marker-cluster-large';
        } else if (count > 10) {
          className = 'marker-cluster-medium';
        }

        return L.divIcon({
          html: `<div><span>${count}</span></div>`,
          className: `marker-cluster ${className}`,
          iconSize: L.point(40, 40),
        });
      }}
    >
      {observations.map((obs) => (
        <ObservationMarker key={obs.id} observation={obs} />
      ))}
    </MarkerClusterGroup>
  );
};

export default ObservationMarkers;
