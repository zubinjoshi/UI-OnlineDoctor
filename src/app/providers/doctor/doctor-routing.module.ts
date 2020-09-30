import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    {
      path: 'doctorlist', component: DashboardComponent,
      children: [{ path: '/doctorview/:doctorId', component: DashboardComponent }]
    },
    { path: 'Add Profile', component: DashboardComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class DoctorRoutingModule { }
