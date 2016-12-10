import { PostInterface, PostsService } from './posts.service';

describe('Posts Service Test Suite', () => {

  it('should test PostInterface', () => {
    let post: PostInterface = {
      id: 1,
      title: 'Post 1 Title',
      summary: 'Post 1 Summary',
      createdTime: 1472091258
    };

    expect(post.id).toBe(1);
    expect(post.title).toBe('Post 1 Title');
    expect(post.summary).toBe('Post 1 Summary');
    expect(post.createdTime).toBe(1472091258);
  });

  it('should test PostService is defined', () => {
    expect(PostsService).toBeDefined();
  });

  it('should test PostService.getPosts with no id returns all posts', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts();

    expect(posts.length).toBe(3);
  });

  it('should test PostService.getPosts with an id that exists returns a match', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(2);

    expect(posts.length).toBe(1);
    expect(posts[0].id).toBe(2);
    expect(posts[0].title).toBe('Post 2 Title');
    expect(posts[0].summary).toBe('Post 2 Summary');
    expect(posts[0].createdTime).toBe(1471989627);
  });

  it('should test PostService.getPosts with an id that does not exist returns no matches', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(5);

    expect(posts.length).toBe(0);
  });

});