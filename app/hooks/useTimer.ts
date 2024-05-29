import { useEffect, useState } from "react";
import { Mode } from "../types/mode";

const useTimer = () => {
  // タイマーの初期値を5分に設定する
  const [initialStudyMinute, setInitialStudyMinute] = useState<number>(25);
  const [initialBreakMinute, setInitialBreakMinute] = useState<number>(5);
  const initialStudyTime = initialStudyMinute * 60;
  const initialBreakTime = initialBreakMinute * 60;
  const [currentTime, setCurrentTime] = useState<number>(
    initialStudyMinute * 60
  );
  const [setCount, setSetCount] = useState<number>(0);
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
        if (currentTime <= 0) {
          if (mode === Mode.Studying) {
            setCurrentTime(initialBreakTime);
            setSetCount((prev) => prev + 1);
          } else if (mode === Mode.Breaking) {
            setCurrentTime(initialStudyTime);
          }
          setMode((prev) =>
            prev === Mode.Studying ? Mode.Breaking : Mode.Studying
          );
        } else {
          if (isTimerRunning) {
            setCurrentTime((prev) => prev - 1);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [currentTime, mode, isTimerRunning, initialStudyTime, initialBreakTime]);

  return {
    currentTime,
    mode,
    isStudying: mode === Mode.Studying,
    isTimerRunning,
    setCount,
    startTimer,
    setIsTimerRunning,
    stopTimer,
    restartTimer,
  };
};

export default useTimer;
