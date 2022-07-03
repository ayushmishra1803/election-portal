import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { PartyAdminSignupComponent } from '../party-admin-signup/party-admin-signup.component';
import { UserSignupComponent } from '../user-signup/user-signup.component';
import { UserLoginComponent } from './user-login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: UserLoginComponent },
      {
        path: 'signup',
        component: UserSignupComponent,
      },
      {
        path: 'leader-register',
        component: PartyAdminSignupComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginRoutingModule {}
