import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDetails } from './PostDetails';
import { Post } from '../post/Post';
import { NewComment } from '../new-comment/NewComment';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: PostDetails;

  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService
  ) { }

  addNewComment(newComment: NewComment): void {
    this.post.comments.push(this.backend.postComment(newComment, this.post.id));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.post = this.backend.getPostDetails(params['postId'] as number);

      this.posts = this.backend.getPostsByAuthor(this.post.authorId);
    });
  }

}
