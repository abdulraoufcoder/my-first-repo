import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { IfElseComponent } from './if-else/if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfElseComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule,
    TeacherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
