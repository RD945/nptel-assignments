"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import type { Question } from "@/data/questions";
import FormattedText from "@/components/FormattedText";
import SubjectHeader from "@/components/SubjectHeader";
import styles from "@/app/quiz-weekly/quiz-weekly.module.css";

interface WeeklyQuizState {
  weeksAvailable: number[];
  currentWeek: number | null;
  weeklyQuestions: Question[];
  currentIndex: number;
  selectedAnswers: string[];
  submitted: boolean;
  feedback: string | null;
  score: number;
  weekScores: Record<number, { correct: number; total: number }>;
  finished: boolean;
}

interface WeeklyQuizModeProps {
  questions: Question[];
  shuffleOptions?: boolean;
  title: string;
  subtitle: string;
}

interface WeeklyQuizQuestionScreenProps {
  state: WeeklyQuizState;
  setState: Dispatch<SetStateAction<WeeklyQuizState | null>>;
  shuffleOptions: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function WeeklyQuizQuestionScreen({
  state,
  setState,
  shuffleOptions,
}: WeeklyQuizQuestionScreenProps) {
  const currentQuestion = state.weeklyQuestions[state.currentIndex];
  const totalInWeek = state.weeklyQuestions.length;
  const isLastQuestion = state.currentIndex === totalInWeek - 1;

  const displayedOptions = useMemo(
    () =>
      shuffleOptions
        ? shuffleArray(currentQuestion.options)
        : currentQuestion.options,
    [currentQuestion.id, shuffleOptions]
  );

  const handleOptionSelect = (label: string) => {
    if (state.submitted) return;

    if (currentQuestion.isMultiSelect) {
      setState((prev) => ({
        ...prev!,
        selectedAnswers: prev!.selectedAnswers.includes(label)
          ? prev!.selectedAnswers.filter((a) => a !== label)
          : [...prev!.selectedAnswers, label],
      }));
    } else {
      setState((prev) => ({
        ...prev!,
        selectedAnswers: [label],
      }));
    }
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
      setState((prev) => {
        const newWeekScores = {
          ...prev!.weekScores,
          [prev!.currentWeek!]: {
            correct: prev!.score,
            total: totalInWeek,
          },
        };
        return {
          ...prev!,
          currentWeek: null,
          weeklyQuestions: [],
          currentIndex: 0,
          selectedAnswers: [],
          submitted: false,
          feedback: null,
          weekScores: newWeekScores,
        };
      });
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

  return (
    <>
      <div className={styles.header}>
        <div className={styles.counter}>
          Question {state.currentIndex + 1} / {totalInWeek}
        </div>
        <div className={styles.week}>Week {state.currentWeek}</div>
      </div>

      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>
          <FormattedText text={currentQuestion.text} />
        </h2>

        <div className={styles.options}>
          {displayedOptions.map((option) => (
            <div key={option.label} className={styles.optionWrapper}>
              <input
                type={currentQuestion.isMultiSelect ? "checkbox" : "radio"}
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
            {isLastQuestion ? "Finish Week" : "Next"}
          </button>
        )}
      </div>
    </>
  );
}

export default function WeeklyQuizMode({
  questions,
  shuffleOptions = false,
  title,
  subtitle,
}: WeeklyQuizModeProps) {
  const [state, setState] = useState<WeeklyQuizState | null>(null);

  useEffect(() => {
    const weeksAvailable = Array.from(new Set(questions.map((q) => q.week))).sort(
      (a, b) => a - b
    );

    setState({
      weeksAvailable,
      currentWeek: null,
      weeklyQuestions: [],
      currentIndex: 0,
      selectedAnswers: [],
      submitted: false,
      feedback: null,
      score: 0,
      weekScores: {},
      finished: false,
    });
  }, [questions]);

  if (!state) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className={styles.container}>
        <SubjectHeader title={title} subtitle={subtitle} />

        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>No questions available</h2>
          <p className={styles.scoreinfo}>
            This subject does not have any questions for the weekly mode yet.
          </p>
          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (state.currentWeek === null) {
    return (
      <div className={styles.container}>
        <SubjectHeader title={title} subtitle={subtitle} />

        <div className={styles.weekSelector}>

          <div className={styles.weekGrid}>
            {state.weeksAvailable.map((week) => {
              const weekQuestions = questions.filter(
                (q) => q.week === week
              );
              return (
                <button
                  key={week}
                  className={styles.weekButton}
                  onClick={() => {
                    const shuffled = shuffleArray(weekQuestions);
                    setState((prev) => ({
                      ...prev!,
                      currentWeek: week,
                      weeklyQuestions: shuffled,
                      currentIndex: 0,
                      selectedAnswers: [],
                      submitted: false,
                      feedback: null,
                    }));
                  }}
                >
                  <div className={styles.weekButtonTitle}>Week {week}</div>
                  <div className={styles.weekButtonCount}>
                    {weekQuestions.length} questions
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!state.finished) {
    return (
      <div className={styles.container}>
        <SubjectHeader title={title} subtitle={subtitle} />

        <WeeklyQuizQuestionScreen
          state={state}
          setState={setState}
          shuffleOptions={shuffleOptions}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SubjectHeader title={title} subtitle={subtitle} />

      <div className={styles.results}>
        <h2 className={styles.resultsTitle}>Quiz Complete!</h2>
        <p className={styles.scoreinfo}>All weeks completed.</p>

        <div className={styles.weekScoresContainer}>
          {Object.entries(state.weekScores)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([week, scores]) => (
              <div key={week} className={styles.weekScore}>
                <div className={styles.weekScoreName}>Week {week}</div>
                <div className={styles.weekScoreValue}>
                  {scores.correct} / {scores.total}
                </div>
              </div>
            ))}
        </div>

        <div className={styles.score}>
          Total Score: {state.score} / {Object.values(state.weekScores).reduce((sum, s) => sum + s.total, 0)}
        </div>

        <Link href="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
