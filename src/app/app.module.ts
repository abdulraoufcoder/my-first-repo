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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfElseComponent,
    NgForComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    TeacherModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
