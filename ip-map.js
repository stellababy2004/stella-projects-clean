
const ipGeoMap = {
  "192.168.1.10": "RU Russia",
  "192.168.1.12": "US USA",
  "192.168.1.13": "CN China",
  "192.168.1.50": "BR Brazil"
};

const ipGeoCoords = {
  "192.168.1.10": [55.751244, 37.618423],
  "192.168.1.12": [38.9072, -77.0369],
  "192.168.1.13": [39.9042, 116.4074],
  "192.168.1.50": [-23.5505, -46.6333]
};

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 10
}).addTo(map);

for (const ip in ipGeoCoords) {
  const marker = L.marker(ipGeoCoords[ip]).addTo(map);
  marker.bindPopup(`<strong>${ip}</strong><br>${ipGeoMap[ip]}`);
}
