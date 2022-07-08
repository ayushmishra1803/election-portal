import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { VoteComponent } from './user-layout/components/vote/vote.component';
import { ResultsComponent } from './user-layout/components/results/results.component';
import { AlreadyVotedComponent } from './user-layout/components/already-voted/already-voted.component';
import { ElectionListComponent } from './user-layout/components/election-list/election-list.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    VoteComponent,
    ResultsComponent,
    AlreadyVotedComponent,
    ElectionListComponent
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  providers: [],
})
export class UserModule {}
