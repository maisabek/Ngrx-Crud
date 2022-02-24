import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../store";

export const deleteRequestAction = createAction(
  ActionTypes.DELETE_REQUEST,
  props<{ id: number }>()
);

export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ error: string }>()
);

export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
  props<{ id: number }>()
);
