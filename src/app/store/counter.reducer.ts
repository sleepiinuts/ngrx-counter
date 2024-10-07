import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number;
}

export const initialState = { count: 0 };

export const reducer = createReducer(
  initialState,
  on(CounterActions.increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterActions.decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.reset, (state) => ({ count: 0 }))
);
