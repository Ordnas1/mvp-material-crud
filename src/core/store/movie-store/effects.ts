import { movieActionTypes, moviesLoaded, updateMovie } from './actions';
import { FirebaseService } from 'src/core/firebase/firebase.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IMovie } from 'src/shared/interfaces/movie';
import {
  DocumentChangeAction
} from '@angular/fire/firestore';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movieActionTypes.loadMovies),
      concatMap(() => this.firebase.getCollection<IMovie>('movies')),
      map((movies) => movieActionTypes.moviesLoaded({ movies }))
    )
  );

  createMovie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movieActionTypes.createMovie),
        concatMap((action) =>
          this.firebase.newDocument<IMovie>('movies', action.movie)
        )
      ),
    { dispatch: false }
  );

  deleteMovie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movieActionTypes.deleteMovie),
        concatMap((action) =>
          this.firebase.destroyDocument<IMovie>('movies', action.movieId)
        )
      ),
    { dispatch: false }
  );

  updateMovie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movieActionTypes.updateMovie),
        concatMap((action) =>
          this.firebase.setDocument<IMovie>(
            'movies',
            action.update.id,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );

  constructor(private firebase: FirebaseService, private actions$: Actions) {}
}
