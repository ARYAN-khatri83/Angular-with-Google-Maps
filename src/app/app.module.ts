import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppComponent } from './app.component';
import { MarkerComponent } from './marker/marker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InfowindowComponent } from './infowindow/infowindow.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GptComponent } from './gpt/gpt.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    ButtonsComponent,
    InfowindowComponent,
    HomeComponent,
    GptComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
   AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
