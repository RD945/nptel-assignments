#!/usr/bin/env python3
"""Convert questions_2.json (102 questions) to TypeScript format"""

import json

with open('questions_2.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

questions = data['questions']

ts_content = '''export interface QuestionOption {
  label: string;
  text: string;
}

export interface Question {
  id: string;
  week: number;
  text: string;
  options: QuestionOption[];
  correctAnswers: string[];
  explanation: string | null;
  isMultiSelect: boolean;
}

export const questions: Question[] = [
'''

for q in questions:
    text = q['text'].replace('"', '\\"').replace('\n', '\\n')
    explanation = (q.get('explanation') or '').replace('"', '\\"').replace('\n', '\\n')
    
    options_str = ',\n    '.join([
        f'{{ label: "{opt["label"]}", text: "{opt["text"].replace('"', '\\"')}" }}'
        for opt in q['options']
    ])
    
    correct_str = ', '.join([f'"{a}"' for a in q['correctAnswers']])
    
    ts_content += f'''  {{
    id: "{q['id']}",
    week: {q['week']},
    text: "{text}",
    options: [
      {options_str}
    ],
    correctAnswers: [{correct_str}],
    explanation: {f'"{explanation}"' if explanation else 'null'},
    isMultiSelect: {str(q['isMultiSelect']).lower()}
  }},
'''

ts_content += '];'

with open('src/data/questions.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f'✓ Created src/data/questions.ts with {len(questions)} questions')
print(f'  - Multi-select questions: {data["metadata"]["multi_select_count"]}')
print(f'  - Single-select questions: {data["metadata"]["single_select_count"]}')
