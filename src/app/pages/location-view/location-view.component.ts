import { Component, VERSION } from '@angular/core';
import { LocationService } from '../../location.service';

@Component({
  selector: 'location-view',
  template:
    '<location-list [locationlist]="locationlist" redirection="add-update-location"></location-list>'
})
export class LocationViewComponent {
  locationlist: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getLocationList().subscribe(res => {
      if (!localStorage.getItem('list')) {
        this.locationlist = res;
        localStorage.setItem('list', JSON.stringify(res));
      } else {
        this.locationlist = JSON.parse(localStorage.getItem('list'));
      }
    });
  }
}
