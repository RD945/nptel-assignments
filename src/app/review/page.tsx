"use client";

import SubjectSelector from "@/components/SubjectSelector";
import SubjectHeader from "@/components/SubjectHeader";
import { useSubject } from "@/context/SubjectContext";
import { getQuestionsForSubject } from "@/data/subject-questions";
import { getSubjectInfo } from "@/data/subjects";
import FormattedText from "@/components/FormattedText";
import styles from "./review.module.css";

export default function Review() {
  const { subject, setSubject } = useSubject();

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Select a subject to review all questions and answers."
        onSelect={setSubject}
        showBackLink
      />
    );
  }

  const allQuestions = getQuestionsForSubject(subject);
  const subjectInfo = getSubjectInfo(subject);

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
      <SubjectHeader
        title={`${subjectInfo?.label} Questions & Answers`}
        subtitle="Week 1 to Week 12 in order"
      />

      <div className={styles.questions}>
        {weeks.map((week) => (
          <div key={week} className={styles.weekSection}>
            <h2 className={styles.weekHeader}>Week {week}</h2>

            {questionsByWeek[week].map((question, idx) => (
              <div key={question.id} className={styles.questionCard}>
                <div className={styles.questionNumber}>
                  Q{idx + 1}. <FormattedText text={question.text} />
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
                      <span className={styles.optionText}>
                        <FormattedText text={option.text} />
                      </span>
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
                    <strong>Explanation:</strong>{" "}
                    <FormattedText text={question.explanation} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
