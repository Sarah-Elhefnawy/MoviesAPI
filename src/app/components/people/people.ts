import { Component, inject, signal, WritableSignal } from '@angular/core';
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
  people:WritableSignal<IPerson[]> = signal([]);
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this.personSubId = this._MoviesAPI.getApis('person').subscribe({
      next: (res) => {
        this.people.set(res.results)
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
