import { createReducer, on } from '@ngrx/store';
import { increamentCounter, decreamentCounter } from './counter.action';

export interface counterstate {
  count: number;
}
export const initialstate: counterstate = {
  count: 0,
};
export const reducer = createReducer(
  initialstate,
  on(increamentCounter, (state) => ({ ...state, count: state.count + 1 })),
  on(decreamentCounter, (state) => ({ ...state, count: state.count - 1 }))
);
