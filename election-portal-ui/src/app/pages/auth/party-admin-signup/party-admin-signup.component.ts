import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/shared/services/userInfo/user-info.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-party-admin-signup',
  templateUrl: './party-admin-signup.component.html',
  styleUrls: ['./party-admin-signup.component.scss'],
})
export class PartyAdminSignupComponent implements OnInit {
  showPassword = false;
  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService
  ) {}
  signUpForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submitSignUpForm() {
    if (this.signUpForm.valid) {
      this.authService
        .signUp(this.signUpForm.value, 'party_admin')
        ?.subscribe((signUpData: any) => {
          if (signUpData) {
            console.log(signUpData);
          }
        });
    }
  }
}
