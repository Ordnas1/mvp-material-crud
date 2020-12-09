import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesContainerComponent } from './list-movies.container';

describe('ListMoviesContainerComponent', () => {
  let component: ListMoviesContainerComponent;
  let fixture: ComponentFixture<ListMoviesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
