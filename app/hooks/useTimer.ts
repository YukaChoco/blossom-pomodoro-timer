import { useEffect, useState } from "react";
import { Mode } from "../types/mode";
import Score from "../types/score";

const useTimer = () => {
  // 勉強時間25分 と 休憩時間5分 の初期設定
  const initialStudyMinute = 0.25;
  const initialBreakMinute = 0.5;
  // 秒に変換
  const initialStudyTime = initialStudyMinute * 60;
  const initialBreakTime = initialBreakMinute * 60;
  const [currentTime, setCurrentTime] = useState<number>(initialStudyTime);
  const [setCount, setSetCount] = useState<number>(1);
  const [mode, setMode] = useState<Mode>(Mode.BeforeStart);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [score, setScore] = useState<Score>({ time: 0, flower: 0 });

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

  const finishStudy = () => {
    setIsTimerRunning(false);
    setMode(Mode.Finished);
    setScore(getScore());
  };

  const getScore = (): Score => {
    const getTotalStudyTime = (): number => {
      return setCount * 0.5;
    };
    const totalStudyTime = getTotalStudyTime();
    switch (true) {
      case setCount >= 4:
        return { time: totalStudyTime, flower: 10 };
      case setCount === 3:
        return { time: totalStudyTime, flower: 7 };
      case setCount === 2:
        return { time: totalStudyTime, flower: 5 };
      case setCount === 1:
        return { time: totalStudyTime, flower: 3 };
      case setCount === 0 && currentTime > 10:
        return { time: totalStudyTime, flower: 1 };
      default:
        return { time: totalStudyTime, flower: 0 };
    }
  };

  // 5分カウントダウンタイマー
  useEffect(() => {
    const timerID = setInterval(() => {
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
      clearInterval(timerID);
    };
  }, [currentTime, isTimerRunning, mode]);

  return {
    currentTime,
    mode,
    isStudying: mode !== Mode.Breaking,
    isTimerRunning,
    setCount,
    studyMaxTime: initialStudyTime,
    breakMaxTime: initialBreakTime,
    score,
    startTimer,
    stopTimer,
    restartTimer,
    finishStudy,
  };
};

export default useTimer;
