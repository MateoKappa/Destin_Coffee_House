import {useEffect, useState} from "react";
import styles from "../components/index.module.scss";
import Review from "../components/Review";
import Map from "../components/Map.jsx";
import Footer from "../components/Layout/Footer/Footer";
import {motion, AnimatePresence} from "framer-motion";
export default function Home() {
  const data = Review();
  const [name, setName] = useState();
  const [paragraph, setParagraph] = useState();
  const [counter, setCounter] = useState(0);

  const data1 = Object.values(data);
  console.log(data1[0].name);

  const nextreview = (counter) => {
    setCounter(counter + 1);
    if (counter >= 2) {
      setCounter(0);
    }
  };
  useEffect(() => {
    setName(data1[counter].name);
    setParagraph(data1[counter].paragraph);
  }, [counter]);
  return (
    <div className={styles.container}>
      <div className={styles.first_column}>
        <div className={styles.title}>
          <h1>Απολαύστε τον πρωινό σας καφέ!</h1>
          <p>
            Έλατε και απολαύστε τον καφέ σας για μια αρχή μιας όμορφης μέρας!
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          alt="Failed to Load Image"
        />
      </div>
      <div className={styles.second_column}>
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
                  <h2>Cappuchino</h2>
                </a>
                <a href="/menu">
                  <h2>Espresso</h2>
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
      </div>
      <div className={styles.third_column}>
        <div className={styles.reviews}>
          <h2> Οι αξιολογησεις μας!</h2>
          <h1>Κάποιες απο τις αξιολογήσεις που μας έχουν κάνει οι πελάτες!</h1>
          <h5>
            Παρέχουμε πάντα το καλύτερο δυνατό για να κάνουμε τον πελάτη μας
            ευχαριστημένο με τις υπηρεσίες μας!
          </h5>
        </div>
        <div className={styles.block_reviews}>
          <h3>{paragraph}</h3>
          <div className={styles.next}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                nextreview(counter);
              }}
            >
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.forth_column}>
        <h2>Μπορειτε να μας βρειτε:</h2>
        <Map />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
