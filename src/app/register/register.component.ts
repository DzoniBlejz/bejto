import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

import { RegisterDto } from '../types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regData = { name: '' , email:  '', password: ''} as RegisterDto;
 

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.userService.register(this.regData);
  }
}
