import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyAdminSignupComponent } from './pages/auth/party-admin-signup/party-admin-signup.component';
import { PartyAdminLoginComponent } from './pages/auth/party-admin-login/party-admin-login.component';
import { AdminLoginComponent } from './pages/auth/admin-login/admin-login.component';
import { AdminSignUpComponent } from './pages/auth/admin-sign-up/admin-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/module/shared.module';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    PartyAdminSignupComponent,
    PartyAdminLoginComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    LandingComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
