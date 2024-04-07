import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LaunchpadComponent } from './components/launchpad/launchpad.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [AppComponent, LaunchpadComponent, ToolbarComponent, PaginatorComponent, LaunchesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    // Custom element bindings (Angular 17)
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
