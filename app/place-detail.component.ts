import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Place } from './place';
import { PlaceService } from './place.service';

@Component({
    moduleId: module.id,
    selector: 'my-place-detail',
    templateUrl: 'place-detail.component.html',
    styleUrls: ['place-detail.component.css']
})

export class PlaceDetailComponent {
}  