import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators"
import { ServiceService } from "src/app/services/service.service";
import * as updateActions from '../actions/update.action';

@Injectable({providedIn:'root'})
export class UpdateEffect{
  constructor(private http:HttpClient,private actions:Actions,
    private _ServiceService:ServiceService){}

  updateRequestEffect$ = createEffect(() => this.actions.pipe(
    ofType(updateActions.updateRequestAction),
    switchMap(action => {
      return this._ServiceService.saveData(action.item).pipe(
          map((item: any) => {
              return updateActions.updateSuccessAction({ item })
          }),
          catchError(error => {
            return of(updateActions.updateFailureAction({ error }))
          })
        )
      })
  ))
}
