import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Cast } from '../../model';


@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Cast[]>('http://localhost:3000/api/casts?filter[order]=createdAt%20DESC');
  }

  createCast(formData) {
    return this.http.post('http://localhost:3000/api/casts', formData);
  }
}
