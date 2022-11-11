import styles from "../styles/Times.module.css";
import { useState, useEffect } from "react";

export default function Times() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    setTime(date.toLocaleTimeString());
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className={styles.container}>
      <div className={styles.currentTime}>
        <p> Current Time : {time}</p>
      </div>
      <div className={styles.times}>
        <p>7am</p>
        <p>8.30am</p>
      </div>
    </div>
  );
}
