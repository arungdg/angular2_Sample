import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PlacesComponent } from './places.component';
import { PlaceDetailComponent} from './place-detail.component';

const routes: Routes = [
    { path: 'detail/:id', component: PlaceDetailComponent },
    { path: 'places', component: PlacesComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }