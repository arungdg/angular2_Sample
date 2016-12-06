"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var place_service_1 = require('./place.service');
var PlacesComponent = (function () {
    function PlacesComponent(placeService, router) {
        this.placeService = placeService;
        this.router = router;
    }
    PlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (places) { return _this.places = places; });
    };
    PlacesComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    PlacesComponent.prototype.onSelect = function (place) {
        this.selectedPlace = place;
    };
    PlacesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPlace.id]);
    };
    PlacesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.placeService.create(name)
            .then(function (place) {
            _this.places.push(place);
            _this.selectedPlace = null;
        });
    };
    PlacesComponent.prototype.delete = function (place) {
        var _this = this;
        this.placeService
            .delete(place.id)
            .then(function () {
            _this.places = _this.places.filter(function (h) { return h !== place; });
            if (_this.selectedPlace === place) {
                _this.selectedPlace = null;
            }
        });
    };
    PlacesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-places',
            templateUrl: 'places.component.html',
            styleUrls: ['places.component.css']
        }), 
        __metadata('design:paramtypes', [place_service_1.PlaceService, router_1.Router])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
//# sourceMappingURL=places.component.js.map