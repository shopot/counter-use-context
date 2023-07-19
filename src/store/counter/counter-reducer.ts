import { ActionType, CounterReducerAction, CounterState } from './types.ts';

export const counterReducer = (
  state: CounterState,
  action: CounterReducerAction
): CounterState => {
  switch (action.type) {
    case ActionType.Increment: {
      return state + 1;
    }

    case ActionType.Decrement: {
      return state - 1;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
