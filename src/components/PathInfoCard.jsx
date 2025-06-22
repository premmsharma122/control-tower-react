import React from 'react';

function PathInfoCard({ pathData }) {
  if (!pathData) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">📦 Path Summary</h2>
      <p><strong>Route:</strong> {pathData.route.join(' → ')}</p>
      <p><strong>Distance:</strong> {pathData.distance}</p>
      <p><strong>Status:</strong> {pathData.status}</p>
    </div>
  );
}

export default PathInfoCard;
