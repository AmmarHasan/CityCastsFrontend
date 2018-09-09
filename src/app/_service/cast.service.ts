import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cast } from '../../model';


@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getAll() {
    // now returns an Observable of Config
    return this.http.get<Cast[]>('http://localhost:3000/api/casts?filter[order]=createdAt%20DESC');
  }
}
