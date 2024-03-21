import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LaunchpadComponent } from './components/launchpad/launchpad.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, LaunchpadComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    // Custom element bindings (Angular 17)
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
