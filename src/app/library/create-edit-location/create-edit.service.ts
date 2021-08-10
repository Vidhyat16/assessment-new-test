import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fields } from './fields';

@Injectable({
  providedIn: 'root'
})
export class CreateEditService {
  _locationData: BehaviorSubject<Fields>;

  constructor() {
    this._locationData = new BehaviorSubject(null);
  }

  public location(data: Fields) {
    console.log(data, 'service');
    this._locationData.next(data);
  }
  public updateLocation(): Observable<Fields> {
    console.log(this._locationData);
    return this._locationData.asObservable();
  }
}
