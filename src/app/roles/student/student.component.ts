import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  
  current: string = 'result'

  constructor(private activeRoute: ActivatedRoute){
    console.clear()
    console.log("Student page Loaded");
    
    this.activeRoute.queryParams.subscribe((qparams:any)=>{
      console.log(qparams);
      
    })

    this.activeRoute.data.subscribe((res)=>{
      console.log(res);      
    })
  }
}
