import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './shared/services/userInfo/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'election-portal-ui';
  userData: any;
  constructor(private userInfoService: UserInfoService) {}
  ngOnInit() {
    this.userData = this.userInfoService.getUserData();
    if (this.userData) {
      this.userInfoService.setUserData(this.userData);
    }
  }
  showSideBar: boolean = false;
  toggleSidebar(event: any) {
    this.showSideBar = !this.showSideBar;
  }
}
