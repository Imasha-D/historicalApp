import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

const routes: Routes = [
  { path: '', component: PlaceListComponent },
  { path: ':id', component: PlaceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
