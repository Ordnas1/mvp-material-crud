import { State } from './state';
import { IMovie } from 'src/shared/interfaces/movie';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './reducer';

export const movieFeatureSelector = createFeatureSelector<State>('movies');

export const getAllMovies = createSelector(movieFeatureSelector, selectAll);

export const areMoviesLoaded = createSelector(
  movieFeatureSelector,
  (state) => state.moviesLoaded
);
