import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';



@NgModule({
  declarations: [
    StudentListingComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentDashboardComponent
  ]
})
export class StudentModule { }
