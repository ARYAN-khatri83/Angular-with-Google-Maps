import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChatGptService } from '../gpt.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css'],
})
export class MarkerComponent {
  constructor(private gptService: ChatGptService) {}

  http = new HttpClientModule();
  center: google.maps.LatLngLiteral = {
    lat: 20.5937,
    lng: 78.9629,
  };

  zoom = 3;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 10.2188343994493,
      lng: 92.57713289999998,
    },
    {
      lat: 15.924090500015737,
      lng: 80.18638089999999,
    },
    {
      lat: 28.093770199935786,
      lng: 94.5921326,
    },
  ];
  onMarkerClick(event: google.maps.MapMouseEvent): void {
    // Check if event.latLng is not null
    this.test();

    if (event.latLng) {
      // Get the clicked location
      const clickedLocation = event.latLng;

      // Set the map's center to the clicked location
      this.center = {
        lat: clickedLocation.lat(),
        lng: clickedLocation.lng(),
      };

      this.zoom += 0.8; // Adjust the zoom level as needed
    }
  }

  test() {
    this.gptService
      .generateResponse(
        'Give me the coordinates of top 10 visiting places in india'
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

  /*
  markers = [
    {
      position: new google.maps.LatLng(40.73061, 73.935242),
      map: this['map'],
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.06485, 34.763226),
      map: this['map'],
      title: "Marker 2"
    }
  ];
  */
}

/**
 * app -> chatgpt api request - response - google maps - plot
 */
