import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { RandomPlaceComponent } from './random-place/random-place.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [PlaceListComponent, PlaceDetailComponent, RandomPlaceComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MatCardModule, MatButtonModule
  ]
})
export class PlacesModule { }
