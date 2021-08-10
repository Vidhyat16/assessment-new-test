import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './library/login/login.module';
import { LocationListModule } from './library/location-list/location-list.module';
import { CreateEditModule } from './library/create-edit-location/create-edit-location.module';
import { CreateEditService } from './library/create-edit-location/create-edit.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    LocationListModule,
    HttpClientModule,
    AppRoutingModule,
    CreateEditModule,
    CommonModule
  ],
  providers: [CreateEditService, AuthGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
