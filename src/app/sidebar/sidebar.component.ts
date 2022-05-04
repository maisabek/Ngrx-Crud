import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InsertComponent } from '../components/insert/insert.component';
import { ShowAllComponent } from '../components/show-all/show-all.component';
import { PagesService } from '../services/pages.service';
import { ServiceService } from '../services/service.service';
declare var $:any
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public _service:PagesService,public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
  }


  ngOnInit(): void {}
  ngAfterViewInit(){
    document.getElementById("side_btn_0")?.classList.add(this._service.allPages[0].class)
  }

  isOpen:any=false
  newWidth:any="col-md-11"
  navWidth:any="96%"
ToggleSide(){
  this.isOpen=!this.isOpen;
  if(this.isOpen == true){
    this.newWidth="col-md-9";
    this._service.tableWidth="86%"
    this.navWidth="81%"

  }else{
    this.newWidth="col-md-11";
    this._service.tableWidth="100%"
    this.navWidth="96%"
  }
}
  currentLang:string

  changeCurrentLang(event:any){
    let selectedLanguage=event.target.value;
    console.log("selectedLanguage = ",selectedLanguage)
    this.translate.use(selectedLanguage)
    localStorage.setItem("currentLanguage",selectedLanguage)
    window.location.reload()
  }

}
