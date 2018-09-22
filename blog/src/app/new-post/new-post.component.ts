import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  NewPost: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.NewPost = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  onSavePost() {
    const title = this.NewPost.get('title').value
    const content = this.NewPost.get('content').value;
    this.postService.addPost(new Post(title, content, 0, null));
    this.router.navigate(['/posts']);
  }
}
