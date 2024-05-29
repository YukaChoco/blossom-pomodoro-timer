"use client";

import styles from "./page.module.css";
import Header from "../components/Header";
import { useState } from 'react';

export default function Page() {
  const [time, setTime] = useState(0);
  const [flower, setFlower] = useState(0);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.result}>
        <div className={styles.otukare}>
          <h1>お疲れ様です！</h1>
          <h1>{time}時間勉強しました！</h1>
        </div>
        <p>あなたの勉強は…</p>
        <h1 className={styles.flowerCondition}>{flower}分咲き</h1>
      </div>
    </main>
  );
}
