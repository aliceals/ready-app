import styles from "../styles/Tasks.module.css";
import data from "../public/data.json";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    setTasks(data.tasks);
  }, []);

  console.log("p", tasks);

  return (
    <div className={styles.container}>
      <div className={styles.taskBox} style={{ width: "100%" }}>
        {data &&
          tasks.length > 0 &&
          tasks.map((p, i) => {
            return (
              <li
                className={p.completed ? styles.completed : styles.uncompleted}
                key={i}
                style={{ width: `${(p.timeAllocated / 5400) * 100}%` }}
              >
                {p.title}
              </li>
            );
          })}
      </div>
    </div>
  );
}
