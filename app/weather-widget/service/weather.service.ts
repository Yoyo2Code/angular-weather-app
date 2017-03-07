import { Injectable } from '@angular/core';

@Injectable()

export class WeatherService {
    getCurrentLocation(): [number, number] {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude);
                return [pos.coords.latitude, pos.coords.longitude];
            },
            err => console.error("Unable to get the position - ", err));
        } else {
            console.log("Geolocation is not available");
            return [0,0];
        }
    } 
}