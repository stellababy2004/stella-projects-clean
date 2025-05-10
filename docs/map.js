document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([20, 0], 2);
  const markers = L.markerClusterGroup();

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 10
  }).addTo(map);

  fetch('threats.geojson')
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#00ffee",
            color: "#00ffee",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.5
          });
        },
        onEachFeature: (feature, layer) => {
          const props = feature.properties || {};
          const name = props.name || 'Unknown';
          const threat = props.threat || '—';
          const count = props.count || '—';
          layer.bindPopup(`<strong>${name}</strong><br>Threat: ${threat}<br>Count: ${count}`);
        }
      }).addTo(markers);
      map.addLayer(markers);
      map.fitBounds(markers.getBounds(), { padding: [30, 30] });
    });
});