import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Names, parties } from 'src/app/shared/Constants/constants';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const PARTY: any = parties;
const FRUITS: string[] = ['10', '50', '100', '150', '5', '20', '500', '40'];
const NAMES: string[] = Names;
@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss'],
})
export class PartyListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'party-name', 'admin', 'members'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  ngOnInit() {}
  constructor() {
    // Create 100 users
    const users = Array.from({ length: 3 }, (_, k) => createNewUser(k));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

/** Builds and returns a new User. */
function createNewUser(id: number): any {
  const name = NAMES[id];
  return {
    id: (id + 1).toString(),
    name: name,
    party: PARTY[id],
    fruit: id + 12,
  };
}
