import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

/**
 * Header component with navigation
 */
function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="emoji">🦑</span> Squid Norm
        </Link>
        
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs/en">Documentation</Link></li>
            <li><a href="https://github.com/username/SquidNorm" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
