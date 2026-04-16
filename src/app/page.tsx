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
            View all questions and answers in order from Week 1 to Week 12
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

        <Link href="/quiz-multi-select" className={styles.modeCard}>
          <div className={styles.modeTitle}>🔀 Multi-Select Shuffle</div>
          <div className={styles.modeDescription}>
            Only questions with multiple correct answers, shuffled together from
            all weeks
          </div>
        </Link>

        <Link href="/quiz-ai-practice" className={styles.modeCard}>
          <div className={styles.modeTitle}>🤖 AI Generated Practice Questions</div>
          <div className={styles.modeDescription}>
            45 AI-generated practice questions in one fully shuffled pool
          </div>
        </Link>

        <Link href="/notes" className={styles.modeCard}>
          <div className={styles.modeTitle}>Notes</div>
          <div className={styles.modeDescription}>
            Study notes in two sections: term definitions and lecture notes
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
