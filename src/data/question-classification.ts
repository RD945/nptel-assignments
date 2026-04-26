import type { Question } from "@/data/questions";

const numericalMarkers = [
  /\bcalculate\b/i,
  /\bcompute\b/i,
  /\bestimate\b/i,
  /\bhow much\b/i,
  /\bhow many\b/i,
  /\bnpv\b/i,
  /\birr\b/i,
  /\bbreak[ -]?even\b/i,
  /\bpayback\b/i,
  /\bhurdle rate\b/i,
  /\bdiscount(?:ed)?\b/i,
  /\brate of return\b/i,
  /\bcash flow\b/i,
  /\bvaluation\b/i,
  /\bshareholding\b/i,
  /\bebitda\b/i,
  /\boperating profit\b/i,
  /\bgross profit\b/i,
  /\bmargin\b/i,
  /\bfixed cost\b/i,
  /\bvariable cost\b/i,
  /\bcontribution\b/i,
  /\bunits?\b/i,
  /\bdepreciation\b/i,
  /\bincome tax\b/i,
  /\breserves?\b/i,
  /\bcapital budgeting\b/i,
  /\binvestment\b/i,
  /\bloan\b/i,
  /\bdebt\b/i,
  /\bequity\b/i,
  /\bpre-money\b/i,
  /\bpost-money\b/i,
  /\bliquidation\b/i,
  /\u20B9|\bRs\.?\b|\bRupees\b|%|\bmillion\b|\bcrore\b/i,
];

export function isNumericalQuestion(question: Question): boolean {
  const combinedText = [
    question.text,
    ...question.options.map((option) => option.text),
    question.explanation ?? "",
  ].join(" ");

  return numericalMarkers.some((pattern) => pattern.test(combinedText));
}
