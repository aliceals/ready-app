import styles from "../styles/Times.module.css";
import { useState, useEffect } from "react";

export default function Tracker() {
  const [time, setTime] = useState(new Date());
  const [timeDiff, setTimeDiff] = useState(Number);

  let currentDate = new Date().toJSON().slice(0, 10);
  const wakeupTime = new Date(currentDate + " 16:38:00");

  const getMinsDiff = (startDate, endDate) => {
    const msInMins = 1000 * 60;

    return Math.round(Math.abs(endDate - startDate) / msInMins);
  };

  useEffect(() => {
    setTimeDiff(getMinsDiff(wakeupTime, time));
  }, []);

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.container}>
      <p>Time since: {timeDiff}</p>
    </div>
  );
}

//create date object then add time
