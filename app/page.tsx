"use client";
import useTimer from "./hooks/useTimer";
import Header from "./components/Header";
import styles from "./page.module.css";
import ModeIcon from "./components/ModeIcon";
import ResultPage from "./components/pages/ResultPage";
import StudyPage from "./components/pages/StudyPage";
import { Mode } from "./types/mode";

export default function Home() {
  const {
    currentTime,
    mode,
    isStudying,
    isTimerRunning,
    setCount,
    studyMaxTime,
    breakMaxTime,
    score,
    startTimer,
    stopTimer,
    restartTimer,
    finishStudy,
  } = useTimer();

  return (
    <main className={styles.main}>
      <Header />
      {mode === Mode.Finished ? (
        <ResultPage score={score} />
      ) : (
        <StudyPage
          currentTime={currentTime}
          mode={mode}
          isStudying={isStudying}
          isTimerRunning={isTimerRunning}
          setCount={setCount}
          startTimer={startTimer}
          stopTimer={stopTimer}
          restartTimer={restartTimer}
          finishStudy={finishStudy}
          studyMaxTime={studyMaxTime}
          breakMaxTime={breakMaxTime}
        />
      )}
    </main>
  );
}
