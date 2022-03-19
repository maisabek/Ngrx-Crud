import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ShowAllComponent } from '../show-all.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowAllComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
