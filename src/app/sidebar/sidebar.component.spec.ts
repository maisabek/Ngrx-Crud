import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { PagesService } from "../services/pages.service";
import { SidebarComponent } from "./sidebar.component";

describe('SideBar Component',()=>{
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let service:PagesService;
    beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(PagesService)
  });

it('ToggleSide should return newWidth & navWidth & tableWidth',()=>{
if(component.isOpen == true){
expect(component.navWidth).toEqual("81%")
expect(component.newWidth).toEqual("col-md-9")
expect(service.tableWidth).toEqual("86%")
}else{
expect(component.navWidth).toEqual("96%")
expect(component.newWidth).toEqual("col-md-11")
expect(service.tableWidth).toEqual("100%")
}
})

})







