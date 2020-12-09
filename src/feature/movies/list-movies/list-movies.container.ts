import { Component, OnInit } from '@angular/core';

import { IMovie } from 'src/shared/interfaces/movie';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  RootStoreState,
  MovieStoreActions,
  MovieStoreSelectors,
} from 'src/core/store';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.container.html',
  styleUrls: ['./list-movies.container.scss'],
})
export class ListMoviesContainerComponent implements OnInit {
  movies$: Observable<IMovie[]>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(MovieStoreSelectors.getAllMovies);
  }
}
