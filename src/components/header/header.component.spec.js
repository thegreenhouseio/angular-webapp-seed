import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

class MockComponent {}

const MOCK_ROUTES = [{
  path: 'home',
  component: MockComponent
}];

// TODO test image banner?
describe('Header Component Test Suite', () => {
  let fixture;
  let debugElement;
  let nativeElement;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule.withRoutes(MOCK_ROUTES)]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('header'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test that the component has the expected template elements', () => {
    expect(nativeElement.querySelectorAll('h2.hidden-md-up.header-text').length).toBe(1);
    expect(nativeElement.querySelectorAll('div.hidden-sm-down.header-banner').length).toBe(1);
    expect(nativeElement.querySelectorAll('p.io-text').length).toBe(1);
  });

  it('should test that the header text element has the expected content', () => {
    const headerTextElement = nativeElement.querySelector('h2.header-text');

    expect(headerTextElement.textContent).toBe('The Greenhouse');
  });

  it('should test that the io text element has the expected content', () => {
    const mobileHeaderTextElement = nativeElement.querySelector('p.io-text');

    expect(mobileHeaderTextElement.textContent).toBe('.io');
  });

});