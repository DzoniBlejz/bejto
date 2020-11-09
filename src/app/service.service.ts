import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginDto, RegisterDto, Role, User, USERS } from './types';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usersDb = USERS;
  loggedUser : User;

  constructor(private router: Router){}

  login(loginData: LoginDto): Observable<User>{
    const user = this.usersDb.find(x => x.email === loginData.email &&
                                        x.password === loginData.password);
                                        this.loggedUser= user;
    if(user) {
     if(localStorage.getItem("user")){
       localStorage.clear();
     }
     localStorage.setItem("user", JSON.stringify(user));
    }
    
     return of(user);
    
  }

  isRegister(loginData: RegisterDto,isAdmin : boolean ): void{
      this.usersDb.push({
        ...loginData,
        id: Math.random() * 10 + 5,
        role: isAdmin ? Role.Admin : Role.User,
    });
  }

  setLoggedUser(user : User): void{
    this.loggedUser = user;
  }
  Logout(): void{
       localStorage.clear();

    this.loggedUser = null;
    this.router.navigate(['/login']);
  }
  }

