import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlingService } from '../error-handling/error-handling.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { UserInfoService } from '../userInfo/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService,
    private snackbarService: SnackbarService,
    private userInfo: UserInfoService
  ) {}
  getWithHeaders(endpoint: string, showSuccessBar: boolean = false) {
    const UserInfo = this.userInfo.UserData.value;
    const header = new HttpHeaders({
      Authorization: `Bearer ${UserInfo.token}`,
    });
    return this.http
      .get(environment.BASE_URL + endpoint, { headers: header })
      .pipe(
        tap((response: any) => {
          if (showSuccessBar) {
            this.snackbarService.showSnackBar(response.message, true);
          }
        }),
        catchError((error: any) => {
          this.errorService.postErrorMessage(error);
          throw error;
        })
      );
  }
  get(endpoint: string, showSuccessBar: boolean = false) {
    return this.http.get(environment.BASE_URL + endpoint).pipe(
      tap((response: any) => {
        if (showSuccessBar) {
          this.snackbarService.showSnackBar(response.message, true);
        }
      }),
      catchError((error: any) => {
        this.errorService.postErrorMessage(error);
        throw error;
      })
    );
  }
  post(endpoint: string, postData: any, showSuccessBar: boolean = false) {
    return this.http.post(environment.BASE_URL + endpoint, postData).pipe(
      tap((response: any) => {
        if (showSuccessBar) {
          this.snackbarService.showSnackBar(response.message, true);
        }
      }),
      catchError((error: any) => {
        this.errorService.postErrorMessage(error);
        throw error;
      })
    );
  }
  patch(endpoint: string, patchData: any, showSuccessBar: boolean = false) {
    return this.http.patch(environment.BASE_URL + endpoint, patchData).pipe(
      tap((response: any) => {
        if (showSuccessBar) {
          this.snackbarService.showSnackBar(response.message, true);
        }
      }),
      catchError((error: any) => {
        this.errorService.postErrorMessage(error);
        throw error;
      })
    );
  }
  delete(endpoint: string, showSuccessBar: boolean = false) {
    return this.http.delete(environment.BASE_URL + endpoint).pipe(
      tap((response: any) => {
        if (showSuccessBar) {
          this.snackbarService.showSnackBar(response.message, true);
        }
      }),
      catchError((error: any) => {
        this.errorService.postErrorMessage(error);
        throw error;
      })
    );
  }
}
