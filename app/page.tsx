import Header from "./components/Header";
import Timer from "./components/Timer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Timer />
      <a href="/result">go to result</a>
    </main>
  );
}
