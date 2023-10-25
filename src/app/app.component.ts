import { Component, OnInit ,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker , GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  /*
  constructor() {}
  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  */

  // MAP MAKER
 constructor(){}
 ngOnInit() {}

 center: google.maps.LatLngLiteral = {
  lat: 24,
  lng: 12
};
zoom = 4;
markerOptions: google.maps.MarkerOptions = {
  draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [];
addMarker(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  
}


// INFO WINDOW
/*
constructor(){}
ngOnInit() {}
@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
};
markerPositions: google.maps.LatLngLiteral[] = [];
zoom = 4;
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}
openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
}
*/





}






