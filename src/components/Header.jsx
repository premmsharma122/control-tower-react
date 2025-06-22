// // src/components/Header.jsx
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// //import './Header.css'; // Optional: if you want separate styling

// function Header() {
//   return (
//     <header style={styles.header}>
//       <h2 style={styles.logo}>SupplyChain Tracker</h2>
//       <nav style={styles.nav}>
//         <NavLink to="/" style={styles.link} activeStyle={styles.active}>
//           Home
//         </NavLink>
//         <NavLink to="/tracker" style={styles.link} activeStyle={styles.active}>
//           Tracker
//         </NavLink>
//         <NavLink to="/control-tower" style={styles.link} activeStyle={styles.active}>
//           Control Tower
//         </NavLink>
//       </nav>
//     </header>
//   );
// }

// const styles = {
//   header: {
//     backgroundColor: '#1e293b',
//     padding: '1rem 2rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     color: 'white',
//   },
//   logo: {
//     margin: 0,
//     fontSize: '1.4rem',
//   },
//   nav: {
//     display: 'flex',
//     gap: '1rem',
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: '500',
//   },
//   active: {
//     textDecoration: 'underline',
//   },
// };

// export default Header;import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">SupplyChainTracker</h1>
        <nav className="nav-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/tracker" className={isActive('/tracker')}>Tracker</Link>
          <Link to="/control-tower" className={isActive('/control-tower')}>Control Tower</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
