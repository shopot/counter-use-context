import { useCounterStore } from './counter/use-counter-store.ts';

export const useStore = () => ({ counter: useCounterStore() });
