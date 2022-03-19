import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators"
import { ServiceService } from "src/app/services/service.service"
import * as deleteActions from '../actions/delete.action';

@Injectable({providedIn:'root'})
export class DeleteEffect {

  constructor(private actions:Actions,private _ServiceService:ServiceService){}

  deleteRequestEffect$ = createEffect(() => this.actions.pipe(
    ofType(deleteActions.deleteRequestAction),
    switchMap(action => {
      console.log("action ",action)
      return this._ServiceService.deleteItem(action.id).pipe(
          map((item: any) => {
            console.log("item = ",item)
              return deleteActions.deleteSuccessAction({ id: action.id })
          }),
          catchError(error => {
            return of(deleteActions.deleteFailureAction({ error }))
          })
        )
    })
  ))
}
