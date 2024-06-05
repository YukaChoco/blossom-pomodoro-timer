import { Mode } from "../types/mode";
import styles from "./timer.module.css";
import React, { useState, useEffect, use } from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { relative } from "path";


export default function Timer({
  currentTime,
  isStudying,
  setCount,
  mode,
  isTimerRunning,
  startTimer,
  stopTimer,
  restartTimer,
}: {
  currentTime: number;
  isStudying: boolean;
  setCount: number;
  isTimerRunning: boolean;
  mode: Mode;
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
}) {
  

  const radius = 100;
  const circumference = 2*Math.PI * radius;
  const progress = currentTime / 300;
  const offset = circumference * (1-progress);

  const [setcount, setSetcount] = useState(1);

  return (
    <div className={styles.container}>
      <CircularProgress sx={{ '--CircularProgress-size': '24rem', position: "absolute"}} determinate value={progress} thickness={20} />
    <div className={styles.timer}>
        <div><p>{setcount}セット目</p></div>
        <div>
          <span>
            {Math.floor(currentTime / 600) < 10
              ? "0"
              : Math.floor(currentTime / 600)}
          </span>
          <span>{Math.floor((currentTime / 60) % 10)}</span>
          <span>:</span>
          <span>
            {currentTime % 60 < 10 ? "0" : Math.floor((currentTime % 60) / 10)}
          </span>
          <span>{(currentTime % 60) % 10}</span>
        </div>
        {mode === Mode.BeforeStart ? (
          // 勉強開始前
          <button className={styles.timerButton} onClick={startTimer}><img src="/playButton.svg"></img></button>
        ) : isTimerRunning ? (
          // 勉強中の一時停止
          <button className={styles.timerButton} onClick={stopTimer}><img src="/stopButton.svg"></img></button>
        ) : (
          // 勉強中の再開
          <button className={styles.timerButton} onClick={restartTimer}><img src="/playButton.svg"></img></button>
        )}
    </div>
    </div>
  );
}
