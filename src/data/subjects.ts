export const subjectIds = [
  "llm",
  "entrepreneurship",
  "entrepreneurship-essentials-2",
  "foundations-deep-learning",
] as const;

export type SubjectId = (typeof subjectIds)[number];

export interface SubjectInfo {
  id: SubjectId;
  label: string;
  shortLabel: string;
  description: string;
  homeTitle: string;
}

export const subjects: Record<SubjectId, SubjectInfo> = {
  llm: {
    id: "llm",
    label: "LLM / NLP",
    shortLabel: "LLM",
    description: "Large Language Models, NLP fundamentals, notes, and practice modes.",
    homeTitle: "LLM Assignment Quiz",
  },
  entrepreneurship: {
    id: "entrepreneurship",
    label: "Entrepreneurship Essentials",
    shortLabel: "Entrepreneurship",
    description: "Weekly entrepreneurship questions with the same quiz modes.",
    homeTitle: "Entrepreneurship Essentials Quiz",
  },
  "entrepreneurship-essentials-2": {
    id: "entrepreneurship-essentials-2",
    label: "Entrepreneurship Essentials 2",
    shortLabel: "Entrepreneurship 2",
    description: "Exact text-based questions parsed from entrepreneurship_essentials_quiz.txt.",
    homeTitle: "Entrepreneurship Essentials 2 Quiz",
  },
  "foundations-deep-learning": {
    id: "foundations-deep-learning",
    label: "Foundations of Deep Learning",
    shortLabel: "FDL",
    description: "Deep learning concepts and applications with week-wise quiz modes.",
    homeTitle: "Foundations of Deep Learning Quiz",
  },
};

export const subjectOptions = subjectIds.map((id) => subjects[id]);

export function getSubjectInfo(subjectId: SubjectId | null | undefined) {
  return subjectId ? subjects[subjectId] : null;
}
