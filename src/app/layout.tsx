import type { Metadata } from "next";
import "./globals.css";
import { SubjectProvider } from "@/context/SubjectContext";

export const metadata: Metadata = {
  title: "Quiz Flash Cards",
  description: "Multi-subject quiz application for course review and practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SubjectProvider>
          <main className="container">{children}</main>
        </SubjectProvider>
      </body>
    </html>
  );
}
