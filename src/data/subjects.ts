export const subjectIds = [
  "llm",
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
