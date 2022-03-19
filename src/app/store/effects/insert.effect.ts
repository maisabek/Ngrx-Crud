import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ServiceService } from "src/app/services/service.service";
import * as saveActions from '../actions/insert.action';


@Injectable({providedIn:'root'})
export class InsertEffect{
constructor(private http:HttpClient,private actions:Actions,private _ServiceService:ServiceService){}

saveRequestEffect$ = createEffect(() => this.actions.pipe(
  ofType(saveActions.saveRequestAction),
    switchMap(action => {
      return this._ServiceService.saveData(action).pipe(
        map((item: any) => {
            return saveActions.saveSuccessAction({ item })
        }),
        catchError(error => {
          return of(saveActions.saveFailureAction({ error }))
        })
      )
    })
))
}
