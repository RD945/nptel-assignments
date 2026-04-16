# LLM Assignment Quiz App

A Next.js quiz application for the Introduction to Large Language Models course.
It includes three study modes, instant feedback, and score tracking.

## Features

- 112 total questions across 12 weeks
- 5 modes:
   - Full Shuffle Quiz (all questions in random order)
   - Weekly Quiz (choose week, randomized within that week)
   - Weekly Quiz + Shuffled Options (same weekly flow with randomized answer order)
   - Multi-Select Shuffle (only multi-select questions from all weeks)
   - Review Mode (all questions in week-wise order)
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
- Multi-Select Questions: 21
- Single-Select Questions: 91

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page (5 mode cards)
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
│   └── review/
│       ├── page.tsx                # Full review mode (ordered by week)
│       └── review.module.css
└── data/
      └── questions.ts                # Typed question dataset (112)
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
