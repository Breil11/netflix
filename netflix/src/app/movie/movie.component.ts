import { Component } from '@angular/core';
import {Movie} from "../model/movie.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie: Movie;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ movie }) => {
      this.movie = movie;
    })
  }
}
