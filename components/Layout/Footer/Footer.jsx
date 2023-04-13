import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.page}>
      <div className={styles.right}>
        Διεύθυνση:
        <br />· Πολυμέρη 112, Βόλος 382 22 <br />
        · Τηλέφωνο: 2421 182038 <br /> · Παραγγελία: e-food.gr
      </div>
      <img src="/destincoffeeLOGO.png" />

      <div className={styles.left}>
        Επιλογές εξυπηρέτησης:
        <br />· Φαγητό στον χώρο <br />
        · Παραλαβή έξω <br />· Παράδοση χωρίς επαφή
      </div>
    </div>
  );
}
