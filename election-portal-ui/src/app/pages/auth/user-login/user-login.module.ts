import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, UserLoginRoutingModule],
  providers: [],
})
export class UserloginModule {}
