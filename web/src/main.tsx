import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Tipografías empaquetadas (sin CDN): la app de escritorio funciona sin Internet.
import '@fontsource/fira-sans/latin-400.css';
import '@fontsource/fira-sans/latin-500.css';
import '@fontsource/fira-sans/latin-600.css';
import '@fontsource/fira-sans/latin-700.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import '@fontsource/ibm-plex-mono/latin-600.css';
import './estilos.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
