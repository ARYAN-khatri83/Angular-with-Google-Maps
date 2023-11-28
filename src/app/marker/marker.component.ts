import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css'],
})
export class MarkerComponent implements AfterViewInit {
  map: any;
  markers: any[] = [];
  minZoomLevel = 2;

  latitude: string = '';
  longitude: string = '';
  selectedMarkerIndex: any;
  removeMarkers: any;

  center: google.maps.LatLngLiteral = {
    lat: 20.5937,
    lng: 78.9629,
  };

  createCustomMarkerIcon(color: string): google.maps.Symbol {
    return {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 6, // Adjust the scale as needed
      fillColor: color,
      fillOpacity: 1,
      strokeWeight: 0,
    };
  }

  zoomInOnClick(map: google.maps.Map, marker: google.maps.Marker) {
    const currentZoom = map.getZoom();

    if (currentZoom !== null && currentZoom !== undefined) {
      const newZoom = currentZoom + 2; // Increase the zoom level by 2

      const markerPosition = marker.getPosition();
      if (markerPosition !== null && markerPosition !== undefined) {
        map.setZoom(newZoom);
        map.setCenter(markerPosition); // Center the map on the clicked marker
      }
    }
  }

  // Common method to create markers
  createMarker(map: google.maps.Map, location: { lat: number; lng: number; label: string; color: string; }, label: string, color: string) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      label: label,
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 5,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 1,
      },
    });

    marker.addListener('click', () => {
      this.zoomInOnClick(map, marker);
    });

    return marker;
  }

  ngAfterViewInit(): void {
    const ele = document.getElementById('contents') as HTMLElement;
    this.map = new google.maps.Map(ele, {
      zoom: 4,
      center: this.center,
      minZoom: this.minZoomLevel, // Set the minimum zoom level
    });

    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      if (this.map.getZoom() < this.minZoomLevel) {
        this.map.setZoom(this.minZoomLevel);
      }
      console.log(this.map.getZoom());
    });

    const locations = [
      { lat: 56.1304, lng: 106.3468, label: 'Canada', color: '#FF0000' },
      { lat: 71.7069, lng: 42.6043, label: 'Greenland', color: '#000000' },
      { lat: 14.235, lng: 51.9253, label: 'Brazil', color: '#B06161' },
      { lat: 10.2188343994493, lng: 92.57713289999998, label: 'Andaman', color: '#860A35' },
      { lat: 15.924090500015737, lng: 80.18638089999999, label: 'Andhar Pradesh', color: '#508D69' },
      { lat: 28.7041, lng: 77.1025, label: 'Delhi', color: '#29ADB2' },
    ];

    locations.forEach(location => {
      const marker = this.createMarker(this.map, location, location.label, location.color);
      this.markers.push(marker);
    });
  }

  updateMap(data: any) {
    this.map = new google.maps.Map(data.ele, {
      zoom: 4,
      center: this.center,
      minZoom: this.minZoomLevel, // Set the minimum zoom level
    });

  }
  onSubmit(): void {
    // Ensure latitude and longitude are provided
    if (!this.latitude || !this.longitude) {
      console.error('Latitude and Longitude are required.');
      return;
    }

    // Check if the map is already initialized
    if (!this.map) {
      console.error(
        'Map is not initialized. Ensure the map is initialized before calling submit.'
      );
      return;
    }

    // Create a marker on the existing map
    const marker = new google.maps.Marker({
      position: {
        lat: parseFloat(this.latitude),
        lng: parseFloat(this.longitude),
      },
      map: this.map,
      title: 'Location',
    });

    // Center the map on the new marker
    this.map.setCenter(marker.getPosition());
  }

  removeMarkerByIndex(index: number) {
    // Check if the index is valid
    if (index >= 0 && index < this.markers.length) {
      // Remove the marker from the map
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
    }
  }
}
