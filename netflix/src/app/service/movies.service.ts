import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Movie} from "../model/movie.model";
import {MovieFilters} from "../model/movie-filters.model";
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  getAllMovies$(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('/api/movies');
  }

  getFilteredMovies$(movieFilters: MovieFilters): Observable<Movie[]> {
    // TODO Execute an API call. This method should filter the movies based on the genre and the rating
    // j'utilise l'opérateur "pipe" pour chaîner les opérateurs de transformation de flux
    return this.getAllMovies$().pipe(
      map(movies => {
        // je filtre les films en fonction du genre
        if (movieFilters.genre && movieFilters.genre !== 'Tous les films') {
          movies = movies.filter(movie => movie.genre === movieFilters.genre);
        }

        // filtre les films en fonction du classement
        else if (movieFilters.rating !== 0) {
          if (movieFilters.rating !== 0) {
            const rating = movieFilters.rating.toString(); // ici j'ai du Convertir le rating en string parceque j'avais une erreur au niveau du type
            movies = movies.filter(movie => movie.rating.toString() >= rating.toString());
          }
          
        }

        // Vérifier si les deux filtres sont appliqués ensemble
        else if (movieFilters.genre && movieFilters.genre !== 'Tous les films' && movieFilters.rating !== 0) {
          movies = movies.filter(movie => movie.genre === movieFilters.genre && movie.rating.toString() >= movieFilters.rating.toString());//// ici j'ai directement Converti le rating en string
        }

        // Retourner les films filtrés
        return movies;
      })
    );
  }

  
  getMovie$(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>('/api/movies/' + id);
  }
  


  
  
 
  
}
