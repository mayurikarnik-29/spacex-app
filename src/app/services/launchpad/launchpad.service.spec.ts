import { TestBed } from '@angular/core/testing';

import { LaunchpadService } from './launchpad.service';
import { HttpClientModule } from '@angular/common/http';

describe('LaunchpadService', () => {
  let service: LaunchpadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LaunchpadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#queryLaunchpads for spaceX API', (done) => {
    const query = {options: {}, query: {}}
    service.queryLaunchpads(query).subscribe((value) => {
      expect(value).toBeDefined()
      done();
    });
  });

  // Test to run when using local API
  // it('#queryLaunchpads for local API', (done) => {
  //   service.useLocal = true;
  //   const query = {options: {}, query: {}}
  //   service.queryLaunchpads(query).subscribe((value) => {
  //     expect(value).toBeDefined()
  //     done();
  //   });
  // });
});
