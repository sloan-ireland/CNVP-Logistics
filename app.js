// Initialize the map
var mymap = L.map('mapid', {
    maxBounds: [
        [32.5, -124.5], // Southwest corner of California
        [42, -114]     // Northeast corner of California
    ]
}).setView([36.7783, -119.4179], 6);

// Add a tile layer (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
