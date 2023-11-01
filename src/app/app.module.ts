import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppComponent } from './app.component';
import { ExportAsModule } from 'ngx-export-as';
import { MarkerComponent } from './marker/marker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InfowindowComponent } from './infowindow/infowindow.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    ButtonsComponent,
    InfowindowComponent,
   
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    ExportAsModule,
    HttpClientModule
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
