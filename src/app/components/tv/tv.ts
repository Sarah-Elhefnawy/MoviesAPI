import { Component, inject } from '@angular/core';
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
  movies!: IMovies[]
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.moviesSubId = this._MoviesAPI.getTV().subscribe({
      next: (res) => {
        console.log(res.results);
        this.movies = res.results
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
