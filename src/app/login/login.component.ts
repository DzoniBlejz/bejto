import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LoginDto } from '../types';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginData = {name: '', email: '', password: ''} as LoginDto;

  constructor(private userService: ServiceService) { }

  

  onLogin() {
    // console.log(this.loginData.email);
    // console.log(this.loginData.password);
  }

}
