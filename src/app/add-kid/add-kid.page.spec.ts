import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule,NavController } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KidsService } from '../services/kids.service';
import { KidsServiceMock,NavMock } from '../mocks';
import { Router } from '@angular/router';




import { AddKidPage } from './add-kid.page';
import { HomePage } from '../home/home.page';

describe('AddKidPage', () => {
  let component: AddKidPage;
  let fixture: ComponentFixture < AddKidPage > ;
  let de: DebugElement;
  let el: HTMLElement;
  let router: Router;
  

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [AddKidPage, HomePage],
        imports: [ReactiveFormsModule,  RouterTestingModule.withRoutes(
          [{path: 'home', component: HomePage}]
        ), IonicModule],

        providers: [{
            provide: KidsService,
            useClass: KidsServiceMock
          },
          {
            provide: NavController,
            useClass: NavMock
        }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('displays a Form to add kid', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form ion-item ion-input'));
    el = de.nativeElement;
    expect(el.getAttribute('formcontrolname')).toContain('kidname');
  });

  it('the form is valid when the kid name is valid', () => {
    fixture.detectChanges();
    const form = component.addKidForm;
   // console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('Test Kid');
    expect(form.get('kidname').valid).toEqual(true);
    expect(form.valid).toEqual(true);
  });

  it('the form is NOT valid when the kid name is NOT valid', () => {
    fixture.detectChanges();
    const form = component.addKidForm;
   // console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('1');
    expect(form.get('kidname').valid).toEqual(false);
    expect(form.valid).toEqual(false);
  });

  it('the form is NOT valid when the kid name Empty', () => {
    fixture.detectChanges();
    const form = component.addKidForm;
    // console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('');
    expect(form.get('kidname').valid).toEqual(false);
    expect(form.valid).toEqual(false);
  });

  it('You can click [Add Kid] when the form is valid ', () => {
    fixture.detectChanges();
    const form = component.addKidForm;
    // console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('Test Kid');
    expect(form.get('kidname').valid).toEqual(true);
    expect(form.valid).toEqual(true);

    spyOn(console, 'log');



    component.addKid();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();

  });


  it('HomePage screen will be displayed when adding a new kid ', () => {
    fixture.detectChanges();
    const form = component.addKidForm;
    const navCtrl =  fixture.debugElement.injector.get(NavController);

    
    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('Test Kid');
    expect(form.get('kidname').valid).toEqual(true);
    expect(form.valid).toEqual(true);

  
    spyOn(navCtrl , 'navigateBack');
    component.addKid();
    fixture.detectChanges();
    expect(navCtrl.navigateBack).toHaveBeenCalledWith('/home'); 

  });



});

