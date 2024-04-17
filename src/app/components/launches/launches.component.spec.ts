import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { AppModule } from 'src/app/app.module';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { launchesMock } from 'src/assets/mocks/launchpads';
import { Launch } from 'src/app/models/launchpad';
import { LaunchpadService } from 'src/app/services/launchpad/launchpad.service';
import { of } from 'rxjs';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;
  let launchpadService: LaunchpadService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { launches: ['test'] } }
      ],
      declarations: [LaunchesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    launchpadService = TestBed.inject(LaunchpadService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getLaunchDetails', () => {
    it('should get data from API', () => {
      const response: Launch = launchesMock;
      spyOn(launchpadService, 'queryLaunches').and.returnValue(of(response))
      component.getLaunchDetails();
      fixture.detectChanges();
      expect(component.launches$).toBeDefined();
    })
  })
});
