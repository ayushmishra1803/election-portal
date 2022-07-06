import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AdminGuard } from './shared/Guard/admin/admin.guard';
import { NotLoggedGuard } from './shared/Guard/not-loggedIn/not-logged.guard';
import { PartyAdminGuard } from './shared/Guard/party-admin/party-admin.guard';
import { UserGuard } from './shared/Guard/user/user.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NotLoggedGuard],
    loadChildren: () =>
      import(`./pages/auth/user-login/user-login.module`).then(
        (m) => m.UserloginModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import(`./pages/Admin/admin.module`).then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () =>
      import(`./pages/user/user.module`).then((m) => m.UserModule),
  },
  {
    path: 'party-admin',
    canActivate: [PartyAdminGuard],
    loadChildren: () =>
      import(`./pages/party-admin/party-admin.module`).then(
        (m) => m.PartyAdminModule
      ),
  },
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
