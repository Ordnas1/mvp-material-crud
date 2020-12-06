import { Component, OnInit } from '@angular/core';
// Solo para probar servicio de firebase
import { IMovie } from 'src/shared/interfaces/movie';
import { Observable } from 'rxjs';
import { FirebaseService } from '../core/firebase/firebase.service';
// Solo para probar ngrx
import { Store } from '@ngrx/store';
import {
  RootStoreState,
  MovieStoreActions,
  MovieStoreSelectors,
} from 'src/core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-manager';
  movies$: Observable<IMovie[]>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.store.dispatch(MovieStoreActions.loadMovies());
    this.movies$ = this.store.select(MovieStoreSelectors.getAllMovies);
    console.log(this.movies$);
  }
}
