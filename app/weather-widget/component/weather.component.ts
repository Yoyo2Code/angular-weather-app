import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: [ 'weather.component.css' ],
    providers: [ WeatherService ]
})

export class WeatherComponent implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);

    constructor(private service: WeatherService) { }

    ngOnInit() {
        this.getCurrentWeather();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.getCurrentWeather()
            },
            err => console.log(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude,this.pos.coords.longitude)
            .subscribe(weather => console.log(weather),
            err => console.error(err));
    }
}