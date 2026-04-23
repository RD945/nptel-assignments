"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SubjectId } from "@/data/subjects";

interface SubjectContextValue {
  subject: SubjectId | null;
  setSubject: (subject: SubjectId | null) => void;
  clearSubject: () => void;
}

const SubjectContext = createContext<SubjectContextValue | undefined>(undefined);

export function SubjectProvider({ children }: { children: ReactNode }) {
  const [subject, setSubject] = useState<SubjectId | null>(null);

  return (
    <SubjectContext.Provider
      value={{
        subject,
        setSubject,
        clearSubject: () => setSubject(null),
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error("useSubject must be used within a SubjectProvider");
  }
  return context;
}
