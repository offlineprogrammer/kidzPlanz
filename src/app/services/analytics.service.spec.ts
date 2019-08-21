import { TestBed } from '@angular/core/testing';

import { AnalyticsService } from './analytics.service';

beforeEach(() => {
  (<any>window).ga = jasmine.createSpy('ga');
});

afterEach(() => {
  (<any>window).ga = undefined;
});

/* describe('AnalyticsService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
 
    const service: AnalyticsService = TestBed.get(AnalyticsService);
    expect(service).toBeTruthy();
  });
}); */
