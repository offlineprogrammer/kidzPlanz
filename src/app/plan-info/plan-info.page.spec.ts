import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { PlanInfoPage } from './plan-info.page';
import { KidsServiceMock, ModalControllerMock } from '../mocks';
import { KidsService } from '../services/kids.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('PlanInfoPage', () => {
  let component: PlanInfoPage;
  let fixture: ComponentFixture<PlanInfoPage>;
  let de: DebugElement;
  let el: HTMLElement;

  let modalSpy = jasmine.createSpyObj('Modal', ['present','onDidDismiss']);
  let modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalCtrlSpy.create.and.callFake(function() {
      return modalSpy;
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, IonicModule, FormsModule],
      declarations: [ PlanInfoPage ],
      providers: [{
        provide: KidsService,
        useClass: KidsServiceMock
      },
      { provide: ActivatedRoute, useValue: {snapshot: {params: {kid_id: '1', plan_id: '1'}}}},
      {provide: ModalController, useClass: ModalControllerMock}
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(PlanInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should receive the Kid Id ', () => {
    expect(component.kid_Id).toEqual('1');
  });

  it('it should receive the Plan Id ', () => {
    expect(component.plan_Id).toEqual('1');
  });

  it('it should receive the Plan Details ', async(() => {
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    expect(component.plan.name).toEqual('myplan');
    expect(component.plan.photo).toEqual('planphoto');
  });
}));

  it('displays a list of Taskz', async(() => {
  fixture.whenStable().then(() => {
  fixture.detectChanges();
  de = fixture.debugElement.query(By.css('ion-list ion-item ion-label'));
  el = de.nativeElement;
  expect(el.textContent).toEqual('mytask');
});
}));

  it('it should have a button to set the Mood', async(() => {
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('ion-content ion-card ion-button'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Set Mood');
});
}));

  it('Set Mood button should call presentModal', async(() => {
  spyOn(component, 'presentModal');
  const button = fixture.debugElement.nativeElement.querySelector('ion-content ion-card ion-button');
  button.click();
  fixture.whenStable().then(() => {
    expect(component.presentModal).toHaveBeenCalled();
  });
}));

  it('it should have a button to set the Reward', async(() => {
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.rewardButton'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Set Reward');
});
}));

  it('it should display the Reward image', async(() => {
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.rewardImg'));
    el = de.nativeElement;
    expect(el.getAttribute('ng-reflect-src')).toContain('planreward');
});
}));

  it('Set Reward button should call setReward', async(() => {
  spyOn(component, 'setReward');
  const button = fixture.debugElement.query(By.css('.rewardButton')).nativeElement;
  button.click();
  fixture.whenStable().then(() => {
    expect(component.setReward).toHaveBeenCalled();
  });
}));

 /*  it('setReward should open a Modal', async(() => {
    const modalController: ModalControllerMock = TestBed.get(ModalController);
   // console.log(modalController.component.prototype);
    spyOn(modalController.component, 'present');
    const button = fixture.debugElement.query(By.css('.rewardButton')).nativeElement;
    component.presentModal();
    tick();
    //button.click();
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    expect(modalController.component.present).toHaveBeenCalled();
  });
})); */

  it('setReward should open a Modal', () => {
  const modalController: ModalControllerMock = TestBed.get(ModalController);
  spyOn(modalController, 'create');
  component.setReward();
  expect(modalController.create).toHaveBeenCalled();
});


});
