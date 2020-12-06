import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStoreModule } from './movie-store/movie-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
