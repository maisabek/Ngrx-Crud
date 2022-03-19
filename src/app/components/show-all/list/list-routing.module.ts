import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllComponent } from '../show-all.component';

const routes: Routes = [
  {path:'',component:ShowAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
