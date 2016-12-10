import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { PostsListComponent } from './posts-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

describe('Posts List Component Test Suite', () => {
  class MockComponent {}

  const MOCK_ROUTES: Routes = [{
    path: 'posts',
    component: MockComponent
  }];

  let fixture;
  let component;
  let debugElement;
  let nativeElement;

  beforeAll( ()=> {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [ RouterTestingModule.withRoutes(MOCK_ROUTES) ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('footer'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test that maxPosts is 2', () => {
    expect(component.maxPosts).toEqual(2);
  });

});