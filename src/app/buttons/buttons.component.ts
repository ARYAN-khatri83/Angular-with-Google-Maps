import { Component, OnInit } from '@angular/core';
import {  ElementRef ,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker , GoogleMap } from '@angular/google-maps';
import {ExportAsService, ExportAsConfig} from 'ngx-export-as';
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent  implements OnInit{
    
[x: string]: any;

ngOnInit(): void {
  
}


downloadAsSVG() {
  var node = document.getElementById('content');

  if (node) { // Check if node is not null
    // Use the htmlToImage library to convert the HTML content to a data URL as a JPEG image
    htmlToImage.toSvg(node, { quality: 0.95 })
      .then(function (dataUrl: any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.svg'; // Set the filename with the .jpeg extension
        link.href = dataUrl;
        link.style.display = 'none'; // Hide the link
        document.body.appendChild(link);

        // Programmatically click on the link to initiate the download
        link.click();

        // Clean up by removing the link
        document.body.removeChild(link);
      })
      .catch(function (error: any) {
        console.error('Oops, something went wrong!', error);
      });
  } else {
    console.error('Element with ID "content" not found.'); // Handle the case where the element is not found
  }
}



downloadAsJPEG() {
  var node = document.getElementById('content');

  if (node) { // Check if node is not null
    // Use the htmlToImage library to convert the HTML content to a data URL as a JPEG image
    htmlToImage.toJpeg(node, { quality: 1 })
      .then(function (dataUrl: any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg'; // Set the filename with the .jpeg extension
        link.href = dataUrl;
        link.style.display = 'none'; // Hide the link
        document.body.appendChild(link);

        // Programmatically click on the link to initiate the download
        link.click();

        // Clean up by removing the link
        document.body.removeChild(link);
      })
      .catch(function (error: any) {
        console.error('Oops, something went wrong!', error);
      });
  } else {
    console.error('Element with ID "content" not found.'); // Handle the case where the element is not found
  }
}




downloadAsPng(){
    var node:any = document.getElementById('content');
     // Use the htmlToImage library to convert the HTML content to a data URL
  htmlToImage.toPng(node)
  .then(function (dataUrl) {
    console.log(dataUrl);
     // Convert the data URL to a Blob
     var byteString = atob(dataUrl.split(',')[1]);
     var mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
     var arrayBuffer = new ArrayBuffer(byteString.length);
     var uint8Array = new Uint8Array(arrayBuffer);
     for (var i = 0; i < byteString.length; i++) {
       uint8Array[i] = byteString.charCodeAt(i);
     }
     var blob = new Blob([arrayBuffer], { type: mimeString });

     // Create an 'a' element and trigger the download programmatically
     var link = document.createElement('a');
     link.href = URL.createObjectURL(blob);
     link.download = 'image.png'; // Set the filename
     link.style.display = 'none'; // Hide the link
     document.body.appendChild(link);

     // Programmatically click on the link to initiate the download
     link.click();

     // Clean up by removing the link
     document.body.removeChild(link);
   })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
 
  }







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

  // convert to pdf
  
  @ViewChild('content',{static:true}) el!:ElementRef<HTMLImageElement>
  convertTopdf() {
    html2canvas(this.el.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait'
      });

      const imageProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("output.pdf");
    });
  }




}
