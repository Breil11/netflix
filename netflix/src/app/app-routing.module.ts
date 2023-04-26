import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {MovieComponent} from "./movie/movie.component";
import {MoviesService} from "./service/movies.service";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movie: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        let id = Number.parseInt(route.paramMap.get('id'));
        return inject(MoviesService).getMovie$(id);
      }
    }
  },
  // TODO Create a routing here to display a "Page not found" message. The route should match any path
  //pour faire, j'ai du créer un nouveau composant qui renvoit juste le texte "page not found" et je l'ai appellé ici 
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
