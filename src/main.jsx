import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles/index.css';

// After a deploy, an open tab can ask for page chunks that no longer exist
// (each build renames them). Reload once to pick up the new build instead of
// leaving a blank page. The timestamp guard prevents a reload loop.
window.addEventListener('vite:preloadError', (event) => {
  try {
    const last = Number(sessionStorage.getItem('fc-chunk-reload') || 0);
    if (Date.now() - last < 10000) return;
    sessionStorage.setItem('fc-chunk-reload', String(Date.now()));
  } catch {
    // storage blocked — still try one reload
  }
  event.preventDefault();
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
