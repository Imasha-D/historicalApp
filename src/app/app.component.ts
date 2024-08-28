import { Component } from '@angular/core';
import { PlaceService } from './services/place.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Historical Places';

  constructor(private placeService: PlaceService){

}
  onRandomPlacesClick(): void {
    this.placeService.addRandomPlace().subscribe();
  }

}
