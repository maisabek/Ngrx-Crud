import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAllComponent } from 'src/app/components/show-all/show-all.component';
import { InsertComponent } from 'src/app/components/insert/insert.component';
import { SidebarComponent } from '../sidebar.component';


@NgModule({
  declarations: [
    ShowAllComponent,
    InsertComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SidebarModule { }
