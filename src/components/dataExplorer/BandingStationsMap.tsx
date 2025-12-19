import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface BandingStation {
  name: string;
  lat: number;
  lng: number;
  organization: string;
  type: string;
  established: number;
}

const bandingStations: BandingStation[] = [
  {
    name: 'Big Marsh MAPS Station',
    lat: 41.687950,
    lng: -87.565905,
    organization: 'Chicago Ornithological Society',
    type: 'MAPS',
    established: 2020
  },
  {
    name: 'Jubilee Farm MMN',
    lat: 39.77500,
    lng: -89.77500,
    organization: 'Lincoln Land Association of Bird Banders',
    type: 'Migratory Monitoring',
    established: 2021
  },
  {
    name: 'Springfield MAPS Station',
    lat: 39.75833,
    lng: -89.60833,
    organization: 'Lincoln Land Association of Bird Banders',
    type: 'MAPS',
    established: 2015
  },
  {
    name: 'Sand Bluff Bird Observatory',
    lat: 42.483812,
    lng: -89.246559,
    organization: 'Sand Bluff Bird Observatory Inc.',
    type: 'Migratory Monitoring',
    established: 1967
  },
  {
    name: 'Phillips Tract Banding Station',
    lat: 40.131101,
    lng: -88.146895,
    organization: 'University of Illinois at Urbana-Champaign',
    type: 'Migratory Monitoring',
    established: 2019
  },
  {
    name: 'Illinois Raptor Center',
    lat: 39.823056,
    lng: -89.0525,
    organization: 'Millikin University and Illinois Raptor Center',
    type: 'Species Specific',
    established: 2022
  }
];

const BandingStationsMap: React.FC = () => {
  // Center of Illinois
  const centerLat = 40.0;
  const centerLng = -89.0;

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bandingStations.map((station, index) => (
          <Marker key={index} position={[station.lat, station.lng]}>
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '8px', color: '#2E5266' }}>
                  {station.name}
                </h3>
                <p style={{ fontSize: '12px', marginBottom: '4px' }}>
                  <strong>Organization:</strong> {station.organization}
                </p>
                <p style={{ fontSize: '12px', marginBottom: '4px' }}>
                  <strong>Type:</strong> {station.type}
                </p>
                <p style={{ fontSize: '12px', marginBottom: '4px' }}>
                  <strong>Established:</strong> {station.established}
                </p>
                <p style={{ fontSize: '12px', color: '#6B7280' }}>
                  📍 {station.lat.toFixed(6)}, {station.lng.toFixed(6)}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BandingStationsMap;
