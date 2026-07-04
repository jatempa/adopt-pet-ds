import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// The "showcase" app uses Pages from the design system, just like
// a real product team would consume it. Cosmos is the dev playground.
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
