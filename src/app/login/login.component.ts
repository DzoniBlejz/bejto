import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { LoginDto, RegisterDto } from '../types';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginData = {name: '', email: '', password: ''} as LoginDto;
  showReg = false;

  constructor(private userService: ServiceService, private router: Router) { }

  
  onLogin(): void {
    this.userService.login(this.loginData).subscribe(user =>{
      if(user){
        this.router.navigate(['home'])
      }
      else {
        alert("pogresni podaci batooooooooooooooooooooo");
            }
    })

  }
  onRegister(): void {
      this.showReg = !this.showReg;
    }

}
