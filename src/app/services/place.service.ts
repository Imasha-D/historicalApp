import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';
import { Observable, of } from 'rxjs';
import { PLACES } from '../models/placed-data';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private places: Place[] = PLACES;


  constructor() { }

  getPlaces(): Observable<Place[]> {
    return of(this.places);
  }

  markAsVisited(id: number): Observable<Place> { 
    // Find and update the place
    const place = this.places.find(p => p.id === id);
    if (place) {
      place.isVisited = !place.isVisited; 
      return of(place);
    }
    // Return the updated place as an observable
  }


  getRandomPlace(): Place {
    const randomIndex = Math.floor(Math.random() * this.places.length);
    return this.places[randomIndex];
  }

  addRandomPlace(): Observable<Place[]> {
    const newPlace = new Place(
      this.places.length + 1,
      'Random Place ' + (this.places.length + 1),
      'A randomly generated place.',
      'https://www.yiwubazaar.com/resources/assets/images/default-product.jpg',
      false
    );

    this.places.push(newPlace);
    return of(this.places);
  }
  
}
