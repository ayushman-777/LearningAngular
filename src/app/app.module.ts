import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HoverChangesDirective} from './hover-changes/hover-changes.directive';
import {BetterHoverChangesDirective} from './hover-changes/better-hover-changes.directive';
import { UnlessDirective } from './hover-changes/unless.directive';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpComponent } from './http/http.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {AuthInterceptorService} from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HoverChangesDirective,
    BetterHoverChangesDirective,
    UnlessDirective,
    LearnFormComponent,
    ReactiveFormComponent,
    HttpComponent,
    AuthComponent,
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
