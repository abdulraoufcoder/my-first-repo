import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  date = new Date();

  timeZone:string = 'GMT+5'

  arr = [
    'test_on_way',
    'patient_record',
    'ali_hassan',
  ]

  arr2 = [
    {
      title: 'Test on Way',
      value: 'test_on_way'
    },
    {
      title: 'Patient Records',
      value: 'patient_record'
    },
    {
      title: 'Ali Hassan',
      value: 'ali_hassan'
    }
  ]

  valueSelected(value:any){
    console.log(value);
    
  }
}
