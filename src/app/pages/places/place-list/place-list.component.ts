import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  places: Place[] = [];
  constructor(public placeService: PlaceService, public router: Router) { }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(places => this.places = places);
  }

  // Method to handle marking a place as visited
  markAsVisited(place: Place) {
    this.placeService.markAsVisited(place.id).subscribe((data)=>{
      
    });
  }

  navigateToDescription(placeId: number){
    this.router.navigate(['/places', placeId]);
  }
}
