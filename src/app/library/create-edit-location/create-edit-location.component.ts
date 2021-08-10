import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEditService } from './create-edit.service';
import { Fields } from './fields';

@Component({
  selector: 'create-edit-location',
  templateUrl: './create-edit-location.component.html',
  styleUrls: ['./create-edit-location.component.css']
})
export class CreateEditLocationComponent implements OnInit {
  fields?: Fields;
  editEnabled = false;
  @Input()
  locationlist = [];

  @Output() locationEvent = new EventEmitter();

  location$: Observable<any>;
  locationForm: any;
  success = false;

  constructor(private createEditService: CreateEditService) {}

  ngOnInit() {
    if (localStorage.getItem('update')) {
      this.editEnabled = true;
      this.fields = JSON.parse(localStorage.getItem('update'));
    } else {
      this.editEnabled = false;
      this.fields = {
        name: null,
        zipCode: null,
        hours: null,
        mobileNumber: null,
        latitude: null,
        longitude: null,
        ticket: null
      };
    }
  }

  addUpdateLocation() {
    this.success = true;
    this.locationEvent.emit(this.fields);
  }

  ngOnDestroy() {
    localStorage.removeItem('update');
  }
}
