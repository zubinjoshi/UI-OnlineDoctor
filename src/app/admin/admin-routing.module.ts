import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { BpListComponent } from './bp-list/bp-list.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    {
      path: 'doctorlist', component: DoctorListComponent,
      children: [{ path: '/doctorview/:doctorId', component: DoctorViewComponent }]
    },
    { path: 'pharmacylist', component: PharmacyListComponent },
    { path: 'lablist', component: LabListComponent },
    { path: 'bplist', component: BpListComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class AdminRoutingModule { }
