import { Http } from '@angular/http';
import { PostInterface, PostsService } from './posts.service';

describe('First Test Suite', () => {

  it('should test PostInterface', () => {
    let post: PostInterface = {
      id: 1,
      title: 'Post 1 Title',
      summary: 'Post 1 Summary',
      createdTime: 1472091258
    };

    expect(post.title).toEqual('Post 1 Title');
  });

  it('should test PostService toBeDefined', () => {
    expect(PostsService).toBeDefined();
  });

  it('should test PostService get', () => {
    let posts: Array<PostInterface> = new PostsService(Http).getPosts(null);

    expect(PostsService).toBeDefined();
  });

});