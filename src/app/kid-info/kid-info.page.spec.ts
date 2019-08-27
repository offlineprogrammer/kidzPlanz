import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { KidInfoPage } from './kid-info.page';
import { KidsServiceMock } from '../mocks';
import { KidsService } from '../services/kids.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

describe('KidInfoPage', () => {
  let component: KidInfoPage;
  let fixture: ComponentFixture<KidInfoPage>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, IonicModule],
      declarations: [ KidInfoPage ],
      providers: [{
        provide: KidsService,
        useClass: KidsServiceMock
      },
      { provide: ActivatedRoute, useValue: {snapshot: {params: {id: '1'}}}}
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(KidInfoPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should receive the Kid Id ', () => {
    expect(component.mykidId).toEqual('1');
  });


  it('It should get the kid details for the passed Id ', async(() => {

    // const kidsService = fixture.debugElement.injector.get(KidsService);
    // kidsService.load();
     console.log('component.kid');
   //  tick();
     fixture.whenStable().then(() => {
    // This is called when ALL pending promises have been resolved
    fixture.detectChanges();
    console.log(component.kid.id);
    expect(component.kid.id).toEqual('1');
    expect(component.kid.name).toEqual('myKid');
    expect(component.kid.photo).toEqual('myphoto');

});

 
   }));


});
