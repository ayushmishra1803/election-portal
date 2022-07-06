import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared/services/userInfo/user-info.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  showPassword = false;
  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private router: Router
  ) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submitLoginForm() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((loginData) => {
        if (loginData) {
          this.userInfoService.setUserData(loginData.data);
          if (loginData.data.user_type === 'user') {
            this.router.navigate(['/user']);
          } else if (loginData.data.user_type === 'admin') {
            this.router.navigate(['/admin']);
          } else if (loginData.data.user_type === 'party_admin') {
            this.router.navigate(['/party-admin']);
          }
          window.location.reload();
        }
      });
    }
  }
}
