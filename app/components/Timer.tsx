import { Mode } from "../types/mode";
import styles from "./timer.module.css";
import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

export default function Timer({
  currentTime,
  isStudying,
  setCount,
  mode,
  isTimerRunning,
  studyMaxTime,
  breakMaxTime,
  startTimer,
  stopTimer,
  restartTimer,
}: {
  currentTime: number;
  isStudying: boolean;
  setCount: number;
  isTimerRunning: boolean;
  mode: Mode;
  studyMaxTime: number;
  breakMaxTime: number;
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
}) {
  const progress = isStudying
    ? 100 - (currentTime / studyMaxTime) * 100
    : 100 - (currentTime / breakMaxTime) * 100;

  const intCurrentTime = Math.floor(currentTime);

  const getClipPath = (progress: number) => {
    if (isStudying) {
      // !消す
      if (progress <= 25) {
        const x = 50 + 50 * Math.tan(progress * 3.6 * (Math.PI / 180));
        if (x >= 100000) {
          return `polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)`;
        }
        return `polygon(50% 0%, ${x}% 0%, 50% 50%, 50% 0%)`;
      } else if (progress <= 50) {
        const y = 50 + 50 * Math.tan((progress * 3.6 - 90) * (Math.PI / 180));
        if (y >= 100000) {
          return `polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)`;
        }
        return `polygon(50% 0%, 100% 0%, 100% ${y}%, 50% 50%)`;
      } else if (progress <= 75) {
        const x = 50 - 50 * Math.tan((progress * 3.6 - 180) * (Math.PI / 180));
        if (x <= -100000) {
          return `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%)`;
        }
        return `polygon(50% 0%, 100% 0%, 100% 100%, ${x}% 100%, 50% 50%)`;
      } else {
        const y = 50 - 50 * Math.tan((progress * 3.6 - 270) * (Math.PI / 180));
        if (y <= -100000) {
          return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;
        }
        return `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${y}%, 50% 50%)`;
      }
    } else {
      if (progress <= 25) {
        const x = 50 + 50 * Math.tan(progress * 3.6 * (Math.PI / 180));
        if (x >= 100000) {
          return `polygon(0% 0%, 50% 0%, 50% 50%, 100% 50%, 100% 100%, 0% 100%)`;
        }
        return `polygon(0% 0%, 50% 0%, 50% 50%, ${x}% 0%, 100% 0%, 100% 100%, 0% 100%)`;
      } else if (progress <= 50) {
        const y = 50 + 50 * Math.tan((progress * 3.6 - 270) * (Math.PI / 180));
        if (y >= 100000) {
          return `polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)`;
        }
        return `polygon(50% 0%, 0% 0%, 0% 100%, 100% 100%, 100% ${y}%, 50% 50%)`;
      } else if (progress <= 75) {
        const x = 50 - 50 * Math.tan((progress * 3.6 - 180) * (Math.PI / 180));
        if (x <= -100000) {
          return `polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)`;
        }
        return `polygon(0% 0%, 50% 0%, 50% 50%, ${x}% 100%, 0% 100%)`;
      } else {
        const y = 50 - 50 * Math.tan((progress * 3.6 - 90) * (Math.PI / 180));
        if (y <= -100000) {
          return `polygon(0% 0%)`;
        }
        return `polygon(50% 0%, 0% 0%, 0% ${y}%, 50% 50%)`;
      }
    }
  };

  const clipPath = getClipPath(progress);

  return (
    <div className={styles.sakuracontainer}>
      <img src="./Frame3.png" className={styles.clip} />
      <img src="./Frame2.png" className={styles.clip} style={{ clipPath }} />
      <div className={styles.container}>
        <CircularProgress
          sx={{
            "--CircularProgress-size": "24rem",
            position: "absolute",
            "--CircularProgress-trackColor": isStudying ? "#797979" : "#FFD600",
            "--CircularProgress-progressColor": isStudying
              ? "#FFD600"
              : "#797979",
            "--CircularProgress-linecap": "none",
          }}
          thickness={20}
          determinate
          value={progress}
        />
        <div className={styles.timer}>
          <div>
            <p>{setCount}セット目</p>
          </div>
          <div>
            <span>
              {Math.floor(intCurrentTime / 600) < 10
                ? "0"
                : Math.floor(intCurrentTime / 600)}
            </span>
            <span>{Math.floor((intCurrentTime / 60) % 10)}</span>
            <span>:</span>
            <span>
              {intCurrentTime % 60 < 10
                ? "0"
                : Math.floor((intCurrentTime % 60) / 10)}
            </span>
            <span>{(intCurrentTime % 60) % 10}</span>
          </div>
          {mode === Mode.BeforeStart ? (
            // 勉強開始前
            <button className={styles.timerButton} onClick={startTimer}>
              <img src="/playButton.svg"></img>
            </button>
          ) : isTimerRunning ? (
            // 勉強中の一時停止
            <button className={styles.timerButton} onClick={stopTimer}>
              <img src="/stopButton.svg"></img>
            </button>
          ) : (
            // 勉強中の再開
            <button className={styles.timerButton} onClick={restartTimer}>
              <img src="/playButton.svg"></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
