import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'side',loadChildren:()=>import('../app/sidebar/sidebar/sidebar.module').then((m)=>m.SidebarModule)},
  {path:'update/:id',loadChildren:()=>import('../app/components/update/update/update.module').then((m)=>m.UpdateModule)},
  {path:'camera',component:CameraComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
