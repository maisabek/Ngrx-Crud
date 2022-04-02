import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from 'src/app/components/insert/insert.component';
import { ShowAllComponent } from 'src/app/components/show-all/show-all.component';
import { SidebarComponent } from '../sidebar.component';

const routes: Routes = [
  { path:'',component:SidebarComponent,children:[
    {path:'',component:ShowAllComponent,outlet:'sidebar'},
    ]
  },
  {path:'adduser',component:InsertComponent,outlet:'sidebar'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
