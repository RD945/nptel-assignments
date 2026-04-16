"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LLM Assignment Quiz</h1>
      <p className={styles.subtitle}>Select a quiz mode:</p>
      
      <div className={styles.modesGrid}>
        <Link href="/review" className={styles.modeCard}>
          <div className={styles.modeTitle}>📖 Review All Questions</div>
          <div className={styles.modeDescription}>
            View all questions and answers in order from Week 1 to Week 11
          </div>
        </Link>

        <Link href="/quiz-weekly" className={styles.modeCard}>
          <div className={styles.modeTitle}>📅 Weekly Quiz</div>
          <div className={styles.modeDescription}>
            Week by week - questions randomized within each week
          </div>
        </Link>

        <Link href="/quiz-weekly-shuffled" className={styles.modeCard}>
          <div className={styles.modeTitle}>📅 Weekly Quiz + Shuffled Options</div>
          <div className={styles.modeDescription}>
            Same weekly flow, but the answer choices are shuffled in the UI so
            the option pattern changes every time
          </div>
        </Link>

        <Link href="/quiz" className={styles.modeCard}>
          <div className={styles.modeTitle}>🎲 Full Shuffle</div>
          <div className={styles.modeDescription}>
            All questions randomized - complete random order
          </div>
        </Link>
      </div>
    </div>
  );
}
