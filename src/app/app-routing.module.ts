import {Router, RouterModule} from '@angular/router';
import {LearnFormComponent} from './learn-form/learn-form.component';
import {NgModule} from '@angular/core';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {HttpComponent} from './http/http.component';
import {AuthComponent} from './auth/auth.component';

const appRoutes = [
  {path: 'form-learn', component: LearnFormComponent},
  {path: 'form', component: ReactiveFormComponent},
  {path: 'http', component: HttpComponent},
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
