import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export const counterFeatureKey = 'counter';

export const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(CounterActions.increase, (state) => state + 1),
  on(CounterActions.decrease, (state) => state - 1),
  on(CounterActions.reset, (state) => 0)
);
