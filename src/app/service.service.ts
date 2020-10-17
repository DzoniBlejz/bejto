import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { LoginDto, User, USERS } from './types';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usersDb = USERS;

  login(loginData: LoginDto): Observable<User>{
    const user = this.usersDb.find(x => x.email === loginData.email &&
                                        x.password === loginData.password);
    if(user ) {
      return of(user);
    }
  }
}
