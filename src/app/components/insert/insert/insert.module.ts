import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertRoutingModule } from './insert-routing.module';
import { InsertComponent } from '../insert.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InsertComponent
  ],
  imports: [
    CommonModule,
    InsertRoutingModule,
    ReactiveFormsModule

  ]
})
export class InsertModule { }
