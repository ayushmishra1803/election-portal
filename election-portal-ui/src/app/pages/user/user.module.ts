import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  providers: [],
})
export class UserModule {}
