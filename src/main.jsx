import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// ✅ Safely render JSX outside render()
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const AppTree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(rootElement).render(AppTree);
