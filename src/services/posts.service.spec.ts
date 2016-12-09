import { PostInterface, PostsService } from './posts.service';

describe('Posts Service Test Suite', () => {

  it('should test PostInterface', () => {
    let post: PostInterface = {
      id: 1,
      title: 'Post 1 Title',
      summary: 'Post 1 Summary',
      createdTime: 1472091258
    };

    expect(post.id).toEqual(1);
    expect(post.title).toEqual('Post 1 Title');
    expect(post.summary).toEqual('Post 1 Summary');
    expect(post.createdTime).toEqual(1472091258);
  });

  it('should test PostService is defined', () => {
    expect(PostsService).toBeDefined();
  });

  it('should test PostService.getPosts with no id returns all posts', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts();

    expect(posts.length).toEqual(3);
  });

  it('should test PostService.getPosts with an id that exists returns a match', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(2);

    expect(posts.length).toEqual(1);
    expect(posts[0].id).toEqual(2);
    expect(posts[0].title).toEqual('Post 2 Title');
    expect(posts[0].summary).toEqual('Post 2 Summary');
    expect(posts[0].createdTime).toEqual(1471989627);
  });

  it('should test PostService.getPosts with an id that does not exist returns no matches', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(5);

    expect(posts.length).toEqual(0);
  });

});