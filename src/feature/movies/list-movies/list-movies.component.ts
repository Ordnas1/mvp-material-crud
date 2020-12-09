import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/shared/interfaces/movie';

@Component({
  selector: 'app-list-movies-ui',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  @Input() movies$: Observable<IMovie>;

  constructor() {}

  ngOnInit(): void {}
}
