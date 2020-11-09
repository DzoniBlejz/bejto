import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Pol, RegisterDto } from '../types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regData = { name: '' , email:  '', password: '',pol:undefined} as RegisterDto;
  polovi:Pol;
  @ Input()isAdminPage = false;

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.userService.isRegister(this.regData, this.isAdminPage);
    console.log(this.regData.pol);
  }
}
