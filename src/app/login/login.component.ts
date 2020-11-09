import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Role,LoginDto, RegisterDto, Pol } from '../types';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  @Input() isAdminPage= false;
  loginData = {name: '', email: '', password: '',pol:undefined} as RegisterDto;
  polovi = [Pol.Musko, Pol.Zensko, Pol.SamoNek];
  showReg = false;

  constructor(private userService: ServiceService, private router: Router) { }

  
  onLogin(): void {
    this.userService.login(this.loginData).subscribe(user =>{
      if(user){
        if(user.role === Role.Admin)
        {
          this.isAdminPage = true;
        }
        this.router.navigate(['home'])
      }
      else {
        alert("pogresni podaci batooooooooooooooooooooo");
            }
    });

  }
  register(): void {
    if (this.showReg || this.isAdminPage) {
      this.userService.isRegister(this.loginData, this.isAdminPage);
      this.showReg = false;
      console.log(this.loginData.pol);
    } else {
      this.showReg = true;
    }
}

  get getTitle(): string {
    if (this.showReg || this.isAdminPage) {
      return 'Register Form';
    }
    return 'Login Form';
  }

  get getRegisterLabel(): string {
    if (this.showReg || this.isAdminPage) {
      return 'Register';
    }
    return 'Create account';
  }
}