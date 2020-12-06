import { IMovie } from 'src/shared/interfaces/movie';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadMovies = createAction('[Movies] Load Movies');

export const moviesLoaded = createAction(
  '[Movies] Movies loaded successfully',
  props<{ movies: IMovie[] }>()
);

export const createMovie = createAction(
  '[Movies] Create Movie',
  props<{ movie: IMovie }>()
);

export const deleteMovie = createAction(
  '[Movies] Delete Movie',
  props<{ movieId: string }>()
);

export const updateMovie = createAction(
  '[Movies] Create Movie',
  props<{ update: Update<IMovie> }>()
);

export const movieActionTypes = {
  loadMovies,
  moviesLoaded,
  createMovie,
  deleteMovie,
  updateMovie,
};
