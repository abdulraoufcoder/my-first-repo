import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.scss']
})
export class IfElseComponent {
  isAuthenticated: boolean = true;

  season: string = 'winter';

  inputType = {
    label: 'Enter your name: ',
    type: 'dfaf',
    placeholder: 'Enter your name'
  }
}
