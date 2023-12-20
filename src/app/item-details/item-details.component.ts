import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  constructor(private activeRoute: ActivatedRoute){
    console.log("Page Loaded");

    this.activeRoute.params.subscribe((parameters:any)=>{
      console.log(parameters);   

      // this.arr.forEach((obj)=> {
      //   console.log(obj);        
      // })

      for(let i=0; i<this.arr.length; i++){
        // console.log(this.arr[i]);
        if(this.arr[i].id == parameters.id){
          console.log("Record Found");
          console.table(this.arr[i])   
          this.name = this.arr[i].name       
        }
      }
    })

  }

  name: string = ''
  submit(){}


  arr = [
    {
      id: 3,
      name: 'RAuof',
    },
    {
      id: 2,
      name: "Asad"
    },
    {
      id: 1,
      "name": "Ali"
    }
  ]
}
