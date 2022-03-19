import { initialState } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as getByIdActionTypes from '../actions/getById.action';

export const getByIdReducer = createReducer(
  initialState,
  on(getByIdActionTypes.loadUserRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true
  })),

  on(getByIdActionTypes.loadUserSuccessAction, (state, { user }) => ({
      ...state,
      isLoading: false,
      // selectedUser: user
  })),

  on(getByIdActionTypes.loadUserFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))

);
