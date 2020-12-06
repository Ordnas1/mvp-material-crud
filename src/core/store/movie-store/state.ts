import { IMovie } from 'src/shared/interfaces/movie';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<IMovie> {
  moviesLoaded: boolean;
  error?: any;
}

export const movieAdapter: EntityAdapter<IMovie> = createEntityAdapter<IMovie>();

export const initialState = movieAdapter.getInitialState({
  moviesLoaded: false,
});
