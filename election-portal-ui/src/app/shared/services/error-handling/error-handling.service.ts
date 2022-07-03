import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { UserInfoService } from '../userInfo/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(
    private snackBarService: SnackbarService,
    private userDataService: UserInfoService,
    private router: Router
  ) {}
  postErrorMessage(err: any) {
    if (
      err?.error.errorCode === 'UNAUTHENTICATED' &&
      err?.error?.message === 'User Session Expired'
    ) {
      this.snackBarService.showSnackBar(err.error.message, false);
      this.logout();
    } else {
      if (err?.status == 400) {
        Object.keys(err.error).forEach((element) => {
          this.snackBarService.showSnackBar(err.error[element], false);
        });
      }
      if (err?.error?.message) {
        console.log(err.error);

        this.snackBarService.showSnackBar(err.error.message, false);
      } else {
        this.snackBarService.showSnackBar(
          'An error occured accessing db',
          false
        );
      }
    }
  }
  checkUnauthorization(err: any) {
    if (
      err?.error.errorCode === 'UNAUTHENTICATED' &&
      err?.error?.message === 'User Session Expired'
    ) {
      this.postErrorMessage(err);
    }
  }
  logout() {
    this.userDataService.logout();
    this.router.navigate(['/auth/login']);
  }
}
