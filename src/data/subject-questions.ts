import { questions as llmQuestions } from "@/data/questions";
import { entrepreneurshipQuestions } from "@/data/entrepreneurship-questions";
import type { Question } from "@/data/questions";
import type { SubjectId } from "@/data/subjects";

export function getQuestionsForSubject(subject: SubjectId): Question[] {
  return subject === "entrepreneurship" ? entrepreneurshipQuestions : llmQuestions;
}

export function hasMultiSelectQuestions(subject: SubjectId): boolean {
  return getQuestionsForSubject(subject).some((question) => question.isMultiSelect);
}

export function getWeeksForSubject(subject: SubjectId): number[] {
  return Array.from(
    new Set(getQuestionsForSubject(subject).map((question) => question.week))
  ).sort((a, b) => a - b);
}
