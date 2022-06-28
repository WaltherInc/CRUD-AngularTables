import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

//Components
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuaryComponent } from './components/usuary/usuary.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    NavbarComponent,
    UsuaryComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
