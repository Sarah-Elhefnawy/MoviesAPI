import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesAPI } from '../../services/movies-api';
import { IPerson } from '../../interfaces/iperson';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.html',
  styleUrl: './people.scss'
})
export class People {
// constructor(private _MoviesAPI: MoviesAPI) { }

  private readonly _MoviesAPI = inject(MoviesAPI);
  personSubId!: Subscription
  people!: IPerson[]
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.personSubId = this._MoviesAPI.getPerson().subscribe({
      next: (res) => {
        console.log(res.results);
        this.people = res.results
      },
      error: (err) => {
        console.log(err);

      }

    })
  }

  ngOnDestroy(): void {
    this.personSubId.unsubscribe()
  }
}
