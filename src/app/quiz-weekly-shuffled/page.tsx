"use client";

import SubjectSelector from "@/components/SubjectSelector";
import { useSubject } from "@/context/SubjectContext";
import { getQuestionsForSubject } from "@/data/subject-questions";
import WeeklyQuizMode from "@/components/WeeklyQuizMode";

export default function QuizWeeklyShuffled() {
  const { subject, setSubject } = useSubject();

  if (!subject) {
    return (
      <SubjectSelector
        title="Choose a subject"
        subtitle="Select a subject to start the weekly quiz with shuffled options."
        onSelect={setSubject}
        showBackLink
      />
    );
  }

  return (
    <WeeklyQuizMode
      questions={getQuestionsForSubject(subject)}
      shuffleOptions
      title="Weekly Quiz + Shuffled Options"
      subtitle="Week by week - questions randomized within each week and option order shuffled"
    />
  );
}
