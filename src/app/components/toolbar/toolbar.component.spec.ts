import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { AppModule } from 'src/app/app.module';
import { toolbarEventMock } from 'src/assets/mocks/launchpads';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [ToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search', () => {
    it('emit search data', () => {
      let toolbarEvent: KeyboardEvent = toolbarEventMock.event;
      const spy = spyOn(component.toolbarEvent, 'emit').and.callThrough()
      component.search(toolbarEvent);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    })
  })
});
