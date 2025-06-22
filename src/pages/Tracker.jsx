
// import React, { useState } from 'react';
// import { geocodeAddress } from '../api/geocode';
// import { fetchRoute } from '../api/route';
// import MapViewer from '../components/MapViewer';
// import { dijkstra, graph } from '../utils/graph'; // 👈 local algo and graph
// import { cityCoordinates } from '../data/cityCoordinates'; // city lat/lng data

// function Tracker() {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [result, setResult] = useState(null);
//   const [startCoord, setStartCoord] = useState(null);
//   const [endCoord, setEndCoord] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleTrack = async () => {
//     if (!source || !destination) {
//       alert("Please enter both source and destination.");
//       return;
//     }

//     const src = source.trim();
//     const dest = destination.trim();

//     setLoading(true);
//     setResult(null);

//     try {
//       // Use local graph Dijkstra if nodes exist
//       if (graph[src] && graph[dest]) {
//         const { path, distance } = dijkstra(src, dest, graph);

//         if (!distance) {
//           alert("No path found in local graph data.");
//           setLoading(false);
//           return;
//         }

//         // Build GeoJSON LineString from cityCoordinates for path
//         const coordinates = path
//           .map(city => {
//             const coord = cityCoordinates[city];
//             if (!coord) {
//               console.warn(`Missing coordinates for city: ${city}`);
//             }
//             return coord ? [coord.lng, coord.lat] : null;
//           })
//           .filter(Boolean);

//         const routeGeoJson = {
//           type: "Feature",
//           geometry: {
//             type: "LineString",
//             coordinates
//           }
//         };

//         // Set start and end coordinates for map markers & centering
//         setStartCoord(cityCoordinates[path[0]]);
//         setEndCoord(cityCoordinates[path[path.length - 1]]);

//         setResult({
//           distance: `${distance} km`,
//           duration: `${((distance / 40) * 60).toFixed(1)} mins`, // assuming avg 40 km/h speed
//           routeText: path.join(" → "),
//           routeGeoJson
//         });
//       } else {
//         // Fallback: use external API for geocode and route
//         const start = await geocodeAddress(src);
//         const end = await geocodeAddress(dest);
//         setStartCoord(start);
//         setEndCoord(end);

//         const route = await fetchRoute(start, end);
//         setResult({
//           distance: (route.distance / 1000).toFixed(2) + ' km',
//           duration: (route.duration / 60).toFixed(1) + ' mins',
//           routeGeoJson: route.geometry,
//           routeText: null
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch route.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Supply Chain Tracker</h2>

//       <div style={styles.form}>
//         <input
//           type="text"
//           placeholder="Enter Source Location"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter Destination Location"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleTrack} style={styles.button}>
//           {loading ? 'Tracking...' : 'Track Path'}
//         </button>
//       </div>

//       {result && (
//         <div style={styles.result}>
//           <h3>📍 Route Summary</h3>
//           <p>📏 Distance: {result.distance}</p>
//           <p>⏱️ Duration: {result.duration}</p>
//           {result.routeText && <p>🛣️ Route: {result.routeText}</p>}
//         </div>
//       )}

//       {startCoord && endCoord && result?.routeGeoJson && (
//         <MapViewer start={startCoord} end={endCoord} routeGeoJson={result.routeGeoJson} />
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '2rem',
//     maxWidth: '700px',
//     margin: 'auto'
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem'
//   },
//   input: {
//     padding: '0.8rem',
//     fontSize: '1rem',
//     borderRadius: '6px',
//     border: '1px solid #ccc'
//   },
//   button: {
//     backgroundColor: '#10b981',
//     color: '#fff',
//     padding: '0.8rem',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   },
//   result: {
//     marginTop: '2rem',
//     backgroundColor: '#f9f9f9',
//     padding: '1rem',
//     borderRadius: '6px'
//   }
// };

// export default Tracker;
// import React, { useState } from 'react';
// import { geocodeAddress } from '../api/geocode';
// import { fetchRoute } from '../api/route';
// import MapViewer from '../components/MapViewer';
// import { dijkstra, graph } from '../utils/graph';
// import { cityCoordinates } from '../data/cityCoordinates';
// import { calculateDynamicPrice } from '../utils/pricing'; // 💰 import pricing logic

// function Tracker() {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [result, setResult] = useState(null);
//   const [startCoord, setStartCoord] = useState(null);
//   const [endCoord, setEndCoord] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleTrack = async () => {
//     if (!source || !destination) {
//       alert("Please enter both source and destination.");
//       return;
//     }

//     const src = source.trim();
//     const dest = destination.trim();

//     setLoading(true);
//     setResult(null);

//     try {
//       if (graph[src] && graph[dest]) {
//         const { path, distance } = dijkstra(src, dest, graph);

//         if (!distance) {
//           alert("No path found in local graph data.");
//           setLoading(false);
//           return;
//         }

//         const coordinates = path
//           .map(city => {
//             const coord = cityCoordinates[city];
//             if (!coord) {
//               console.warn(`Missing coordinates for city: ${city}`);
//             }
//             return coord ? [coord.lng, coord.lat] : null;
//           })
//           .filter(Boolean);

//         const routeGeoJson = {
//           type: "Feature",
//           geometry: {
//             type: "LineString",
//             coordinates
//           }
//         };

//         setStartCoord(cityCoordinates[path[0]]);
//         setEndCoord(cityCoordinates[path[path.length - 1]]);

//         const duration = ((distance / 40) * 60).toFixed(1); // avg 40 km/h
//         const dynamicPrice = calculateDynamicPrice(distance, 'Low'); // default to low for now

//         setResult({
//           distance: `${distance} km`,
//           duration: `${duration} mins`,
//           routeText: path.join(" → "),
//           routeGeoJson,
//           price: `₹${dynamicPrice.price} (${dynamicPrice.multiplier}x risk multiplier)`
//         });
//       } else {
//         const start = await geocodeAddress(src);
//         const end = await geocodeAddress(dest);
//         setStartCoord(start);
//         setEndCoord(end);

//         const route = await fetchRoute(start, end);

//         const distance = (route.distance / 1000).toFixed(2);
//         const duration = (route.duration / 60).toFixed(1);
//         const dynamicPrice = calculateDynamicPrice(distance, 'Low'); // default to low

//         setResult({
//           distance: `${distance} km`,
//           duration: `${duration} mins`,
//           routeGeoJson: route.geometry,
//           routeText: null,
//           price: `₹${dynamicPrice.price} (${dynamicPrice.multiplier}x risk multiplier)`
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch route.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Supply Chain Tracker</h2>

//       <div style={styles.form}>
//         <input
//           type="text"
//           placeholder="Enter Source Location"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter Destination Location"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleTrack} style={styles.button}>
//           {loading ? 'Tracking...' : 'Track Path'}
//         </button>
//       </div>

//       {result && (
//         <div style={styles.result}>
//           <h3>📍 Route Summary</h3>
//           <p>📏 Distance: {result.distance}</p>
//           <p>⏱️ Duration: {result.duration}</p>
//           {result.routeText && <p>🛣️ Route: {result.routeText}</p>}
//           {result.price && <p>💰 Estimated Price: {result.price}</p>}
//         </div>
//       )}

//       {startCoord && endCoord && result?.routeGeoJson && (
//         <MapViewer start={startCoord} end={endCoord} routeGeoJson={result.routeGeoJson} />
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '2rem',
//     maxWidth: '700px',
//     margin: 'auto'
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem'
//   },
//   input: {
//     padding: '0.8rem',
//     fontSize: '1rem',
//     borderRadius: '6px',
//     border: '1px solid #ccc'
//   },
//   button: {
//     backgroundColor: '#10b981',
//     color: '#fff',
//     padding: '0.8rem',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   },
//   result: {
//     marginTop: '2rem',
//     backgroundColor: '#f9f9f9',
//     padding: '1rem',
//     borderRadius: '6px'
//   }
// };

// export default Tracker;
import React, { useState } from 'react';
import { geocodeAddress } from '../api/geocode';
import { fetchRoute } from '../api/route';
import MapViewer from '../components/MapViewer';
import { dijkstra, graph } from '../utils/graph';
import { cityCoordinates } from '../data/cityCoordinates';
import { calculateDynamicPrice } from '../utils/pricing';
import { predictRouteRisk } from '../utils/predictor';
import { fetchNews } from '../api/news';


function Tracker() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState(null);
  const [startCoord, setStartCoord] = useState(null);
  const [endCoord, setEndCoord] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!source || !destination) {
      alert("Please enter both source and destination.");
      return;
    }

    const src = source.trim();
    const dest = destination.trim();

    setLoading(true);
    setResult(null);

    try {
      const news = await fetchNews("logistics transport india");
      const riskPrediction = predictRouteRisk(news.articles || []);
      const riskLevel = riskPrediction.risk || 'Low';

      if (graph[src] && graph[dest]) {
        const { path, distance } = dijkstra(src, dest, graph);

        if (!distance) {
          alert("No path found in local graph data.");
          setLoading(false);
          return;
        }

        const coordinates = path
          .map(city => {
            const coord = cityCoordinates[city];
            if (!coord) {
              console.warn(`Missing coordinates for city: ${city}`);
            }
            return coord ? [coord.lng, coord.lat] : null;
          })
          .filter(Boolean);

        const routeGeoJson = {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates
          }
        };

        setStartCoord(cityCoordinates[path[0]]);
        setEndCoord(cityCoordinates[path[path.length - 1]]);

        const duration = ((distance / 40) * 60).toFixed(1);
        const dynamicPrice = calculateDynamicPrice(distance, riskLevel);

        setResult({
          distance: `${distance} km`,
          duration: `${duration} mins`,
          routeText: path.join(" → "),
          routeGeoJson,
          price: `₹${dynamicPrice.price} (${dynamicPrice.multiplier}x ${riskLevel} risk)`
        });
      } else {
        const start = await geocodeAddress(src);
        const end = await geocodeAddress(dest);
        setStartCoord(start);
        setEndCoord(end);

        const route = await fetchRoute(start, end);

        const distance = (route.distance / 1000).toFixed(2);
        const duration = (route.duration / 60).toFixed(1);
        const dynamicPrice = calculateDynamicPrice(distance, riskLevel);

        setResult({
          distance: `${distance} km`,
          duration: `${duration} mins`,
          routeGeoJson: route.geometry,
          routeText: null,
          price: `₹${dynamicPrice.price} (${dynamicPrice.multiplier}x ${riskLevel} risk)`
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch route.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Supply Chain Tracker</h2>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter Source Location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter Destination Location"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleTrack} style={styles.button}>
          {loading ? 'Tracking...' : 'Track Path'}
        </button>
      </div>

      {result && (
        <div style={styles.result}>
          <h3>📍 Route Summary</h3>
          <p>📏 Distance: {result.distance}</p>
          <p>⏱️ Duration: {result.duration}</p>
          {result.routeText && <p>🛣️ Route: {result.routeText}</p>}
          {result.price && <p>💰 Estimated Price: {result.price}</p>}
        </div>
      )}

      {startCoord && endCoord && result?.routeGeoJson && (
        <MapViewer start={startCoord} end={endCoord} routeGeoJson={result.routeGeoJson} />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: 'auto'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: '#10b981',
    color: '#fff',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  result: {
    marginTop: '2rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '6px'
  }
};

export default Tracker;
