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
    console.log(el);
    expect(el.getAttribute('formcontrolname')).toContain('kidname');
    
  });
  
});

