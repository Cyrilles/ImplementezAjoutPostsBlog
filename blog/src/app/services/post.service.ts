import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  addPost(p: Post) {
    this.posts.push(p);
    this.savePosts();
    this.emitPosts();
  }
  removePost(p: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (pElt) => {
          if (pElt === p) {
            return true;
          }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  loveIts(p: Post) {
    p.loveIts += 1;
    this.savePosts();
    this.emitPosts();
  }
  DontLoveIts(p: Post) {
    p.loveIts -= 1;
    this.savePosts();
    this.emitPosts();
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }
}
