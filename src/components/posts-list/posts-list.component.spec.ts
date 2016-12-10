import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Injectable } from '@angular/core';
import { PostInterface, PostsService } from '../../services/posts.service';
import { PostsListComponent } from './posts-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

//setup our mocks
class MockComponent {}

@Injectable()
class MockPostsService {
  constructor() {}

  public getPosts(postId?: number): Array<PostInterface> {
    return [{
      id: 1,
      title: 'Post 1 Title',
      summary: '<p>Analog is playing at <a href="https://www.facebook.com/tankedatthetank" target="">The Tankard</a> this Saturday, with opening act Sean Daley.  Please come join as we prevew some of the new songs on the album.</p>',
      createdTime: 1472091258
    }, {
      id: 2,
      title: 'Post 2 Title',
      summary: 'Post 2 Summary',
      createdTime: 1471989627
    }, {
      id: 3,
      title: 'Post 3 Title',
      summary: 'Post 3 Summary',
      createdTime: 1471959311
    }];
  }
}

const MOCK_ROUTES: Routes = [{
  path: 'posts',
  component: MockComponent
}];

//TODO test 0 and 1 posts returned from the PostsService scenarios
describe('Posts List Component Test Suite', () => {
  let fixture;
  let component;
  let debugElement;
  let nativeElement;
  let postsService;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [ RouterTestingModule.withRoutes(MOCK_ROUTES) ],
      providers: [{ provide: PostsService, useClass: MockPostsService } ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;

    postsService = TestBed.get(PostsService);

    debugElement = fixture.debugElement.query(By.css('section'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test that maxPosts equals 2', () => {
    expect(component.MAX_POSTS).toEqual(2);
  });

  it('should test that the component has the expected template element(s)', () => {
    expect(nativeElement.querySelector('h2') !== null).toBe(true);
  });

  it('should test that 2 posts are rendered in the component', () => {
    //TODO spy on postsService
    fixture.detectChanges();

    let postHeaders = nativeElement.querySelectorAll('div.post');
    let postTimes = nativeElement.querySelectorAll('h4.post-header');
    let postSummaries = nativeElement.querySelectorAll('details.post-summary');
    let postLinks = nativeElement.querySelectorAll('a.post-link');

    expect(nativeElement.querySelectorAll('div.post').length).toEqual(2);
    expect(postHeaders.length).toEqual(2);
    expect(postTimes.length).toEqual(2);
    expect(postSummaries.length).toEqual(2);
    expect(postLinks.length).toEqual(2);

    //expect(postHeaders[0].textContent).toBe('Post 1 Title');
  });

});

