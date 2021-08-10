import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'location-view',
    loadChildren: () =>
      import('./pages/location-view/location-view.module').then(
        m => m.LocationViewModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-update-location',
    loadChildren: () =>
      import('./pages/add-update-location/add-update-location.module').then(
        m => m.AddUpdateLocationModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: 'location-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
