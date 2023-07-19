import { createContext, Dispatch } from 'react';

import { CounterReducerAction } from './types.ts';

export const CounterContext = createContext(0);

export const CounterDispatchContext = createContext<
  Dispatch<CounterReducerAction>
>(null!);
