import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateLocationComponent } from './add-update-location.component';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateLocationRoutingModule {}
