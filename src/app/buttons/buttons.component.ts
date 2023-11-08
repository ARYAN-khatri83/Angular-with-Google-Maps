import { Component, OnInit } from '@angular/core';
import {  ElementRef ,ViewChild } from '@angular/core';
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


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
  var node = document.getElementById('contents');

  if (node) {
    const cloneNode = node.cloneNode(true);
    htmlToImage.toSvg(cloneNode as any)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.svg';
        link.href = dataUrl;
        console.log(dataUrl);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
    }
 }

  downloadAsJPEG() {
  var node = document.getElementById('contents');

  if (node) { // Check if node is not null
    htmlToImage.toJpeg(node, { quality: 0.95 })
      .then(function (dataUrl: any) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg'; 
        link.href = dataUrl;
        link.style.display = 'none'; // 
        document.body.appendChild(link);

       
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

downloadAsPng() {
  var node = document.getElementById('contents');
  if (node) {
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        var timestamp = new Date().getTime(); // Unique timestamp for each download
        link.download = 'my-image-' + timestamp + '.png';
        link.href = dataUrl;
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        // Clean up the download link
        document.body.removeChild(link);

        // Revoke the URL to free up resources
        URL.revokeObjectURL(link.href);
      })
      .catch(function (error) {
        console.error('Error capturing image:', error);
      });
  } else {
    console.error('Element with ID "contents" not found.');
  }
}






  // convert to pdf
  /*
  @ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement>;

  convertTopdf() {
  html2canvas(this.el.nativeElement).then(canvas => {
    console.log('Captured canvas:', canvas);

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
*/


}

