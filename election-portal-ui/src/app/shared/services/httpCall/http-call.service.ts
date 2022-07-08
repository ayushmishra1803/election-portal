import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlingService } from '../error-handling/error-handling.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService,
    private snackbarService: SnackbarService
  ) {}
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
