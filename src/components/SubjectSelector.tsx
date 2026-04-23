"use client";

import Link from "next/link";
import { subjectOptions } from "@/data/subjects";
import type { SubjectId } from "@/data/subjects";
import styles from "./SubjectSelector.module.css";

interface SubjectSelectorProps {
  title: string;
  subtitle: string;
  onSelect: (subject: SubjectId) => void;
  showBackLink?: boolean;
}

export default function SubjectSelector({
  title,
  subtitle,
  onSelect,
  showBackLink = false,
}: SubjectSelectorProps) {
  return (
    <div className={styles.container}>
      {showBackLink && (
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      )}

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.grid}>
        {subjectOptions.map((subject) => (
          <button
            key={subject.id}
            type="button"
            className={styles.card}
            onClick={() => onSelect(subject.id)}
          >
            <div className={styles.cardTitle}>{subject.label}</div>
            <div className={styles.cardDescription}>{subject.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
