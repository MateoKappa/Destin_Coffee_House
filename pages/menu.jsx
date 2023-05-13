import styles from "../components/Menu/Menu.module.scss";
import { useState } from "react";
function menu() {
  const [button, setButton] = useState(true);

  return (
    <div className={styles.background_page}>
      <div className={styles.page}>
        <img src={button ? "menu.png" : "menuSecondPage.png"} />
        <button onClick={() => setButton(!button)}>
          <i className="fa-regular fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default menu;
