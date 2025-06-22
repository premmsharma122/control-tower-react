// // Use Nominatim OpenStreetMap API to get lat/lng for address

// export async function geocodeAddress(address) {
//   const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('Failed to fetch geocode data');
//   }
//   const data = await response.json();

//   if (data.length === 0) {
//     throw new Error('Address not found');
//   }

//   // Return first result lat/lon as numbers
//   return {
//     lat: parseFloat(data[0].lat),
//     lng: parseFloat(data[0].lon)
//   };
// }
// src/api/geocode.js

export async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'SupplyChainTracker - Dev Testing'
    }
  });

  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error('Location not found');
  }

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon)
  };
}
