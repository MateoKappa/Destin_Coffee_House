import styles from "../components/About/About.module.scss";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Footer from "../components/Layout/Footer/Footer";
import images from "../components/About/sample2.json";
function about() {
  const result = Object.values(images);
  console.log(result);
  return result ? (
    <div className={styles.page}>
      <img src="https://imgur.com/wIxW4Te" />
      <div className={styles.section1}>
        <div className={styles.title}>
          Destin Coffee House <img src="/destincoffeeLOGO.png" />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.image1}>
          <ImageSlider slides={result} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default about;
