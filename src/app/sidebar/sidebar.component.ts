import { Component, OnInit } from '@angular/core';
import { InsertComponent } from '../components/insert/insert.component';
import { ShowAllComponent } from '../components/show-all/show-all.component';
import { PagesService } from '../services/pages.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public _service:PagesService,private service:ServiceService) {
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    document.getElementById("side_btn_0")?.classList.add(this._service.allPages[0].class)
  }
  isOpen:any=false
  newWidth:any="col-md-11"
  navWidth:any="col-md-12"
  ToggleSide(){
  this.isOpen=!this.isOpen;
  if(this.isOpen == true){
    this.newWidth="col-md-9";
    this._service.tableWidth="86%"
    this.navWidth="col-md-10"

  }else{
    this.newWidth="col-md-11";
    this._service.tableWidth="100%"
    this.navWidth="col-md-12"


  }
  }



}
