import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isLogin = true;

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(authForm: NgForm) {
    let authObs = new Observable<AuthResponseData>();
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    if (this.isLogin) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(responseData => {
      console.log(responseData);
      this.router.navigate(['/http']);
    }, error => {
      console.log(error);
    });
    authForm.reset();
  }
}
