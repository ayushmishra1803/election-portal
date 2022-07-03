import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateElectionComponent } from './create-election/create-election.component';
import { ElectionDetailsComponent } from './election-details/election-details.component';
import { ListElectionsComponent } from './list-elections/list-elections.component';
import { PartyDetailsComponent } from './party-details/party-details.component';
import { PartyListComponent } from './party-list/party-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'party-list',
        component: PartyListComponent,
      },
      {
        path: 'party-list/:id',
        component: PartyDetailsComponent,
      },
      {
        path: 'add-election',
        component: CreateElectionComponent,
      },
      {
        path: 'edit-election/:id',
        component: CreateElectionComponent,
      },
      {
        path: 'view-election/:id',
        component: ElectionDetailsComponent,
      },
      {
        path: 'elections',
        component: ListElectionsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
