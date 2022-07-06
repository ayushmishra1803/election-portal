import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'party-name', 'admin'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  ngOnInit() {
    this.adminService.getAdminDataList().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.data);
    });
  }
  constructor(private adminService: AdminServiceService) {
    // Create 100 users
    /* {
      id: (id + 1).toString(),
      name: name,
      party: PARTY[id],
      fruit: id + 12,
    }; */
    // Assign the data to the data source for the table to render
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
