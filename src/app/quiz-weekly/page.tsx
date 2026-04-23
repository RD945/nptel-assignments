"use client";

import SubjectSelector from "@/components/SubjectSelector";
import { useSubject } from "@/context/SubjectContext";
import { getQuestionsForSubject } from "@/data/subject-questions";
import WeeklyQuizMode from "@/components/WeeklyQuizMode";

export default function QuizWeekly() {
  const { subject, setSubject } = useSubject();

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Select a subject to start the weekly quiz."
        onSelect={setSubject}
        showBackLink
      />
    );
  }

  return (
    <WeeklyQuizMode
      questions={getQuestionsForSubject(subject)}
      title="Weekly Quiz Mode"
      subtitle="Select a week to start with randomized questions"
    />
  );
}
