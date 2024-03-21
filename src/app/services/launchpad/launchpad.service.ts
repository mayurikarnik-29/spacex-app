import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchpadQuery, LaunchPadSearchResult } from '../../models/launchpad';
@Injectable({
  providedIn: 'root',
})
export class LaunchpadService {
  lauchpadUrl = 'https://api.spacexdata.com/v4';
  localUrl = 'http://localhost:3000';
  // Change this variable to use local API
  useLocal = false;
  constructor(private http: HttpClient) { }

  queryLaunchpads(query: LaunchpadQuery): Observable<LaunchPadSearchResult> {
    if (this.useLocal) {
      return this.http.post<LaunchPadSearchResult>(
        `${this.localUrl}/launchpads`,
        query,
      );
    } else {
      return this.http.post<LaunchPadSearchResult>(
        `${this.lauchpadUrl}/launchpads/query`,
        query,
      );
    }
  }
}
