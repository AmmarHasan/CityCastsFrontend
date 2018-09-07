import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { User } from '../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mobileQuery: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  cities = [
    'Fulda',
    'Frankfurt',
    'Berlin',
    'Munich'
  ];

  currentUser: User;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
