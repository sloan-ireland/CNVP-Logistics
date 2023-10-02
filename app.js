
var californiaBounds = [
    [32.5, -124.5], // Southwest corner of California
    [42, -114]     // Northeast corner of California
];

// Initialize the map with maxBounds
var mymap = L.map('mapid', {
    maxBounds: californiaBounds,
    maxBoundsViscosity: 1.0, // Keeps the user within the bounds
    maxZoom: 10, // Set the maximum zoom level
    minZoom: 6   // Set the minimum zoom level
}).setView([36.7783, -119.4179], 6); // Centered on California with an appropriate zoom level

// Add a tile layer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var maxZoomToSeeBorders = mymap.getBoundsZoom(californiaBounds);
mymap.setMinZoom(maxZoomToSeeBorders); // Prevents the user from zooming farther out than the bounds
