import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationViewComponent } from './location-view.component';
import { LocationViewRoutingModule } from './location-view-routing.module';
import { LocationListModule } from '../../library/location-list/location-list.module';

@NgModule({
  imports: [FormsModule, LocationViewRoutingModule, LocationListModule],
  declarations: [LocationViewComponent]
})
export class LocationViewModule {}
