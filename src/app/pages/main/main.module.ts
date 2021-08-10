import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LoginModule } from '../../library/login/login.module';

@NgModule({
  imports: [FormsModule, MainRoutingModule, LoginModule],
  declarations: [MainComponent]
})
export class MainModule {}
