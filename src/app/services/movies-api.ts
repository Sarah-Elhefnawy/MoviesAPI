import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPI {
  friends: string[] = ['ahmed', 'ali', 'omar']

  options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJiMTkzMjFkODI2ZDQ1NjI3Y2Q1NjdlNzI3NmFjOSIsIm5iZiI6MTc1NTYxNzk4Mi4wOSwic3ViIjoiNjhhNDlhYmU4Y2VjMTU1ZTM4ZDU0Nzk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hMZZAgq8HsvSZPep6Xtcf3fi03PSB4Vy_fn0B9EmgDQ'
    }
  }

  constructor(private _HttpClient: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?language=en-US', this.options)
  }

  getMovies(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', this.options)
  }

  getPerson(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/day?language=en-US', this.options)
  }

  getTV(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US', this.options)
  }
}
