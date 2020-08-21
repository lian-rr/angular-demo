import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WallComponent} from './components/wall/wall.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: WallComponent
  },
  {
    path: 'posts/:postId/details',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
