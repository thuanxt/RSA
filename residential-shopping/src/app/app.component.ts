import { Component } from '@angular/core';
import { Auth0Service } from './core/auth0.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isCollapsed = true;

  constructor(private auth0: Auth0Service) {};
}
