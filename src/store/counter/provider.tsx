import { ReactNode, useReducer } from 'react';

import { counterReducer } from './reducer.ts';
import { CounterContext, CounterDispatchContext } from './context.ts';

const initialCounter = 0;

export function CounterProvider({ children }: Props) {
  const [value, dispatch] = useReducer(counterReducer, initialCounter);

  return (
    <CounterContext.Provider value={value}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
}

type Props = {
  children: ReactNode;
};
