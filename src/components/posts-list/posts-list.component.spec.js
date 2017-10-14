import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { PostsService } from '../../services/posts.service';
import { PostsListComponent } from './posts-list.component';
import { RouterTestingModule } from '@angular/router/testing';

// setup our mocks
class MockComponent {}

class MockPostsService {
  constructor() {}

  getPosts() {
    return [{
      id: 1,
      title: 'Post 1 Title',
      summary: '<p>Analog is playing at <a href="https://www.facebook.com/tankedatthetank" target="">The Tankard</a> this Saturday, with opening act Sean Daley.  Please come join as we prevew some of the new songs on the album.</p>', // eslint-disable-line max-len
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

const MOCK_ROUTES = [{
  path: 'posts',
  component: MockComponent
}];

// TODO test 0 and 1 posts returned from the PostsService scenarios
describe('Posts List Component Test Suite', () => {
  let fixture;
  let component;
  let debugElement;
  let nativeElement;
  // let postsService;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      imports: [RouterTestingModule.withRoutes(MOCK_ROUTES)],
      providers: [{ provide: PostsService, useClass: MockPostsService }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;

    // postsService = TestBed.get(PostsService);

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
    // TODO spy on postsService
    // spyOn(postsService, 'getPosts');
    fixture.detectChanges();

    const componentTitle = nativeElement.querySelectorAll('h2');
    const postContainer = nativeElement.querySelectorAll('div.post');
    const postHeaders = nativeElement.querySelectorAll('h4.post-header');
    const postTimes = nativeElement.querySelectorAll('span.post-time');
    const postSummaries = nativeElement.querySelectorAll('details.post-summary');
    const postLinks = nativeElement.querySelectorAll('a.post-link');

    expect(componentTitle.length).toBe(1);
    expect(postContainer.length).toBe(2);
    expect(postHeaders.length).toBe(2);
    expect(postTimes.length).toBe(2);
    expect(postSummaries.length).toBe(2);
    expect(postLinks.length).toBe(2);

    expect(componentTitle[0].textContent).toBe('Latest Posts');

    expect(postHeaders[0].textContent).toContain('Post 1 Title');
    // TODO https://github.com/thegreenhouseio/angular2-webpack-seed/issues/46
    // expect(postTimes[0].textContent).toBe('Wednesday, August 24, 2016, 10:14 PM');
    expect(postSummaries[0].textContent).toBe('Analog is playing at The Tankard this Saturday, with opening act Sean Daley.  Please come join as we prevew some of the new songs on the album.');
    expect(postLinks[0].href).toContain('/posts/1');  // TODO account for host and use toBe?
    expect(postLinks[0].textContent).toBe('Click for full details');

    expect(postHeaders[1].textContent).toContain('Post 2 Title');
    // TODO https://github.com/thegreenhouseio/angular2-webpack-seed/issues/46
    // expect(postTimes[1].textContent).toBe('Tuesday, August 23, 2016, 6:00 PM');
    expect(postSummaries[1].textContent).toBe('Post 2 Summary');
    expect(postLinks[1].href).toContain('/posts/2');  // TODO account for host and use toBe?
    expect(postLinks[1].textContent).toBe('Click for full details');
  });

});