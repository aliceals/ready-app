import styles from "../styles/Times.module.css";
import { useState, useEffect } from "react";
import { Line } from "rc-progress";

export default function Tracker() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeDiff, setTimeDiff] = useState(Number);
  const [percentageTime, setPercentageTime] = useState(Number);
  const [wakeupTime, setWakeupTime] = useState({});

  const getMinsDiff = (startDate: any, endDate: any) => {
    const msInMins = 1000 * 60;

    return Math.round((endDate - startDate) / msInMins);
  };

  useEffect(() => {
    let currentDate = new Date().toJSON().slice(0, 10);

    setWakeupTime(new Date(currentDate + " 13:00:00"));
  }, []);

  useEffect(() => {
    setTimeDiff(getMinsDiff(wakeupTime, currentTime));
    setPercentageTime(Math.floor((timeDiff / 90) * 100));
  }, [currentTime]);

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.container}>
      {/* <p>Time since: {timeDiff}</p> */}
      <Line percent={percentageTime} strokeWidth={4} strokeColor="blue" />
    </div>
  );
}


// 90 minutes
// 3000