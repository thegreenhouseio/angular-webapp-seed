import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

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
    summary: 'Poat 1 Summary',
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

  constructor(private http: Http) {
  }

  public getPosts(): Array<PostInterface> {
    return this.posts;
  }

}