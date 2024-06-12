import { Mode } from "../types/mode";
import styles from "./modeIcon.module.css";

export default function ModeIcon({ mode }: { mode: Mode }) {
  return (
    <div className={styles.modeIcon}>
      <img src="./playButton.svg" />
      <span>Studying</span>
    </div>
  );
}
