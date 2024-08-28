import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  place: Place | undefined;
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService,
    public router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaces().subscribe(places => {
      this.place = places.find(p => p.id === id);
    });
  }

  goBack() {
    this.router.navigate(['/places']);
  }

}
