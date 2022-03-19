import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',loadChildren:()=>import('../app/components/show-all/list/list.module').then((m)=>m.ListModule)},
  {path:'update/:id',loadChildren:()=>import('../app/components/update/update/update.module').then((m)=>m.UpdateModule)},
  {path:'add',loadChildren:()=>import('../app/components/insert/insert/insert.module').then((m)=>m.InsertModule)},
  {path:'camera',component:CameraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
