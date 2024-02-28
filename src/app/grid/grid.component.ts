import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable, from, fromEvent, interval, of, take, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('animaBtn') animationBtn;
  @ViewChild('btn') btn;
  @ViewChildren ('btn') btns;

  isAnimation: boolean = false;
  $observable = new Observable((observer)=> {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
      observer.next(3);

      // throw('test');

      setTimeout(() => {
        observer.next(4);

        setTimeout(() => {
          observer.next(5);
        }, 3000);
      }, 3000);
    }, 2000);
  });

  sub: any;

  changeClass() {
    this.isAnimation = !this.isAnimation
  }

  ngOnInit(): void {

    const promise = new Promise((res, rej) => {
      try {
        const arr = [1, 2, 3];
        arr.push(4);
        arr.push(5);
        // throw('test');
        res(arr);
      } catch {
        const val = true;
        if (val)
        rej('Promsie Rejected');
        else 
        rej('Promise Rjected due to some different reason');
      }
    })

    this.sub = this.$observable.subscribe((res) => {
      // console.log(res);      
    })

    promise.then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    })


    let $ofOperator = of([1,2,3], 12, [12,3,4,5]);
    // let $ofOperator = of(1,2,3,4);
    $ofOperator.subscribe((res: any) => {
      // console.log(res);      
    })

    let $fromOperator = from([1,2,3,4]);
    $fromOperator.subscribe((res: any) => {
      // console.log(res);      
    })

    const intervalObs = interval(1000).pipe(
      take(6),
      toArray()
      ).subscribe((res: any) => {
      // console.log('Test');

      console.log(res);
      
      // if(res >= 8) {
      //   intervalObs.unsubscribe();
      // }
    })

    timer(3000).subscribe((res)=> {
      console.log('Timer RXJS');
    })

    console.log(this.btn);
    
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {

    const btnArr = this.btns._results.map(item => item.nativeElement);

    // console.log(btnArr);
    fromEvent(btnArr, 'click').subscribe((res)=>{
      console.log("Test");      
    })

    // console.log(this.btns._results);
    
  }
}
