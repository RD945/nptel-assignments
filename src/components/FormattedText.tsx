import { Fragment, ReactNode } from "react";

interface FormattedTextProps {
  text: string;
}

const SYMBOL_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\\subseteq/g, "⊆"],
  [/\\supseteq/g, "⊇"],
  [/\\leq/g, "≤"],
  [/\\geq/g, "≥"],
  [/\\neq/g, "≠"],
  [/\\in/g, "∈"],
  [/\\notin/g, "∉"],
  [/\\times/g, "×"],
  [/\\cdot/g, "·"],
  [/<=/g, "≤"],
  [/>=/g, "≥"],
];

function normalizeSymbols(input: string): string {
  return SYMBOL_REPLACEMENTS.reduce(
    (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
    input
  );
}

function formatInlineMath(input: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /([A-Za-z0-9\)\]])\^([A-Za-z0-9+\-]+)|([A-Za-z])_([A-Za-z0-9]+)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, supBase, supValue, subBase, subValue] = match;
    const start = match.index;

    if (start > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{input.slice(lastIndex, start)}</Fragment>
      );
    }

    if (supBase && supValue) {
      nodes.push(
        <Fragment key={`s-${key++}`}>
          {supBase}
          <sup>{supValue}</sup>
        </Fragment>
      );
    } else if (subBase && subValue) {
      nodes.push(
        <Fragment key={`b-${key++}`}>
          {subBase}
          <sub>{subValue}</sub>
        </Fragment>
      );
    }

    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < input.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{input.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

export default function FormattedText({ text }: FormattedTextProps) {
  const normalized = normalizeSymbols(text);
  return <>{formatInlineMath(normalized)}</>;
}
