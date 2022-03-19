import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../store";

export const updateRequestAction = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ item: any , id:any}>()
);

export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: string }>()
);

export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ item: any }>()
);
