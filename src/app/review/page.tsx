"use client";

import Link from "next/link";
import { questions as allQuestions } from "@/data/questions";
import styles from "./review.module.css";

export default function Review() {
  // Group questions by week and sort
  const questionsByWeek = allQuestions.reduce(
    (acc, question) => {
      const week = question.week;
      if (!acc[week]) {
        acc[week] = [];
      }
      acc[week].push(question);
      return acc;
    },
    {} as Record<number, typeof allQuestions>
  );

  const weeks = Object.keys(questionsByWeek)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <h1 className={styles.title}>All Questions & Answers</h1>
      <p className={styles.subtitle}>Week 1 to Week 11 in order</p>

      <div className={styles.questions}>
        {weeks.map((week) => (
          <div key={week} className={styles.weekSection}>
            <h2 className={styles.weekHeader}>Week {week}</h2>

            {questionsByWeek[week].map((question, idx) => (
              <div key={question.id} className={styles.questionCard}>
                <div className={styles.questionNumber}>
                  Q{idx + 1}. {question.text}
                </div>

                <div className={styles.optionsList}>
                  {question.options.map((option) => (
                    <div
                      key={option.label}
                      className={`${styles.option} ${
                        question.correctAnswers.includes(option.label)
                          ? styles.correct
                          : ""
                      }`}
                    >
                      <span className={styles.optionLabel}>{option.label}.</span>
                      <span className={styles.optionText}>{option.text}</span>
                      {question.correctAnswers.includes(option.label) && (
                        <span className={styles.correctBadge}>✓ CORRECT</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className={styles.correctAnswer}>
                  Correct Answer(s): <strong>{question.correctAnswers.join(", ")}</strong>
                </div>

                {question.explanation && (
                  <div className={styles.explanation}>
                    <strong>Explanation:</strong> {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </div>
  );
}
