"use client";

import Link from "next/link";
import SubjectSelector from "@/components/SubjectSelector";
import ShuffleQuizMode from "@/components/ShuffleQuizMode";
import { useSubject } from "@/context/SubjectContext";
import { getQuestionsForSubject } from "@/data/subject-questions";
import { isNumericalQuestion } from "@/data/question-classification";
import styles from "@/app/quiz/quiz.module.css";

const EE2_SUBJECT_ID = "entrepreneurship-essentials-2" as const;

export default function QuizEe2NonNumericals() {
  const { subject, setSubject } = useSubject();

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Select a subject to start non-numerical-only quiz mode."
        onSelect={setSubject}
        showBackLink
      />
    );
  }

  if (subject !== EE2_SUBJECT_ID) {
    return (
      <div className={styles.container}>
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Mode Available Only For Entrepreneurship Essentials 2</h2>
          <div className={styles.resultActions}>
            <Link href="/" className={styles.homeButton}>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const questions = getQuestionsForSubject(subject).filter(
    (question) => !isNumericalQuestion(question)
  );

  return (
    <ShuffleQuizMode
      questions={questions}
      title="Non-Numericals Only"
      subtitle="Entrepreneurship Essentials 2 only: all weeks mixed with shuffled question and option order"
      shuffleOptions
    />
  );
}
