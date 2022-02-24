import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";
import { ActionTypes } from "../store";

export const loadBookRequestAction = createAction(
  ActionTypes.LOAD_BOOK_REQUEST,
  props<{ id: number }>()
);

export const loadBookSuccessAction = createAction(
  ActionTypes.LOAD_BOOK_SUCCESS,
  props<{ book: any }>()
);

export const loadBookFailureAction = createAction(
  ActionTypes.LOAD_BOOK_FAILURE,
  props<{ error: string }>()
);
