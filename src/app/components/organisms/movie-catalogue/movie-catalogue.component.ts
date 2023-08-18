import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Movie } from "../../../types";

@Component({
  selector: "app-movie-catalogue",
  templateUrl: "./movie-catalogue.component.html",
  styleUrls: ["./movie-catalogue.component.css"]
})
export class MovieCatalogueComponent implements OnInit {
  @Input() movieListData: Array<Movie>;
  @Output() movieSelectedEvent = new EventEmitter<Movie>();
  selectedMovie: Movie;

  onMovieSelected(movie: Movie) {
    this.movieSelectedEvent.emit(movie);
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
    this.selectedMovie = this.movieListData && this.movieListData[0];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
