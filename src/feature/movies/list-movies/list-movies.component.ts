import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';
import { IMovie } from 'src/shared/interfaces/movie';
import { ListMoviesPresenter } from './list-movies.presenter';

@Component({
  providers: [ListMoviesPresenter],
  selector: 'app-list-movies-ui',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movies$: Observable<IMovie>;
  @Input() movieSearch: string;

  moviesFiltered$: Observable<any>;

  movieSub: Subscription;
  movieSearchSub: Subscription;
  constructor(private presenter: ListMoviesPresenter) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}

  isValidSearchResult(title: string, query: string): boolean {
    return this.presenter.isValidSearchResult(title, query);
  }
}
