import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;

  constructor(private movieService : MoviesService,
    private route: ActivatedRoute) { }



  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.movieService.getMovie(id).subscribe(x => {
    this.movie=x;
    console.log(this.movie);
    })
  }

}
