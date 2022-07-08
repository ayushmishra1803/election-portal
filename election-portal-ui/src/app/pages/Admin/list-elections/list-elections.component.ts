import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Names, parties, titles } from 'src/app/shared/Constants/constants';

/** Constants used to fill up our data base. */
const PARTY: any = titles;
const FRUITS: string[] = ['10', '50', '100', '150', '5', '20', '500', '40'];
const NAMES: string[] = Names;
const status = ['active', 'cancelled'];
const dates = [];
@Component({
  selector: 'app-list-elections',
  templateUrl: './list-elections.component.html',
  styleUrls: ['./list-elections.component.scss'],
})
export class ListElectionsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'party-name',
    'admin',
    'winning-rate',
    'members',
  ];
  users: any = [];
  ngOnInit() {
    let Dates = [
      new Date('2022-06-1'),
      new Date('2022-07-15'),
      new Date('2022-11-18'),
      new Date('2022-10-25'),
    ];
    this.users = Array.from({ length: 4 }, (_, k) => {
      const name = NAMES[k] + ' ' + NAMES[k].charAt(0) + '.';
      let status = ['Completed', 'Cancelled', 'Upcoming', 'Upcoming'];
      return {
        id: k.toString(),
        name: name,
        party: PARTY[k]?.replace('Party', ''),
        status: status[k],
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[k],
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
  constructor() {}
}
