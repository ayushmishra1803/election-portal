import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyDetailsComponent } from './party-details/party-details.component';
import { PartyMembersComponent } from './party-members/party-members.component';
import { AddPartyMembersComponent } from './add-party-members/add-party-members.component';
import { CreateElectionComponent } from './create-election/create-election.component';
import { ListElectionsComponent } from './list-elections/list-elections.component';
import { ElectionDetailsComponent } from './election-details/election-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PartyAdminListComponent } from './party-admin-list/party-admin-list.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    PartyListComponent,
    PartyDetailsComponent,
    PartyMembersComponent,
    AddPartyMembersComponent,
    CreateElectionComponent,
    ListElectionsComponent,
    ElectionDetailsComponent,
    AdminListComponent,
    UsersListComponent,
    PartyAdminListComponent
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  providers: [],
})
export class AdminModule {}
