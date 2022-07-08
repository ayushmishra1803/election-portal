import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { Names, parties } from 'src/app/shared/Constants/constants';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  parties = parties;
  members = Names;
  selectedParty = '';
  users: any = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    let Dates = [
      new Date('2022-06-1'),
      new Date('2022-07-15'),
      new Date('2022-11-18'),
      new Date('2022-10-25'),
    ];
    this.users = Array.from({ length: 4 }, (_, k) => {
      const name = Names[k] + ' ' + Names[k].charAt(0) + '.';
      let status = ['Completed', 'Cancelled', 'Upcoming', 'Upcoming'];
      return {
        id: k.toString(),
        name: name,
        party: parties[k]?.replace('Party', ''),
        status: status[k],
        progress: Math.round(Math.random() * 100).toString(),
        date: Dates[k],
      };
    });
    if (localStorage?.getItem('election')) {
      let data: any = localStorage?.getItem('election');
      let parseData = JSON.parse(data);

      parseData.forEach((element: any) => {
        this.users.push(element);
      });
      this.users = this.users.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    this.users.forEach((election: any, index: any) => {
      let today = new Date();
      if (
        new Date(election.date).getDate() === today.getDate() &&
        new Date(election.date).getMonth() === today.getMonth() &&
        new Date(election.date).getFullYear() === today.getFullYear()
      ) {
        this.users[index].status = 'Active';
      }
    });
  }
  submit(electionIndex: any) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: 'Are you sure you want to submit the vote ?',
        description:
          'Are you sure you want to submit the vote , once submitted it cannot be changed',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.users[electionIndex] = {
          ...this.users[electionIndex],
          voted: true,
        };
        localStorage.setItem('election', JSON.stringify(this.users));
      }
    });
  }
  getUsers() {
    let listedVotes: any = [];
    this.users.forEach((element: any) => {
      if (element.status === 'Active' && !element?.voted) {
        listedVotes.push(element);
      }
    });

    return listedVotes;
  }
}
