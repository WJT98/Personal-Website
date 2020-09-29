import { Component } from '@angular/core';

import { Post } from './posts/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "WT Personal Site"
  posts: Post[] = [];
  onPostAdded(post) {
    alert("SDFSDF");
    this.posts.push(post);
  }
}
