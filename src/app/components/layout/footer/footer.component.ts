import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentLang:string;
  left:any="'left'|translate"
  constructor(public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
  }

  ngOnInit(): void {}
  changeCurrentLang(event:any){
    let selectedLanguage=event.target.value;
    this.translate.use(selectedLanguage)
    localStorage.setItem("currentLanguage",selectedLanguage)
    window.location.reload()
  }

}
