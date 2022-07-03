import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { ErrorHandlingService } from '../services/error-handling/error-handling.service';
import { LoaderService } from '../services/loader/loader.service';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { UserInfoService } from '../services/userInfo/user-info.service';
import { MaterialModule } from './material.module';
import { HttpCallService } from '../services/httpCall/http-call.service';

@NgModule({
  declarations: [
    ConfirmationComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ConfirmationComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
    MaterialModule,
  ],
  providers: [
    ErrorHandlingService,
    LoaderService,
    SnackbarService,
    UserInfoService,
    HttpCallService,
  ],
})
export class SharedModule {}
