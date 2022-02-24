import { Book } from "../models/Book";

export enum ActionTypes {
  // show all
  LOAD_REQUEST = '[Book] Load Request',
  LOAD_FAILURE = '[Book] Load Failure',
  LOAD_SUCCESS = '[Book] Load Success',

  // save
  SAVE_REQUEST = '[Book] Save',
  SAVE_FAILURE = '[Book] Save Failure',
  SAVE_SUCCESS = '[Book] Save Success',

  // update
  UPDATE_REQUEST = '[Book] Update',
  UPDATE_FAILURE = '[Book] Update Failure',
  UPDATE_SUCCESS = '[Book] Update Success',

  // delete
  DELETE_REQUEST = '[Book] Delete',
  DELETE_FAILURE = '[Book] Delete Failure',
  DELETE_SUCCESS = '[Book] Delete Success',

  // get by Id
  LOAD_BOOK_REQUEST = '[Book] Load Book Request',
  LOAD_BOOK_FAILURE = '[Book] Load Book Failure',
  LOAD_BOOK_SUCCESS = '[Book] Load Book Success'



}


export interface BookState {
  selectedBook: Book,
  books: Book[],
  isLoading?: boolean;
  error?: any;
}

export const initialState: any ={};
