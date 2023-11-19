// Initialize the map and set its center and zoom level
var map = L.map("map").setView(["50.4501", "30.5234"], 20);

// Add a tile layer (e.g., OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  maxZoom: 19,
}).addTo(map);

// Adding a marker to the map
var marker = L.marker(["50.4501", "30.5234"]).addTo(map);
