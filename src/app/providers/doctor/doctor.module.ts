import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedComponentModuleModule } from '@app/_components/shared-component-module/shared-component-module.module';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [DashboardComponent, LayoutComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedComponentModuleModule,
    MatTableModule,
    MatInputModule, MatTabsModule
  ]
})
export class DoctorModule { }
