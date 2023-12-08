import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListingComponent } from './teacher-listing/teacher-listing.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';



@NgModule({
  declarations: [
    TeacherListingComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeacherDashboardComponent
  ]
})
export class TeacherModule { }
