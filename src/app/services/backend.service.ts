import { Injectable } from '@angular/core';
import { Post } from '../components/post/Post';
import { PostDetails } from '../components/post-details/PostDetails';
import { NewComment } from '../components/new-comment/NewComment';
import { Comment} from '../components/comments/Comment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }


  getAllPosts(): Post[] {
    return [
      {
        id: 1,
        authorId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        id: 2,
        authorId: 2,
        title: "qui est esse 2",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ]
  }

  getPostDetails(postId: number): PostDetails {
    return {
      id: postId,
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
  }

  getPostsByAuthor(authorId: number): Post[] {
    return [
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
  }

  postComment(newComment: NewComment, postId: number): Comment {
    return {
      id: 5,
      name: newComment.title,
      email: newComment.email,
      body: newComment.message,
      postId: postId
    }
  }
}
