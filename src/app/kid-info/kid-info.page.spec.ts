import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should set the label', () => {
    component.ngOnInit();
    console.log(component.route.snapshot.params);
    const kidsService = fixture.debugElement.injector.get(KidsService);
    kidsService.load();
    console.log('component.kid');
    console.log(component.kid);
    //this.getBranchTickets().then(data => console.log(data));
    expect(component.mykidId).toEqual('1');

    //useValue: { paramMap: Observable.of(convertToParamMap({id: 1})) }
  });


});
