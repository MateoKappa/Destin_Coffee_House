import styles from "../components/index.module.scss";
import React from "react";
import mapboxgl from "mapbox-gl";
import Carousel from "../components/Carousel/carousel";
import Reviews from "../components/Reviews/reviews";

export default function Home() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGVzdGluY29mZmVlIiwiYSI6ImNsNmkyZXZ2MzA3cjMza3MydzlvNzQ1N28ifQ.DvzoxROTAMSUGAYEwH_egg";

  // Make custom animation

  //Map
  const mapData = [
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
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
      });

      mapData.forEach((location) => {
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
        <div
          className={styles.mapstyle}
          ref={(el) => (this.mapContainer = el)}
        />
      );
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.first_column}>
        <div className={styles.title}>
          <h1>Απολαύστε τον πρωινό σας καφέ!</h1>
          <p>
            Έλατε και απολαύστε τον καφέ σας για μια αρχή μιας όμορφης μέρας!
          </p>
        </div>
        <img src="/coffeePour-min.png" />
      </section>
      <section className={styles.second_column}>
        <div className={styles.full_stats}>
          <h3>Επιλέξτε και απολαύστε τον καφέ της επιλογης σου.</h3>
          <div className={styles.stats}>
            <span className={styles.block}>
              <h1>
                30 <i className="fa-solid fa-plus"></i>
              </h1>
              <h4>Διαφορετικοί καφέδες</h4>
            </span>
            <span className={styles.block}>
              <h1>
                20 <i className="fa-solid fa-plus"></i>
              </h1>
              <h4>Διαφορετικά Τρόφιμα</h4>
            </span>
            <span className={styles.block}>
              <h1>
                15 <i className="fa-solid fa-plus"></i>
              </h1>
              <h4>Διαφορετικά Αναψυκτικά</h4>
            </span>
          </div>

          <div className={styles.coffeemachine}>
            <img src="https://i.imgur.com/lYgBIYT.jpg" />
            <div className={styles.text}>
              <p className={styles.ourcoffee}>Ο Καφες μας</p>
              <h1> Επιλέξτε τον αγαπημένο σας καφέ!</h1>
              <p>
                Πάνω από 20+ είδη καφέ έτοιμα να παρασκευαστούν από
                επαγγελματίες.
              </p>
              <div className={styles.typesofcoffee}>
                <a href="/menu">
                  <h2>Espresso</h2>
                </a>
                <a href="/menu">
                  <h2>Cappuchino</h2>
                </a>
                <a href="/menu">
                  <h2>Frappe</h2>
                </a>
              </div>
              <a className={styles.menu} href="/">
                More Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.third_column}>
        <div className={styles.reviews}>
          <h2> Οι αξιολογησεις μας!</h2>
          <h1>Κάποιες απο τις αξιολογήσεις που μας έχουν κάνει οι πελάτες!</h1>
          <h5>
            Παρέχουμε πάντα το καλύτερο δυνατό για να κάνουμε τον πελάτη μας
            ευχαριστημένο με τις υπηρεσίες μας!
          </h5>
        </div>
        <Reviews />
      </section>

      <section className={styles.forth_column_container}>
        <h2 id="map">Μπορειτε να μας βρειτε:</h2>
        <div className={styles.forth_column}>
          <Carousel />
          <Map />
        </div>
      </section>
    </div>
  );
}
