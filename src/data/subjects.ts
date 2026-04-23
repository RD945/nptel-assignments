export const subjectIds = ["llm", "entrepreneurship"] as const;

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
};

export const subjectOptions = subjectIds.map((id) => subjects[id]);

export function getSubjectInfo(subjectId: SubjectId | null | undefined) {
  return subjectId ? subjects[subjectId] : null;
}
