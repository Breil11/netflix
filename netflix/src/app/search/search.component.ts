import { Component } from '@angular/core';
import { MoviesService } from "../service/movies.service";
import { MovieFilters } from "../model/movie-filters.model";
import { Subject } from "rxjs";
import { Movie } from "../model/movie.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movies$: Subject<Movie[]> = new Subject<Movie[]>();

  genres: string[] = ['All Movies', 'Crime', 'Romance', 'Drama', 'Sci-Fi', 'Horror', 'Animation', 'Action', 'Adventure', 'Western']; // on définit les genres
  ratings: number[] = [1, 2, 3, 4, 5]; // on définit les classements
  selectedGenre: string = '';
  selectedRating: string = '';
  filteredMovies: Movie[]; // Nouvelle propriété pour stocker les films filtrés


  constructor(private moviesService: MoviesService) {
    this.moviesService.getAllMovies$()
      .subscribe(movies => {
        this.movies$.next(movies);
      })
  }

  search() {
    console.log('selectedGenre:', this.selectedGenre);
    //console.log('selectedRating:', this.selectedRating);
    // TODO Implement this method
    // Créer une instance de MovieFilters avec les valeurs des filtres de genre et de classement
    const filters: MovieFilters = {
      genre: this.selectedGenre,
      rating: this.selectedRating
    };

    // Appeler la méthode getFilteredMovies$() du service MoviesService avec les valeurs des filtres
    this.moviesService.getFilteredMovies$(filters)
      .subscribe((movies) => {
        // Traiter les films filtrés, par exemple les afficher dans le composant
        this.movies$.next(movies);
        console.log(movies);
      });
  }
}
