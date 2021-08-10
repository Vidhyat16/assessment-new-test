import { Component, VERSION } from '@angular/core';
import { CreateEditService } from '../../library/create-edit-location/create-edit.service';
import { LocationService } from '../../location.service';

@Component({
  selector: 'add-update',
  template:
    '<create-edit-location [locationlist]="locationlist" (locationEvent)="addUpdateLocation($event)"> </create-edit-location>'
})
export class AddUpdateLocationComponent {
  locationlist: any;

  constructor(
    private locationService: LocationService,
    private createEditService: CreateEditService
  ) {}

  ngOnInit() {
    this.createEditService.updateLocation().subscribe(res => {
      console.log(res, 'create');
    });
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
  addUpdateLocation(newLocation) {
    this.locationlist.push(newLocation);
    localStorage.setItem('list', JSON.stringify(this.locationlist));
  }
}
