import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FooterComponent } from './footer.component';

describe('Footer Component Test Suite', () => {
  let fixture;
  let component;
  let debugElement;
  let nativeElement;

  beforeAll( ()=> {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ FooterComponent ], // declare the test component
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance; // FooterComponent test instance

    debugElement = fixture.debugElement.query(By.css('footer'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test getCopyRight() returns expected date string', () => {
    let currentYear = new Date().getFullYear();
    let copyright = component.getCopyright();

    expect(copyright).toEqual('2014 - ' + currentYear);
  });

  it('should test that the component has the expected template element(s)', () => {
    expect(nativeElement.querySelector('p') === null).toBe(false);
    expect(nativeElement.querySelector('p a') === null).toBe(false);
  });

  it('should test that the component has the correct copyright text before / after intialization', () => {
    let currentYear = new Date().getFullYear();
    let copyrightTextElement = nativeElement.querySelector('p');

    expect(copyrightTextElement.textContent).toContain('The Greenhouse');

    fixture.detectChanges();

    expect(copyrightTextElement.textContent).toContain('2014 - ' + currentYear + ' - The Greenhouse');
  });

});