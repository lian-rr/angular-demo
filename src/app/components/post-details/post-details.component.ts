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

  post: PostDetails = new PostDetails();

  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService
  ) { }

  addNewComment(newComment: NewComment): void {
    this.backend.postComment(newComment, this.post.id).subscribe((comment) => {
      this.post.comments.push({...comment});
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let postId = params['postId'] as number;

      this.backend.getPostDetails(postId).subscribe((post) => {
        this.post = post;
        this.post.comments = [];

        this.backend.getPostsByAuthor(post.userId).subscribe((posts) => {
          this.posts = posts;
        }, (error) => {
          console.error(`Error getting other posts by same author. Error: ${error.message}`);
        });
      }, (error) => {
        console.error(`Error getting the post details for post with id: ${postId}. ${error.message}`);
      });

      this.backend.getCommentsByPostId(postId).subscribe((comments) => {
        this.post.comments = comments;
      }, (error) => {
        console.error(`Error getting the comments for post with id: ${postId}. ${error.message}`);
      });
    });
  }

}
