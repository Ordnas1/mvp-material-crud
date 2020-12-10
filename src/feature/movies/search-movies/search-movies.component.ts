import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-movies-ui',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchMoviesComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  search = new FormControl('');
  constructor() {}

  sendSearchQuery(): void {
    this.searchQuery.emit(this.search.valueChanges);
  }

  ngOnInit(): void {}
}
