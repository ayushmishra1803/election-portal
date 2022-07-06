import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInfoService } from '../../services/userInfo/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  constructor(private userInfo: UserInfoService) {}
  showMenu = false;
  isAdmin = false;
  ngOnInit(): void {
    this.userInfo.UserData.subscribe((info) => {
      if (info) {
        if (info.user_type === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    });
  }
  toggleSidebar() {
    this.toggleSidebarEvent.emit('toggle');
  }
  logout() {
    this.userInfo.logout();
  }
}
