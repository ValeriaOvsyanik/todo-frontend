import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Favorites } from './pages/Favorites';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <Link to="/" className="app-nav-link">ALL</Link>
        <Link to="/favorites" className="app-nav-link">FAVORITES</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;