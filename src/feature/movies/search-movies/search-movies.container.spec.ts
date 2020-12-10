import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesContainerComponent } from './search-movies.container';

describe('SearchMoviesContainerComponent', () => {
  let component: SearchMoviesContainerComponent;
  let fixture: ComponentFixture<SearchMoviesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMoviesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
