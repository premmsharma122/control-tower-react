
// import React from 'react';

// function Home() {
//   return (
//     <section style={styles.container}>
//       <h2 style={styles.heading}>Welcome to the Supply Chain Tracker</h2>
//       <p style={styles.paragraph}>
//         Use this platform to track trucks, monitor routes, and manage supply chain logistics in real-time.
//       </p>
//     </section>
//   );
// }

// const styles = {
//   container: {
//     padding: '2rem',
//     maxWidth: '800px',
//     margin: 'auto',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2rem',
//     marginBottom: '1rem',
//     color: '#333',
//   },
//   paragraph: {
//     fontSize: '1.1rem',
//     lineHeight: '1.6',
//     color: '#555',
//   },
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Welcome to SupplyChainTracker</h1>
      <p style={styles.subtitle}>
        Optimize your supply chain with shortest path algorithms, live tracking, and a powerful control tower.
      </p>

      <div style={styles.buttonGroup}>
        <Link to="/tracker" style={styles.button}>Start Tracking</Link>
        <Link to="/control-tower" style={styles.outlineButton}>View Control Tower</Link>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '3rem 2rem',
    maxWidth: '900px',
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2.5rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    border: '2px solid #2563eb',
    color: '#2563eb',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Home;
