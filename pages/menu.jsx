import {supabase} from "../utils/supabaseCreate";
import styles from "../components/Menu/Menu.module.scss";
import {useState, useEffect} from "react";
import Footer from "../components/Layout/Footer/Footer";
function menu() {
  const [menu, setMenu] = useState();
  const [menutest, setMenutest] = useState();
  const [button, setButton] = useState(true);

  return (
    <div className={styles.background_page}>
      <div className={styles.page2}>
        <div className={styles.page}>
          {button ? (
            <div className={styles.coffee_shop}>
              <div className={styles.coffee_menu}>
                <h1>Καφεδες - Τσαι</h1>
                <span className={styles.details}>
                  <span className={styles.title}>
                    Espresso μονο/διπλο <br />
                    Freddo espresso μονο/γλυκο <br />
                    Americano μονο/διπλο <br />
                    Cappuccino μονο/διπλο <br />
                    Freddo Cappuccino μονο/διπλο <br />
                    Καφες φιλτρου (γαλλικος) <br />
                    Frappe / Nes Cafe <br />
                    Frappe με παγωτο <br />
                    Ελληνικος μονος/διπλος <br />
                    Machiato μονο/διπλο <br />
                    Machiatto latte μονο/διπλο <br />
                    Σοκολατα ( κρυα - ζεστη ) <br />
                    Κακαο <br />
                    Φυσικος χυμος <br />
                    Αναψυκτικα <br />
                    Χυμοι Εψα <br />
                    Red bull <br />
                    Hell <br />
                    Νερο <br />
                    Τσαι Κρυο <br />
                    Τσαι ζεστο <br />
                    Παγωτο <br />
                  </span>
                  <span className={styles.price}>
                    1,30€/1.70€ <br />
                    1,30€/1.70€ <br />
                    1,30€/1.70€ <br />
                    1,50€/2.00€ <br />
                    <br />
                    1,50€/2,00€ <br />
                    1,80€ <br />
                    1.70€ <br />
                    2.70€ <br />
                    1.50€/1.70€ <br />
                    1.50€/1.80€ <br />
                    1.50€/1.80€ <br />
                    1.80€ <br />
                    1.70€ <br />
                    2,50€ <br />
                    1.30€ <br />
                    1.20€ <br />
                    1.50€/2,00€ <br />
                    1.00€/2,00€ <br />
                    0,50€ <br />
                    1,70€ <br />
                    1,20€ <br />
                    1,50€/μπαλα <br />
                  </span>
                </span>
              </div>
              <div className={styles.coffee_menu}>
                <h1>Τυροπιτοειδη</h1>
                <span className={styles.details}>
                  <span className={styles.title}>
                    Σφολιατα γαλοπουλα-κασερι <br />
                    Σφολιατα ζαμπον-κασερι <br />
                    Σφολιατα ζαμπον-κασερι-σαλτσα <br />
                    Στριφτη χορτο-τυρι <br />
                    Μπουρεκι κουρου με τυρι <br />
                    Φλογερες με τυρι <br />
                    Μπουγατσα μεγαλη με κρεμα <br />
                    Μπουγατσα ατομικη με κρεμα <br />
                    Μπουγατσα μεγαλη με τυρι <br />
                    Μπουγατσα ατομικη με τυρι <br />
                    Μπουγατσα μεγαλη ζαμπον-τυρι <br />
                    Πεινερλι γαλοπουλας <br />
                    Πεινερλι ζαμπον <br />
                    Κουλουρι με 4 τυρια <br />
                    Κουλουρι ζαμπον-κασερι <br />
                    Κουλουρι ολικης με φιλαδελφεια <br />
                    Χωριατικη τριγωνη χορτοτυροπιτα <br />
                    Χωριατικη τριγωνη τυροπιτα <br />
                  </span>
                  <span className={styles.price}>
                    2.00€ <br />
                    2,00€ <br />
                    <br />
                    2,00€ <br />
                    1,80€ <br />
                    1,80€ <br />
                    1,80€ <br />
                    4,20€ <br />
                    1,80€ <br />
                    4,60€ <br />
                    2,30€ <br />
                    <br />
                    5,00€ <br />
                    2,80€ <br />
                    1,80€ <br />
                    2,00€ <br />
                    2,00€ <br />
                    3,00€ <br />
                    <br />
                    2,00€ <br />
                    2,00€ <br />
                  </span>
                </span>
              </div>
              <div className={styles.button}>
                <button onClick={() => setButton(false)}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.coffee_shop}>
              <div className={styles.coffee_menu}>
                <h1>Τοστ / Σαντουιτσ</h1>
                <span className={styles.details}>
                  <span className={styles.title}>
                    Τοστ τυρι <br />
                    Τοστ γαλοπουλα-τυρι <br />
                    Τοστ ζαμπον-τυρι <br />
                    Σαντουιτσ γαλοπουλα <br />
                    Γαλλικη λευκη μπακετα εξτρα <br />
                    Γαλλικη λευκη μπακετα γαλοπουλα <br />
                    Γαλλικη μαυρη μπακετα γαλοπουλα <br />
                    Τσαιπατα κοτοπουλο <br />
                    Κρουασαν αλλαντικων <br />
                    Hot dog σπεσιαλ <br />
                    Τσιαπατα κοτομπουκια <br />
                    Burger σπεσιαλ <br />
                  </span>
                  <span className={styles.price}>
                    1,20€ <br />
                    2,00€ <br />
                    1,80€ <br />
                    2,00€ <br />
                    2,70€ <br />
                    <br />
                    2,00€ <br />
                    <br />
                    2,00€ <br />
                    2,90€ <br />
                    2,00€ <br />
                    2,70€ <br />
                    2,70€ <br />
                    3,50€ <br />
                  </span>
                </span>
              </div>
              <div className={styles.coffee_menu}>
                <h1>Ντονατς & Κρουασαν</h1>
                <span className={styles.details}>
                  <span className={styles.title}>
                    Ντονατ απλο <br />
                    Καρυδατο Δανεζικο <br />
                    Ντονατ εκλερ <br />
                    Ντονατ κανελας <br />
                    Ντονατ στρογγυλο <br />
                    Κρουασαν σφολιατας <br />
                    Κρουασαν σφολιατας σιροπιασμενο <br />
                    Κρουασαν σφολιατας με bueno <br />
                    Ντονατσακι με ζαψαρη γλασσο <br />
                    Ντονατσακι στρογγυλο <br />
                    Κρουασανακι πραλινα φουντουκιου <br />
                    Κρουασανακι με γεμιση πραλινα φουντουκιου και επικαλυψη
                    σοκολατας γαλακτος <br />
                  </span>
                  <span className={styles.price}>
                    1,50€ <br />
                    1,20€ <br />
                    1,20€ <br />
                    1,50€ <br />
                    2,00€ <br />
                    2,00€ <br />
                    <br />
                    2,00€ <br />
                    0,60€ <br />
                    0,70€ <br />
                    0,70€ <br />
                    <br />
                    0,30€ <br />
                    <br />
                    <br />
                    0,50€/0,80€ <br />
                  </span>
                </span>
              </div>
              <div className={styles.button}>
                <button onClick={() => setButton(!button)}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default menu;
