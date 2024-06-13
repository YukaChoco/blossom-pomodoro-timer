import Timer from "../Timer";
import type { Mode } from "@/app/types/mode";

export default function StudyPage({
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
  finishStudy,
}: {
  currentTime: number;
  mode: Mode;
  isStudying: boolean;
  isTimerRunning: boolean;
  setCount: number;
  studyMaxTime: number;
  breakMaxTime: number;
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
  finishStudy: () => void;
}) {
  return (
    <div>
      <Timer
        currentTime={currentTime}
        isStudying={isStudying}
        setCount={setCount}
        isTimerRunning={isTimerRunning}
        mode={mode}
        startTimer={startTimer}
        stopTimer={stopTimer}
        restartTimer={restartTimer}
        studyMaxTime={studyMaxTime}
        breakMaxTime={breakMaxTime}
      />
      <button onClick={finishStudy}>勉強を終える</button>
    </div>
  );
}
