import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Movie, PageTitle, RootStore } from '../../../types';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from 'src/app/root.reducer';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnChanges, OnDestroy {
  @Input() selectedMovie!: Movie;
  movieSubscribe: Subscription;
  constructor(private store: Store<{ root: State }>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedMovie.currentValue != null) {
      this.movieSubscribe = this.store.select('root').subscribe((state) => {
        if (state.pageTitle.value) {
          let movie = state.list.find(
            (i) => i['title'] == state.pageTitle.value
          );
          this.selectedMovie = movie; //display Movie based on selection
        }
      });
    }
  }
  
  ngOnDestroy(): void {
    if (this.movieSubscribe) {
      this.movieSubscribe.unsubscribe(); //unsubscribe to avoid memory leak
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
