export type CounterReducerAction = {
  type: string;
};

export type CounterState = number;

export const enum ActionType {
  Increment = 'increment',
  Decrement = 'decrement',
}
