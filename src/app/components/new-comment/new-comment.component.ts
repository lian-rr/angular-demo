import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewComment } from './NewComment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Output()
  newCommentEvent = new EventEmitter<NewComment>();

  newCommentForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl('')
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newCommentEvent.emit({
      email: this.newCommentForm.value.email,
      title: this.newCommentForm.value.title,
      message: this.newCommentForm.value.message

    })
    this.newCommentForm.reset();
  }

}
