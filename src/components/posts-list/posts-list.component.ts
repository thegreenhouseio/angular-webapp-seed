import { Component, OnInit } from '@angular/core';
import { PostInterface, PostsService  } from '../../services/posts.service';

@Component({
  selector: 'seed-posts-list',
  templateUrl: './posts-list.html',
  styleUrls: [ './posts-list.scss' ]
})

export class PostsListComponent implements OnInit {
  private readonly maxPosts: number = 2;
  private posts: Array<PostInterface> = [];

  constructor(private PostsService: PostsService){
  }

  ngOnInit(): void {
    this.posts = this.PostsService.getPosts(null);
  }

  getMaxPosts(): number {
    return this.maxPosts;
  }
}