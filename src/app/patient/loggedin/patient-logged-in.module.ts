import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientLoggedInRoutingModule } from './patient-logged-in-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedComponentModuleModule } from '@app/_components/shared-component-module/shared-component-module.module';

@NgModule({
  declarations: [DashboardComponent,LayoutComponent, BookappointmentComponent
    ],
  imports: [
    CommonModule,
    PatientLoggedInRoutingModule,
    MatTableModule,MatInputModule,MatStepperModule,MatFormFieldModule, ReactiveFormsModule,SharedComponentModuleModule
  ]
})
export class PatientLoggedInModule { }
