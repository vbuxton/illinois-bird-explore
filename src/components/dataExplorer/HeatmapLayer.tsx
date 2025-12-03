import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import type { ProcessedObservation } from '../../types';
import { getHeatmapData } from '../../utils/ebirdDataProcessor';

interface HeatmapLayerProps {
  observations: ProcessedObservation[];
  intensity?: number;
  radius?: number;
  blur?: number;
  visible?: boolean;
}

/**
 * Heatmap layer component for visualizing observation density
 */
const HeatmapLayer: React.FC<HeatmapLayerProps> = ({
  observations,
  intensity = 1.0,
  radius = 40,
  blur = 25,
  visible = true,
}) => {
  const map = useMap();

  useEffect(() => {
    if (!visible || observations.length === 0) {
      return;
    }

    // Get heatmap data points [lat, lng, intensity]
    const heatData = getHeatmapData(observations);

    // Create heatmap layer with smoother appearance
    const heatLayer = (L as any).heatLayer(heatData, {
      radius: radius,
      blur: blur,
      maxZoom: 18,
      minOpacity: 0.1,
      max: intensity,
      gradient: {
        0.0: 'rgba(0, 0, 255, 0)',
        0.2: 'rgba(0, 0, 255, 0.5)',
        0.4: 'rgba(0, 255, 255, 0.6)',
        0.6: 'rgba(0, 255, 0, 0.7)',
        0.8: 'rgba(255, 255, 0, 0.8)',
        1.0: 'rgba(255, 0, 0, 0.9)',
      },
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, observations, intensity, radius, blur, visible]);

  return null;
};

export default HeatmapLayer;
