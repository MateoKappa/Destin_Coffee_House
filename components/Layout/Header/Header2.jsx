import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.tel_header}>
      <img src="/destincoffeeLOGO.png" />
      <div className={styles.tel_components}>
        <a href="/">
          <i className="fa-solid fa-house-blank"></i>
        </a>
        <a href="/menu">
          <i className="fa-solid fa-mug-hot"></i>
        </a>
        <a href="/contact">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="/about">
          <i class="fa-solid fa-images"></i>
        </a>
      </div>
      <div className={styles.tel_telephone}>
        <a href="tel:30 2421 182038">
          <i className="fa-solid fa-phone" />
        </a>
      </div>
    </div>
  );
}

export default Header;
