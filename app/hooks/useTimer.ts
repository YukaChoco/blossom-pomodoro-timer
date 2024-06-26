import { useEffect, useState } from "react";
import { Mode } from "../types/mode";
import Score from "../types/score";

const useTimer = () => {
  // 勉強時間25分 と 休憩時間5分 の初期設定
  const initialStudyMinute = 0.1;
  const initialBreakMinute = 0.1;
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
    const getTotalStudyTime = (
      settingStudyMinute: number,
      settingBreakMinute: number,
      currentMinute: number,
      currentSetCount: number
    ): number => {
      if (mode === Mode.BeforeStart) {
        return 0;
      }
      const resultMinute =
        mode === Mode.Studying
          ? (currentSetCount - 1) * (settingStudyMinute + settingBreakMinute) +
            (settingStudyMinute - currentMinute)
          : currentSetCount * (settingStudyMinute + settingBreakMinute);
      const resultHour = Math.floor((resultMinute / 60) * 2) / 2;
      return resultHour;
    };
    const totalStudyTime = getTotalStudyTime(
      initialStudyMinute,
      initialBreakMinute,
      currentTime / 60,
      setCount
    );
    switch (true) {
      case totalStudyTime >= 2:
        return { time: totalStudyTime, flower: 10 };
      case totalStudyTime >= 1.5:
        return { time: totalStudyTime, flower: 7 };
      case totalStudyTime >= 1:
        return { time: totalStudyTime, flower: 5 };
      case totalStudyTime >= 0.5:
        return { time: totalStudyTime, flower: 3 };
      case mode === Mode.Studying:
        return { time: totalStudyTime, flower: 1 };
      default:
        return { time: totalStudyTime, flower: 0 };
    }
  };

  // 5分カウントダウンタイマー
  useEffect(() => {
    const timerID = setInterval(() => {
      if (mode !== Mode.Finished && mode !== Mode.BeforeStart) {
        if (currentTime - 0.1 <= 0) {
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
