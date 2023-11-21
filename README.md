Marker Component for Angular with Google Maps Integration

Features: 
Dynamic Markers: Create and display markers on a Google Map with customizable icons, labels, and colors. 
Zoom Interaction: Zoom in on a marker when clicked to get a closer view of the location. 
User Input Handling: Submit latitude and longitude values via a form to add a new marker on the map. Validates input to ensure only numeric values are accepted. 
Marker Removal: Remove markers by clicking on them or using an external control.

How to Use: 
1.Initialization: The component initializes a Google Map with a specified zoom level and minimum zoom. 
2.Dynamic Markers: Markers are dynamically created based on predefined locations. Customize labels and colors. 
3.Zoom Interaction: Clicking on a marker zooms in on the location.
4.User Input: Enter latitude and longitude in the form and click "Submit" to add a new marker. 
5.Marker Removal: Remove markers either by clicking on them or using the provided remove function.

Dependencies:
Angular Google ,
Maps JavaScript API

Usage: 
1.Install Angular and set up your project. 
2.Include the MarkerComponent in your application. 
3.Customize the map, markers, and interactions as needed. 
4.Enjoy a dynamic map with interactive markers!


Buttons Component for Image Download

Features: 
SVG Download: Clones the content of an HTML element with the ID "contents" and downloads it as an SVG image. Generates a data URL and triggers a download of the SVG file.
JPEG Download: Uses the html-to-image library to convert the content of the "contents" element to a JPEG image. Allows customization of the image quality.
PNG Download: Captures the content of the "contents" element and downloads it as a PNG image. Generates a unique timestamp for each download to avoid overwriting existing files.


How to Use:

1.Include the ButtonsComponent in your Angular application. 
2.Add a target HTML element with the ID "contents" that you want to capture.
3.Use the provided buttons to download the content in different image formats.
4.Enjoy seamless image downloading functionality!


Dependencies: 
Angular ,
html-to-image library

Usage: 
1.Install Angular and set up your project. 
2.Add the ButtonsComponent to your application. 
3.Customize the HTML content you want to capture by adjusting the element with the ID "contents." Use the provided buttons to initiate downloads in SVG, JPEG, and PNG formats. Enhance 4.your application with dynamic image export capabilities!
