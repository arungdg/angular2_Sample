import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Place } from './place';
import { PlaceService } from './place.service';

@Component ({
    moduleId: module.id,
    selector:'my-places',
    templateUrl: 'places.component.html',
    styleUrls: [ 'places.component.css' ]
})

export class PlacesComponent implements OnInit{
    places: Place[];
    selectedPlace: Place;

    constructor(
        private placeService: PlaceService, 
        private router: Router) { }

    getPlaces(): void {
        this.placeService.getPlaces().then(places => this.places = places);
    }

    ngOnInit(): void{
        this.getPlaces();
    }

    onSelect(place: Place): void {
        this.selectedPlace = place;
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail',this.selectedPlace.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.placeService.create(name)
        .then(place => {
            this.places.push(place);
            this.selectedPlace = null;
        });
    }

    delete(place: Place): void {
        this.placeService
        .delete(place.id)
        .then(() => {
        this.places = this.places.filter(h => h !== place);
        if (this.selectedPlace === place) { this.selectedPlace = null; }
        });
    }
}
