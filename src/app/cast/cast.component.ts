import { Component, Input } from '@angular/core';
import { Cast, User } from '../../model';
import { CastService } from '../_service/cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent {
  @Input() cast: Cast;
  currentUser: User;

  constructor(private castService: CastService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  solve() {
    this.castService.solveCast(this.cast).subscribe(data => {
      this.cast.solved = true;
    });
  }

  hasUpvoted() {
    return this.cast.upvote.filter(user => user.username === this.currentUser.username).length;
  }

  upvote() {
    this.castService.upvote(this.cast, this.currentUser);
  }

  downvote() {
    this.castService.downvote(this.cast, this.currentUser);
  }
}
