import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getLocationList() {
    return this.httpClient.get('assets/location-list.json');
  }
}
