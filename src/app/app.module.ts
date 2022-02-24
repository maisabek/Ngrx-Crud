import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './components/insert/insert.component';
import {StoreModule} from '@ngrx/store';
import { saveReducer } from './store/reducers/insert.reducer';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { showReducer } from './store/reducers/showAll.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { showAllEffect } from './store/effects/showAll.effect';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertEffect } from './store/effects/insert.effect';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { updateReducer } from './store/reducers/update.reducer';
import { deleteReducer } from './store/reducers/delete.reducer';
import { DeleteEffect } from './store/effects/delete.effect';
import { UpdateEffect } from './store/effects/update.effect';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { getByIdReducer } from './store/reducers/getById.reducer';
import { GetByIdEffects } from './store/effects/getById.effect';
@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ShowAllComponent,
    UpdateComponent,
    DeleteComponent,
    GetByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({show:showReducer,save:saveReducer,
                         update:updateReducer,delete:deleteReducer,
                         getById:getByIdReducer}),
    EffectsModule.forRoot([showAllEffect,InsertEffect,UpdateEffect,DeleteEffect,GetByIdEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
