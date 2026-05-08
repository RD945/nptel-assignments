import json
from pathlib import Path

p = Path('entrepreneurship_essentials_all_weeks.json')
if not p.exists():
    print('ERROR: file not found')
    raise SystemExit(1)

data = json.loads(p.read_text(encoding='utf-8'))
errors = []

meta = data.get('metadata', {})
questions = data.get('questions', [])

# Basic checks
if meta.get('total_questions') != len(questions):
    errors.append(f"metadata.total_questions ({meta.get('total_questions')}) != actual ({len(questions)})")

# weeks check
weeks_meta = set(int(k) for k in meta.get('questions_per_week', {}).keys())
weeks_found = set(q.get('week') for q in questions)
if weeks_meta != weeks_found:
    errors.append(f"weeks mismatch: metadata weeks {sorted(weeks_meta)} vs found {sorted(weeks_found)}")

# ids unique
ids = [q.get('id') for q in questions]
dups = set([x for x in ids if ids.count(x) > 1])
if dups:
    errors.append(f"duplicate ids: {sorted(list(dups))}")

# check each question
for q in questions:
    qid = q.get('id')
    if not q.get('text'):
        errors.append(f"{qid}: empty text")
    opts = q.get('options', [])
    labels = [o.get('label') for o in opts]
    expected = [chr(ord('a') + i) for i in range(len(labels))]
    if sorted(labels) != expected:
        errors.append(f"{qid}: options labels {labels}")
    ca = q.get('correctAnswers', [])
    for c in ca:
        if c not in labels:
            errors.append(f"{qid}: correct answer invalid {c}")

# summary
print('Questions:', len(questions))
print('Weeks found:', sorted(list(weeks_found)))
print('Questions per week (computed):')
from collections import Counter
cnt = Counter([q.get('week') for q in questions])
for w in sorted(cnt.keys()):
    print(f'  Week {w}: {cnt[w]}')

if errors:
    print('\nERRORS:')
    for e in errors:
        print('-', e)
    raise SystemExit(2)
else:
    print('\nValidation passed: no errors found')
