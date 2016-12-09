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

  it('should test PostService to be defined', () => {
    expect(PostsService).toBeDefined();
  });

  it('should test PostService.getPosts all', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts();

    expect(posts.length).toEqual(3);
  });

  it('should test PostService.getPosts by id that exists', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(1);

    expect(posts.length).toEqual(1);
  });

  it('should test PostService.getPosts by id that doesn not exist', () => {
    let posts: Array<PostInterface> = new PostsService().getPosts(5);

    expect(posts.length).toEqual(0);
  });

});