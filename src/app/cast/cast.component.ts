import { Component, Input } from '@angular/core';
import { Cast } from '../../model';
import { CastService } from '../_service/cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent {
  @Input() cast: Cast;
  currentUser;

  constructor(private castService: CastService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  solve() {
    this.castService.solveCast(this.cast).subscribe(data => {
      console.log('solved');

      this.cast.solved = true;
    });
  }
}
