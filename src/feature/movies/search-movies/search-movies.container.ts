import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventBusService, EmitEvent, Events } from 'src/core/event-bus/event-bus.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.container.html',
  styleUrls: ['./search-movies.container.scss'],
})
export class SearchMoviesContainerComponent implements OnInit {
  searchQuery$: Observable<any>;
  constructor(private eventbus: EventBusService) {}

  ngOnInit(): void {}

  onSearchQuery(event): void {
    this.eventbus.emit(new EmitEvent(Events.filterQuery, event));
  }
}
