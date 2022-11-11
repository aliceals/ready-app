import styles from "../styles/Times.module.css";
import { useState, useEffect } from "react";

export default function Tracker() {
  const [time, setTime] = useState(new Date());
  const [startTime, setStartTime] = useState("07:30:00");
  const [endTime, setEndTime] = useState();
  const [progress, setProgress] = useState();

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return <div className={styles.container}></div>;
}
