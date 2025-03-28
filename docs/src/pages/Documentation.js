import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/pages/Documentation.scss';

/**
 * Documentation page component
 * 
 * Displays markdown content for the selected language
 */
function Documentation() {
  const { language } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load markdown file for the selected language
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/SquidNorm/languages/SquidNorm.${language}.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to load documentation for ${language}`);
        }
        
        const text = await response.text();
        setMarkdown(text);
        setLoading(false);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchMarkdown();
  }, [language]);

  // Language selector
  const renderLanguageSelector = () => {
    const allLanguages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' },
      { code: 'de', name: 'Deutsch' },
      { code: 'pt', name: 'Português' },
      { code: 'ru', name: 'Русский' },
      { code: 'zh-cn', name: '中文' },
      { code: 'ja', name: '日本語' },
      { code: 'ko', name: '한국어' },
      { code: 'hi', name: 'हिंदी' }
    ];
    
    return (
      <div className="language-selector">
        <label>Language: </label>
        <select 
          value={language}
          onChange={(e) => {
            window.location.href = `/SquidNorm/docs/${e.target.value}`;
          }}
        >
          {allLanguages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  if (loading) {
    return <div className="loading">Loading documentation...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="documentation-page">
      {renderLanguageSelector()}
      
      <div className="markdown-content">
        <ReactMarkdown
          children={markdown}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  );
}

export default Documentation;
