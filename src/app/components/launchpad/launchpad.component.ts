import { Component } from '@angular/core';
import { LaunchpadService } from '../../services/launchpad/launchpad.service';
import {
  LaunchPad,
  LaunchPadSearchResult,
  LaunchpadQuery,
  ToolbarEvent,
  ToolbarEventType,
} from '../../models/launchpad';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrl: './launchpad.component.scss',
})
export class LaunchpadComponent {
  launchpads$: Observable<LaunchPadSearchResult>;
  launchpads: LaunchPad[] = [];
  totalDocs: number;
  limit: number = 5;
  page: number;
  launchpadQuery: LaunchpadQuery = {
    query: {},
    options: { limit: 5, page: 1 },
  };
  constructor(private launchpadService: LaunchpadService) { }
  ngOnInit(): void {
    this.getLaunchpads();
  }

  getLaunchpads() {
    this.launchpads$ = this.launchpadService.queryLaunchpads(
      this.launchpadQuery,
    );
    this.launchpads$.subscribe((data) => {
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
}
