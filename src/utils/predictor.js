// src/utils/predictor.js

export function predictRouteRisk(newsItems, trafficData = null) {
  let risk = 0;

  // Analyze news headlines
  if (newsItems.some(n => /accident|jam|collision/i.test(n.title))) risk += 3;
  if (newsItems.some(n => /rain|storm|weather|flood/i.test(n.title))) risk += 2;
  if (newsItems.some(n => /roadblock|strike|protest/i.test(n.title))) risk += 1;

  // Optional traffic API analysis
  if (trafficData?.congestion === 'high') risk += 2;
  if (trafficData?.congestion === 'moderate') risk += 1;

  // Decision logic
  if (risk >= 4) return { risk: 'High', suggestAlternative: true };
  if (risk >= 2) return { risk: 'Medium', suggestAlternative: false };
  return { risk: 'Low', suggestAlternative: false };
}
