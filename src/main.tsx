import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';
import { CounterProvider } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
