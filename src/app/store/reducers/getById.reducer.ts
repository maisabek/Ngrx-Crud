import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as getByIdActionTypes from '../actions/getById.action';

export const getByIdReducer = createReducer(
  initialState,
  on(getByIdActionTypes.loadBookRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true
  })),

  on(getByIdActionTypes.loadBookSuccessAction, (state, { book }) => ({
      ...state,
      isLoading: false,
      selectedBook: book
  })),

  on(getByIdActionTypes.loadBookFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))

);
