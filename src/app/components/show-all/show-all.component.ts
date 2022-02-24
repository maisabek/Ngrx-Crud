import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { loadRequestAction } from '../../store/actions/showAll.action';
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
   allData:any;
  constructor(private _store:Store<any>) {
    _store.subscribe(res=>{
      this.allData=res.show;
    })
   }

  ngOnInit(): void {
    this.load()

  }
  load(){
    this._store.dispatch(loadRequestAction())
  }

}
