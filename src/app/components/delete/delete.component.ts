import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { deleteRequestAction } from 'src/app/store/actions/delete.action';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private store:Store<any>,private fb:FormBuilder) {}
  ngOnInit(): void {}
  id:any
  delete(){
    this.store.dispatch(deleteRequestAction(this.id))

  }

}
