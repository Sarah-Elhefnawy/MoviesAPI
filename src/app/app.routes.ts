import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', loadComponent: () => import('./components/all/all').then(m => m.All) },
    { path: 'movies', loadComponent: () => import('./components/movies/movies').then(m => m.Movies) },
    { path: 'people', loadComponent: () => import('./components/people/people').then(m => m.People) },
    { path: 'tv', loadComponent: () => import('./components/tv/tv').then(m => m.Tv) },
    { path: '**', loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)},
];