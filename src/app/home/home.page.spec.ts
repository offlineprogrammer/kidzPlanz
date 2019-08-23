import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KidsService } from '../services/kids.service';
import { KidsServiceMock } from '../mocks';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture < HomePage > ;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [HomePage],
        imports:[RouterTestingModule],

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

  it('displays a button to [Add Kid]', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("ion-button"));
    el = de.nativeElement;
    expect(el.textContent).toContain('Add Kid');
  });


  it('The [Add Kid] routes to add-Kid page', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("ion-button"));
    el = de.nativeElement;
    expect(el.getAttribute('ng-reflect-router-link')).toContain('/add-kid');
  });


});