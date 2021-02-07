import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'LearningAngular';
  constructor(private authService: AuthService) {
  }
private userSubscription: Subscription;
  isAuthenticated = false;
  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      console.log(user);
      this.isAuthenticated = !!user;
    });
    this.authService.autoLogin();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
