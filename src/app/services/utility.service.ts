import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor() { }

  name: string = 'Raouf';

  print(){
    console.log("I am the service");
  }
}
