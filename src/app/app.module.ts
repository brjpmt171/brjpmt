import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
//import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    //RenterDashboardComponent,
    //NotFoundComponent
    routingComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
