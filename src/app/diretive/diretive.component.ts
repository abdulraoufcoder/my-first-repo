import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, filter, from, fromEvent, interval, map, merge, mergeMap, of, pluck, retry, retryWhen } from 'rxjs';

@Component({
  selector: 'app-diretive',
  templateUrl: './diretive.component.html',
  styleUrls: ['./diretive.component.scss']
})
export class DiretiveComponent implements OnInit {
  name: string = '';

  constructor(private http: HttpClient) {
    const num = 45;

    console.log(num);
    
   }

  design: any = {
    backgroundColor: 'grey',
    padding: '50px'
  }

  

  ngOnInit(): void {

    // Create an observable that emits numbers 1, 2, and 3
    const source$ = from([
      {
        name: 'Asad', age: 21,
        job: {
          title: 'Wordpress Dev',
          salary: 25000
        }
      },
      {
        name: 'Ali', age: 21,
        job: {
          title: 'React Dev',
          salary: 18000
        }
      },
      {
        name: 'Kamran', age: 21,
        job: {
          title: 'Angular Dev',
          salary: 20000
        }
      }
    ]);

    const values = from([1, 3, 4]);


    source$.pipe(pluck('job', 'salary')).subscribe((res: any) => {
      console.log(res);
    })

    source$.pipe(filter(item => {
      return item.job.salary >= 20000;
    })).subscribe((res: any)=> {
      console.log(res);      
    })

    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      retryWhen(error => error.pipe(delay(5000)))
    ).subscribe((res:any)=>{
      console.log(res);      
    })
  }




}
