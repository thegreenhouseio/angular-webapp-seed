import { Component, OnInit } from '@angular/core';
import { PostInterface, PostsService  } from '../../services/posts.service';

@Component({
  selector: 'seed-posts-list',
  templateUrl: './posts-list.html',
  styleUrls: [ './posts-list.less' ]
})

export class PostsListComponent implements OnInit {
  //TODO make constant - https://thegreenhouse.atlassian.net/browse/AS-246
  //TODO make configurable?
  private MAX_POSTS: number = 2;
  private posts: Array<PostInterface> = [];

  constructor(private PostsService: PostsService){
  }

  ngOnInit(): void {
    this.posts = this.PostsService.getPosts(null);
  }

  getMaxPosts(): number {
    return this.MAX_POSTS;
  }
}