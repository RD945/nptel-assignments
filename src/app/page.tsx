"use client";

import Link from "next/link";
import { useSubject } from "@/context/SubjectContext";
import { getSubjectInfo } from "@/data/subjects";
import { getQuestionsForSubject, hasMultiSelectQuestions } from "@/data/subject-questions";
import SubjectSelector from "@/components/SubjectSelector";
import styles from "./page.module.css";

export default function Home() {
  const { subject, setSubject, clearSubject } = useSubject();

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Pick the course you want to study. The app will then show the matching quiz modes."
        onSelect={setSubject}
      />
    );
  }

  const subjectInfo = getSubjectInfo(subject);
  const availableQuestions = getQuestionsForSubject(subject);
  const multiSelectAvailable = hasMultiSelectQuestions(subject);

  const modeCards = [
    {
      href: "/review",
      title: "📖 Review All Questions",
      description: "View all questions and answers in order from Week 1 to Week 12",
      enabled: true,
    },
    {
      href: "/quiz-weekly",
      title: "📅 Weekly Quiz",
      description: "Week by week - questions randomized within each week",
      enabled: true,
    },
    {
      href: "/quiz-weekly-shuffled",
      title: "📅 Weekly Quiz + Shuffled Options",
      description:
        "Same weekly flow, but the answer choices are shuffled in the UI so the option pattern changes every time",
      enabled: true,
    },
    {
      href: "/quiz-multi-select",
      title: "🔀 Multi-Select Shuffle",
      description: multiSelectAvailable
        ? "Only questions with multiple correct answers, shuffled together from all weeks"
        : "This subject has no multi-select questions.",
      enabled: multiSelectAvailable,
    },
    ...(subject === "llm"
      ? [
          {
            href: "/quiz-ai-practice",
            title: "🤖 AI Generated Practice Questions",
            description: "45 AI-generated practice questions in one fully shuffled pool",
            enabled: true,
          },
          {
            href: "/notes",
            title: "Notes",
            description: "Study notes in two sections: term definitions and lecture notes",
            enabled: true,
          },
        ]
      : []),
    {
      href: "/quiz",
      title: "🎲 Full Shuffle",
      description: `All ${availableQuestions.length} questions randomized - complete random order`,
      enabled: true,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subjectHeader}>
        <div>
          <div className={styles.subjectLabel}>Current Subject</div>
          <h1 className={styles.title}>{subjectInfo?.homeTitle ?? "Quiz"}</h1>
          <p className={styles.subtitle}>{subjectInfo?.description}</p>
        </div>

        <button className={styles.changeSubjectButton} onClick={clearSubject}>
          Change subject
        </button>
      </div>

      <p className={styles.subtitle}>Select a quiz mode:</p>

      <div className={styles.modesGrid}>
        {modeCards.map((mode) =>
          mode.enabled ? (
            <Link key={mode.title} href={mode.href} className={styles.modeCard}>
              <div className={styles.modeTitle}>{mode.title}</div>
              <div className={styles.modeDescription}>{mode.description}</div>
            </Link>
          ) : (
            <div key={mode.title} className={`${styles.modeCard} ${styles.modeCardDisabled}`}>
              <div className={styles.modeTitle}>{mode.title}</div>
              <div className={styles.modeDescription}>{mode.description}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
