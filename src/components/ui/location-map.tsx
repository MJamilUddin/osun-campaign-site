"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationMapProps {
  locations: string[];
  className?: string;
  height?: string;
}

// Osun State LGA coordinates (approximate center points)
const OSUN_STATE_COORDINATES: Record<string, [number, number]> = {
  'Ifedayo': [7.8833, 4.7167],
  'Ila': [8.0167, 4.8833],
  'Orolu': [7.9167, 4.4833],
  'Irepodun': [7.95, 4.45],
  'Isokan': [7.2667, 4.3167],
  'Irewole': [7.35, 4.1833],
  'Ayedade': [7.3833, 4.3],
  'Obokun': [7.7667, 4.75],
  'Oriade': [7.55, 4.8833],
  'Boluwaduro': [7.6167, 4.8167],
  'Boripe': [7.8833, 4.6833],
  'Ede North': [7.7333, 4.4333],
  'Ede South': [7.7167, 4.45],
  'Odo Otin': [7.75, 4.6833],
  'Ifelodun': [7.9, 4.7167],
  'Ejigbo': [7.8833, 4.3],
  'Egbedore': [7.75, 4.45],
  'Atakumosa East': [7.55, 4.65],
  'Atakumosa West': [7.5167, 4.6167],
  'Iwo': [7.6333, 4.1833],
  'Ayedire': [7.6, 4.15],
  'Olaoluwa': [7.7833, 4.2333],
  'Ife South': [7.4667, 4.5667],
  'Ife North': [7.5, 4.55],
  'Ilesa East': [7.6167, 4.75],
  'Ilesa West': [7.6333, 4.7167],
  'Ife East': [7.4833, 4.55],
  'Ife Central': [7.4667, 4.55],
  'Modakeke': [7.4, 4.5],
  'Osogbo': [7.7667, 4.55],
  'Olorunda': [7.7833, 4.5167]
};

export function LocationMap({ locations, className = "", height = "200px" }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Osun State
    const map = L.map(mapRef.current, {
      center: [7.6, 4.5], // Approximate center of Osun State
      zoom: 9,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Add markers for each location
    locations.forEach(location => {
      const coordinates = OSUN_STATE_COORDINATES[location];
      if (coordinates) {
        const marker = L.marker(coordinates).addTo(map);

        // Create custom popup content
        const popupContent = `
          <div class="text-sm">
            <strong class="text-primary">${location}</strong><br/>
            <span class="text-muted-foreground">Campaign Event Location</span>
          </div>
        `;
        marker.bindPopup(popupContent);

        // Auto-open popup for first location
        if (locations.indexOf(location) === 0) {
          setTimeout(() => marker.openPopup(), 100);
        }
      }
    });

    // Fit map to show all markers
    if (locations.length > 0) {
      const group = new L.FeatureGroup(
        locations
          .map(location => OSUN_STATE_COORDINATES[location])
          .filter(coords => coords !== undefined)
          .map(coords => L.marker(coords!))
      );

      if (group.getLayers().length > 0) {
        map.fitBounds(group.getBounds().pad(0.1), { animate: false });
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations]);

  return (
    <div
      ref={mapRef}
      className={`rounded-lg overflow-hidden border ${className}`}
      style={{ height: height || "200px" }}
    />
  );
}
