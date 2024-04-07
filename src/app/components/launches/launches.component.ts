import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription, forkJoin, map } from 'rxjs';
import { Launch } from 'src/app/models/launchpad';
import { LaunchpadService } from 'src/app/services/launchpad/launchpad.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.scss',
})
export class LaunchesComponent implements OnInit {
  launchDetailsSubscription: Subscription;
  launches$: Observable<Launch[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { launches: string[], launchpad: string }, private launchpadService: LaunchpadService) { }

  ngOnInit() {
    this.getLaunchDetails()
  }

  getLaunchDetails() {
    const requests = this.data.launches.map(element => this.launchpadService.queryLaunches(element));
    this.launches$ = forkJoin(requests).pipe(
      map(responses => {
        return responses;
      }))
  }
}