// // src/api/news.js
// import { NEWS_API_KEY } from '../config';
// export async function fetchSupplyNews(region) {
//   try {
//     const res = await fetch(`https://newsapi.org/v2/everything?q=${region}+logistics+supply&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);
//     const data = await res.json();

//     if (data.status !== 'ok') throw new Error('Failed to fetch news');

//     return data.articles.slice(0, 5); // Return top 5 articles
//   } catch (err) {
//     console.error('News fetch error:', err.message);
//     return [];
//   }
// }
// src/api/news.js// src/api/news.js
// // src/api/news.js
// import { NEWS_API_KEY } from '../config';

// export async function fetchSupplyNews() {
//   const url = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=supply+chain+logistics&country=in&language=en`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (!data.results) throw new Error('No news found');

//     return data.results.slice(0, 5).map((item, index) => ({
//       id: index + 1,
//       title: item.title,
//       time: item.pubDate || 'Recently'
//     }));
//   } catch (error) {
//     console.error('NewsData fetch error:', error.message);
//     return [
//       { id: 1, title: 'Failed to fetch live news.', time: 'Just now' }
//     ];
//   }
// }

// src/api/news.js// src/api/news.js
import { NEWS_API_KEY } from '../config.js';  // Adjust relative path as needed

async function fetchNews(query) {
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=in&max=10&apikey=${NEWS_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch news');

  const data = await res.json();
  return data.articles;  // Extract articles array directly
}

export { fetchNews };

