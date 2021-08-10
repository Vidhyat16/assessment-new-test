import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEditService } from '../create-edit-location/create-edit.service';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @Input()
  public locationlist: any;

  @Input()
  public redirection: any;

  @Output() locationEvent = new EventEmitter();

  constructor(
    private createEditService: CreateEditService,
    private router: Router
  ) {}

  ngOnInit() {}

  addLocation() {
    this.router.navigate([this.redirection]);
  }
  editLocation(data) {
    this.createEditService.location(data);
    localStorage.setItem('update', JSON.stringify(data));
    this.locationEvent.emit(this.locationlist);
    this.router.navigate([this.redirection]);
  }
  deleteLocation(data) {
    this.locationlist.splice(data, 1);
    this.locationEvent.emit(this.locationlist);
    console.log(this.locationlist);
  }
}
