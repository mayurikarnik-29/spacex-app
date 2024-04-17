import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LaunchpadService } from '../../services/launchpad/launchpad.service';
import {
  LaunchPad,
  LaunchPadSearchResult,
  LaunchpadQuery,
  ToolbarEvent,
  ToolbarEventType,
} from '../../models/launchpad';
import { Observable, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LaunchesComponent } from '../launches/launches.component';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrl: './launchpad.component.scss',
})
export class LaunchpadComponent implements OnInit, OnDestroy {
  launchpads$: Observable<LaunchPadSearchResult>;
  launchpadSubscription: Subscription;
  launchpads: LaunchPad[] = [];
  totalDocs: number;
  limit: number = 5;
  page: number;
  launchpadQuery: LaunchpadQuery = {
    query: {},
    options: { limit: 5, page: 1 },
  };
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;
  constructor(private launchpadService: LaunchpadService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getLaunchpads();
  }

  getLaunchpads() {
    this.launchpads$ = this.launchpadService.queryLaunchpads(
      this.launchpadQuery,
    );
    this.launchpadSubscription = this.launchpads$.subscribe((data) => {
      this.launchpads = data.docs;
      this.totalDocs = data.totalDocs;
      this.limit = data.limit;
      this.page = data.page;
    });
  }

  onToolbarEvent(toolbarEvent: ToolbarEvent) {
    switch (toolbarEvent.type) {
      case ToolbarEventType.SearchEvent:
        this.queryLaunchpads(toolbarEvent.event as KeyboardEvent);
        break;
    }
  }

  queryLaunchpads(event: KeyboardEvent) {
    this.launchpadQuery = {
      ...this.launchpadQuery,
      options: {
        limit: this.limit,
        page: 1,
      },
      query: {
        ...((event.target as HTMLInputElement)?.value && {
          $or: [
            {
              name: {
                $regex: (event.target as HTMLInputElement)?.value,
                $options: 'i',
              },
            },
            {
              region: {
                $regex: (event.target as HTMLInputElement)?.value,
                $options: 'i',
              },
            },
          ],
        }),
      },
    };
    this.paginatorComponent.paginator.firstPage()
    this.getLaunchpads();
  }

  onPaginator(event: PageEvent) {
    this.limit = event.pageSize;
    this.page = event.pageIndex + 1;
    this.launchpadQuery = {
      ...this.launchpadQuery,
      options: {
        limit: this.limit,
        page: this.page,
      },
    };
    this.getLaunchpads();
  }

  openDialog(launches: string[], launchpadName: string) {
    const dialogRef = this.dialog.open(LaunchesComponent, {
      width: '40vw',
      height: '60vh',
      panelClass: 'launches-dialog-panel',
      data: { launches: launches, launchpad: launchpadName },
    });
  }

  ngOnDestroy() {
    this.launchpadSubscription.unsubscribe()
  }
}
