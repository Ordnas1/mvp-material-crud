import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';

import { IMovie } from 'src/shared/interfaces/movie';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { withLatestFrom, filter, startWith } from 'rxjs/operators';
import {
  RootStoreState,
  MovieStoreActions,
  MovieStoreSelectors,
} from 'src/core/store';
import {
  EventBusService,
  EmitEvent,
  Events,
} from 'src/core/event-bus/event-bus.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.container.html',
  styleUrls: ['./list-movies.container.scss'],
})
export class ListMoviesContainerComponent implements OnInit, OnDestroy {
  movies$: Observable<IMovie[]>;
  moviesFilter$: Observable<any>;
  eventBusSub$: Subscription;
  moviesFiltered$: Observable<any>;
  // debug
  moviesFilteredSub$: Subscription;

  constructor(
    private store: Store<RootStoreState.State>,
    private eventbus: EventBusService
  ) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(MovieStoreSelectors.getAllMovies);
    this.eventBusSub$ = this.eventbus.on(
      Events.filterQuery,
      (res: EventEmitter<any>) => {
        this.moviesFilter$ = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.eventBusSub$.unsubscribe();
  }
}
