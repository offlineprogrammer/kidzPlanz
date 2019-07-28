import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMoodPage } from './set-mood.page';

describe('SetMoodPage', () => {
  let component: SetMoodPage;
  let fixture: ComponentFixture<SetMoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
