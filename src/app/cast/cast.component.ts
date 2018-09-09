import { Component, Input } from '@angular/core';
import { Cast } from '../../model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent {
  @Input() cast: Cast;
  today;

  constructor() { }
}
