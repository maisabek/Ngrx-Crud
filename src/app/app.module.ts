import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { saveReducer } from './store/reducers/insert.reducer';
import { showReducer } from './store/reducers/showAll.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { showAllEffect } from './store/effects/showAll.effect';
import { InsertEffect } from './store/effects/insert.effect';
import { updateReducer } from './store/reducers/update.reducer';
import { deleteReducer } from './store/reducers/delete.reducer';
import { DeleteEffect } from './store/effects/delete.effect';
import { UpdateEffect } from './store/effects/update.effect';
import { getByIdReducer } from './store/reducers/getById.reducer';
import { GetByIdEffects } from './store/effects/getById.effect';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InsertModule } from './components/insert/insert/insert.module';
import { ListModule } from './components/show-all/list/list.module';
import { UpdateModule } from './components/update/update/update.module';
import { CameraComponent } from './components/camera/camera.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InsertModule,
    ListModule,
    UpdateModule,
    WebcamModule,
    StoreModule.forRoot({show:showReducer,save:saveReducer,
                         update:updateReducer,delete:deleteReducer,
                         getById:getByIdReducer}),
    EffectsModule.forRoot([showAllEffect,InsertEffect,UpdateEffect,DeleteEffect,GetByIdEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
