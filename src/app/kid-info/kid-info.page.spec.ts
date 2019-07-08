import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidInfoPage } from './kid-info.page';

describe('KidInfoPage', () => {
  let component: KidInfoPage;
  let fixture: ComponentFixture<KidInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidInfoPage ],
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
});
