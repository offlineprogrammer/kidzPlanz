import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { PlanInfoPage } from './plan-info.page';
import { KidsServiceMock } from '../mocks';
import { KidsService } from '../services/kids.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('PlanInfoPage', () => {
  let component: PlanInfoPage;
  let fixture: ComponentFixture<PlanInfoPage>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, IonicModule, FormsModule],
      declarations: [ PlanInfoPage ],
      providers: [{
        provide: KidsService,
        useClass: KidsServiceMock
      },
      { provide: ActivatedRoute, useValue: {snapshot: {params: {kid_id: '1', plan_id: '1'}}}}
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should receive the Kid Id ', () => {
    expect(component.kid_Id).toEqual('1');
  });

  it('it should receive the Plan Id ', () => {
    expect(component.plan_Id).toEqual('1');
  });



  it('it should receive the Plan Details ', async(() => {

    // const kidsService = fixture.debugElement.injector.get(KidsService);
    // kidsService.load();
     console.log('component.plan');
   //  tick();
     fixture.whenStable().then(() => {
    // This is called when ALL pending promises have been resolved
    fixture.detectChanges();
    expect(component.plan.name).toEqual('myplan');
    expect(component.plan.photo).toEqual('planphoto');

});
}));

});
