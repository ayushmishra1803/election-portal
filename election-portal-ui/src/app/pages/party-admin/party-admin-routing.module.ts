import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './party-admin-layout/components/members/members.component';
import { ProfileComponent } from './party-admin-layout/components/profile/profile.component';
import { SecurityComponent } from './party-admin-layout/components/security/security.component';
import { PartyAdminLayoutComponent } from './party-admin-layout/party-admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PartyAdminLayoutComponent,
    children: [
      { path: 'members', component: MembersComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyAdminRoutingModule {}
