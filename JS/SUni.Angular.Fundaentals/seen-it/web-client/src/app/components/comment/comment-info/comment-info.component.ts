import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommentInfo } from '../../shared/models/comment-info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {

  @Input() commentInfo: CommentInfo
  @Output() deleteCommentEmitter = new EventEmitter<string>(); 

  isAuthor(commentInfo: Object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }
}
