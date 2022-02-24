import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as showActionTypes from '../actions/showAll.action';

export const showReducer = createReducer(
  initialState,
  //show all
  on(showActionTypes.loadRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(showActionTypes.loadSuccessAction, (state, { items }) => ({
      ...state,
      isLoading: false,
      books: items
  })),

  on(showActionTypes.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))

);
