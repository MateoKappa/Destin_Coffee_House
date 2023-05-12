import React from "react";
import mapboxgl from "mapbox-gl";
import styles from "../components/map/Map.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVzdGluY29mZmVlIiwiYSI6ImNsNmkyZXZ2MzA3cjMza3MydzlvNzQ1N28ifQ.DvzoxROTAMSUGAYEwH_egg";

// Sample data
const data = [
  {
    location: "Destin Coffee Hpuse",
    city: "Volos",
    state: "Magnisias",
    coordinates: [22.96063, 39.35424],
  },
];

class Map extends React.Component {
  // Set up states for updating map
  constructor(props) {
    super(props);
    this.state = {
      lng: 22.96063,
      lat: 39.35424,
      zoom: 12,
    };
  }

  // Create map and lay over markers
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/destincoffee/cl5o1p6tb000s15lnumho8frs",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    data.forEach((location) => {
      console.log(location);
      var marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 30 }).setHTML(
            "<h4>" + location.city + "</h4>" + location.location
          )
        )
        .addTo(map);
    });
  }

  render() {
    return (
      <div className={styles.page}>
        <div
          className={styles.mapstyle}
          ref={(el) => (this.mapContainer = el)}
        />
      </div>
    );
  }
}

export default Map;
