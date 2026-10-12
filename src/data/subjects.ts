export const subjectIds = ["programming-generative-ai"] as const;

export type SubjectId = (typeof subjectIds)[number];

export interface SubjectInfo {
  id: SubjectId;
  label: string;
  shortLabel: string;
  description: string;
  homeTitle: string;
}

export const subjects: Record<SubjectId, SubjectInfo> = {
  "programming-generative-ai": {
    id: "programming-generative-ai",
    label: "Programming with Generative AI",
    shortLabel: "GenAI",
    description: "Python fundamentals, algorithms, and GenAI-assisted programming — week-wise quizzes.",
    homeTitle: "Programming with Generative AI Quiz",
  },
};

export const subjectOptions = subjectIds.map((id) => subjects[id]);

export function getSubjectInfo(subjectId: SubjectId | null | undefined) {
  return subjectId ? subjects[subjectId] : null;
}
