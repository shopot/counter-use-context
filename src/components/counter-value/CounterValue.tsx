import { ReactElement } from 'react';

import { useStore } from '../../store';

export const CounterValue = (): ReactElement => {
  const value = useStore().counter.getState();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 w-48 text-center">
      <span className="text-3xl font-bold">{value}</span>
    </div>
  );
};
