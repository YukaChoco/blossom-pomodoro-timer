import styles from "./resultPage.module.css";
import Score from "@/app/types/score";

export default function ResultPage({ score }: { score: Score }) {
  return (
    <div className={styles.result}>
      <div className={styles.otukare}>
        <h1>お疲れ様です！</h1>
        <h1>{score.time}時間勉強しました！</h1>
      </div>
      <p>あなたの勉強は…</p>
      <h1 className={styles.flowerCondition}>{score.flower}分咲き</h1>
    </div>
  );
}
