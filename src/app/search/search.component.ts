import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = '';
  movies: Movie[];
 

  constructor( private movieService: MoviesService) { }


  getMovie(): void{
    this.movieService.searchMovie(this.search).subscribe(x => this.movies = x.Search.slice(0,10));
  }
  ngOnInit(): void {
  }
}
