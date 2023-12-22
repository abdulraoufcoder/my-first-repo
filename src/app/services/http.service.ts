import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'https://car-rental-six-sooty.vercel.app'

  constructor(private http: HttpClient) { }

  getUsers(){
    // return this.http.get(this.baseUrl + '/car/getAllCars')
    return this.http.get(`${this.baseUrl}/car/getAllCars`)
    // WE DONT SUBSCRIBE HERE
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
    //   console.log(res);      
    // })
  }

  setUser(){
    return this.http.post('url', {})
  }
}
