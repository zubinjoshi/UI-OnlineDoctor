import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { LayoutComponent } from './layout.component';
import { SpecialitiesComponent } from '@app/_components/specialities/specialities.component';
import { OtpComponent } from './otp/otp.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchingDoctorsComponent } from '@app/_components/matching-doctors/matching-doctors.component';
import { PaymentComponent } from './payment/payment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AdditionalProfileComponent } from './profile/additional-profile/additional-profile.component';
import { SharedComponentModuleModule } from '@app/_components/shared-component-module/shared-component-module.module';
@NgModule({
  declarations: [LayoutComponent, 
    SpecialitiesComponent,
    OtpComponent,
    ProfileComponent,
      MatchingDoctorsComponent,
    PaymentComponent,
        AdditionalProfileComponent
   
  ],
  imports: [
    
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule ,
    MatButtonToggleModule,
    SharedComponentModuleModule
  ]
 
})
export class PatientModule { }
