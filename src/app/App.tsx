import { ReactElement } from 'react';

import './App.css';

import { CounterProvider } from '../store';
import { HomePage } from '../pages';

const App = (): ReactElement => {
  return (
    <CounterProvider>
      <HomePage />
    </CounterProvider>
  );
};

export default App;
