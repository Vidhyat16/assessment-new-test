import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: '<login></login>'
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('status') == 'loggedIn') {
      this.router.navigate(['location-view']);
    }
  }
}
