import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Names, parties } from 'src/app/shared/Constants/constants';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss'],
})
export class PartyDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'party-name', 'winning-rate', 'admin'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  currentData: any;
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  ngOnInit() {
    this.actRouter.params.subscribe((route: any) => {
      if (route?.id) {
        this.adminService.getAllParties(false).subscribe((res) => {
          res.data.forEach((response: any) => {
            if (response._id === route?.id) {
              console.log(response);
              this.currentData = response;
              this.dataSource = new MatTableDataSource(response.members);
            }
          });
        });
      }
    });
  }
  constructor(
    private actRouter: ActivatedRoute,
    private adminService: AdminServiceService
  ) {
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
