import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  /*posts = [
    { title: "First Post", content: "This is the first post's content" },
    { title: "Second Post", content: "This is the Second post's content" },
    { title: "Third Post", content: "This is the Third post's content" }
  ]*/

  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
