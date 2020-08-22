import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDetails } from './PostDetails';
import { Post } from '../post/Post';
import { NewComment } from '../new-comment/NewComment';


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
  ) { }

  addNewComment(newComment: NewComment) {
    console.log(newComment);
    this.post.comments.push({
      id: 5,
      name: newComment.title,
      email: newComment.email,
      body: newComment.message,
      postId: this.post.id
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.post = {
        id: params['postId'] as number,
        authorId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        comments: [
          {
            id: 1,
            name: "Comment title",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            email: "Eliseo@gardner.biz",
            postId: 1,
          }
        ]
      };

      this.posts = [
        {
          id: 1,
          authorId: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          id: 2,
          authorId: 1,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ];
    })
  }

}
