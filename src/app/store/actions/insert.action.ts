import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";
import { ActionTypes } from "../store";

export const saveRequestAction = createAction(
  ActionTypes.SAVE_REQUEST,
  props<{ item: Book }>()
);

export const saveFailureAction = createAction(
  ActionTypes.SAVE_FAILURE,
  props<{ error: string }>()
);

export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ item: Book }>()
);
