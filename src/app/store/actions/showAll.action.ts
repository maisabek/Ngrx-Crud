import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../store";

export const loadRequestAction = createAction(
  ActionTypes.LOAD_REQUEST
);

export const loadFailureAction = createAction(
  ActionTypes.LOAD_FAILURE,
  props<{ error: string }>()
);

export const loadSuccessAction = createAction(
  ActionTypes.LOAD_SUCCESS,
  props<{ items: any[] }>()
);
