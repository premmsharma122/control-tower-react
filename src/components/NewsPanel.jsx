// // src/components/NewsPanel.jsx

// import React, { useEffect, useState } from 'react';
// import { fetchSupplyNews } from '../api/news';

// function NewsPanel({ region }) {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchSupplyNews(region).then(setArticles);
//   }, [region]);

//   return (
//     <div style={styles.container}>
//       <h3>📰 Supply Chain News - {region}</h3>
//       {articles.map((article, idx) => (
//         <div key={idx} style={styles.article}>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">
//             <strong>{article.title}</strong>
//           </a>
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     background: '#f4f4f4',
//     padding: '1rem',
//     borderRadius: '8px',
//     marginTop: '2rem'
//   },
//   article: {
//     marginBottom: '1rem'
//   }
// };

// // export default NewsPanel;
// import React, { useEffect, useState } from 'react';
// import { fetchSupplyNews } from '../api/news';

// function NewsPanel({ region = 'India' }) {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadNews() {
//       setLoading(true);
//       const articles = await fetchSupplyNews(region);
//       setNews(articles);
//       setLoading(false);
//     }

//     loadNews();
//   }, [region]);

//   return (
//     <div style={{ marginTop: '2rem' }}>
//       <h3>📡 Supply Chain News</h3>
//       {loading ? (
//         <p>Loading news...</p>
//       ) : (
//         <ul style={{ paddingLeft: 0 }}>
//           {news.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: '1rem', listStyle: 'none' }}>
//               <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>
//                 {item.title}
//               </a>
//               <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.publishedAt?.split('T')[0]}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// // export default NewsPanel;
// import React, { useEffect, useState } from 'react';
// import { fetchNews } from '../api/news';

// function NewsPanel({ region = 'India' }) {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadNews() {
//       setLoading(true);
//       setError(null); // Reset error before fetching
//       try {
//         const articles = await fetchSupplyNews(region);
//         // Ensure articles is an array to avoid runtime errors
//         if (Array.isArray(articles)) {
//           setNews(articles);
//         } else {
//           setNews([]);
//           setError('Invalid data format received.');
//         }
//       } catch (err) {
//         setError('Failed to fetch news.');
//         setNews([]);
//         console.error(err);
//       }
//       setLoading(false);
//     }

//     loadNews();
//   }, [region]);

//   return (
//     <div style={{ marginTop: '2rem' }}>
//       <h3>📡 Supply Chain News - {region}</h3>

//       {loading && <p>Loading news...</p>}

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {!loading && !error && (
//         <ul style={{ paddingLeft: 0 }}>
//           {news.length === 0 && <p>No news articles found.</p>}
//           {news.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: '1rem', listStyle: 'none' }}>
//               <a
//                 href={item.url || '#'}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ fontWeight: 'bold' }}
//               >
//                 {item.title || 'Untitled'}
//               </a>
//               <p style={{ fontSize: '0.9rem', color: '#555' }}>
//                 {item.publishedAt ? item.publishedAt.split('T')[0] : 'Unknown date'}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default NewsPanel;
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/news';

function NewsPanel({ region = 'India' }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const articles = await fetchNews(region);  // <-- FIXED here
        if (Array.isArray(articles)) {
          setNews(articles);
        } else {
          setNews([]);
          setError('Invalid data format received.');
        }
      } catch (err) {
        setError('Failed to fetch news.');
        setNews([]);
        console.error(err);
      }
      setLoading(false);
    }

    loadNews();
  }, [region]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>📡 Supply Chain News - {region}</h3>

      {loading && <p>Loading news...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <ul style={{ paddingLeft: 0 }}>
          {news.length === 0 && <p>No news articles found.</p>}
          {news.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '1rem', listStyle: 'none' }}>
              <a
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold' }}
              >
                {item.title || 'Untitled'}
              </a>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                {item.publishedAt ? item.publishedAt.split('T')[0] : 'Unknown date'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsPanel;
