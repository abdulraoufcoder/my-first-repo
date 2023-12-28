import { Component } from '@angular/core';

@Component({
  selector: 'app-diretive',
  templateUrl: './diretive.component.html',
  styleUrls: ['./diretive.component.scss']
})
export class DiretiveComponent {
  name: string = '';

  design :any= {
    backgroundColor: 'grey',
    padding: '50px'
  }
}
