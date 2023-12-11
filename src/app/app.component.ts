import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Login } from './shared/models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // 12/11/2023
  imgUrl: string = 'https://picsum.photos/id/100/500/500'
  changeImage(url:string){
    this.imgUrl = url
  }

  nameInputVar: string = ''
  getInput(value){
    this.nameInputVar = value    
  }

  // MODULING LEARNING
  objValue: string = ''
  obj: Login;
  submitForm(form:any){
    this.obj = {
      email: form.email.value,
      password: form.password.value
    }   
    console.log(this.obj); 
    this.print(this.obj)
  }

  print(obj:Login){
    this.objValue = `The student email is ${obj.email} and the student password is ${obj.password}`
  }

  activeDepartment: string = 'student';


  inputValue : string = ''
  inputSubmit(input:any){
    this.inputValue = input.value        
  }

  changeDepartment(department: string){
    this.activeDepartment = department
  }



  //====================================
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
