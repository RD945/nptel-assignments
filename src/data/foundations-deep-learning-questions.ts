import type { Question } from "@/data/questions";
import foundationsData from "../../foundations_of_deep_learning_all_weeks.json";

export const foundationsDeepLearningMetadata = foundationsData.metadata;
export const foundationsDeepLearningQuestions =
  foundationsData.questions as Question[];
