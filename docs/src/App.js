import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import './styles/App.scss';

/**
 * Main application component
 * 
 * Sets up routing and main layout structure
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/:language" element={<Documentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
