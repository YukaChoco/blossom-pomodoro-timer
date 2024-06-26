import { Mode } from "../types/mode";
import styles from "./modeIcon.module.css";

export default function ModeIcon({ mode }: { mode: Mode }) {
  return (
    <>
    <div className={styles.modeIcon} style={{opacity: mode === Mode.Studying ? 1 : 0}}>
      <img src="./working_image.svg" width="80%" />
      <h3 className={styles.h3study}>Studying...</h3>
    </div>
    <div className={styles.modeIcon} style={{opacity: mode === Mode.Breaking ? 1 : 0}}>
      <img src="./breakimage.svg" width="80%" />
      <h3 className={styles.h3break}>Break time...</h3>
    </div>
    <div className={styles.modeIcon} style={{opacity: mode === Mode.Finished ? 1 : 0}}>
      <img src="./finished_image.svg" width="80%" />
      <h3 className={styles.h3finish}>Finished!</h3>
    </div>
    </>
  )
}
