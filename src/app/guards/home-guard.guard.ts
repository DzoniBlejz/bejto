import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {

  constructor(private userService: ServiceService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userService.loggedUser){
      return true;
    }

    const user = JSON.parse(localStorage.getItem('user')) as User;

    if(user){
      this.userService.setLoggedUser(user);
      return true;
    }

      this.router.navigate(['login']);
      return false;

     
}

}