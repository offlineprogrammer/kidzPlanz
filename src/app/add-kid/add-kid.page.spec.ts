import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KidsService } from '../services/kids.service';
import { KidsServiceMock } from '../mocks';



import { AddKidPage } from './add-kid.page';

describe('AddKidPage', () => {
  let component: AddKidPage;
  let fixture: ComponentFixture < AddKidPage > ;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [AddKidPage],
        imports: [ReactiveFormsModule,RouterTestingModule,IonicModule],

        providers: [{
            provide: KidsService,
            useClass: KidsServiceMock
          }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidPage);
    component = fixture.componentInstance;
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
    de = fixture.debugElement.query(By.css("form ion-item ion-input"));
    el = de.nativeElement;
    expect(el.getAttribute('formcontrolname')).toContain('kidname');
  });

  it('the form is valid when the kid name is valid', () => {
    fixture.detectChanges();
    let form = component.addKidForm;
    console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('Test Kid');
    expect(form.get('kidname').valid).toEqual(true);
    expect(form.valid).toEqual(true);
  });

  it('the form is NOT valid when the kid name is NOT valid', () => {
    fixture.detectChanges();
    let form = component.addKidForm;
    console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('1');
    expect(form.get('kidname').valid).toEqual(false);
    expect(form.valid).toEqual(false);
  });

  it('the form is NOT valid when the kid name Empty', () => {
    fixture.detectChanges();
    let form = component.addKidForm;
    console.log(form);

    expect(form.get('kidname').valid).toEqual(false);
    form.get('kidname').setValue('');
    expect(form.get('kidname').valid).toEqual(false);
    expect(form.valid).toEqual(false);
  });

  


});

