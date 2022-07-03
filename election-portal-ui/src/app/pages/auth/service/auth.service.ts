import { Injectable } from '@angular/core';
import { HttpCallService } from 'src/app/shared/services/httpCall/http-call.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpCall: HttpCallService) {}
  login(loginData: { email: string; password: string }) {
    return this.httpCall.post('auth/login/user', loginData, true);
  }
  signUp(signUpData: any, userType: string) {
    if (userType === 'user') {
      return this.httpCall.post('sign-up', signUpData, true);
    } else if (userType === 'admin') {
      return this.httpCall.post('admin/sign-up', signUpData, true);
    } else if (userType === 'party_admin') {
      return this.httpCall.post('party/sign-up', signUpData, true);
    } else {
      return;
    }
  }
}
