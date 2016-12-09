import { Injectable } from '@angular/core';

export interface PostInterface {
  id?: number,
  title: string,
  summary: string
  createdTime: number
}

@Injectable()
export class PostsService {
  private posts: Array<PostInterface> = [{
    id: 1,
    title: 'Post 1 Title',
    summary: '<p>Analog is playing at <a href="https://www.facebook.com/tankedatthetank" target="">The Tankard</a> this Saturday, with opening act Sean Daley.  Please come join as we prevew some of the new songs on the album.</p>',
    createdTime: 1472091258
  }, {
    id: 2,
    title: 'Post 2 Title',
    summary: 'Poat 2 Summary',
    createdTime: 1471989627
  }, {
    id: 3,
    title: 'Post 3 Title',
    summary: 'Poat 3 Summary',
    createdTime: 1471959311
  }];

  constructor() {
  }

  public getPosts(postId?: number): Array<PostInterface> {

    if(postId){
      let found = false;

      for(let i = 0, l = this.posts.length; i < l; i++){
        if(this.posts[i].id === postId){
          return [this.posts[i]];
        }
      }

      if(!found){
        return [];
      }
    }

    return this.posts;
  }

}