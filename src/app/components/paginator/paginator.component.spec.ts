import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { AppModule } from 'src/app/app.module';
import { PageEvent } from '@angular/material/paginator';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [PaginatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onPaginator', () => {
    it('should emit Page Event on paginator change', () => {
      const spy = spyOn(component.page, 'emit').and.callThrough()
      const event = {} as PageEvent;
      component.onPaginator(event)
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    })
  })
});
