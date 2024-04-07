import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { AppModule } from 'src/app/app.module';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [LaunchesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
