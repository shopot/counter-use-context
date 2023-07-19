import { useCounterStore } from './counter/hooks.ts';

export const useStore = () => ({ counter: useCounterStore() });
