import { ReactElement } from 'react';

import './App.css';

import { CounterValue, CounterForm } from '../components';

const App = (): ReactElement => (
  <div className="container mx-auto px-4 pt-5 flex flex-col items-center">
    <h1 className="text-3xl font-bold">Counter</h1>
    <CounterValue />
    <CounterForm />
  </div>
);

export default App;
