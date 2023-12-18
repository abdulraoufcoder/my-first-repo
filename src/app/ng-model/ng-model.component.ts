import { Component, ViewChild } from '@angular/core';
import { User } from '../shared/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})

export class NgModelComponent {
  name: string = 'TEST'

  // user = {
  //   name: '',
  //   age: '',
  //   profession: ''
  // }

  user: User = new User();

  // @ViewChild('input') input;
  // @ViewChild('input2') input2;

  submit() {
    alert("Form submitted successfully");
    // console.log(this.input.nativeElement.value);   
    // console.log(this.input2.nativeElement.value);   

    // console.log(this.user);
    // console.log(this.user);




  }

  editProfile() {
    setTimeout(() => {
      this.user.name = "Raouf";
      this.user.age = '22',
        this.user.profession = "Development"
    }, 3000);
  }
}
