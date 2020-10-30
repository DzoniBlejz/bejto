import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ServiceService } from '../service.service';
import { Movie, User } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery : MediaQueryList;
  title = 'Movies';
  user : User;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private userService: ServiceService,
    private movieService: MoviesService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.user = this.userService.loggedUser;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}