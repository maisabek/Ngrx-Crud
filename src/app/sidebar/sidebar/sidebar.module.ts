import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAllComponent } from 'src/app/components/show-all/show-all.component';
import { InsertComponent } from 'src/app/components/insert/insert.component';
import { SidebarComponent } from '../sidebar.component';
import { RouterModule } from '@angular/router';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

@NgModule({
  declarations: [
    SidebarComponent,
    ShowAllComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class SidebarModule { }
