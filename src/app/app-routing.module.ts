import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { StudentComponent } from "./roles/student/student.component";
import { TeacherComponent } from "./roles/teacher/teacher.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";

const routes: Routes = [

    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'teacher',
        component: TeacherComponent
    },
    {
        path: 'details/:id',
        component: ItemDetailsComponent
    },
    // {
    //     path: '**',
    //     component: NotFoundComponent
    // }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}