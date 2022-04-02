import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('App Component',()=>{
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async ()=>{
  await TestBed.configureTestingModule({
    imports:[
      RouterTestingModule
    ],
    declarations:[
      AppComponent
    ]
   }).compileComponents();

    fixture=TestBed.createComponent(AppComponent);
    app=fixture.componentInstance;
  })

  it('should have title ngrx',()=>{
    expect(app.title).toEqual('ngrx')
  })

   // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ngrx-crud app is running!');
  
  // });

})
