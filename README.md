# LLM Assignment Quiz App

A Next.js quiz application for the Introduction to Large Language Models course. Features shuffled questions from all 11 assignments with instant feedback and scoring.

## Features

✓ **77 Total Questions** from 11 assignments  
✓ **Random Shuffle** - Questions are shuffled on each start/restart  
✓ **Multi-Select Support** - Some questions have multiple correct answers (identified automatically)  
✓ **Instant Feedback** - See if you're correct immediately after submitting  
✓ **Color-Coded Answers** - Green for correct, red for incorrect  
✓ **Explanations** - Most questions include explanations from the course material  
✓ **Scoring** - Final score with percentage displayed after completing all questions  
✓ **TypeScript** - Fully typed for better development experience  
✓ **Minimal UI** - Clean, distraction-free interface with no animations or external UI libraries  

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with "Start Quiz" button
│   ├── page.module.css       # Home page styles
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── quiz/
│       ├── page.tsx          # Quiz page with all logic
│       └── quiz.module.css   # Quiz page styles
├── data/
│   └── questions.ts          # TypeScript data file with all 77 questions
└── styles/
```

## Question Data Structure

Each question is typed as:

```typescript
interface Question {
  id: string;              // "w2q1" (Week 2, Question 1)
  week: number;            // 1-11 (except some weeks may be missing)
  text: string;            // The question text
  options: QuestionOption[];  // Answer choices with labels (a, b, c, d, etc.)
  correctAnswers: string[];   // ["c"] or ["b", "c", "d"] for multi-select
  explanation: string | null; // Explanation or null if not available
  isMultiSelect: boolean;   // true if multiple answers are correct
}
```

## Setup & Running

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd c:\Users\Reetam\Desktop\nptel\llm\quiz-flash-cards
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

### Production Build

Build for production:
```bash
npm run build
npm start
```

## How to Use the Quiz

1. **Home Page** - Click "Start Quiz" to begin
2. **Quiz Screen** - Read the question and select your answer(s)
   - For single-select questions: click only one option
   - For multi-select questions: click multiple options
3. **Submit** - Click "Submit" to check your answer
   - Correct answer(s) highlighted in green
   - Wrong selections highlighted in red
   - Explanation (if available) is displayed
4. **Next** - Click "Next" to proceed to the next question
5. **Results** - After all questions, see your final score
6. **Restart** - Click "Restart" to shuffle and start over

## Key Implementation Details

### Shuffling Algorithm
- Uses Fisher-Yates shuffle to randomize question order
- Shuffle happens fresh on every "Start" or "Restart"
- All 77 questions are always included

### State Management
- Uses React hooks (useState/useEffect) for quiz state
- Tracks: current question, selected answers, score, submission status, feedback
- No external state management libraries

### Styling
- Pure CSS modules (no external UI libraries)
- Minimal, clean design with black text on white background
- Hover states for better UX
- Green background for correct answers, red for incorrect

## Questions Statistics

- **Total Questions**: 77
- **Weeks Covered**: 2-11 (some weeks from assignments may not have extractable questions)
- **Multi-Select Questions**: 11
- **Single-Select Questions**: 66

## Data Source

Questions extracted from: `all_weeks_assignment_solutions.pdf`

Extraction process:
1. `extract_questions.py` - PDF text extraction and parsing
2. `parse_questions.py` - Conversion to structured JSON
3. `convert_to_ts.py` - Generation of TypeScript data file

## Notes

- Questions are displayed exactly as they appear in the course material
- No localStorage persistence (scores are not saved between sessions)
- No timer or progress bar (pure focus on answering)
- No animations or visual distractions
- All questions shuffled freshly each session

## Browser Support

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Development

The app is built with:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State**: React Hooks
