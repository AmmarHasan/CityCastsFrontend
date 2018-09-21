import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Cast, User } from '../../model';
import { CastService } from '../_service/cast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobileQuery: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  cities = [
    'Fulda',
    'Frankfurt',
    'Berlin',
    'Munich'
  ];
  casts: Observable<Cast[]>;
  currentUser: User;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private castService: CastService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.casts = this.castService.getAll();
  }
}
