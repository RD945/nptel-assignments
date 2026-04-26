"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SubjectHeader from "@/components/SubjectHeader";
import type { Question } from "@/data/questions";
import FormattedText from "@/components/FormattedText";
import styles from "@/app/quiz/quiz.module.css";

interface ShuffleQuizModeProps {
  questions: Question[];
  title: string;
  subtitle: string;
  shuffleOptions?: boolean;
}

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

function prepareQuestions(questions: Question[], shuffleOptions: boolean): Question[] {
  return questions.map((question) => ({
    ...question,
    options: shuffleOptions ? shuffleArray(question.options) : question.options,
  }));
}

export default function ShuffleQuizMode({
  questions,
  title,
  subtitle,
  shuffleOptions = false,
}: ShuffleQuizModeProps) {
  const [state, setState] = useState<QuizState | null>(null);

  useEffect(() => {
    const prepared = prepareQuestions(questions, shuffleOptions);
    const shuffled = shuffleArray(prepared);
    setState({
      shuffledQuestions: shuffled,
      currentIndex: 0,
      selectedAnswers: [],
      submitted: false,
      feedback: null,
      score: 0,
      finished: false,
    });
  }, [questions, shuffleOptions]);

  if (!state) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className={styles.container}>
        <SubjectHeader title={title} subtitle={subtitle} />
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>No questions available</h2>
          <div className={styles.resultActions}>
            <Link href="/" className={styles.homeButton}>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = state.shuffledQuestions[state.currentIndex];
  const totalQuestions = state.shuffledQuestions.length;
  const isLastQuestion = state.currentIndex === totalQuestions - 1;

  const handleOptionSelect = (label: string) => {
    if (state.submitted) return;

    if (currentQuestion.isMultiSelect) {
      setState((prev) => ({
        ...prev!,
        selectedAnswers: prev!.selectedAnswers.includes(label)
          ? prev!.selectedAnswers.filter((a) => a !== label)
          : [...prev!.selectedAnswers, label],
      }));
      return;
    }

    setState((prev) => ({
      ...prev!,
      selectedAnswers: [label],
    }));
  };

  const handleSubmit = () => {
    if (state.selectedAnswers.length === 0 || state.submitted) return;

    const isCorrect =
      state.selectedAnswers.length === currentQuestion.correctAnswers.length &&
      state.selectedAnswers.every((answer) => currentQuestion.correctAnswers.includes(answer));

    setState((prev) => ({
      ...prev!,
      submitted: true,
      feedback: isCorrect ? "Correct!" : "Incorrect.",
      score: prev!.score + (isCorrect ? 1 : 0),
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setState((prev) => ({
        ...prev!,
        finished: true,
      }));
      return;
    }

    setState((prev) => ({
      ...prev!,
      currentIndex: prev!.currentIndex + 1,
      selectedAnswers: [],
      submitted: false,
      feedback: null,
    }));
  };

  const handleRestart = () => {
    const prepared = prepareQuestions(questions, shuffleOptions);
    const shuffled = shuffleArray(prepared);
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
        <SubjectHeader title={title} subtitle={subtitle} />

        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Quiz Complete!</h2>
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
      <SubjectHeader title={title} subtitle={subtitle} />

      <div className={styles.header}>
        <div className={styles.counter}>
          Question {state.currentIndex + 1} / {totalQuestions}
        </div>
        <div className={styles.week}>Week {currentQuestion.week}</div>
      </div>

      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>
          <FormattedText text={currentQuestion.text} />
        </h2>

        <div className={styles.options}>
          {currentQuestion.options.map((option) => (
            <div key={`${currentQuestion.id}-${option.label}-${option.text}`} className={styles.optionWrapper}>
              <input
                type={currentQuestion.isMultiSelect ? "checkbox" : "radio"}
                id={`${currentQuestion.id}-${option.label}`}
                name={currentQuestion.id}
                value={option.label}
                checked={state.selectedAnswers.includes(option.label)}
                onChange={() => handleOptionSelect(option.label)}
                disabled={state.submitted}
                className={styles.input}
              />
              <label
                htmlFor={`${currentQuestion.id}-${option.label}`}
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
                <strong>Explanation:</strong> <FormattedText text={currentQuestion.explanation} />
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
