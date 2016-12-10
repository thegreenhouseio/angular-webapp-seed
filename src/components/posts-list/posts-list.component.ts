import { Component, OnInit } from '@angular/core';
import { PostInterface, PostsService  } from '../../services/posts.service';

@Component({
  selector: 'seed-posts-list',
  templateUrl: './posts-list.html',
  styleUrls: [ './posts-list.scss' ]
})

export class PostsListComponent implements OnInit {
  private posts: Array<PostInterface> = [];
  public readonly maxPosts: number = 2;

  constructor(private PostsService: PostsService){
  }

  ngOnInit(): void {
    this.posts = this.PostsService.getPosts();
  }

  public getPosts(): Array<PostInterface> {
    return this.posts;
  }
}