import { Injectable } from '@angular/core';
import { Post } from '../components/post/Post';
import { PostDetails } from '../components/post-details/PostDetails';
import { NewComment } from '../components/new-comment/NewComment';
import { Comment } from '../components/comments/Comment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPostDetails(postId: number): Observable<PostDetails> {
    return this.http.get<PostDetails>(`${this.baseUrl}/posts/${postId}`);
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/posts/${postId}/comments`);
  }

  getPostsByAuthor(authorId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/users/${authorId}/posts`);
  }

  postComment(newComment: NewComment, postId: number): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/comments`, {      
      postId: postId,
      email: newComment.email,
      name: newComment.title,
      body: newComment.message
    });
  }
}
