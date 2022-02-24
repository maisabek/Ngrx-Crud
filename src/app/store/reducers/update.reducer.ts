import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as updateActionTypes from '../actions/update.action';

export const updateReducer = createReducer(
  initialState,
  on(updateActionTypes.updateRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(updateActionTypes.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedBook: item,
    error: null
  })),

  on(updateActionTypes.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))

  );
