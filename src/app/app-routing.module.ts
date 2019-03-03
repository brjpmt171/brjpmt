import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'renter-dashboard',
    component: RenterDashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[HomeComponent,RenterDashboardComponent,NotFoundComponent ]