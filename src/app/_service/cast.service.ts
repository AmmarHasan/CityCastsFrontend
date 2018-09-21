import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Cast, User } from '../../model';


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

  solveCast(cast: Cast) {
    cast.solved = true;
    return this.http.put('http://localhost:3000/api/casts', cast);
  }

  upvote(cast: Cast, user: User) {
    cast.upvote.push(user);
    return this.http.put('http://localhost:3000/api/casts', cast);
  }

  downvote(cast: Cast, user: User) {
    const index = cast.upvote.findIndex(u => u.username === user.username);
    if (index > -1) {
      cast.upvote.splice(index, 1);
    }
    return this.http.put('http://localhost:3000/api/casts', cast);
  }
}
