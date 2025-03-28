import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.scss';

/**
 * Home page component
 * 
 * Displays introduction and language options
 */
function Home() {
  // Group language options by region
  const europeanLanguages = [
    { code: 'en', name: 'English version' },
    { code: 'fr', name: 'Version française' },
    { code: 'es', name: 'Versión española' },
    { code: 'de', name: 'Deutsche Version' },
    { code: 'pt', name: 'Versão portuguesa' },
    { code: 'ru', name: 'Versione russa' }
  ];
  
  const asianLanguages = [
    { code: 'zh-cn', name: '简体中文版' },
    { code: 'ja', name: '日本語版' },
    { code: 'ko', name: '한국어 버전' },
    { code: 'hi', name: 'हिंदी संस्करण' }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1><span className="emoji">🦑</span> The Squid Norm <span className="emoji">🦑</span></h1>
        <div className="description">
          <p>A lightweight code style guide to improve readability and collaboration. SquidNorm focuses on clear structure, consistent spacing, meaningful naming, and strategic commenting to make code more maintainable and readable for both humans and AI tools.</p>
        </div>
      </section>

      <section className="documentation">
        <h2>Documentation</h2>
        
        <div className="language-section">
          <div className="language-group">
            <h3>European Languages</h3>
            {europeanLanguages.map(lang => (
              <Link 
                key={lang.code}
                to={`/docs/${lang.code}`} 
                className="language-link"
              >
                {lang.name}
              </Link>
            ))}
          </div>
          
          <div className="language-group">
            <h3>Asian Languages</h3>
            {asianLanguages.map(lang => (
              <Link 
                key={lang.code}
                to={`/docs/${lang.code}`} 
                className="language-link"
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
