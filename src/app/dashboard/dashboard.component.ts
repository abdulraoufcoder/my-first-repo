import { Component } from '@angular/core';
import { Router } from '@angular/router';
// const countryCodes = require('country-codes-list')
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {


  constructor(
    private router: Router
  ){
 
  }

  routeToLogin(){
    this.router.navigate(['/login'])
  }

  arr = [
    {
      id: 1,
      name: "First"
    },
    {
      id: 2,
      name: "Second"
    },
    {
      id: 3,
      name: "Third"
    }
  ]

  routeToStudent(paramCheck:boolean){
    this.router.navigate(['/student'], {queryParams: {isGraduated: true}})
    // student?name=Raouf
  }


}
