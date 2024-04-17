import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadComponent } from './launchpad.component';
import { AppModule } from 'src/app/app.module';
import { LaunchPadSearchResult, ToolbarEvent } from 'src/app/models/launchpad';
import { LaunchpadService } from 'src/app/services/launchpad/launchpad.service';
import { of } from 'rxjs';
import { launchpadMock, paginationEventMock, toolbarEventMock } from 'src/assets/mocks/launchpads';
import { PageEvent } from '@angular/material/paginator';

describe('LaunchpadComponent', () => {
  let component: LaunchpadComponent;
  let fixture: ComponentFixture<LaunchpadComponent>;
  let launchpadService: LaunchpadService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [LaunchpadComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    launchpadService = TestBed.inject(LaunchpadService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getLaunchpads', () => {
    it('should get data from API', () => {
      const response: LaunchPadSearchResult = launchpadMock;
      spyOn(launchpadService, 'queryLaunchpads').and.returnValue(of(response))
      component.getLaunchpads();
      fixture.detectChanges();
      expect(component.launchpads).toEqual(response.docs);
      expect(component.totalDocs).toEqual(response.totalDocs);
      expect(component.limit).toEqual(response.limit);
      expect(component.page).toEqual(response.page);
    })
  })

  describe('onToolbarEvent', () => {
    it('should fire searchEvent', () => {
      let toolbarEvent: ToolbarEvent = toolbarEventMock;
      const spy = spyOn(component, 'queryLaunchpads').and.callThrough()
      component.onToolbarEvent(toolbarEvent);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    })
  })

  describe('onPaginator', () => {
    it('should call API on pagination change', () => {
      const pageEvent: PageEvent = paginationEventMock;
      const response: LaunchPadSearchResult = launchpadMock;
      spyOn(launchpadService, 'queryLaunchpads').and.returnValue(of(response))
      component.onPaginator(pageEvent);
      fixture.detectChanges();
      expect(component.launchpads).toEqual(response.docs);
    })
  })

  describe('openDialog', () => {
    it('should show launches when "View Launches" is clicked', () => {
      const spy = spyOn(component.dialog, 'open').and.callThrough()
      component.openDialog(['test'], 'test');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    })
  })
});
