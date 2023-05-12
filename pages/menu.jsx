import { supabase } from "../utils/supabaseCreate";
import styles from "../components/Menu/Menu.module.scss";
import { useState, useEffect } from "react";
import Footer from "../components/Layout/Footer/Footer";
function menu() {
  const [button, setButton] = useState(true);

  return (
    <div className={styles.background_page}>
      <div className={styles.page}>
        <img src="menuSecondPage.png" />
      </div>
    </div>
  );
}

export default menu;
