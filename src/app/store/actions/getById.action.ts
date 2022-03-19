import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";
import { ActionTypes } from "../store";

export const loadUserRequestAction = createAction(
  ActionTypes.LOAD_User_REQUEST,
  props<{ id: number }>()
);

export const loadUserSuccessAction = createAction(
  ActionTypes.LOAD_User_SUCCESS,
  props<{ user: any }>()
);

export const loadUserFailureAction = createAction(
  ActionTypes.LOAD_User_FAILURE,
  props<{ error: string }>()
);
