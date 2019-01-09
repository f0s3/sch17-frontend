import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginInput: string;
  passwordInput: string;

  constructor(private loginService:LoginService, private router:Router) { }

  onSubmit() {
    this.loginService
      .post({ login: this.loginInput, password: this.passwordInput })
      .subscribe(res => res.status === "OK" && this.router.navigate(['admin']));
  }
}
