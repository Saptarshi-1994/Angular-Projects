import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MockupService } from './mockup';
import { SideNavbarComponent } from './home-page/side-navbar/side-navbar.component';
import { MainTableComponent } from './home-page/main-table/main-table.component';
import { PaginationComponent } from './home-page/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideNavbarComponent,
    MainTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MockupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
