import { Action, createAction, createFeatureSelector, createReducer, on, props } from '@ngrx/store';
import { Hoge } from 'src/app/domain/models';

export interface State {
  hoge: Hoge | null;
}

export const initialState: State = {
  hoge: null,
};

export const setHoge = createAction('[HogeState] set hogeState', props<{ hoge: Hoge }>());
export const resetHoge = createAction('[HogeState] reset hogeState');

export function reducer(state: State | undefined, action: Action) {
  return hogeReducer(state, action);
}

const hogeReducer = createReducer(
  initialState,
  on(setHoge, (state, { hoge }) => {
    return {
      ...state,
      hoge: hoge,
    };
  }),
  on(resetHoge, (state) => {
    return {
      ...state,
      hoge: null,
    };
  }),
);

export const key = 'hoge';
export const selectFeature = createFeatureSelector<State>(key);
