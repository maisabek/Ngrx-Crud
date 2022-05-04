import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang:string
  constructor(public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
  }

  ngOnInit(): void {
  }
  changeCurrentLang(event:any){
    let selectedLanguage=event.target.value;
    console.log("selectedLanguage = ",selectedLanguage)
    this.translate.use(selectedLanguage)
    localStorage.setItem("currentLanguage",selectedLanguage)
  }

}
