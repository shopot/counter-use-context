import { ActionType } from './types.ts';

export const incrementAction = () => ({ type: ActionType.Increment });

export const decrementAction = () => ({ type: ActionType.Decrement });
