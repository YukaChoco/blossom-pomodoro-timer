"use client";
import useTimer from "./hooks/useTimer";
import Header from "./components/Header";
import styles from "./page.module.css";
import ResultPage from "./components/pages/ResultPage";
import StudyPage from "./components/pages/StudyPage";
import { Mode } from "./types/mode";
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
    score,
    startTimer,
    stopTimer,
    restartTimer,
    finishStudy,
  } = useTimer();

  const backgroundImg = {
    backgroundImage: isStudying
      ? 'url("/sakurahaikei.png")'
      : 'url("/sakurahaikei_night.png")',
  };

  return (
    <main style={backgroundImg} className={styles.main}>
      <Header finishStudy={finishStudy} mode={mode} />
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
          studyMaxTime={studyMaxTime}
          breakMaxTime={breakMaxTime}
        />
      )}
      <ModeIcon mode={mode} />
    </main>
  );
}
