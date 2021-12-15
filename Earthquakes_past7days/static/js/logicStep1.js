// Add console.log to check to see if our code is working.
console.log("working");
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};
// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});
// Pas our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function (data) {
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});
// Add GeoJSON data.
// let sanFranAirport =
// {
//     "type": "FeatureCollection", "features": [{
//         "type": "Feature",
//         "properties": {
//             "id": "3469",
//             "name": "San Francisco International Airport",
//             "city": "San Francisco",
//             "country": "United States",
//             "faa": "SFO",
//             "icao": "KSFO",
//             "alt": "13",
//             "tz-offset": "-8",
//             "dst": "A",
//             "tz": "America/Los_Angeles"
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [-122.375, 37.61899948120117]
//         }
//     }
//     ]
// };
// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };
//     L.geoJSON(geojsonFeature).addTo(map);
// Grabbing our GeoJSON data.
//    // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(sanFranAirport, {
//       onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" +
//         "<hr size=1 width=100% color=black>" +
//         "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
//        }
//     }).addTo(map);




// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Loop through the cities array and create one marker for each city.
// // Get data from cities.js
// let cityData = cities;
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population / 100000,
//         color: "orange"
//     })
//         .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//         .addTo(map);
// });
// let baseMaps = {
//     "Streets": streets,
//     "Satellite": satelliteStreets
//   };