"use client";
import useTimer from "./hooks/useTimer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import styles from "./page.module.css";

export default function Home() {
  const {
    initialStudyMinute,
    initialBreakMinute,
    currentTime,
    isStudying,
    isTimerRunning,
    initialStudyTime,
    setInitialStudyMinute,
    setInitialBreakMinute,
    setIsTimerRunning,
    setCurrentTime,
  } = useTimer();

  return (
    <main className={styles.main}>
      <Header />
      {isTimerRunning && (
        <Timer currentTime={currentTime} isStudying={isStudying} />
      )}
      {isTimerRunning ? (
        isStudying ? (
          <div>〜勉強中〜</div>
        ) : (
          <div>〜休憩中〜</div>
        )
      ) : (
        <button
          // hover時のスタイルを設定
          className={styles.button}
          onClick={() => {
            setIsTimerRunning((pre) => !pre);
            setCurrentTime(initialStudyTime);
          }}
        >
          勉強を始める
        </button>
      )}
    </main>
  );
}
