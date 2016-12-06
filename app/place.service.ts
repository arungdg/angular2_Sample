import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from './place';

@Injectable()

export class PlaceService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private placesUrl = 'app/places';
    
    constructor(private http: Http) { }

    getPlaces(): Promise<Place[]> {
        return this.http.get(this.placesUrl)
        .toPromise()
        .then(response => response.json().data as Place[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

    getPlacesSlowly(): Promise<Place[]> {
        return new Promise<Place[]>(resolve =>
        setTimeout(resolve, 2000))
        .then(() => this.getPlaces());
    }

    getPlace(id: number): Promise<Place> {
        return this.getPlaces()
        .then(places => places.find(place => place.id === id));
    } 

    update(place: Place): Promise<Place> {
        const url = `${this.placesUrl}/${place.id}`;
        return this.http
            .put(url, JSON.stringify(place), {headers: this.headers})
            .toPromise()
            .then(() => place)
            .catch(this.handleError);
    }

    create(name: string): Promise<Place> {
        return this.http
        .post(this.placesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.placesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }   
}