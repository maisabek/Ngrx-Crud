import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InsertComponent } from '../components/insert/insert.component';
import { ShowAllComponent } from '../components/show-all/show-all.component';
import { UpdateComponent } from '../components/update/update.component';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  tableWidth:any="100%"
allPages:any=[
  {id:0,title:"User List",page:ShowAllComponent,class:"active",url:"list"},
  {id:1,title:"Add User",page:InsertComponent,class:"active",url:"add"},
  {id:2,title:"Update User",page:UpdateComponent,class:"active"},
]

selectedPage:any=ShowAllComponent
selectedItem(id:any){
 this.selectedPage=this.allPages[id].page;
 document.querySelectorAll(".side-header")?.forEach((item)=>{
  item.classList.remove(this.allPages[id].class);
 })
 document.getElementById("side_btn_"+id)?.classList.add(this.allPages[id].class)
 document.getElementById("side_btn_"+id)?.closest(".side_container")?.classList.add("close")
}
}
