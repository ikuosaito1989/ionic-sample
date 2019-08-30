import { Action, createAction, createFeatureSelector, createReducer, on, props } from '@ngrx/store';

export interface State {
  title: string | null;
  body: string | null;
}

export const initialState: State = {
  title: null,
  body: null,
};

export const setTitle = createAction('[HogeState] set title', props<{ title: string }>());
export const setHogeState = createAction('[HogeState] set hogeState', props<{ hogeState: State }>());
export const resetHogeState = createAction('[HogeState] reset hogeState');

const hogeReducer = createReducer(
  initialState,
  on(setTitle, (state, { title }) => ({ ...state, title: title })),
  on(setHogeState, (state, { hogeState }) => hogeState),
  on(resetHogeState, (state) => null),
);

export function reducer(state: State | undefined, action: Action) {
  return hogeReducer(state, action);
}

export const key = 'hoge';
export const selectFeature = createFeatureSelector<State>(key);
