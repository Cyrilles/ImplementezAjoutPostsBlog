import {Component, Input, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {
  @Input() MyPost: Post;
  constructor(private postService: PostService) {  }
  ngOnInit() {}
  onLoveIts() {
    this.postService.loveIts(this.MyPost);
  }
  onDontLoveIts() {
    this.postService.DontLoveIts(this.MyPost);
  }
  onRemovePost() {
    this.postService.removePost(this.MyPost);
  }
}


