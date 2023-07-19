import { useCounterStore } from './counter/hooks.ts';

export const useStore = () => {
  const { state, increment, decrement } = useCounterStore();

  return {
    counter: {
      getState: () => state,
      increment,
      decrement,
    },
  };
};
