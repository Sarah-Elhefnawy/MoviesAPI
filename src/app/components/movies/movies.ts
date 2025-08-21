import { Component, inject, WritableSignal, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovies } from '../../interfaces/imovies';
import { MoviesAPI } from '../../services/movies-api';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {
  // constructor(private _MoviesAPI: MoviesAPI) { }

  private readonly _MoviesAPI = inject(MoviesAPI);
  moviesSubId!: Subscription
  movies:WritableSignal<IMovies[]> =  signal([])
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.moviesSubId = this._MoviesAPI.getApis('movie').subscribe({
      next: (res) => {
        this.movies.set(res.results)
      },
      error: (err) => {
        console.log(err);

      }

    })
  }

  ngOnDestroy(): void {
    this.moviesSubId.unsubscribe()
  }

}
