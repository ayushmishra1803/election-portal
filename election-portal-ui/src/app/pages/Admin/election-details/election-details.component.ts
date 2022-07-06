import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/shared/services/userInfo/user-info.service';

@Component({
  selector: 'app-election-details',
  templateUrl: './election-details.component.html',
  styleUrls: ['./election-details.component.scss'],
})
export class ElectionDetailsComponent implements OnInit {
  constructor(private userInfo: UserInfoService) {}
  userData: any = null;
  ngOnInit(): void {
    this.userData = this.userInfo.getUserData();
  }
}
