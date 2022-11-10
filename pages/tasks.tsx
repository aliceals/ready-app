import styles from "../styles/Tasks.module.css";
import data from "../public/data.json";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    setTasks(data.tasks);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.taskBox}>
        {data &&
          tasks.length > 0 &&
          tasks.map((p, i) => {
            return (
              <li
                className={p.completed ? styles.completed : styles.uncompleted}
                key={i}
              >
                {p.title}
              </li>
            );
          })}
      </div>
    </div>
  );
}
