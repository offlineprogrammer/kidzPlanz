import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KidsService } from '../services/kids.service';
import { KidsServiceMock } from '../mocks';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture < HomePage > ;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [HomePage],

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
    fixture = TestBed.createComponent(HomePage);
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

  it('displays kids containing a name in the list', () => {

    const kidsService = fixture.debugElement.injector.get(KidsService);
    const firstKid = kidsService.kids[0];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("ion-list ion-item"));
    el = de.nativeElement;
    expect(el.textContent).toContain(firstKid.name);
  

  });

});