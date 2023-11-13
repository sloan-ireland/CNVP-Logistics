var californiaBounds = [
    [32.5, -124.5], // Southwest corner of California
    [42, -114], // Northeast corner of California
  ];
  
  var mymap = L.map("mapid", {
    maxBounds: californiaBounds,
    maxBoundsViscosity: 1.0,
    maxZoom: 10,
    minZoom: 6,
  }).setView([36.7783, -119.4179], 6);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

//add the tribal borders to the map
fetch('Federally_Recognized_Tribal_Lands.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(mymap);
    });

var maxZoomToSeeBorders = mymap.getBoundsZoom(californiaBounds);
mymap.setMinZoom(maxZoomToSeeBorders); // Prevents the user from zooming farther out than the bounds



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
