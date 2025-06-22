
// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// function MapViewer({ start, end, routeGeoJson }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!start || !end) return;

//     // Initialize map only once
//     if (!mapRef.current) {
//       mapRef.current = L.map('map').setView([start.lat, start.lng], 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors'
//       }).addTo(mapRef.current);
//     } else {
//       mapRef.current.setView([start.lat, start.lng], 13);
//       mapRef.current.eachLayer((layer) => {
//         if (layer instanceof L.Marker || layer instanceof L.Polyline) {
//           mapRef.current.removeLayer(layer);
//         }
//       });
//     }

//     // Add markers for start and end
//     L.marker([start.lat, start.lng]).addTo(mapRef.current).bindPopup('Start').openPopup();
//     L.marker([end.lat, end.lng]).addTo(mapRef.current).bindPopup('End');

//     // Draw route polyline if available
//     if (routeGeoJson) {
//       L.geoJSON(routeGeoJson, {
//         style: { color: 'blue', weight: 5 }
//       }).addTo(mapRef.current);
//     }

//   }, [start, end, routeGeoJson]);

//   return <div id="map" style={{ height: '500px', width: '100%', marginTop: '1rem' }}></div>;
// }

// export default MapViewer;
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapViewer({ start, end, routeGeoJson }) {
  useEffect(() => {
    const map = L.map('map').setView([start.lat, start.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([start.lat, start.lng]).addTo(map).bindPopup('Start').openPopup();
    L.marker([end.lat, end.lng]).addTo(map).bindPopup('End');

    if (routeGeoJson) {
      L.geoJSON(routeGeoJson, {
        style: { color: 'blue', weight: 4 }
      }).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [start, end, routeGeoJson]);

  return (
    <div id="map" style={{ height: '400px', width: '100%', marginTop: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}></div>
  );
}

export default MapViewer;
