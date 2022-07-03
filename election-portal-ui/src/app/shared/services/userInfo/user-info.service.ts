import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private router: Router) {}
  UserData = new BehaviorSubject<any>(null);
  setUserData(userData: any) {
    this.UserData.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  logout() {
    this.UserData.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
  getUserData() {
    let userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }
}
