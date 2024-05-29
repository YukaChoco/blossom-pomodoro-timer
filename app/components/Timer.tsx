import { Mode } from "../types/mode";
import styles from "./timer.module.css";
import React, { useState, useEffect, use } from "react";

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
  const colorStyles = {
    border: `4px solid ${isStudying ? "rgb(6, 73, 20)" : "rgb(6, 73, 20)"}`,
  };

  const [setcount, setSetcount] = useState(1);

  return (
    <div style={colorStyles} className={styles.timer}>
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
  );
}
