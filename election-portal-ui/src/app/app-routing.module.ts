import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'userLogin',
    loadChildren: () =>
      import(`./pages/auth/user-login/user-login.module`).then(
        (m) => m.UserloginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
