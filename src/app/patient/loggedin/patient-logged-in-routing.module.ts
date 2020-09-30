import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard.component';
import { AdditionalProfileComponent } from '../profile/additional-profile/additional-profile.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'patientdashboard', component: DashboardComponent },
    {
      path: 'patientprofile', component: AdditionalProfileComponent
    },
    { path: 'bookappointment', component: BookappointmentComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientLoggedInRoutingModule { }
