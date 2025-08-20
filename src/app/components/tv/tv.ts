import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovies } from '../../interfaces/imovies';
import { MoviesAPI } from '../../services/movies-api';

@Component({
  selector: 'app-tv',
  imports: [],
  templateUrl: './tv.html',
  styleUrl: './tv.scss'
})
export class Tv {
// constructor(private _MoviesAPI: MoviesAPI) { }

  private readonly _MoviesAPI = inject(MoviesAPI);
  moviesSubId!: Subscription
  movies:WritableSignal<IMovies[]> = signal([]);
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.moviesSubId = this._MoviesAPI.getApis('tv').subscribe({
      next: (res) => {
        this.movies.set(res.results);
        // if (res.poster_path == null) {
        //   res.poster_path = "./../public/sos.png"
        // }
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
