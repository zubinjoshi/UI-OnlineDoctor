import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
// import { CardComponent } from '@app/_components/card/card.component';
import { TableComponent } from '@app/_components/table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { BpListComponent } from './bp-list/bp-list.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { SharedComponentModuleModule } from '@app/_components/shared-component-module/shared-component-module.module';
@NgModule({
  declarations: [DashboardComponent,  LayoutComponent,
    TableComponent,DoctorListComponent, PharmacyListComponent, LabListComponent, BpListComponent, DoctorViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AdminRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    SharedComponentModuleModule
  ],


})
export class AdminModule { }
