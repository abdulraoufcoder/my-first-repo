import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { StudentComponent } from "./roles/student/student.component";
import { TeacherComponent } from "./roles/teacher/teacher.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { RegisterComponent } from "./roles/student/register/register.component";
import { ResultComponent } from "./roles/student/result/result.component";
import { DegreeComponent } from "./roles/student/degree/degree.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { HttpClientComponent } from "./http-client/http-client.component";
import { PipeComponent } from "./pipe/pipe.component";
import { DiretiveComponent } from "./diretive/diretive.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'directive',
        component: DiretiveComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        title: ''
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'http',
        component: HttpClientComponent
    },
    {
        // student/anything
        path: 'student',
        component: StudentComponent,
        title: 'Student',
        data: {name: 'Raouf'},
        children: [
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'result',
                component: ResultComponent
            },
            {
                path: 'degree',
                component: DegreeComponent
            }
        ]
    },
    {
        path: 'teacher',
        component: TeacherComponent
    },
    {
        // PARAMETER can be of any name
        path: 'details/:id/:slug',
        component: ItemDetailsComponent,
        title: 'Car Details'
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