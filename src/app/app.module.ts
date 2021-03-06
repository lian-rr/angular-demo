import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallComponent } from './components/wall/wall.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';

import { BackendService } from './services/backend.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    NewCommentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
