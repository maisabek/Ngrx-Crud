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
  LOAD_User_REQUEST = '[User] Load User Request',
  LOAD_User_FAILURE = '[User] Load User Failure',
  LOAD_User_SUCCESS = '[User] Load User Success'



}


// export interface BookState {
//   selectedBook: Book,
//   books: Book[],
//   isLoading?: boolean;
//   error?: any;
// }

export const initialState: any ={};
