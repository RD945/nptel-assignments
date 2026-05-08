import type { Question } from "@/data/questions";
import entrepreneurshipData from "../../entrepreneurship_essentials_all_weeks.json";

export const entrepreneurshipEssentialsMetadata = entrepreneurshipData.metadata;
export const entrepreneurshipEssentialsQuestions =
  entrepreneurshipData.questions as Question[];