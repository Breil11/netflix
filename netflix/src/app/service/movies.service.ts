import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Movie} from "../model/movie.model";
import {MovieFilters} from "../model/movie-filters.model";

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
    // Utiliser l'opérateur "pipe" pour chaîner les opérateurs de transformation de flux
    return this.getAllMovies$().pipe(
      map(movies => {
        // Filtrer les films en fonction du genre
        if (movieFilters.genre && movieFilters.genre !== 'Tous les films') {
          movies = movies.filter(movie => movie.genre === movieFilters.genre);
        }

        // Filtrer les films en fonction du classement
        if (movieFilters.rating) {
          const rating = parseFloat(movieFilters.rating); //ici j'ai du convertir en nombre parceque j'avais une erreur au niveau du type
          movies = movies.filter(movie => movie.rating === rating);
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
