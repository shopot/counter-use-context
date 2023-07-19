import { useContext } from 'react';

import { CounterContext, CounterDispatchContext } from './contexts.ts';
import { decrementAction, incrementAction } from './actions.ts';

export const useCounterStore = () => {
  const dispatch = useContext(CounterDispatchContext);

  const state = useContext(CounterContext);

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  return {
    getState: () => state,
    increment,
    decrement,
  };
};
