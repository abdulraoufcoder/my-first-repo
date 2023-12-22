import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  userArr :any = []

  ngOnInit(): void {
    this.httpService.getUsers().subscribe((res:any)=>{
      this.userArr = res.data;    
      console.log(this.userArr);  
    })
  }
}
