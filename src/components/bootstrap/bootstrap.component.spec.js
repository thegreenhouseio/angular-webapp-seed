import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BootstrapComponent } from './bootstrap.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Bootstrap Component Test Suite', () => {
  let fixture;
  let component;  // eslint-disable-line no-unused-vars
  let debugElement;
  let nativeElement;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('section.container'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test that the component has the expected template elements', () => {
    expect(nativeElement.querySelectorAll('div.row seed-header').length).toBe(1);
    expect(nativeElement.querySelectorAll('div.row router-outlet').length).toBe(1);
    expect(nativeElement.querySelectorAll('div.row seed-footer').length).toBe(1);
  });

});