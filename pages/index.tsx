import Head from "next/head";
import styles from "../styles/Home.module.css";
import Tasks from "./tasks";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ready App</title>
        <meta name="description" content="Get Ready App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a> Get Ready App</a>
        </h1>
      </main>
      <Tasks />
    </div>
  );
}
