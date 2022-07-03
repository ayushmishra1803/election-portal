import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { PartyAdminRoutingModule } from './party-admin-routing.module';
import { PartyAdminLayoutComponent } from './party-admin-layout/party-admin-layout.component';

@NgModule({
  declarations: [
    PartyAdminLayoutComponent
  ],
  imports: [CommonModule, PartyAdminRoutingModule, SharedModule],
  providers: [],
})
export class PartyAdminModule {}
