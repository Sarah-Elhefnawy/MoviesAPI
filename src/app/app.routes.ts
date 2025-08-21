import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'all',pathMatch:'full'},
    {path:'all',loadComponent:()=>import('./components/all/all').then(c=>c.All),title:'All Trendings'},
    {path:'movies',loadComponent:()=>import('./components/movies/movies').then(c=>c.Movies),title:'Movies Trending'},
    {path:'people',loadComponent:()=>import('./components/people/people').then(c=>c.People),title:'People Trending'},
    {path:'tv',loadComponent:()=>import('./components/tv/tv').then(c=>c.Tv),title:'TV-Shows Trending'},
    {path:'**',loadComponent:()=>import('./components/not-found/not-found').then(c=>c.NotFound),title:'Not Found'},
];
