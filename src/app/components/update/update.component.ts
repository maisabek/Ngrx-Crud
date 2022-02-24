import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateRequestAction } from 'src/app/store/actions/update.action';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  buildForm:FormGroup;
  constructor(private store:Store<any>,private fb:FormBuilder) {
    this.buildForm=this.fb.group({
      name:'',
      email:'',
      password:''
    })
  }

  ngOnInit(): void {
  }
  update(){
   this.store.dispatch(updateRequestAction(this.buildForm.value))
  }

}
