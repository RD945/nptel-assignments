import type { Question } from "@/data/questions";
import entrepreneurshipData from "../../entrepreneurship_essentials_all_weeks.json";

export const entrepreneurshipMetadata = entrepreneurshipData.metadata;
export const entrepreneurshipQuestions = entrepreneurshipData.questions as Question[];
