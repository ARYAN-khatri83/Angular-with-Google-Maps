

Marker Component for Angular with Google Maps Integration

Features:
Dynamic Markers: Create and display markers on a Google Map with customizable icons, labels, and colors.
Zoom Interaction: Zoom in on a marker when clicked to get a closer view of the location.
User Input Handling: Submit latitude and longitude values via a form to add a new marker on the map. Validates input to ensure only numeric values are accepted.
Marker Removal: Remove markers by clicking on them or using an external control.

How to Use:
Initialization:
The component initializes a Google Map with a specified zoom level and minimum zoom.
Dynamic Markers:
Markers are dynamically created based on predefined locations. Customize labels and colors.
Zoom Interaction:
Clicking on a marker zooms in on the location.

User Input:
Enter latitude and longitude in the form and click "Submit" to add a new marker.
Marker Removal:
Remove markers either by clicking on them or using the provided remove function.

Dependencies:
Angular
Google Maps JavaScript API

Usage:
Install Angular and set up your project.
Include the MarkerComponent in your application.
Customize the map, markers, and interactions as needed.
Enjoy a dynamic map with interactive markers!





Buttons Component for Image Download

Features:
SVG Download:
Clones the content of an HTML element with the ID "contents" and downloads it as an SVG image.
Generates a data URL and triggers a download of the SVG file.

JPEG Download:
Uses the html-to-image library to convert the content of the "contents" element to a JPEG image.
Allows customization of the image quality.

PNG Download:
Captures the content of the "contents" element and downloads it as a PNG image.
Generates a unique timestamp for each download to avoid overwriting existing files.

How to Use:
Include the ButtonsComponent in your Angular application.
Add a target HTML element with the ID "contents" that you want to capture.
Use the provided buttons to download the content in different image formats.
Enjoy seamless image downloading functionality!

Dependencies:
Angular
html-to-image library

Usage:
Install Angular and set up your project.
Add the ButtonsComponent to your application.
Customize the HTML content you want to capture by adjusting the element with the ID "contents."
Use the provided buttons to initiate downloads in SVG, JPEG, and PNG formats.
Enhance your application with dynamic image export capabilities!
