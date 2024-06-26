import { Mode } from "../types/mode";
import styles from "./modeIcon.module.css";

export default function ModeIcon({ mode }: { mode: Mode }) {
  if (mode === Mode.Studying){
    return (
      <div className={styles.modeIcon}>
        <img src="./working_image.svg" width="80%" />
        <h3 className={styles.h3study}>Studying...</h3>
      </div>
    )
  } else if (mode === Mode.Breaking) {
    return (
      <div className={styles.modeIcon}>
        <img src="./breakimage.svg" width="80%" />
        <h3 className={styles.h3break}>Break time...</h3>
      </div>
    )
  } else {
    return 0;
  }
}
