import { Component, OnInit } from '@angular/core';
import { Post } from '../post/Post';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  posts: Post[];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    },
    (error) => {
      console.error(`Error retrieving posts: ${error.message}`);
      
    });
  }

}
