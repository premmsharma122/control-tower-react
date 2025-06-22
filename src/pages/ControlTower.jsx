
// import React, { useEffect, useState } from 'react';

// function ControlTower() {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Simulated fetch for supply news, replace with real API if available
//   useEffect(() => {
//     setLoading(true);

//     setTimeout(() => {
//       setNews([
//         { id: 1, title: 'Traffic jam on Route 66', time: '10 mins ago' },
//         { id: 2, title: 'Weather alert: Heavy rain expected', time: '30 mins ago' },
//         { id: 3, title: 'Accident cleared near Exit 5', time: '1 hour ago' },
//       ]);
//       setLoading(false);
//     }, 1500);
//   }, []);

//   return (
//     <div style={{ maxWidth: '700px', margin: 'auto', padding: '2rem' }}>
//       <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Control Tower Dashboard</h2>

//       {loading ? (
//         <p>Loading supply chain news...</p>
//       ) : (
//         <ul>
//           {news.map((item) => (
//             <li key={item.id} style={{ marginBottom: '1rem', padding: '1rem', background: '#f0f0f0', borderRadius: '6px' }}>
//               <h3>{item.title}</h3>
//               <small>{item.time}</small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ControlTower;
import React from 'react';
import NewsPanel from '../components/NewsPanel';

function ControlTower() {
  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Control Tower Dashboard
      </h2>
      
      <NewsPanel region="India" />
    </div>
  );
}

export default ControlTower;
