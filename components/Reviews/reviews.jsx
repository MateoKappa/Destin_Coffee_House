import React from "react";
import styles from "./reviews.module.scss";
import Review from "../Review";
import { useEffect, useState } from "react";

function reviews() {
  const data = Review();
  const [name, setName] = useState();
  const [paragraph, setParagraph] = useState();
  const [counter, setCounter] = useState(0);
  const reviewData = Object.values(data);
  const nextreview = (counter) => {
    setCounter(counter + 1);
    if (counter >= 2) {
      setCounter(0);
    }
  };

  useEffect(() => {
    setName(reviewData[counter].name);
    setParagraph(reviewData[counter].paragraph);
  }, [counter]);
  return (
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
  );
}

export default reviews;
