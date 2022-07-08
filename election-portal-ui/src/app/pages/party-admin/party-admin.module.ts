import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { PartyAdminRoutingModule } from './party-admin-routing.module';
import { PartyAdminLayoutComponent } from './party-admin-layout/party-admin-layout.component';
import { MembersComponent } from './party-admin-layout/components/members/members.component';
import { ProfileComponent } from './party-admin-layout/components/profile/profile.component';
import { SecurityComponent } from './party-admin-layout/components/security/security.component';

@NgModule({
  declarations: [
    PartyAdminLayoutComponent,
    MembersComponent,
    ProfileComponent,
    SecurityComponent
  ],
  imports: [CommonModule, PartyAdminRoutingModule, SharedModule],
  providers: [],
})
export class PartyAdminModule {}
