# Quiz Flash Cards

A Next.js quiz application with a first-load subject picker for two courses:
LLM / NLP and Entrepreneurship Essentials.
It includes multiple study modes, instant feedback, and score tracking.

## Features

- First-load subject picker for LLM / NLP or Entrepreneurship Essentials
- LLM / NLP mode set:
   - Full Shuffle Quiz (all questions in random order)
   - Weekly Quiz (choose week, randomized within that week)
   - Weekly Quiz + Shuffled Options (same weekly flow with randomized answer order)
   - Multi-Select Shuffle (only multi-select questions from all weeks)
   - AI Generated Practice Questions (45 AI-generated questions in one shuffled pool)
   - Notes (two sections: term definitions and lecture notes)
   - Review Mode (all questions in week-wise order)
- Entrepreneurship Essentials mode set:
   - Full Shuffle Quiz
   - Weekly Quiz
   - Weekly Quiz + Shuffled Options
   - Review Mode
- Single-select and multi-select question support
- Instant correctness feedback after submit
- Color-coded answers (green correct, red incorrect)
- Explanations shown when available
- Final score and percentage summary
- Error boundary page for safer production routing
- Mobile-friendly responsive layout

## Question Statistics

- Total Questions: 112
- Weeks Covered: 1-12
- Multi-Select Questions: 20
- Single-Select Questions: 92
- Entrepreneurship Essentials: 120 questions across 12 weeks
- Subject choice is session-only, so the app asks again on refresh

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Subject picker and home page
│   ├── page.module.css             # Home page styles
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── error.tsx                   # Global error boundary
│   ├── quiz/
│   │   ├── page.tsx                # Full-shuffle quiz mode
│   │   └── quiz.module.css
│   ├── quiz-weekly/
│   │   ├── page.tsx                # Week-by-week quiz mode
│   │   └── quiz-weekly.module.css
│   ├── quiz-weekly-shuffled/
│   │   └── page.tsx                # Week-by-week quiz with shuffled option order
│   ├── quiz-multi-select/
│   │   └── page.tsx                # Shuffled quiz of multi-select questions only
│   ├── quiz-ai-practice/
│   │   └── page.tsx                # AI-generated practice quiz mode
│   ├── notes/
│   │   ├── page.tsx                # Notes page with two study sections
│   │   └── notes.module.css
│   └── review/
│       ├── page.tsx                # Full review mode (ordered by week)
│       └── review.module.css
└── data/
   ├── questions.ts                 # LLM / NLP typed question dataset (112)
   ├── entrepreneurship-questions.ts# Entrepreneurship typed question dataset (120)
   ├── subject-questions.ts         # Subject-to-dataset lookup helpers
   ├── subjects.ts                  # Subject registry and labels
   ├── ai-practice-questions.ts     # AI-generated practice dataset (45)
   └── notes-content.ts             # Notes content source (terms + lecture notes)

src/components/
├── SubjectContext.tsx               # Session-only subject selection state
├── SubjectHeader.tsx                # Shared subject switch header
└── SubjectSelector.tsx             # First-load subject picker
```

## Question Data Structure

```typescript
interface Question {
   id: string;
   week: number;
   text: string;
   options: QuestionOption[];
   correctAnswers: string[];
   explanation: string | null;
   isMultiSelect: boolean;
}
```

## Setup

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Default local URL: http://localhost:3000

### Production

```bash
npm run build
npm start
```

## How to Use

1. Open Home page and pick a mode.
2. Select answer(s) and submit.
3. Read feedback and explanation.
4. Move to next question.
5. View final score summary.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: CSS Modules
- State: React hooks
