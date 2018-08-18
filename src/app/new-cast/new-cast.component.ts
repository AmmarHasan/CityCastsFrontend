import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cast',
  templateUrl: './new-cast.component.html',
  styleUrls: ['./new-cast.component.css']
})
export class NewCastComponent implements OnInit {

  cities = [
    'Fulda',
    'Frankfurt',
    'Berlin',
    'Munich'
  ];

  constructor() { }

  ngOnInit() {
  }

}
