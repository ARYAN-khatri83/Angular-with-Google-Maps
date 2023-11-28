import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationService } from '@app/services/location.service';

declare const google: any;

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css'],
})
export class GptComponent implements OnInit {
  queryFormGroup!: FormGroup;
  messages = [{ role: 'system', content: 'You are a helpful assistant.' }];
  result: any;
  map: any;
  existingLocations = [
    { lat: 56.1304, lng: 106.3468, label: 'Canada', color: '#FF0000' },
    { lat: 71.7069, lng: 42.6043, label: 'Greenland', color: '#000000' },
    { lat: 14.235, lng: 51.9253, label: 'Brazil', color: '#B06161' },
    {
      lat: 10.2188343994493,
      lng: 92.57713289999998,
      label: 'Andaman',
      color: '#860A35',
    },
    {
      lat: 15.924090500015737,
      lng: 80.18638089999999,
      label: 'Andhar Pradesh',
      color: '#508D69',
    },
    { lat: 28.7041, lng: 77.1025, label: 'Delhi', color: '#29ADB2' },
  ];
  locations: any[] = [];
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.queryFormGroup = this.fb.group({
      query: this.fb.control(''),
    });
  }

  handleAskGPT() {
    let url = 'https://api.openai.com/v1/chat/completions';
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer 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'
    );

    this.messages[0].content =
    this.queryFormGroup.value.query +
    `coordinates in a js variable to which we can iterate with a separator at the start and end above `;
    this.messages[0].role = 'user';

    let payload = {
      model: 'gpt-3.5-turbo',
      messages: this.messages,
    };

    this.httpClient
      .post(url, payload, { headers: httpHeaders })
      .subscribe((apiData) => {
        console.log('API Data', apiData);
        this.result = apiData;

        if (this.result.choices && Array.isArray(this.result.choices)) {
          this.locations = [];

          this.result.choices.forEach((choice: any) => {
            let data = choice.message.content.split("[");
            data = ("[" + data[1].split("]")[0] + "]");
            // const contentObj =

            // contentObj.forEach((location: any) => {
            //   let demo = {
            //     place: location.place,
            //     latitude: location.latitude,
            //     longitude: location.longitude,
            //     marker: null, // Initialize marker property
            //   };

            //   this.locations.push(demo);
            // });
          });
          console.log('API Data', this.result);

          console.log(this.locations);

          // Combine existingLocations with the locations from the API response
          const combinedLocations = [
            ...this.existingLocations,
            ...this.locations,
          ];

          this.showOnMap(combinedLocations);
        }
      });
  }

  showOnMap(locations: any[]) {
    console.log('Updating map with locations:', locations);

    // Check if the map is already initialized
    if (!this.map) {
      const contentsDiv = document.getElementById('contents');

      // Find the bounds that encompass all locations
      const bounds = google.maps.LatLngBounds();
      locations.forEach((location) => {
        bounds.extend(
          google.maps.LatLng(location.latitude, location.longitude)
        );
      });

      const mapOptions = {
        center: bounds.getCenter(),
        zoom: 10,
      };

      this.map = google.maps.Map(contentsDiv, mapOptions);
    }

    // Clear existing markers only if the map is already initialized
    if (this.map) {
      // Clear existing markers
      locations.forEach((location) => {
        if (location.marker) {
          location.marker.setMap(null);
        }
      });

      // Add new markers
      locations.forEach((location) => {
        location.marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            location.latitude,
            location.longitude
          ),
          map: this.map,
          title: location.place, // Use the place as the marker title
        });
      });
    }
  }
}
