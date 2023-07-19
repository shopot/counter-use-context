import { ReactElement } from 'react';

import { Button } from '../../ui';
import { useCounterStore } from '../../store';

export const CounterForm = (): ReactElement => {
  const { increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-row gap-3 mt-4">
      <Button onCLick={increment}> + </Button>
      <Button onCLick={decrement}> - </Button>
    </div>
  );
};
