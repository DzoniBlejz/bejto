import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';
import { Movie } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  search = '';
  movies: Movie[];
  subscription: Subscription;
  
 

  constructor(private movieService: MoviesService) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
  }
}

getMovie(): void {
this.subscription = this.movieService.searchMovie(this.search)
.subscribe(x => {
  this.movies = x.Search.slice(0, 10);
});
} 

  ngOnInit(): void {
  }
}
