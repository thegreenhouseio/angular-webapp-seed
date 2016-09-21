import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostInterface, PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-detailed',
  templateUrl: './post-details.html',
  styleUrls: [ './posts.scss' ]
})

export class PostDetailsViewComponent extends OnInit {
  private activeRouteSubscriber: any;
  private post: PostInterface;

  constructor(private ActivatedRoute: ActivatedRoute, private PostsService: PostsService) {
    super();
  }

  ngOnInit(): void {
    this.activeRouteSubscriber = this.ActivatedRoute.params.subscribe((params) => {
      let postId: number = parseInt(params['id'], 10);

      this.post = this.PostsService.getPosts(postId)[0];
    });
  }

  ngOnDestroy(): void {
    this.activeRouteSubscriber.unsubscribe();
  }

  public getPostDetails(): PostInterface {
    return this.post;
  }

}