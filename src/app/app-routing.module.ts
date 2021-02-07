import {RouterModule} from '@angular/router';
import {LearnFormComponent} from './learn-form/learn-form.component';
import {NgModule} from '@angular/core';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {HttpComponent} from './http/http.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes = [
  {path: 'form-learn', component: LearnFormComponent, canActivate: [AuthGuardService]},
  {path: 'form', component: ReactiveFormComponent, canActivate: [AuthGuardService]},
  {path: 'http', component: HttpComponent, canActivate: [AuthGuardService]},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
