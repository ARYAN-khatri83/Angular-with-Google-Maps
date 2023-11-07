import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css'],
})
export class MarkerComponent implements AfterViewInit {
  map: any;
  markers: google.maps.Marker[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    const ele = document.getElementById("content") as HTMLElement;
    this.map = new google.maps.Map(ele, {
      zoom: 4,
      center: this.center,
    });

    // Create and add markers
    const marker1 = new google.maps.Marker({
      position: { lat: 10.2188343994493, lng: 92.57713289999998 },
      map: this.map,
      title: 'Andhra Pradesh',
    });

    // Add a click event listener to zoom in on marker click
    marker1.addListener('click', () => {
      this.zoomInOnClick(marker1);
    });
    this.markers.push(marker1);

    const marker2 = new google.maps.Marker({
      position: { lat: 15.924090500015737, lng: 80.18638089999999 },
      map: this.map,
      title: 'Andaman',
    });

    // Add a click event listener to zoom in on marker click
    marker2.addListener('click', () => {
      this.zoomInOnClick(marker2);
    });
    this.markers.push(marker2);

    const marker3 = new google.maps.Marker({
      position: { lat: 28.7041, lng: 77.1025 },
      map: this.map,
      title: 'Delhi',
    });

    // Add a click event listener to zoom in on marker click
    marker3.addListener('click', () => {
      this.zoomInOnClick(marker3);
    });
    this.markers.push(marker3);


    // Event listener for zoom change
    const m = this.map;
    google.maps.event.addListener(m, 'zoom_changed', function (event: any) {
      console.log(m.getZoom());
    });
  }

  center: google.maps.LatLngLiteral = {
    lat: 20.5937,
    lng: 78.9629,
  };

  zoomInOnClick(marker: google.maps.Marker) {
    const currentZoom = this.map.getZoom();
    const newZoom = currentZoom + 2; // Increase the zoom level by 2
    this.map.setZoom(newZoom);
    this.map.setCenter(marker.getPosition()); // Center the map on the clicked marker
  }
}
