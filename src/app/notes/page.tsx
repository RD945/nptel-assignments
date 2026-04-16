import Link from "next/link";
import { lectureNotesContent, termDefinitionsContent } from "@/data/notes-content";
import styles from "./notes.module.css";

function toParagraphs(content: string): string[] {
  return content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function NotesPage() {
  const termParagraphs = toParagraphs(termDefinitionsContent);
  const lectureParagraphs = toParagraphs(lectureNotesContent);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        Back to Home
      </Link>

      <h1 className={styles.title}>Notes</h1>
      <p className={styles.subtitle}>
        Two sections: term definitions and lecture notes
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Section 1: Term Definitions</h2>
        <div className={styles.contentBlock}>
          {termParagraphs.map((paragraph, index) => (
            <p key={`term-${index}`} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Section 2: Lecture Notes</h2>
        <div className={styles.contentBlock}>
          {lectureParagraphs.map((paragraph, index) => (
            <p key={`lecture-${index}`} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Link href="/" className={styles.backLink}>
        Back to Home
      </Link>
    </div>
  );
}
