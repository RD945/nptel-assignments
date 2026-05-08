import re
import json
from pathlib import Path

p = Path('entrepreneurship_essentials_all_weeks.txt')
text = p.read_text(encoding='utf-8')

sec_pat = re.compile(r"##\s*Week\s+(\d+)", re.IGNORECASE)
matches = list(sec_pat.finditer(text))
sections = {}
if matches:
    for idx, m in enumerate(matches):
        week_num = int(m.group(1))
        start = m.end()
        end = matches[idx+1].start() if idx+1 < len(matches) else len(text)
        sections[week_num] = text[start:end].strip()
else:
    # fallback: treat whole file as week 1
    sections[1] = text.strip()

questions = []
for week, content in sorted(sections.items()):
    # find question blocks
    pattern = re.compile(r"\*\*QUESTION\s+(\d+)\*\*([\s\S]*?)(?=\*\*QUESTION\s+\d+\*\*|$)", re.IGNORECASE)
    for m in pattern.finditer(content):
        qnum = int(m.group(1))
        block = m.group(2).strip()
        # split lines
        lines = block.splitlines()
        # extract question text until an option line starting with a. b. c. or Correct Answer
        qlines = []
        opts = {}
        correct = None
        explanation = ""
        state = 'question'
        for ln in lines:
            ln_strip = ln.strip()
            if re.match(r'^[a-d]\.\s', ln_strip, re.IGNORECASE):
                state = 'options'
                lbl = ln_strip[0].lower()
                txt = ln_strip[2:].strip()
                # accumulate if option continues on next lines
                opts[lbl] = txt
            elif ln_strip.startswith('**Correct Answer:**'):
                state = 'correct'
                ca = ln_strip.replace('**Correct Answer:**','').strip()
                # ca might be like 'a. text' or 'a' or 'a. A, B & C'
                mca = re.match(r'([a-d])\.?', ca.strip(), re.IGNORECASE)
                if mca:
                    correct = [mca.group(1).lower()]
                else:
                    # fallback: try to find letters in ca
                    letters = re.findall(r'([a-d])', ca, re.IGNORECASE)
                    correct = [x.lower() for x in letters]
            elif state == 'question':
                if ln_strip:
                    qlines.append(ln_strip)
            elif state == 'options' and ln_strip and not re.match(r'^[a-d]\.\s', ln_strip, re.IGNORECASE):
                # continuation of previous option
                if opts:
                    last = list(opts.keys())[-1]
                    opts[last] = opts[last] + ' ' + ln_strip
            # ignore other markers
        qtext = ' '.join(qlines).strip()
        # build options list
        options_list = []
        for lbl in sorted(opts.keys()):
            options_list.append({"label": lbl, "text": opts[lbl]})
        qid = f"w{week}q{qnum}"
        questions.append({
            "id": qid,
            "week": week,
            "text": qtext,
            "options": options_list,
            "correctAnswers": correct if correct else [],
            "explanation": explanation,
            "isMultiSelect": False
        })

# prepare metadata
questions_per_week = {}
for q in questions:
    questions_per_week.setdefault(str(q['week']), 0)
    questions_per_week[str(q['week'])] += 1

metadata = {
    "course": "Entrepreneurship Essentials",
    "platform": "NPTEL / Online Certification",
    "total_questions": len(questions),
    "weeks": len(questions_per_week),
    "questions_per_week": questions_per_week,
    "multi_select_count": 0,
    "single_select_count": len(questions),
    "marks_per_question": 1,
    "total_marks": len(questions),
    "week_titles": {k: f"Week {k}" for k in questions_per_week.keys()}
}

out = {"metadata": metadata, "questions": questions}
with open('entrepreneurship_essentials_all_weeks.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=2)

print('Wrote entrepreneurship_essentials_all_weeks.json with', len(questions), 'questions')
