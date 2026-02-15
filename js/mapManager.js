export class MapManager {
  constructor(config) {
    this.map = L.map('map').setView(config.center, config.zoom);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      { subdomains:'abcd', maxZoom:20 }
    ).addTo(this.map);

    this.markers = {};
    this.routes = {};
  }

  loadTopic(topic) {
    this.clear();

    if (topic.type !== "map") return;

    topic.markers.forEach(m => {
      const icon = m.icon
        ? L.divIcon({
            html:`<div class="icon-wrapper">
                    <img src="${m.icon}">
                  </div>`
          })
        : undefined;

      const marker = L.marker([m.lat, m.lng], { icon }).addTo(this.map);
      marker.bindPopup(`
        <strong>${m.title}</strong><br>
        <img src="${m.image}" width="300">
      `);

      this.markers[m.id] = marker;
    });

    topic.routes?.forEach(r => {
      const route = L.polyline(r.coords, {
        color: r.color,
        weight: 5
      });
      this.routes[r.id] = route;
    });
  }

  focus(id) {
    const marker = this.markers[id];
    if (!marker) return;
    this.map.flyTo(marker.getLatLng(), 18);
    marker.openPopup();
  }

  showRoute(id) {
    if (this.routes[id])
      this.routes[id].addTo(this.map);
  }

  clear() {
    Object.values(this.markers).forEach(m => this.map.removeLayer(m));
    Object.values(this.routes).forEach(r => this.map.removeLayer(r));
    this.markers = {};
    this.routes = {};
  }
}
