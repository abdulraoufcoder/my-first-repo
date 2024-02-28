import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, debounceTime, distinctUntilChanged, from, fromEvent, interval, map, of, pluck, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit, AfterViewInit{

  date = new Date();

  timeZone:string = 'GMT+5'
  searchValue: string = '';
  textarea: string = '';

  @ViewChild('myInput') myInput: ElementRef;

  @ViewChild('color') color: ElementRef;
  @ViewChild('name') name: ElementRef;


  jsonObj : any = {
    title: "String",
    num: 12
  }

  arr = [
    'test_on_way',
    'patient_record',
    'ali_hassan',
  ]

  ngOnInit(): void {
    setInterval(()=>{
      this.date = new Date()
    },1000)

    const arr3 = [1,2,3];
    const arr4 = [4,5,6];

    // console.log([...arr3, ...arr4]);
    console.log([...arr3, 10, 11, ...arr4]);
    
    const arr5 = [];

    
    const arr6 = [2,545,54,54];
    arr5.push(arr3);
    console.log(...arr5);
    

    const obs = from(this.arr);
    const clicks = fromEvent(document, 'click');
    obs.pipe(
      takeLast(1)
    ).subscribe((res)=> {
      console.log(res);      
    })



    // interval(1000).pipe(
    //   takeUntil(clicks)
    // ).subscribe((res)=>{
    //   console.log(res);      
    // })

    
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.myInput.nativeElement, 'keyup')
    .pipe(
      map((item) => item.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe((res) => {
      // API HIT   
      console.log('api getting hitted', res);   
    })

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(item => item.target.value)
    );
    const nameObs = fromEvent(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    const eventsArr = [colorObs, nameObs];
    
    combineLatest(...eventsArr).subscribe(([name, color])=> {
      console.log(name);
      console.log(color);     
    });








    // const searchInput = fromEvent<any>(this.myInput.nativeElement, 'keyup');

    // searchInput.pipe(
    //   map(el => el.target.value),
    //   debounceTime(1000),
    //   distinctUntilChanged()
    // ).subscribe(res => {
    //   console.log(res);      
    // })

    // const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
    //   map(item => item.target.value)
    // );
    // const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
    //   pluck('target', 'value')
    // );

    // combineLatest(nameObs, colorObs).subscribe(([name, res]) => {
    //   console.log(name, res);      
    // })
  }

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


}
