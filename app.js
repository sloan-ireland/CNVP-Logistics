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

var markers = [
    {
        coords: [34.0664, -118.1685],
        popupText: [
            'Line 1 for Agua Caliente Band of Cahuilla Indians',
            'Line 2 for Agua Caliente Band of Cahuilla Indians'
        ]
    },
    {
        coords: [38.590576, -121.489906],
        popupText: ['Buena Vista Rancheria of Me-Wuk Indians']
    },
    {
        coords: [33.680302, -116.173897],
        popupText: ['Augustine Band of Cahuilla Indians']
    },
    {
        coords: [41.4871, -120.5425],
        popupText: ['Alturas Rancheria']

    },
    {
        coords: [32.8573, -116.9222],
        popupText: ['Barona Band of Mission Indians']
    },
    {
        coords: [40.6411, -124.2263],
        popupText: ['Bear River Band of Rohnerville Rancheria']
    },
    {
        coords: [37.8183, -118.4770],
        popupText: ['Benton Paiute - U-tu Utu Gwaitu Paiute Tribe']
    }
    // Add more markers here
];

markers.forEach(function(marker) {
    var newMarker = L.marker(marker.coords).addTo(mymap);

    if (marker.popupText) {
        // Join the lines of text from the array with line breaks
        var popupContent = marker.popupText.join('<br>');

        newMarker.bindPopup(popupContent);
    }
});
/*markers.forEach(function(marker) {
    var newMarker = L.marker(marker.coords).addTo(mymap);

    if (marker.popupText) {
        newMarker.bindPopup(marker.popupText);
    }
});*/



/*L.marker([34.0664,-118.1685]).addTo(mymap)
.bindPopup('Agua Caliente Band of Cahuilla Indians');*/

var maxZoomToSeeBorders = mymap.getBoundsZoom(californiaBounds);
mymap.setMinZoom(maxZoomToSeeBorders); // Prevents the user from zooming farther out than the bounds
/*
var tribalLocations = [
    { name: "Agua Caliente Band of Cahuilla Indians", lat: 33.809212, lon: -116.525694 },
    { name: "Augustine Band of Cahuilla Indians", lat: 33.685378, lon: -116.142309 },
    { name: "Barona Band of Mission Indians", lat: 32.976976, lon: -116.853185 },
    { name: "Bear River Band of Rohnerville Rancheria", lat: 40.699806, lon: -124.234920 },
    { name: "Berry Creek Rancheria", lat: 39.492117, lon: -121.536500 },
    { name: "Big Lagoon Rancheria", lat: 41.313362, lon: -124.006708 },
    { name: "Big Pine Paiute Tribe of the Owens Valley", lat: 37.167570, lon: -118.392080 },
    { name: "Big Sandy Rancheria", lat: 36.938469, lon: -119.503935 },
    { name: "Big Valley Band of Pomo Indians", lat: 39.091760, lon: -122.959297 },
    { name: "Bishop Paiute Tribe", lat: 37.363872, lon: -118.395134 }
    // Add more locations here
];



// Add markers with popups
for (var i = 0; i < tribalLocations.length; i++) {
    var location = tribalLocations[i];
    L.marker([location.lat, location.lon])
        .bindPopup(location.name)
        .addTo(mymap);
}
*/
