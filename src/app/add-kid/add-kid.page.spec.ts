import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { AddKidPage } from './add-kid.page';

describe('AddKidPage', () => {
  let component: AddKidPage;
  let fixture: ComponentFixture<AddKidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,RouterTestingModule],
      declarations: [ AddKidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
