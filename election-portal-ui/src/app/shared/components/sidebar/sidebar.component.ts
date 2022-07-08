import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/userInfo/user-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}
  showFolder = false;
  showNotes = false;
  folders: any[] = [];
  notes: any[] = [];
  ngOnInit(): void {
    this.userInfoService.UserData.subscribe((userData) => {
      if (userData) {
        if (userData.user_type === 'user') {
          this.folders = [
            {
              icon: 'how_to_vote',
              name: 'Vote',
              route: 'user/vote',
            },
            {
              icon: 'emoji_events',
              name: 'Results',
              route: 'user/result',
            },
          ];

          this.showFolder = true;
          this.showNotes = false;
        } else if (userData.user_type === 'admin') {
          this.folders = [
            {
              icon: 'groups',
              name: 'Users',
              route: '/admin/users',
            },
            {
              icon: 'groups',
              name: 'Party Admins',
              route: '/admin/party_admins',
            },

            {
              icon: 'groups',
              name: 'Admin Members',
              route: '/admin/admin-list',
            },
            {
              icon: 'groups',
              name: 'Parties',
              route: '/admin/party-list',
            },
            {
              icon: 'event',
              name: 'Election Schedule',
              route: 'admin/elections',
            },
          ];
          this.notes = [
            {
              name: 'Profile',
              route: '/admin/profile',
              icon: 'account_circle',
            },
            {
              name: 'Security',
              route: '/admin/password',
              icon: 'lock',
            },
          ];

          this.showFolder = true;
          this.showNotes = true;
        } else if (userData.user_type === 'party_admin') {
          this.folders = [
            {
              icon: 'groups',
              name: 'Members',
              route: 'party_admin/members',
            },
          ];
          this.notes = [
            {
              name: 'Profile',
              route: 'party_admin/profile',
              icon: 'account_circle',
            },
            {
              name: 'Security',
              route: 'party_admin/security',
              icon: 'lock',
            },
          ];

          this.showFolder = true;
          this.showNotes = true;
        }
      } else {
        this.showFolder = false;
        this.showNotes = false;
      }
    });
  }
}
