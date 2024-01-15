import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @ViewChild('animaBtn') animationBtn;

  isAnimation: boolean = false;

  changeClass(){
    this.isAnimation = !this.isAnimation
  }
}
