import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Application-of-Angular';

  isPasswordValid: boolean = true;

  isAuthenticated: boolean = true

  user = {
    name: "Raouf",
    age: 21,
    profession: "Development"
  }

  ngOnInit(): void {
    this.getData()
  }

  students = [
    "Ahmed",
    "Ali",
    "Asad"
  ]

  getData() {
    const statement = false;
    const str: string = 'myNamqw'
    let sum = 0;

    str == 'myName' ? sum = 10 : sum = 30;

    console.log(sum);

    // if (statement) {
    //   sum = 10;
    // }else{
    //   sum = 30
    // }
    return "This is the array of students " + this.students
  }

  cgpaCalc(value1: number, value2: number) {
    return (value1 + value2) / 5;
  }

  users = [
    {
      name: "Raouf",
      age: 21
    }
  ]

  getUserData(index: number) {
    return `This is the user ${this.users[index].name}`
  }
}
