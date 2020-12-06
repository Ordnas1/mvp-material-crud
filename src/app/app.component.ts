import { Component, OnInit } from '@angular/core';
// Solo para probar servicio de firebase
import { IMovie } from 'src/shared/interfaces/movie';
import { Observable } from 'rxjs';
import { FirebaseService } from '../core/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-manager';
  movies$: Observable<IMovie[]>;
  movie$: Observable<IMovie>;
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.movies$ = this.firebase.getCollection<IMovie>('movies');
    this.movie$ = this.firebase.getDocument<IMovie>(
      'movies',
      '80L203WhHRYLkinr33lf'
    );
    this.firebase.destroyDocument<IMovie>('movies', 'adfPfFWfF9rXl2OXOGwj').then(res => console.log(res)).catch(err => console.log(err));
  }
}
