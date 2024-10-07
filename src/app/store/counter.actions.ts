import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Load Counters': emptyProps(),
    increase: emptyProps(),
    decrease: emptyProps(),
    reset: emptyProps(),
  },
});
