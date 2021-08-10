import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  error: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['location-view']);
      localStorage.setItem('status', 'loggedIn');
    } else {
      this.error = 'Invalid credentials';
      localStorage.removeItem('status');
    }
  }
}
