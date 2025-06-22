// src/utils/graph.js

// Example graph: nodes and weighted edges (mock city network)
export const graph = {
  Delhi: { Agra: 200, Jaipur: 270 },
  Agra: { Delhi: 200, Kanpur: 250 },
  Jaipur: { Delhi: 270, Kota: 300 },
  Kanpur: { Agra: 250, Lucknow: 90 },
  Kota: { Jaipur: 300, Indore: 320 },
  Lucknow: { Kanpur: 90 },
  Indore: { Kota: 320 }
};

// Dijkstra's algorithm
export function dijkstra(start, end, graph) {
  const distances = {};
  const visited = new Set();
  const previous = {};
  const queue = [];

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
  });
  distances[start] = 0;
  queue.push({ node: start, dist: 0 });

  while (queue.length) {
    queue.sort((a, b) => a.dist - b.dist);
    const { node } = queue.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = graph[node];
    for (const neighbor in neighbors) {
      const newDist = distances[node] + neighbors[neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = node;
        queue.push({ node: neighbor, dist: newDist });
      }
    }
  }

  // Backtrack shortest path
  const path = [];
  let current = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    distance: distances[end] !== Infinity ? distances[end] : null
  };
}
