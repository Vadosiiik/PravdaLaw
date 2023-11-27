var map = L.map("map").setView(["50.4501", "30.5234"], 20);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  maxZoom: 19,
}).addTo(map);

var marker = L.marker(["50.4501", "30.5234"]).addTo(map);
