import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLang:string
  constructor(public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
  }

  ngOnInit(): void {
  }

}
