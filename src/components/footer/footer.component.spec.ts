import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FooterComponent } from './footer.component';

describe('Footer Component Test Suite', () => {
  let fixture;
  let component;
  let debugElement;
  let nativeElement;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('footer'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test getCopyRight() returns expected date string', () => {
    let currentYear = new Date().getFullYear();
    let copyright = component.getCopyright();

    expect(copyright).toEqual('2014 - ' + currentYear);
  });

  it('should test that the component has the expected template element(s)', () => {
    expect(nativeElement.querySelectorAll('p').length).toBe(1);
    expect(nativeElement.querySelectorAll('p a').length).toBe(1);
  });

  it('should test that the component has the correct copyright text after intialization', () => {
    let currentYear = new Date().getFullYear();
    let copyrightTextElement = nativeElement.querySelector('p');

    fixture.detectChanges();

    expect(copyrightTextElement.textContent).toContain('2014 - ' + currentYear + ' - The Greenhouse');
  });

});