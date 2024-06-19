import { Mode } from "../types/mode";
import styles from "./modeIcon.module.css";

export default function ModeIcon({ mode }: { mode: Mode }) {
  return (
    <div className={styles.modeIcon}>
      <img src="./working_image.svg" width="80%" />
      <h3>Studying...</h3>
    </div>
  );
}
