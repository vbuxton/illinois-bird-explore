import React, { useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import { ILLINOIS_BOUNDS } from '../../data/ebirdSpeciesCodes';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface DistributionMapProps {
  children?: React.ReactNode;
  center?: [number, number];
  zoom?: number;
}

/**
 * Component to set map bounds to Illinois
 */
const SetBounds: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      [ILLINOIS_BOUNDS.south, ILLINOIS_BOUNDS.west],
      [ILLINOIS_BOUNDS.north, ILLINOIS_BOUNDS.east]
    );
    map.fitBounds(bounds);
  }, [map]);

  return null;
};

/**
 * Component to add Illinois state boundary
 */
const IllinoisBoundary: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Create a rectangle representing Illinois boundaries
    const bounds = L.latLngBounds(
      [ILLINOIS_BOUNDS.south, ILLINOIS_BOUNDS.west],
      [ILLINOIS_BOUNDS.north, ILLINOIS_BOUNDS.east]
    );

    const rectangle = L.rectangle(bounds, {
      color: '#2563eb',
      weight: 2,
      fillOpacity: 0,
      interactive: false,
    }).addTo(map);

    return () => {
      map.removeLayer(rectangle);
    };
  }, [map]);

  return null;
};

/**
 * Base map component for displaying bird distribution data
 */
const DistributionMap: React.FC<DistributionMapProps> = ({
  children,
  center = ILLINOIS_BOUNDS.center,
  zoom = 7,
}) => {
  return (
    <div className="relative w-full h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full"
        zoomControl={false}
        scrollWheelZoom={true}
      >
        {/* Base Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Alternative: Satellite Layer (uncomment to use) */}
        {/* <TileLayer
          attribution='Tiles &copy; Esri'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        /> */}

        {/* Illinois Boundary */}
        <IllinoisBoundary />

        {/* Set initial bounds */}
        <SetBounds />

        {/* Zoom Control (positioned bottom-right) */}
        <ZoomControl position="bottomright" />

        {/* Child components (markers, heatmaps, etc.) */}
        {children}
      </MapContainer>

      {/* Attribution overlay */}
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-3 py-1 rounded text-xs text-gray-600 shadow-sm z-[1000] pointer-events-none">
        Data: <a href="https://ebird.org" target="_blank" rel="noopener noreferrer" className="text-primary-blue underline pointer-events-auto">eBird</a>
      </div>
    </div>
  );
};

export default DistributionMap;
