import { Component } from '@angular/core';
import { routes } from '../shared/uitlities/routes';

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
    },
    {
      title: 'Pipe',
      path: '/pipe'
    },
    {
      title: 'Directive',
      path: '/directive'
    },
    {
      title: 'Grid',
      path: '/grid'
    },
    {
      title: routes.array_methods.title,
      path: routes.array_methods.path
    }
  ]
  
}
