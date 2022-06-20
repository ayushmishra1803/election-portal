import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './pages/auth/user-signup/user-signup.component';
import { PartyAdminSignupComponent } from './pages/auth/party-admin-signup/party-admin-signup.component';
import { PartyAdminLoginComponent } from './pages/auth/party-admin-login/party-admin-login.component';
import { AdminLoginComponent } from './pages/auth/admin-login/admin-login.component';
import { AdminSignUpComponent } from './pages/auth/admin-sign-up/admin-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    PartyAdminSignupComponent,
    PartyAdminLoginComponent,
    AdminLoginComponent,
    AdminSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
