import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import { PagesService } from 'src/app/services/pages.service';
import { saveRequestAction } from 'src/app/store/actions/insert.action';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  buildForm:FormGroup;
  isLoading:any=true;
  constructor(private store:Store<any>,private fb:FormBuilder,public _service:PagesService) {
    store.subscribe((res)=>{
      this.isLoading=res.save.isLoading
    })
    this.buildForm=this.fb.group({
      name:[''],
      phone:'',
      email:'',
      password:'',
      country:'',
      national_number:'',
      birthday:'',
      canEdit:'',
      canView:''
    })
  }

  ngOnInit(): void {

  }
  Insert(){
   this.store.dispatch(saveRequestAction(this.buildForm.value))
   this.buildForm.reset();
   // initial بالقيمة ال value ال update تانى و validator عشان يرجع ال
   this.buildForm.updateValueAndValidity();
  //  if(this.isLoading == false){
  //   // this._service.selectedItem(0);
  //  }
  }
  reloadCurrentPage(){
    window.location.reload()
  }
}
