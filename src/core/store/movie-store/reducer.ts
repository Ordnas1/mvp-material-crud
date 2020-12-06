import { movieActionTypes, moviesLoaded } from './actions';
import { initialState, State, movieAdapter } from './state';
import { createReducer, on } from '@ngrx/store';


export const movieReducer = createReducer(
  initialState,

  on(movieActionTypes.moviesLoaded, (state, action) => {
    return movieAdapter.setAll(action.movies, { ...state, moviesLoaded: true });
  }),

  on(movieActionTypes.createMovie, (state, action) => {
    return movieAdapter.addOne(action.movie, state);
  }),

  on(movieActionTypes.deleteMovie, (state, action) => {
    return movieAdapter.removeOne(action.movieId, state);
  }),

  on(movieActionTypes.updateMovie, (state, action) => {
    return movieAdapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = movieAdapter.getSelectors();
