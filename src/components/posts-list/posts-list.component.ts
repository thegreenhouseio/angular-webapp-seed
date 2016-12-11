import { Component, OnInit } from '@angular/core';
import { PostInterface, PostsService  } from '../../services/posts.service';

@Component({
  selector: 'seed-posts-list',
  templateUrl: './posts-list.html',
  styleUrls: [ './posts-list.scss' ]
})

export class PostsListComponent implements OnInit {
  public readonly MAX_POSTS: number = 2;
  private posts: Array<PostInterface> = [];

  constructor(private PostsService: PostsService){
  }

  ngOnInit(): void {
    this.posts = this.PostsService.getPosts();
  }

  public getPosts(): Array<PostInterface> {
    return this.posts;
  }
}