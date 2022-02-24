import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as saveActionTypes from '../actions/insert.action';

export const saveReducer = createReducer(
  initialState,
  on(saveActionTypes.saveRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(saveActionTypes.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedBook: item,
    error: null
  })),

  on(saveActionTypes.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);
