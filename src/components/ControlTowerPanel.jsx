import React, { useState, useEffect } from 'react';

const demoTrucks = [
  {
    id: 1,
    name: 'Truck A',
    source: 'New York',
    destination: 'Washington DC',
    distance: '350 km',
    duration: '5 hrs',
    status: 'On Time',
  },
  {
    id: 2,
    name: 'Truck B',
    source: 'Los Angeles',
    destination: 'San Francisco',
    distance: '600 km',
    duration: '8 hrs',
    status: 'Delayed due to traffic',
  },
  {
    id: 3,
    name: 'Truck C',
    source: 'Chicago',
    destination: 'Detroit',
    distance: '450 km',
    duration: '6 hrs',
    status: 'On Time',
  },
];

function ControlTowerPanel() {
  const [trucks, setTrucks] = useState([]);

  // Simulate fetching truck data (can replace with API call later)
  useEffect(() => {
    setTrucks(demoTrucks);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Control Tower Panel
      </h2>
      {trucks.length === 0 ? (
        <p>No active trucks currently.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#1f2937', color: '#fff' }}>
            <tr>
              <th style={thStyle}>Truck</th>
              <th style={thStyle}>Source</th>
              <th style={thStyle}>Destination</th>
              <th style={thStyle}>Distance</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((truck) => (
              <tr key={truck.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}>{truck.name}</td>
                <td style={tdStyle}>{truck.source}</td>
                <td style={tdStyle}>{truck.destination}</td>
                <td style={tdStyle}>{truck.distance}</td>
                <td style={tdStyle}>{truck.duration}</td>
                <td style={{ ...tdStyle, color: truck.status.includes('Delayed') ? 'red' : 'green' }}>
                  {truck.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  padding: '0.8rem',
  textAlign: 'left',
};

const tdStyle = {
  padding: '0.8rem',
};

export default ControlTowerPanel;
