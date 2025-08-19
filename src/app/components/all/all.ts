import { Component, inject } from '@angular/core';
import { MoviesAPI } from '../../services/movies-api';
import { log } from 'console';
import { IMovies } from '../../interfaces/imovies';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.html',
  styleUrl: './all.scss'
})
export class All {
  // constructor(private _MoviesAPI: MoviesAPI) { }

  private readonly _MoviesAPI = inject(MoviesAPI);
  moviesSubId!: Subscription
  movies!: IMovies[]
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.moviesSubId = this._MoviesAPI.getAllMovies().subscribe({
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
