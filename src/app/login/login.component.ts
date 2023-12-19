import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  role: string = '';

  constructor(
    private routing: Router,
    private std: Student
    ) { }


  submit() {
    if (this.role == 'student')
      this.routing.navigate(['/student'])
    else if (this.role == 'teacher')
      this.routing.navigate(['/teacher'])
    else
      alert('Route Undefiend')
  }
}

class Student {

  public name:string = 'Rauf';

  study(){

  }
}