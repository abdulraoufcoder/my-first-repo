import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  user: {} = {
    name: 'Raouf',
    age: 20,
    profession: 'Developer'
  }

  nums: any = [
    1, 2, 3, 4, 5, 6
  ]

  pageNumber: number = 3;
  pageSize: number = 10;
  names: string[] = [
    'zargham', 'ahmed', 'surraya', 'hamza', 'talha', 'aleesha', 'asad', 'ali', 'amna', 'areesha'
  ]

  nestedArr = [
    {
      name: 'Books',
      items: [
        "rich dad poor dad",
        "how to win friends and influence people",
        "atomic habits",
        "ego is the enemy"
      ]
    },
    {
      name: 'Seasons',
      items: [
        "spring",
        "winter",
        "autumn",
        "summer"
      ]
    },
    {
      name: 'Tea Types',
      items: [
        "green tea",
        "black tea",
        "capachino",
        "latte"
      ]
    },


  ]

  printArray() {
    console.log(this.nums);
  }
}
