import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './effects';
import { movieReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [MovieEffects],
})
export class MovieStoreModule {}
