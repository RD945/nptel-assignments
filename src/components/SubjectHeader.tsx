"use client";

import Link from "next/link";
import { useSubject } from "@/context/SubjectContext";
import { getSubjectInfo } from "@/data/subjects";
import styles from "./SubjectHeader.module.css";

interface SubjectHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function SubjectHeader({ title, subtitle }: SubjectHeaderProps) {
  const { subject, clearSubject } = useSubject();
  const subjectInfo = getSubjectInfo(subject);

  return (
    <div className={styles.header}>
      <div>
        <div className={styles.subjectLabel}>Current Subject</div>
        <div className={styles.subjectName}>{subjectInfo?.label ?? "Unknown"}</div>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.actions}>
        <Link href="/" className={styles.homeButton}>
          Home
        </Link>
        <button className={styles.changeButton} onClick={clearSubject}>
          Change subject
        </button>
      </div>
    </div>
  );
}
