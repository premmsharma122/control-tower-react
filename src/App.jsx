
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import ControlTower from './pages/ControlTower';
import NotFound from './pages/NotFound';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/control-tower" element={<ControlTower />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </>
  );
}

export default App;
