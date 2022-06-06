import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SystemContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SystemContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SystemContextProvider>
  </React.StrictMode>
);
