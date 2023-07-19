import { ReactElement } from 'react';

import { useCounterStore } from '../../store';

export const CounterValue = (): ReactElement => {
  const { state } = useCounterStore();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 w-48 text-center">
      <span className="text-3xl font-bold">{state}</span>
    </div>
  );
};
