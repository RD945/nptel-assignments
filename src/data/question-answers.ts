import type { Question } from "@/data/questions";

function normalizeIntegerList(value: string): string | null {
  let content = value.trim();
  if (content.startsWith("[") && content.endsWith("]")) {
    content = content.slice(1, -1).trim();
  }

  if (!/^[+-]?\d+(?:\s*,\s*[+-]?\d+)*$/.test(content)) {
    return null;
  }

  return content.split(",").map((item) => BigInt(item.trim()).toString()).join(",");
}

export function matchesTextAnswer(question: Question, value: string): boolean {
  if (!value.trim()) return false;

  if (question.textAnswerFormat === "integer-list") {
    const normalized = normalizeIntegerList(value);
    return normalized !== null && question.correctAnswers.some(
      (answer) => normalizeIntegerList(answer) === normalized
    );
  }

  const normalized = value.trim().toLowerCase();
  return question.correctAnswers.some(
    (answer) => answer.trim().toLowerCase() === normalized
  );
}
