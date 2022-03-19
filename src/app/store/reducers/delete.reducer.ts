import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as deleteActionTypes from '../actions/delete.action';

export const deleteReducer = createReducer(
  initialState,
  on(deleteActionTypes.deleteRequestAction, state => ({
    ...state,
    isLoading: true
  })),

  on(deleteActionTypes.deleteSuccessAction, (state, { id }) => ({
    ...state,
    isLoading: false,
    books: state.books
    // .filter((x:any) => x.id != id)
  })),

  on(deleteActionTypes.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))

);
