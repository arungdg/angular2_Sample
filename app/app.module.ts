import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PlaceDetailComponent } from './place-detail.component';
import { PlacesComponent } from './places.component';
import { PlaceService } from './place.service';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule, 
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
        ],
    declarations: [ 
        AppComponent,
        PlaceDetailComponent,
        PlacesComponent
        ],
    providers: [ PlaceService],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}