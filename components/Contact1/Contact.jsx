import React from "react";
import styles from "./Contact.module.scss";
import Map from "../Map";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
function Contact2() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_823xjs9",
        "template_s5ustxx",
        form.current,
        "sS_v6mZjOkCj8xvCN",
        { from_name: "name", to_name: "name" }
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.Page}>
      <div className={styles.Components}>
        <div className={styles.Contact}>
          <h1> Επικοινωνηστε Μαζι Μας!</h1>
          <h3>Μιληστε μαζι μας μεσω email!</h3>
          <form ref={form} onSubmit={sendEmail} className={styles.Inputs}>
            <div className={styles.FullName}>
              {" "}
              <div className={styles.InputContainer}>
                <h4>First Name</h4>
                <input placeholder="First Name" type="text" name="name" />
              </div>
              <div className={styles.InputContainer}></div>
              <div className={styles.InputContainer}>
                <h4>Last Name</h4>
                <input placeholder="Last Name" name="surname" />
              </div>
            </div>
            <div className={styles.Email}>
              <h4>Email</h4>
              <input type="email" placeholder="You@email.com" name="email" />
            </div>

            <div className={styles.Phone}>
              <h4>Phone Number</h4>
              <input type="tel" placeholder="+30 69** *** ***" name="phone" />
            </div>
            <div className={styles.BigText}>
              <h4>Message</h4>
              <textarea
                placeholder=""
                name="message"
                className={styles.bigtext}
              />
            </div>
            <div className={styles.Button}>
              {" "}
              <button type="submit">Sumbit</button>
            </div>
          </form>
        </div>
        <div className={styles.Map}>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contact2;
