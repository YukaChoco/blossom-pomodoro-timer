import { useEffect, useState } from "react";

const useTimer = () => {
  // タイマーの初期値を5分に設定する
  const [initialStudyMinute, setInitialStudyMinute] = useState<number>(25);
  const [initialBreakMinute, setInitialBreakMinute] = useState<number>(5);
  const initialStudyTime = initialStudyMinute * 60;
  const initialBreakTime = initialBreakMinute * 60;
  const [currentTime, setCurrentTime] = useState<number>(
    initialStudyMinute * 60
  );
  const [isStudying, setIsStudying] = useState<boolean>(true);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // 5分カウントダウンタイマー
  useEffect(() => {
    const timerId = setInterval(() => {
      if (isTimerRunning) {
        if (currentTime <= 0) {
          if (isStudying) {
            setCurrentTime(initialBreakTime);
          } else {
            setCurrentTime(initialStudyTime);
          }
          setIsStudying((prev) => !prev);
        } else {
          setCurrentTime((prev) => prev - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isTimerRunning, currentTime]);

  return {
    initialStudyMinute,
    initialBreakMinute,
    currentTime,
    isStudying,
    isTimerRunning,
    initialStudyTime,
    setInitialStudyMinute,
    setInitialBreakMinute,
    setCurrentTime,
    setIsTimerRunning,
  };
};

export default useTimer;
