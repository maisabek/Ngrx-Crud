import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { PagesService } from 'src/app/services/pages.service';
import { ServiceService } from 'src/app/services/service.service';
import { deleteRequestAction } from 'src/app/store/actions/delete.action';
import { loadUserRequestAction } from 'src/app/store/actions/getById.action';
import { loadRequestAction } from '../../store/actions/showAll.action';
declare var $:any;
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
   allData:any[]=[];
   filterdUser:any[]=[];

   LoadingDelete:any
  constructor(private _store:Store<any>,public _service:PagesService,private service:ServiceService) {
    _store.subscribe(res=>{
      this.allData=res.show.books;
      this.filterdUser=this.allData;
      this.isLoading=res.show.isLoading
      this.LoadingDelete=res.delete.isLoading
      if(this.LoadingDelete === false){
        this.reloadCurrentPage()
      }
    })
    console.log("this.userData = ",this.userData)
   }
   userData:any
   getById(id:any){
    this._store.dispatch(loadUserRequestAction({ id }))

  }

   isLoading:any=true
  ngOnInit(): void {
    this.load();
    document.getElementById('search_element')?.addEventListener('keyup',function(){
      document.getElementById('sort_btn')?.classList.remove("d-none")
    })
    }
  load(){
    this._store.dispatch(loadRequestAction())
    // this.isLoading=false;
  }

  delete(id:any){
    this._store.dispatch(deleteRequestAction({ id }))
  }
  reloadCurrentPage(){
    window.location.reload()
  }
  search(event:any){
    const value=event.target.value
     this.filterdUser=this.allData.filter((item:any)=>
        item.name.toLowerCase().indexOf(value) !== -1
      )
  }
  sort(event:any){
    console.log(typeof(this.allData),"this.allData = ",this.allData)
   switch(event.target.value){
     case 'Title[A-Z]':{
       this.filterdUser=this.filterdUser.sort(
         (low, high) => high.name.trim().toLowerCase() <= low.name.trim().toLowerCase() ? 1 : -1)
       break;
     }
     case 'Title[Z-A]':{
      this.filterdUser=this.filterdUser.sort((low, high) => high.name.trim().toLowerCase() >= low.name.trim().toLowerCase() ? 1 : -1)
      break;
     }
   }
   return this.filterdUser
  }

}
