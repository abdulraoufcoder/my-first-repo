import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy{
  @ViewChild('animaBtn') animationBtn;

  isAnimation: boolean = false;
  $observable = new Observable((observer)=> {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
      observer.next(3);

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
      const arr = [1, 2, 3];

      setTimeout(() => {
        arr.push(4);
        // [1,2,3,4]
        // console.log(arr);
        res(arr);
      }, 2000);

    })

    this.sub = this.$observable.subscribe((res) => {
      console.log(res);      
    })

    promise.then((res) => {
      // console.log(res);
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
