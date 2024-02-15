import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit{

  date = new Date();

  timeZone:string = 'GMT+5'



  jsonObj : any = {
    title: "String",
    num: 12
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.date = new Date()
    },1000)
  }

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
    },
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
    },
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

  searchValue: string = '';
  textarea: string = ''
}
