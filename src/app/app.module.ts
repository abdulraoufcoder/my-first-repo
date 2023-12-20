import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { IfElseComponent } from './if-else/if-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { StudentComponent } from './roles/student/student.component';
import { TeacherComponent } from './roles/teacher/teacher.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RegisterComponent } from './roles/student/register/register.component';
import { ResultComponent } from './roles/student/result/result.component';
import { DegreeComponent } from './roles/student/degree/degree.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfElseComponent,
    NgForComponent,
    NgModelComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NotFoundComponent,
    StudentComponent,
    TeacherComponent,
    ItemDetailsComponent,
    RegisterComponent,
    ResultComponent,
    DegreeComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    TeacherModule,
    FormsModule,
    AppRoutingModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
