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
            'Agua Caliente Band of Cahuilla Indians',
            'Reid D. Milanovich (Chairman)',
            'Tel: (760) 699-6800',
            'Fax: (760) 699-6919',
            'Recognition Status: Federal',
            '5401 Dinah Shore Dr Palm Springs, CA92264-5970'
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
        popupText: ['Alturas Rancheria',
                    'Darren Rose and Wendy Del Rosa (Co-Chairpersons)',
                    'Tel: Fax: (530) 233-4165',
                    'Recognition Status: Federal',
                    'PO Box 340',
                    'Alturas, CA96101-0340'
                ]

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
    },
    {
        coords: [39.511608, -121.556725],
        popupText: ['Berry Creek Rancheria of Maidu Indians of California']
    },
    {
        coords: [41.0593, -124.1431],
        popupText: ['Big Lagoon Rancheria']
    },
    {
        coords: [37.1649, -118.2895],
        popupText: ['Big Pine Paiute Tribe of the Owens Valley']
    },
    {
        coords: [37.0808, -119.4854],
        popupText: ['Big Sandy Rancheria']
    },
    {
        coords: [39.0430, -122.9158],
        popupText: ['Big Valley Rancheria']
    },
    {
        coords: [37.3614, -1118.3952],
        popupText: ['Bishop Paiute Trib']
    },
    {
        coords: [40.8829, -123.9839],
        popupText: ['Blue Lake Rancheria']
    },
    {
        coords: [38.258308, -119.2314],
        popupText: ['Bridgeport Paiute Indian Colony']
    },
    {
        coords: [38.5816, -121.4944],
        popupText: ['Buena Vista Rancheria of Me-Wuk Indians']
    },
    {
        coords: [33.7206, -116.2156],
        popupText: ['Cabazon Band of Mission Indians']
    },
    {
        coords: [39.2143, -122.0094],
        popupText: ['Cachil Dehe Band of Wintun Indians of the Colusa Indian Rancheria']
    },
    {
        coords: [39.6882, -123.4828],
        popupText: ['Cahto Tribe of the Laytonville Rancheria']
    },
    {
        coords: [33.5553, -116.6742],
        popupText: ['Cahuilla Band of Mission Indians of the Cahuilla Reservation']
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
