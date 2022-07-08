import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { UserSignupComponent } from '../user-signup/user-signup.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';

@NgModule({
  declarations: [UserLoginComponent, UserSignupComponent],
  imports: [CommonModule, UserLoginRoutingModule, SharedModule],
  providers: [],
})
export class UserloginModule {}
