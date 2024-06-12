"use client";
import useTimer from "./hooks/useTimer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import styles from "./page.module.css";
import ModeIcon from "./components/ModeIcon";

export default function Home() {
  const {
    currentTime,
    mode,
    isStudying,
    isTimerRunning,
    setCount,
    studyMaxTime,
    breakMaxTime,
    startTimer,
    stopTimer,
    restartTimer,
  } = useTimer();

  return (
    <main className={styles.main}>
      <Header />
      <Timer
        currentTime={currentTime}
        isStudying={isStudying}
        setCount={setCount}
        isTimerRunning={isTimerRunning}
        mode={mode}
        studyMaxTime={studyMaxTime}
        breakMaxTime={breakMaxTime}
        startTimer={startTimer}
        stopTimer={stopTimer}
        restartTimer={restartTimer}
      />
      <ModeIcon mode={mode} />
    </main>
  );
}
