// // src/api/route.js

// import { ORS_API_KEY } from '../config';

// export async function fetchRoute(start, end) {
//   const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';

//   const body = {
//     coordinates: [
//       [start.lng, start.lat],
//       [end.lng, end.lat]
//     ]
//   };

//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Authorization': ORS_API_KEY,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   });

//   if (!res.ok) throw new Error('Failed to fetch route');

//   const data = await res.json();

//   return {
//     geometry: data,
//     distance: data.features[0].properties.summary.distance,
//     duration: data.features[0].properties.summary.duration
//   };
// }
// src/api/route.js

import { ORS_API_KEY } from '../config';

/**
 * Fetches driving route from OpenRouteService API between start and end coordinates.
 * @param {Object} start - { lat: number, lng: number } start coordinates
 * @param {Object} end - { lat: number, lng: number } end coordinates
 * @returns {Promise<Object>} - { geometry, distance (meters), duration (seconds) }
 */
export async function fetchRoute(start, end) {
  const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';

  const body = {
    coordinates: [
      [start.lng, start.lat],
      [end.lng, end.lat]
    ]
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': ORS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error('Failed to fetch route');

  const data = await res.json();

  return {
    geometry: data.features[0].geometry,  // Only route geometry for easier mapping
    distance: data.features[0].properties.summary.distance,
    duration: data.features[0].properties.summary.duration
  };
}
