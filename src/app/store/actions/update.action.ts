import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";
import { ActionTypes } from "../store";

export const updateRequestAction = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ item: any }>()
);

export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: string }>()
);

export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ item: any }>()
);
