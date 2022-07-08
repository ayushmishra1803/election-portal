import { Injectable } from '@angular/core';
import { HttpCallService } from 'src/app/shared/services/httpCall/http-call.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpCall: HttpCallService) {}
  login(loginData: { email: string; password: string }, userType: any) {
    if (userType === 'user') {
      return this.httpCall.post('auth/login/user', loginData, true);
    } else if (userType === 'admin') {
      return this.httpCall.post('auth/login/admin', loginData, true);
    } else if (userType === 'party_admin') {
      return this.httpCall.post('auth/login/party_admin', loginData, true);
    } else {
      return;
    }
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
  createParty(data: any) {
    return this.httpCall.post('parites/create-party', data, true);
  }
  getPartyDetails() {
    return this.httpCall.getWithHeaders('parties/deatils', true);
  }
}
