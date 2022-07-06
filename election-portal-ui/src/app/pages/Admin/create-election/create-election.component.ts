import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Colleges, parties } from 'src/app/shared/Constants/constants';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.scss'],
})
export class CreateElectionComponent implements OnInit {
  selectedCollege = new FormControl();
  colleges = Colleges;
  selectedParty = new FormControl([]);
  PARTY: any = parties;
  title = '';
  date: any = new Date();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    let electionData = {
      party: this.title,
      date: this.date,
      status: 'Upcoming',
    };
    if (!localStorage?.getItem('election')) {
      localStorage.setItem('election', JSON.stringify([electionData]));
    } else {
      let data: any = localStorage?.getItem('election');
      let parseData = JSON.parse(data);

      parseData.push(electionData);

      localStorage.setItem('election', JSON.stringify(parseData));
    }

    this.router.navigate(['/admin/elections']);
  }
}
