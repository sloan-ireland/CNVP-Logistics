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




