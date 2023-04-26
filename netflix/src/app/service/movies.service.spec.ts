import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import {MovieFilters} from "../model/movie-filters.model";
import {Movie} from "../model/movie.model";
import spyOn = jest.spyOn;
import {of} from "rxjs";
import {AppModule} from "../app.module";
import {HttpClient} from "@angular/common/http";

describe('MoviesService', () => {
  let service: MoviesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.inject(MoviesService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter based on rating', () => {
    // TODO fix this test
    // Arrange
    let filters: MovieFilters = {
      genre: 'Action',
      minimumRate: 4
    }

    let mockData: Movie[] = [
      {
        title: 'Movie 1',
        rating: 4
      } as Movie,
      {
        title: 'Movie 2',
        rating: 4.5
      } as Movie,
      {
        title: 'Movie 3',
        rating: 3
      } as Movie
    ];

    // Act
    let result$ = service.getFilteredMovies$(filters);

    // Assert
    result$.subscribe(result => {
      expect(result.length).toBe(2);
    })
  })
});
