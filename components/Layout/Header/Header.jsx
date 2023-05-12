import styles from "./Header.module.scss";
import useWindowSize from "../../Window/window";
import { useState } from "react";

function Header() {
  const { height, width } = useWindowSize();
  const [shake, setShake] = useState(false);

  const animate = () => {
    // Button begins to shake
    setShake(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 2000);
  };
  return width ? (
    <div>
      {width > 900 ? (
        <div className={styles.header}>
          <img src="/destincoffeeLOGO.png" />
          <div className={styles.components}>
            <a href="/">Home </a>
            <a href="/menu">Menu </a>
            <a href="/contact">Contact us </a>
          </div>
          <div className={styles.telephone}>
            <i className="fa-solid fa-phone" /> <p> +30 2421 182038</p>
          </div>
        </div>
      ) : (
        <div className={styles.tel_header}>
          <img src="/destincoffeeLOGO.png" />
          <div className={styles.tel_components}>
            <a
              href="/"
              className={shake ? `${styles.shake}` : `${styles.shake}`}
            >
              <i className="fa-solid fa-house-blank"></i>
            </a>
            <a href="/menu">
              <i className="fa-solid fa-mug-hot"></i>
            </a>
            <a href="/contact">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className={styles.tel_telephone}>
            <a href="tel:30 2421 182038">
              <i className="fa-solid fa-phone" />
            </a>
          </div>
        </div>
      )}
    </div>
  ) : null;
}

export default Header;
