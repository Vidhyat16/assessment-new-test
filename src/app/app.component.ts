import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from './location.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('status') == 'loggedIn') {
      this.loggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem('update');
    localStorage.removeItem('status');
    this.router.navigate(['login']);
  }
}
