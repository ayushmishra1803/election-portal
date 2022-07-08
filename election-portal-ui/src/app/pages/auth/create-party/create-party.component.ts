import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.scss'],
})
export class CreatePartyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreatePartyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  partyForm: FormGroup = new FormGroup({
    party_name: new FormControl('', [Validators.required]),
    party_icon: new FormControl('', [Validators.required]),
    slogan: new FormControl('', [Validators.required]),
    party_admin: new FormControl(''),
  });
  ngOnInit(): void {
    console.log(this.data);
  }
  addParty() {
    if (this.partyForm.valid) {
      this.authService
        .signUp(this.data.signUpForm, 'party_admin')
        ?.subscribe((signUpData: any) => {
          if (signUpData) {
            this.partyForm.patchValue({
              party_admin: signUpData.data._id,
            });
            this.authService
              .createParty(this.partyForm.value)
              .subscribe((response) => {
                console.log(signUpData);
                this.router.navigate(['/auth/login']);
              });
          }
        });
    }
  }
}
