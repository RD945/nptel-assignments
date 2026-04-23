"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import SubjectSelector from "@/components/SubjectSelector";
import SubjectHeader from "@/components/SubjectHeader";
import { useSubject } from "@/context/SubjectContext";
import { getQuestionsForSubject } from "@/data/subject-questions";
import type { Question } from "@/data/questions";
import FormattedText from "@/components/FormattedText";
import styles from "../quiz/quiz.module.css";

interface QuizState {
  shuffledQuestions: Question[];
  currentIndex: number;
  selectedAnswers: string[];
  submitted: boolean;
  feedback: string | null;
  score: number;
  finished: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizMultiSelect() {
  const { subject, setSubject } = useSubject();
  const [state, setState] = useState<QuizState | null>(null);
  const questions = subject ? getQuestionsForSubject(subject) : [];
  const multiSelectQuestions = useMemo(
    () => questions.filter((question) => question.isMultiSelect),
    [questions]
  );

  useEffect(() => {
    if (!subject) {
      setState(null);
      return;
    }

    const shuffled = shuffleArray(multiSelectQuestions);
    setState({
      shuffledQuestions: shuffled,
      currentIndex: 0,
      selectedAnswers: [],
      submitted: false,
      feedback: null,
      score: 0,
      finished: false,
    });
  }, [subject, multiSelectQuestions]);

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Select a subject to start the multi-select quiz."
        onSelect={setSubject}
        showBackLink
      />
    );
  }

  if (multiSelectQuestions.length === 0) {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>No multi-select questions</h2>
          <div className={styles.score}>
            This subject does not have any multi-select questions.
          </div>
          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!state) {
    return <div className={styles.container}>Loading...</div>;
  }

  const currentQuestion = state.shuffledQuestions[state.currentIndex];
  const totalQuestions = state.shuffledQuestions.length;
  const isLastQuestion = state.currentIndex === totalQuestions - 1;

  const handleOptionSelect = (label: string) => {
    if (state.submitted) return;

    setState((prev) => ({
      ...prev!,
      selectedAnswers: prev!.selectedAnswers.includes(label)
        ? prev!.selectedAnswers.filter((a) => a !== label)
        : [...prev!.selectedAnswers, label],
    }));
  };

  const handleSubmit = () => {
    if (state.selectedAnswers.length === 0 || state.submitted) return;

    const isCorrect =
      state.selectedAnswers.length === currentQuestion.correctAnswers.length &&
      state.selectedAnswers.every((a) =>
        currentQuestion.correctAnswers.includes(a)
      );

    const newScore = state.score + (isCorrect ? 1 : 0);
    const feedback = isCorrect ? "Correct!" : "Incorrect.";

    setState((prev) => ({
      ...prev!,
      submitted: true,
      feedback,
      score: newScore,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setState((prev) => ({
        ...prev!,
        finished: true,
      }));
    } else {
      setState((prev) => ({
        ...prev!,
        currentIndex: prev!.currentIndex + 1,
        selectedAnswers: [],
        submitted: false,
        feedback: null,
      }));
    }
  };

  const handleRestart = () => {
    const shuffled = shuffleArray(multiSelectQuestions);
    setState({
      shuffledQuestions: shuffled,
      currentIndex: 0,
      selectedAnswers: [],
      submitted: false,
      feedback: null,
      score: 0,
      finished: false,
    });
  };

  if (state.finished) {
    return (
      <div className={styles.container}>
        <SubjectHeader />

        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Multi-Select Quiz Complete!</h2>
          <div className={styles.score}>
            Score: {state.score} / {totalQuestions}
          </div>
          <div className={styles.percentage}>
            ({Math.round((state.score / totalQuestions) * 100)}%)
          </div>
          <div className={styles.resultActions}>
            <button className={styles.restartButton} onClick={handleRestart}>
              Restart Quiz
            </button>
            <Link href="/" className={styles.homeButton}>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SubjectHeader />

      <div className={styles.header}>
        <div className={styles.counter}>
          Multi-Select Question {state.currentIndex + 1} / {totalQuestions}
        </div>
        <div className={styles.week}>All Weeks</div>
      </div>

      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>
          <FormattedText text={currentQuestion.text} />
        </h2>

        <div className={styles.options}>
          {currentQuestion.options.map((option) => (
            <div key={option.label} className={styles.optionWrapper}>
              <input
                type="checkbox"
                id={option.label}
                name={currentQuestion.id}
                value={option.label}
                checked={state.selectedAnswers.includes(option.label)}
                onChange={() => handleOptionSelect(option.label)}
                disabled={state.submitted}
                className={styles.input}
              />
              <label
                htmlFor={option.label}
                className={`${styles.label} ${
                  state.submitted
                    ? currentQuestion.correctAnswers.includes(option.label)
                      ? styles.correct
                      : state.selectedAnswers.includes(option.label)
                      ? styles.incorrect
                      : ""
                    : ""
                }`}
              >
                <span className={styles.optionLabel}>{option.label}.</span>
                <span className={styles.optionText}>
                  <FormattedText text={option.text} />
                </span>
              </label>
            </div>
          ))}
        </div>

        {state.submitted && (
          <div className={styles.feedback}>
            <div className={styles.feedbackMessage}>{state.feedback}</div>
            {currentQuestion.explanation && (
              <div className={styles.explanation}>
                <strong>Explanation:</strong>{" "}
                <FormattedText text={currentQuestion.explanation} />
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {!state.submitted ? (
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={state.selectedAnswers.length === 0}
          >
            Submit
          </button>
        ) : (
          <button className={styles.nextButton} onClick={handleNext}>
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
