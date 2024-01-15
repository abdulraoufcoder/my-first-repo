import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})

export class ArrayMethodsComponent implements OnInit{

  arrayMethods!: {title: string, value: string | number};

   arr = [1,2,3,4,5,6,7,8,9,10];
   names = ['ali', 'asad']
   variable:any;
   newArr: any[] = [2];
   count:number = 0;
   ngOnInit(){
    // LENGTH



    this.variable = this.names.join(' ');
    console.log(typeof this.variable);
    
    
   }
}
