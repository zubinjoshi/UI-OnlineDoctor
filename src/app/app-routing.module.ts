import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ContainerComponent } from './_components/container/container.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const patientModule=()=> import('./patient/patient.module').then(x=>x.PatientModule);
const adminModule=()=> import('./admin/admin.module').then(x=>x.AdminModule);
//add provider module then doctor module
const doctorMoudle=()=> import('./providers/doctor/doctor.module').then(x=>x.DoctorModule);
const patientLoggedInMoudle=()=> import('./patient/loggedin/patient-logged-in.module').then(x=>x.PatientLoggedInModule);
const routes: Routes = [
    { path: '', component: ContainerComponent },
    { path: 'patient', loadChildren:patientModule},
    { path: 'patientloggedin', loadChildren:patientLoggedInMoudle},
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'front', loadChildren: () => import('./front/front.module').then(m => m.FrontModule)},
    { path: 'admin', loadChildren:adminModule},
    { path: 'provider/doctor', loadChildren:doctorMoudle},//changed the url to provider/doctor/dashboard
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }