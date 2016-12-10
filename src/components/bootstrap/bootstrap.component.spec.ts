import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BootstrapComponent } from './bootstrap.component';
import { HeaderComponent } from '../header/header.component';

describe('Bootstrap Component Test Suite', () => {
  let fixture;
  let component;
  let debugElement;
  let nativeElement;

  beforeAll( ()=> {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapComponent ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapComponent);
    component = fixture.componentInstance;

    //debugElement = fixture.debugElement.query(By.css('div.container'));
    //nativeElement = debugElement.nativeElement;
  });

  xit('should test that the component has the expected template element(s)', () => {
    expect(fixture.debugElement.query(By.directive(HeaderComponent))).toBe(true);

    //expect(nativeElement.querySelector('router-outlet') === null).toBe(false);
    //expect(nativeElement.querySelector('seed-header') === null).toBe(false);
  });

});