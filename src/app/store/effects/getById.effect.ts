import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';
import { loadUserFailureAction, loadUserRequestAction, loadUserSuccessAction } from '../actions/getById.action';
@Injectable({providedIn:'root'})
export class GetByIdEffects {
  constructor(private http:HttpClient,private actions:Actions,private _ServiceService:ServiceService){}

  loadBookRequestEffect$ = createEffect(() => this.actions.pipe(
    ofType(loadUserRequestAction),
      switchMap(action => {
        console.log("action = ",action)
        return this._ServiceService.getById(action.id).pipe(
          map((user: any) => {
              console.log("user = ",user)
              return loadUserSuccessAction({ user })
          }),
          catchError((error: any) => {
            return observableOf(loadUserFailureAction({ error }))
          })
        )
      })
  ))


  }
