import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/shared/services/userInfo/user-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private userInfo: UserInfoService) {}
  userData: any = null;
  ngOnInit(): void {
    this.userData = this.userInfo.getUserData();
  }
}
