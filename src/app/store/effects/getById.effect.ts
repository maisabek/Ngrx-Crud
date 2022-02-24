import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';
import * as getByIdActions from '../actions/getById.action';

@Injectable({providedIn:'root'})
export class GetByIdEffects {
  constructor(private http:HttpClient,private actions:Actions,private _ServiceService:ServiceService){}

  loadBookRequestEffect$ = createEffect(() => this.actions.pipe(
    ofType(getByIdActions.loadBookRequestAction),
      switchMap(action => {
        return this._ServiceService.getById(action.id).pipe(
          map((book: any) => {
              return getByIdActions.loadBookSuccessAction({ book })
          }),
          catchError((error: any) => {
            return observableOf(getByIdActions.loadBookFailureAction({ error }))
          })
        )
      })
  ))


  }
