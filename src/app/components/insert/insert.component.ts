import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import { saveRequestAction } from 'src/app/store/actions/insert.action';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  buildForm:FormGroup;
  constructor(private store:Store<any>,private fb:FormBuilder) {
    store.subscribe((res)=>{
      console.log("res = ",res)
    })
    this.buildForm=this.fb.group({
      name:'',
      email:'',
      password:''
    })
  }

  ngOnInit(): void {
  }
  Insert(){
   this.store.dispatch(saveRequestAction(this.buildForm.value))
  }

}
