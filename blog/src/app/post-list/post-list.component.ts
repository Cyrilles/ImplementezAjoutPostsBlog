import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts: Post[];
  PostsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
      this.PostsSubscription = this.postService.postsSubject.subscribe(
        (posts: Post[]) => {
          this.Posts = posts;
        }
      );
      this.postService.emitPosts();
  }
  OnDestroy() {
    this.PostsSubscription.unsubscribe();
  }
}
