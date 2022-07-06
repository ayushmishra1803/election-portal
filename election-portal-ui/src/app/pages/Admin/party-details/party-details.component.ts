import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Names, parties } from 'src/app/shared/Constants/constants';
const PARTY: any = parties;
const FRUITS: string[] = ['10', '50', '100', '150', '5', '20', '500', '40'];
const NAMES: string[] = Names;
@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss'],
})
export class PartyDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'admin', 'winning-rate'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  currentData: any = {};
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  ngOnInit() {
    this.actRouter.params.subscribe((res: any) => {
      if (res?.id) {
        this.currentData = {
          id: Number(res.id) + 1,
          name: NAMES[Number(res.id)],
          party: PARTY[Number(res.id)],
          fruit: FRUITS[Number(res.id)],
        };
        const users = Array.from({ length: this.currentData.id + 10 }, (_, k) =>
          createNewUser(k, this.currentData.id)
        );

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
      }
    });
  }
  constructor(private actRouter: ActivatedRoute) {
    // Create 100 users
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function getNum(): any {
  let num = Math.round(Math.random() * 100);
  if (num < 10) {
    num = num + 10;
  } else {
    return num;
  }
}
/** Builds and returns a new User. */
function createNewUser(id: number, currentId: number): any {
  const name = NAMES[currentId * 10 + id];

  return {
    id: id.toString(),
    name: name,
    party: PARTY[NAMES[currentId * 10 + id]],
    progress: name.length * 7,
    fruit: name.length * 7,
  };
}
