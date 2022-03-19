import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServiceService } from 'src/app/services/service.service';
import {  loadUserRequestAction } from 'src/app/store/actions/getById.action';
import { updateRequestAction } from 'src/app/store/actions/update.action';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  buildForm:FormGroup;
  userData:any;
  isLoading:any;
  constructor(private store:Store<any>,private fb:FormBuilder,private route:Router,
    public _service:ServiceService,private activeRoute:ActivatedRoute) {
      store.subscribe(res=>{
        this.isLoading=res.update.isLoading
      })
      this.buildForm=this.fb.group({
        name:'',
        phone:'',
        email:'',
        password:'',
        country:'',
        national_number:'',
        birthday:'',
        canEdit:'',
        canView:''
      })
      this.getId();
  }
  ngOnInit(): void {
    this.getId();
    this.getUserById()
  }
  _id:any
  getId(){
   this.activeRoute.params.subscribe((res)=>{
     this._id=res['id']
   })
  }
  getUserById(){
    this._service.getById(this._id).subscribe((res:any)=>{
      this.buildForm.patchValue(res)
    })
  }

  update(){
   this.store.dispatch(updateRequestAction({item:this.buildForm.value,id:this._id}))
  }

}
