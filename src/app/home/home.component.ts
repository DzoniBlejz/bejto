import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Role, User } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  title = 'Movies';
  user: User;

  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: ServiceService,
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.user = this.userService.loggedUser;
  }
  isAdmin() {
    if (this.userService.loggedUser.role === Role.Admin)
    {
      return true;
    }
    return false;
    
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {
    this.userService.Logout();
  }
}