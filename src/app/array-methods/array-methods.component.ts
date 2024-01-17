import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})

export class ArrayMethodsComponent implements OnInit{

  arrayMethods!: {title: string, value: string | number};

   arr = [1,2,3,4,5,6,7,8,9,10];

   kids: any[] = [
    {
      name: "Ali",
      age: 16
    },
    {
      name: "Ramzan",
      age: 30
    },
    {
      name: "Asad",
      age: 21
    },

   ]

   names = ['ali', 'asad']
   variable:any;
   newArr: any[] = [2];
   count:number = 0;
   ngOnInit(){
    // LENGTH



    this.variable = this.names.join(' ');
    console.log(typeof this.variable);
    

    let findKids = this.kids.find(item => item.age == 21)

    let findKidsIndex = this.kids.findIndex((item)=>{
      return item.age == 21
    })



    console.log(findKids);
    console.log("Index", findKidsIndex)
    
    
   }

   funct(){
    // console.log(findKidsIndex);
    
   }
}
