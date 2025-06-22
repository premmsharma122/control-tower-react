import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  link: {
    marginTop: '1rem',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#10b981',
    fontWeight: 'bold',
  },
};

export default NotFound;
