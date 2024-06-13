import { useEffect, useState } from "react";
import { Mode } from "../types/mode";

const useTimer = () => {
  // タイマーの初期値を5分に設定する
  const [initialStudyMinute, setInitialStudyMinute] = useState<number>(1);
  const [initialBreakMinute, setInitialBreakMinute] = useState<number>(0.2);
  const initialStudyTime = initialStudyMinute * 60;
  const initialBreakTime = initialBreakMinute * 60;
  const [currentTime, setCurrentTime] = useState<number>(
    initialStudyMinute * 60
  );
  const [setCount, setSetCount] = useState<number>(1);
  const [mode, setMode] = useState<Mode>(Mode.BeforeStart);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const startTimer = () => {
    setIsTimerRunning(true);
    setMode(Mode.Studying);
    setCurrentTime(initialStudyTime);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const restartTimer = () => {
    setIsTimerRunning(true);
  };

  // 5分カウントダウンタイマー
  useEffect(() => {
    const timerId = setInterval(() => {
      if (mode !== Mode.Finished && mode !== Mode.BeforeStart) {
        if (currentTime- 0.1 <= 0) {
          if (mode === Mode.Studying) {
            setCurrentTime(initialBreakTime);
          } else if (mode === Mode.Breaking) {
            setCurrentTime(initialStudyTime);
            setSetCount((prev) => prev + 1);
          }
          setMode((prev) =>
            prev === Mode.Studying ? Mode.Breaking : Mode.Studying
          );
        } else {
          if (isTimerRunning) {
            setCurrentTime((prev) => prev - 0.1);
          }
        }
      }
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, [currentTime, mode, isTimerRunning, initialStudyTime, initialBreakTime]);

  return {
    currentTime,
    mode,
    isStudying: mode !== Mode.Breaking,
    isTimerRunning,
    setCount,
    studyMaxTime: initialStudyTime,
    breakMaxTime: initialBreakTime,
    startTimer,
    setIsTimerRunning,
    stopTimer,
    restartTimer,
  };
};

export default useTimer;
