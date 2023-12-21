import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems = [
    {
      title: 'LifeCycle Hooks',
      path: '/lifecycle-hooks'
    },
    {
      title: 'Student',
      path: '/student'
    }
  ]
  
}
