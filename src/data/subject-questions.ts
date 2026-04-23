import { questions as llmQuestions } from "@/data/questions";
import { entrepreneurshipQuestions } from "@/data/entrepreneurship-questions";
import { foundationsDeepLearningQuestions } from "@/data/foundations-deep-learning-questions";
import type { Question } from "@/data/questions";
import type { SubjectId } from "@/data/subjects";

export function getQuestionsForSubject(subject: SubjectId): Question[] {
  switch (subject) {
    case "entrepreneurship":
      return entrepreneurshipQuestions;
    case "foundations-deep-learning":
      return foundationsDeepLearningQuestions;
    default:
      return llmQuestions;
  }
}

export function hasMultiSelectQuestions(subject: SubjectId): boolean {
  return getQuestionsForSubject(subject).some((question) => question.isMultiSelect);
}

export function getWeeksForSubject(subject: SubjectId): number[] {
  return Array.from(
    new Set(getQuestionsForSubject(subject).map((question) => question.week))
  ).sort((a, b) => a - b);
}
