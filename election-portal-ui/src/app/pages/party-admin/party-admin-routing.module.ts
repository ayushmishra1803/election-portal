import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyAdminLayoutComponent } from './party-admin-layout/party-admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PartyAdminLayoutComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyAdminRoutingModule {}
