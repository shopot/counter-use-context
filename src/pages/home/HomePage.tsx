import { CounterValue } from '../../components/counter-value/CounterValue.tsx';
import { CounterForm } from '../../components/counter-form/CounterForm.tsx';
import { ReactElement } from 'react';

export const HomePage = (): ReactElement => {
  return (
    <div className="container mx-auto px-4 pt-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Counter</h1>
      <CounterValue />
      <CounterForm />
    </div>
  );
};
