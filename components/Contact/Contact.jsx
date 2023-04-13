import styles from "./Contact.module.scss";
import {motion} from "framer-motion";
import Map from "../Map";
import emailjs from "emailjs-com";
import {useState, useRef} from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_462g39c",
        "template_zagojfa",
        form.current,
        "o_vaqleCtcTkAiWrI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.div
      className={styles.page}
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={styles.container}>
        <div className={styles.contact}>
          <header>
            <h1>Επικοινωνήστε μαζι μας!</h1>
          </header>
          <h5>Ρωτήστε μας/Ενημερώστε μας για οτιδήποτε σας απασχολεί!</h5>
          <main>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.inputs}>
                <div className={styles.name}>
                  <input placeholder="Name" name="name" />
                  <input placeholder="Surname" name="surname" />

                  <input placeholder="Your Email" type="email" name="email" />
                  <input placeholder="phone" name="phone" />
                </div>
                <textarea
                  placeholder=""
                  name="Text"
                  className={styles.bigtext}
                />
              </div>
              <div className={styles.Button}>
                <button type="submit">Sumbit</button>
              </div>
            </form>
          </main>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </motion.div>
  );
}
