import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Action } from "@ngrx/store";
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { ServiceService } from "src/app/services/service.service";
import * as showActions from '../actions/showAll.action';

@Injectable({providedIn:'root'})
export class showAllEffect{

constructor(private http:HttpClient,private action:Actions,
  private _ServiceService:ServiceService){}

  showAll = createEffect(() => this.action.pipe(
    ofType(showActions.loadRequestAction),
    switchMap(action => {
      return this._ServiceService.getData().pipe(
        map((items: any) => {
          //  console.log("items = ",items);
            return showActions.loadSuccessAction({ items })
        }),
        catchError(error => {
          return of(showActions.loadFailureAction({ error }))
        })
      )
    })
  ))

}
