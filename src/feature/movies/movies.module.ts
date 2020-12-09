// Boilerplate and angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { ContentContainerComponent } from './content/content.container';
import { HeaderComponent } from './content/header.component';

// Shared
import { MaterialModule } from 'src/shared/material/material.module';
import { ContentComponent } from './content/content.component';
import { ListMoviesContainerComponent } from './list-movies/list-movies.container';
import { ListMoviesComponent } from './list-movies/list-movies.component';



@NgModule({
  declarations: [ContentContainerComponent, HeaderComponent, ContentComponent, ListMoviesContainerComponent, ListMoviesComponent, ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ContentContainerComponent],
})
export class MoviesModule {}
