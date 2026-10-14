import type { Question } from "@/data/questions";

export const programmingGenerativeAiMetadata = {
  course: "Programming with Generative AI",
  platform: "NPTEL / Online Certification",
  total_questions: 50,
  weeks_covered: [1, 2, 3, 4, 5, 6, 7],
};

const programmingGenerativeAiQuestionData: Question[] = [
  {
    id: "pgai-w1q1",
    week: 1,
    text: "Select all statements that are true about an algorithm from the options below.",
    options: [
      { label: "a", text: "It is a possibly infinite sequence of instructions" },
      { label: "b", text: "Each instruction must be written in Python" },
      { label: "c", text: "Some instructions can be executed more than once" },
      { label: "d", text: "Some instructions can be executed infinitely often" },
    ],
    correctAnswers: ["c"],
    explanation: "An algorithm is a finite sequence of precise instructions. Instructions may be executed more than once (e.g., loops) but not infinitely often — an algorithm must terminate. It is language-agnostic, not restricted to Python.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q2",
    week: 1,
    text: "Which of the following problems are best solved using an algorithm-centric approach?",
    options: [
      { label: "a", text: "Recognize the digits in a hand-written mobile number" },
      { label: "b", text: "Given an integer, determine if it is a mobile number assigned to someone" },
      { label: "c", text: "Given two words, determine if they have the same meaning" },
      { label: "d", text: "Given two sentences, determine if they have the same meaning" },
    ],
    correctAnswers: ["b", "c"],
    explanation: "Checking if an integer is an assigned mobile number is a deterministic lookup/algorithmic task; word-level synonymy can be solved via dictionary lookup. Handwritten digit recognition and sentence-level semantic equivalence are perception/NLP tasks best suited to ML, not pure algorithms.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w1q3",
    week: 1,
    text: "Identify all true statements from the options below:",
    options: [
      { label: "a", text: "Since machine language consists of only 0's and 1's, it is easy to read code in machine language" },
      { label: "b", text: "Since machine language consists of only 0's and 1's, it is easy to write code in machine language" },
      { label: "c", text: "It is difficult for most humans to read assembly language" },
      { label: "d", text: "Code written in a high-level language must be converted to machine language before a computer can understand it" },
    ],
    correctAnswers: ["c", "d"],
    explanation: "Machine language (binary) is hard for humans to read/write. Assembly is also low-level and difficult for most humans. High-level languages must be compiled/interpreted to machine code. Note: the source data listed the assembly-language option twice — deduplicated here.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w1q4",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Generative AI models always write correct code",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["c"],
    explanation: "The statement is false — generative models do not always write correct code.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q5",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Generative AI models always write incorrect code",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["c"],
    explanation: "The statement is false — models do not always write incorrect code; they often produce correct code.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q6",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Training Generative AI models requires significant resources",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["b"],
    explanation: "True statement and it is a reason Against — high training cost/compute is a downside.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q7",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Generative AI models often use publicly available data during training",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["b"],
    explanation: "True — use of public data raises licensing, privacy and IP concerns, so it counts as Against.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q8",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Data used to train generative AI models can include poorly written code",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["b"],
    explanation: "True — training on poor-quality code can cause the model to reproduce bad patterns, a reason Against.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q9",
    week: 1,
    text: "If the following statement is true, indicate whether it is a good reason For or Against using Generative AI to write code. Indicate Incorrect if the statement is false. Statement: Generative AI models can accurately recall their training data",
    options: [
      { label: "a", text: "For" },
      { label: "b", text: "Against" },
      { label: "c", text: "Incorrect" },
    ],
    correctAnswers: ["c"],
    explanation: "The statement is false as phrased (models do not accurately recall training data verbatim in general).",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q10",
    week: 1,
    text: "Your friend performs an experiment in the REPL and observes the following:\n\n>>> (2 / 3) > (2 // 3)\nTrue\n\nSelect all true statements that help explain this observation.",
    options: [
      { label: "a", text: "The / operator has higher precedence than the // operator" },
      { label: "b", text: "The expression (2 / 3) evaluates to a positive float value" },
      { label: "c", text: "The expression (2 / 3) evaluates to a positive int value" },
      { label: "d", text: "The expression (2 / 3) evaluates to the int value 0" },
      { label: "e", text: "The expression (2 // 3) evaluates to a positive float value" },
      { label: "f", text: "The expression (2 // 3) evaluates to a positive int value" },
      { label: "g", text: "The expression (2 // 3) evaluates to the int value 0" },
    ],
    correctAnswers: ["b", "g"],
    explanation: "In Python 3, (2/3) ≈ 0.666… (positive float) and (2//3) == 0 (floor division, int). Hence 0.666… > 0 is True. Precedence is irrelevant here due to parentheses.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w1q11",
    week: 1,
    text: "Which of the following Python expressions will result in an error? Hint: Use a REPL to evaluate these expressions",
    options: [
      { label: "a", text: "(2 // 1) / 2" },
      { label: "b", text: "1 // (2 / 2)" },
      { label: "c", text: "(1 / 2) // 2" },
      { label: "d", text: "2 / (1 // 2)" },
      { label: "e", text: "None of these" },
    ],
    correctAnswers: ["d"],
    explanation: "1//2 == 0, so 2/(1//2) is 2/0 → ZeroDivisionError. The other expressions evaluate without error.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q12",
    week: 1,
    text: "The population of Karnataka is around 7 crore (70 million). How many bits will it take to represent this integer?",
    options: [
      { label: "a", text: "Less than 20" },
      { label: "b", text: "More than 20 but less than 25" },
      { label: "c", text: "25" },
      { label: "d", text: "More than 25 but less than 30" },
      { label: "e", text: "30" },
      { label: "f", text: "More than 30" },
    ],
    correctAnswers: ["d"],
    explanation: "2^26 ≈ 67M and 2^27 ≈ 134M, so 70M needs 27 bits — more than 25 but less than 30 (more precisely, 27 bits).",
    isMultiSelect: false,
  },
  {
    id: "pgai-w1q13",
    week: 1,
    text: "Which of the following are legal strings (str) in Python?",
    options: [
      { label: "a", text: "\"Hello\"" },
      { label: "b", text: "\"Hello'" },
      { label: "c", text: "'With AI's help'" },
      { label: "d", text: "'With AI\\'s help'" },
      { label: "e", text: "\"\"\"With AI's help\"\"\"" },
    ],
    correctAnswers: ["a", "d", "e"],
    explanation: "\"Hello\" is valid; mismatched quotes (\"Hello') and unescaped single quote in 'With AI's help' are syntax errors; escaped quote and triple-quoted string are valid.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w1q14",
    week: 1,
    text: "Identify all expressions that evaluate to True",
    options: [
      { label: "a", text: "ord('A') == ord('a')" },
      { label: "b", text: "ord('A') < ord('a')" },
      { label: "c", text: "ord('A') == ord(\"A\")" },
      { label: "d", text: "ord('7') == 7" },
      { label: "e", text: "(ord('A') - ord('a')) == (ord('B') - ord('b'))" },
    ],
    correctAnswers: ["b", "c", "e"],
    explanation: "ASCII: 'A' is 65, 'a' is 97, so 'A' < 'a' is True; ord(\"A\") equals ord('A'); the difference A-a equals B-b (-32). ord('7') is 55, not 7.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w1q15",
    week: 1,
    text: "Your friend performs an experiment in the REPL and observes the following:\n\n>>> 2 ** 0.5 ** 2 == 2\nFalse\n\nWhich of these modified expressions evaluate to True?",
    options: [
      { label: "a", text: "((2 ** 0.5) ** 2) == 2" },
      { label: "b", text: "(2 ** (0.5 ** 2)) == 2" },
      { label: "c", text: "((2.0 ** 0.5) ** 2.0) == 2.0" },
      { label: "d", text: "None of these" },
    ],
    correctAnswers: ["d"],
    explanation: "2 ** 0.5 ** 2 is 2**(0.5**2) due to right-associativity, but even ((2**0.5)**2) suffers floating-point rounding (≈2.000…0004) so ==2 is False; all == comparisons fail, so None of these is correct.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w2q1",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> n = 7\n>>> m = n - 1\n>>> n = n - 1\n\nAfter performing these three assignments, which of the following expressions will evaluate to True?",
    options: [
      { label: "a", text: "m == n" },
      { label: "b", text: "n == 7" },
      { label: "c", text: "m == n + 1" },
      { label: "d", text: "n == n + 1" },
    ],
    correctAnswers: ["a"],
    explanation: "n=7, m=6, then n=6. So m==n (6==6) is True. n==7 is False, m==n+1 is 6==7 False, n==n+1 is always False.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w2q2",
    week: 2,
    text: "Your friend initializes a variable n with some unknown value and then performs the following experiment in the REPL:\n\n>>> (n / 2) == (n // 2)\nTrue\n\nSelect all values that n can be from the options below.",
    options: [
      { label: "a", text: "-2" },
      { label: "b", text: "-1" },
      { label: "c", text: "0" },
      { label: "d", text: "1" },
      { label: "e", text: "2" },
      { label: "f", text: "None of these" },
    ],
    correctAnswers: ["a", "c", "e"],
    explanation: "n/2 uses true division (float), n//2 uses floor division. They are equal (as Python compares across types) only for even integers: -2, 0, 2. For -1 and 1, n/2 is -0.5/0.5 but n//2 is -1/0, not equal.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w2q3",
    week: 2,
    text: "Your friend initializes a variable n with some unknown value and then performs the following experiment in the REPL:\n\n>>> n + n * n == (n + n) * n\nTrue\n\nSelect all values that n can be from the options below.",
    options: [
      { label: "a", text: "-2" },
      { label: "b", text: "-1" },
      { label: "c", text: "0" },
      { label: "d", text: "1" },
      { label: "e", text: "2" },
      { label: "f", text: "None of these" },
    ],
    correctAnswers: ["c", "d"],
    explanation: "LHS: n + n*n. RHS: (2n)*n = 2n^2. Equality n + n^2 = 2n^2 => n = n^2 => n(n-1)=0 => n=0 or 1.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w2q4",
    week: 2,
    text: "Your friend initializes a variable n with some unknown value and then performs the following experiment in the REPL:\n\n>>> n + n * 2 == (n + n) * 2\nFalse\n\nSelect all values that n can be from the options below.",
    options: [
      { label: "a", text: "0" },
      { label: "b", text: "0.0" },
      { label: "c", text: "0.1" },
      { label: "d", text: "''" },
      { label: "e", text: "'1'" },
      { label: "f", text: "None of these" },
    ],
    correctAnswers: ["c", "e"],
    explanation: "For numbers, 3n == 4n is False except n=0 (True, so excluded). For strings: ''+''*2='' vs (''+'')*2='' equal (excluded). '1'*2='11', so '1'+'11'='111' vs '11'*2='1111' not equal (included). 0.1 also gives inequality. So 0.1 and '1' are the values where == is False.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w2q5",
    week: 2,
    text: "Your friend uses assignment statements to initialize variables x and y with some unknown values and then performs the following experiment in the REPL:\n\n>>> x + y == y + x\nFalse\n\nWhich of these could have been the assignment statements performed by your friend?",
    options: [
      { label: "a", text: "x = 0" },
      { label: "b", text: "x = '0'" },
      { label: "c", text: "x = 0.1" },
      { label: "d", text: "y = 1" },
      { label: "e", text: "y = '1'" },
      { label: "f", text: "y = 0.3" },
    ],
    correctAnswers: ["b", "e"],
    explanation: "x+y == y+x is True for numbers (commutative). It fails only when mixing types that cause string concatenation vs addition type errors or different results. x='0' (str) and y='1' (str) gives '01' vs '10', not equal. Selecting both assignments together produces the observed False.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w2q6",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> Ord('A')\nNameError: name 'Ord' is not defined. Did you mean: 'ord'?\n\nWhat should your friend have typed?",
    options: [
      { label: "a", text: "ord(A)" },
      { label: "b", text: "ord('A')" },
      { label: "c", text: "'ord'(A)" },
      { label: "d", text: "'ord'('A')" },
      { label: "e", text: "ord['A']" },
    ],
    correctAnswers: ["b"],
    explanation: "Python is case-sensitive: built-in is lowercase ord, called with parentheses, argument is the string 'A'.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w2q7",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> radius = input('Radius: ')\nRadius: 0.5\n>>> 2 * radius\n\nWhat will be printed in the REPL?",
    options: [
      { label: "a", text: "An error message" },
      { label: "b", text: "1" },
      { label: "c", text: "1.0" },
      { label: "d", text: "'0.50.5'" },
      { label: "e", text: "None of these" },
    ],
    correctAnswers: ["d"],
    explanation: "input() returns str '0.5'. 2 * '0.5' repeats the string: '0.50.5'.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w2q8",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> ord(max('Zero'))\n114\n\nExplanation: We first evaluate Blank1, which is the value Blank2, and then we evaluate Blank3, which is 114. To complete the above explanation, what are Blank1, Blank2, and Blank3?",
    options: [
      { label: "a", text: "Blank1 is ord('Zero')" },
      { label: "b", text: "Blank1 is ord('Z')" },
      { label: "c", text: "Blank1 is max('Zero')" },
      { label: "d", text: "Blank2 is 114" },
      { label: "e", text: "Blank2 is 'r'" },
      { label: "f", text: "Blank3 is max(114)" },
      { label: "g", text: "Blank3 is max('r')" },
      { label: "h", text: "Blank3 is ord('r')" },
    ],
    correctAnswers: ["c", "e", "h"],
    explanation: "max('Zero') picks the max character by codepoint: 'r' (114 > 'o' 111, 'Z' 90, 'e' 101). Then ord('r') == 114.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w2q9",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> x = input('Do you want to return? ')\nDo you want to return? Yes\n\nInstead of x, which of the following would be the most appropriate variable name?",
    options: [
      { label: "a", text: "return" },
      { label: "b", text: "Return" },
      { label: "c", text: "response" },
      { label: "d", text: "do-you-want-to-return" },
    ],
    correctAnswers: ["c"],
    explanation: "return is a keyword (cannot be variable), do-you-want-to-return is not a valid identifier (hyphens), Return is non-PEP8 and confusing; response is appropriate.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w2q10",
    week: 2,
    text: "Your friend performs the following experiment in the REPL:\n\n>>> x = float(input('Net import value (in lakhs): '))\n66.5\n\nInstead of x, which of the following would be the most appropriate variable name?",
    options: [
      { label: "a", text: "niv" },
      { label: "b", text: "import" },
      { label: "c", text: "netImportValue" },
      { label: "d", text: "net_import_value" },
    ],
    correctAnswers: ["d"],
    explanation: "net_import_value follows Python snake_case (PEP 8). import is a keyword, niv is cryptic, netImportValue is camelCase (not Pythonic for variables).",
    isMultiSelect: false,
  },
  {
    id: "pgai-w3q1",
    week: 3,
    text: "Consider the following Python function:\n\ndef f(x, y, z):\n    return (x + y) == z\n\nSelect all expressions that evaluate to True from the options below.",
    options: [
      { label: "a", text: "f(0, 0, 0.0)" },
      { label: "b", text: "f(1 / 2, 1 / 2, 1)" },
      { label: "c", text: "f(1 // 2, 1 // 2, 1)" },
      { label: "d", text: "f('', '', '')" },
      { label: "e", text: "f(0.1, 2 * 0.1, 0.3)" },
      { label: "f", text: "None of the above" },
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "0+0==0.0 True, 0.5+0.5==1 True, ''+''=='' True, 0//1+0//1=0 !=1 False, 0.1+0.2==0.3 False due to float error.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w3q2",
    week: 3,
    text: "Your friend has written the following function based on this Wikipedia article:\n\ndef f(x: float) -> float:\n    return x / 4.184\n\nThe names f and x are meaningless. Which of the following are the most appropriate names for this function and parameter from the options below?",
    options: [
      { label: "a", text: "The function name should be to_calories" },
      { label: "b", text: "The function name should be to_joules" },
      { label: "c", text: "The function name should be to_kilojoules" },
      { label: "d", text: "The parameter name should be calories" },
      { label: "e", text: "The parameter name should be joules" },
      { label: "f", text: "The parameter name should be kilojoules" },
    ],
    correctAnswers: ["a", "e"],
    explanation: "1 cal = 4.184 J, so x/4.184 converts joules to calories. Function to_calories, param joules.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w3q3",
    week: 3,
    text: "Your friend has written the following function based on this Wikipedia article:\n\ndef f(x: int, y: int) -> float:\n    return x / y ** 2 * 703\n\nWhich of the following are helpful suggestions to give to your friend?",
    options: [
      { label: "a", text: "The expression x / y ** 2 * 703 should be rewritten as (x / (y ** 2)) * 703" },
      { label: "b", text: "The function name should be BMI" },
      { label: "c", text: "The function name should be bodyMassIndex" },
      { label: "d", text: "The function name should be body_mass_index" },
      { label: "e", text: "The parameter x should be renamed mass_kg" },
      { label: "f", text: "The parameter x should be renamed mass_lb" },
      { label: "g", text: "The parameter y should be renamed height_m" },
      { label: "h", text: "The parameter y should be renamed height_in" },
    ],
    correctAnswers: ["a", "d", "f", "h"],
    explanation: "Formula is BMI imperial: mass_lb / height_in^2 * 703. Needs parentheses for clarity, snake_case name, correct unit params.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w3q4",
    week: 3,
    text: "Consider the following Python function:\n\ndef f(x: int, y: int) -> int:\n    if x < y:\n        return y - x\n    elif x == y:\n        return 0\n    else:\n        return x - y\n\nWhich of the following is the most appropriate name for this function?",
    options: [
      { label: "a", text: "abs" },
      { label: "b", text: "gap_between" },
      { label: "c", text: "AbsoluteDifference" },
      { label: "d", text: "num_integers_between" },
      { label: "e", text: "None of these" },
    ],
    correctAnswers: ["b"],
    explanation: "Function returns |x-y| (absolute difference). abs is built-in (shadow), gap_between follows snake_case and is descriptive. AbsoluteDifference is CamelCase.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w3q5",
    week: 3,
    text: "Consider the following Python function description: The function can be rewritten as:\n\ndef f(x: int, y: int) -> bool:\n    # Line 1\n    return EXPRESSION\n\nwhere EXPRESSION is:",
    options: [
      { label: "a", text: "(x % y == 0) or (y == 0)" },
      { label: "b", text: "(x % y == 0) and (y == 0)" },
      { label: "c", text: "(y == 0) and (x % y == 0)" },
      { label: "d", text: "None of these" },
    ],
    correctAnswers: ["d"],
    explanation: "All given boolean expressions have wrong semantics or short-circuit/div-by-zero issues. Correct divisibility check needs y!=0 guard before modulo.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w3q6",
    week: 3,
    text: "Refute this Python function by choosing appropriate values of n, expected_answer, and return_value.",
    options: [
      { label: "a", text: "n = 33" },
      { label: "b", text: "n = -3" },
      { label: "c", text: "n = 0" },
      { label: "d", text: "expected_answer = 0" },
      { label: "e", text: "expected_answer = 1" },
      { label: "f", text: "expected_answer = 2" },
      { label: "g", text: "return_value = 1" },
      { label: "h", text: "return_value = 2" },
      { label: "i", text: "return_value = 3" },
    ],
    correctAnswers: ["b", "e", "h"],
    explanation: "Buggy function mishandles negative n. For n=-3, expected 1 but returns 2, refuting the function.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w3q7",
    week: 3,
    text: "Find the smallest positive integer n that refutes this buggy Python function. Your answer should be only the value of n. For example, if you think the value of n is 3, just enter 3 in box below. Do not enter things like: The answer is 3 n = 3",
    options: [],
    correctAnswers: ["121"],
    explanation: "Brute-force check shows the first counter-example for the buggy perfect-square/prime logic is n=121.",
    isMultiSelect: false,
    kind: "text",
    placeholder: "Enter n, e.g. 121",
  },
  {
    id: "pgai-w3q8",
    week: 3,
    text: "For the smallest positive integer n that refutes this buggy Python function, what are the values of expected_answer, and return_value? Note: Your answer to this question should be based on your answer to the previous question.",
    options: [
      { label: "a", text: "expected_answer = False" },
      { label: "b", text: "expected_answer = True" },
      { label: "c", text: "return_value = False" },
      { label: "d", text: "return_value = True" },
    ],
    correctAnswers: ["a", "d"],
    explanation: "For n=121 the buggy function incorrectly returns True while expected is False. Source correct_answer: expected_answer=False, return_value=True.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w4q1",
    week: 4,
    text: "Suppose you are asked to write the following function:\n\ndef num_primes(a: int, b: int) -> int:\n    \"\"\"Find the number of integers that lie strictly between a and b that are prime.\n    >>> num_primes(1, 2)\n    0\n    >>> num_primes(1, 3)\n    1\"\"\"\n    pass\n\nWhich of the following will be the most useful helper function to define?",
    options: [
      { label: "a", text: "def is_prime(n: int) -> bool:" },
      { label: "b", text: "def closest_prime(n: int) -> int:" },
      { label: "c", text: "def has_next_prime(n: int) -> bool:" },
      { label: "d", text: "None of these" },
    ],
    correctAnswers: ["a"],
    explanation: "Counting primes in an interval is easiest with an is_prime helper to test each integer in (a, b).",
    isMultiSelect: false,
  },
  {
    id: "pgai-w4q2",
    week: 4,
    text: "Your friend has written the following Python function based on the recursive definition of the factorial function given at this Wikipedia link:\n\ndef factorial(n: int) -> int:\n    if n == 0: return 1\n    return n * factorial(n - 1)\n\nSelect all true statements from the options below.",
    options: [
      { label: "a", text: "An else-statement is necessary" },
      { label: "b", text: "The base case is when n <= 0" },
      { label: "c", text: "factorial(1) == 1" },
      { label: "d", text: "Calling factorial(1) results in infinite recursion or an incorrect answer" },
      { label: "e", text: "factorial(-1) == 0" },
      { label: "f", text: "Calling factorial(-1) results in infinite recursion" },
      { label: "g", text: "factorial(factorial(2)) == factorial(2)" },
      { label: "h", text: "Calling factorial(factorial(2)) results in infinite recursion or an incorrect answer" },
    ],
    correctAnswers: ["c", "f", "g"],
    explanation: "factorial(1)=1*1=1 True; factorial(-1) recurses forever (no base for negatives); factorial(2)=2, factorial(2)=2, factorial(factorial(2))=factorial(2)=2 True.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w4q3",
    week: 4,
    text: "Consider the following buggy recursive Python function:\n\ndef is_square(n: int, m: int) -> bool:\n    \"\"\"Check if n is the square of some integer in the set {1, 2, ..., m}.\n    >>> is_square(4, 3)\n    True\n    >>> is_square(9, 2)\n    False\"\"\"\n    if n == (m * m): return True\n    elif m < 1: return False\n    return is_square(n, m - 1)\n\nUse this CodeCheck link to refute the above function where n = 9 and the values of m, expected_answer, and return_value are:",
    options: [
      { label: "a", text: "m = 0" },
      { label: "b", text: "m = 3" },
      { label: "c", text: "m = -3" },
      { label: "d", text: "expected_answer = True" },
      { label: "e", text: "expected_answer = False" },
      { label: "f", text: "return_value = True" },
      { label: "g", text: "return_value = False" },
    ],
    correctAnswers: ["c", "e", "f"],
    explanation: "n=9 is not a square of any integer in an empty/invalid m=-3 range, expected False, but buggy base case ordering returns True for m=-3 when m*m==9.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w4q4",
    week: 4,
    text: "Your friend has written the following function:\n\ndef fix_case(s: str) -> str:\n    # Line 1\n    \"\"\"Make all letters of s other than the first letter lower-case, and make the first letter upper-case.\n    >>> fix_case('india WINS')  # doctest 1\n    'India wins'\n    >>> fix_case('12345')  # doctest 2\n    '12345'\"\"\"\n    s = s.lower()  # Line 2\n    s[0].upper()  # Line 3\n    return s  # Line 4\n\nWhich of these indicates an error in the above code?",
    options: [
      { label: "a", text: "A syntax error on Line 1" },
      { label: "b", text: "A run-time error on Line 2 for doctest 1" },
      { label: "c", text: "A run-time error on Line 2 for doctest 2" },
      { label: "d", text: "A run-time error on Line 3 for doctest 1" },
      { label: "e", text: "A run-time error on Line 3 for doctest 2" },
      { label: "f", text: "The above code fails doctest 1" },
      { label: "g", text: "The above code fails doctest 2" },
    ],
    correctAnswers: ["f"],
    explanation: "s[0].upper() returns a new string but result is discarded; s unchanged, so 'india wins' not 'India wins'. No runtime error; doctest 1 logically fails.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w4q5",
    week: 4,
    text: "Ask the Client: Our client wants us to write a function num_words to count the number of words in a given string. Use this CodeCheck link to clarify which of the following properties the num_words function should satisfy:",
    options: [
      { label: "a", text: "Two words can be separated by one or more ',' (commas)" },
      { label: "b", text: "Two words can be separated by one or more ' ' (spaces)" },
      { label: "c", text: "Two words can be separated by one or more '\\n' (new lines)" },
      { label: "d", text: "Two words can be separated by one or more '\\t' (tabs)" },
      { label: "e", text: "The client wants unique words, ignoring differences between upper-case and lower-case" },
      { label: "f", text: "The client wants unique words, respecting differences between upper-case and lower-case" },
      { label: "g", text: "The client wants all words, including duplicates" },
    ],
    correctAnswers: ["b", "c", "d", "e"],
    explanation: "Per CodeCheck: whitespace (space, newline, tab) separates words; client wants unique words case-insensitively, not comma-separated, not case-sensitive unique, not all duplicates.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w5q1",
    week: 5,
    text: `Your friend has used this CodeCheck link to ask the client clarifying questions before writing the following code:

def first_word(s: str) -> str:
    """Return the first word in sentence s.
    >>> first_word('first word')
    'first'
    >>> first_word('15th August, 1947')
    '15th'
    """
    try:
        s = s.split(' ')
        return s[0]
    except IndexError:
        return ''

On which of the following inputs will the behaviour of your friend's code be different from the behaviour expected by the client?`,
    options: [
      { label: "a", text: "''" },
      { label: "b", text: "'1st word'" },
      { label: "c", text: "'First word'" },
      { label: "d", text: "' firstword'" },
      { label: "e", text: "None of the above" },
    ],
    correctAnswers: ["c", "d"],
    explanation: "The supplied answer key identifies 'First word' and ' firstword' as mismatches. The code preserves the capital F and, for leading spaces, split(' ') produces an empty first item rather than the first word.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w5q2",
    week: 5,
    text: `Use this CodeCheck link to ask the client clarifying questions for this Python function:

def max_positive_int(data: list) -> int:
    """Return the maximum positive integer in data.
    >>> max_positive_int([1, -2, 3])
    3
    >>> max_positive_int('one', 2, 3.14)
    2
    """
    pass

Which implementation (if any) among the options below does the client want?

Hint: Each of the following implementations makes assumptions. You need to:
Recognize these assumptions by reading the code.
Based on these assumptions, identify specific inputs and "ask the client" for the expected behaviour on these inputs using the CodeCheck link above.
Eliminate all implementations below that do not have the desired behaviour.`,
    options: [
      { label: "a", text: "def max_positive_int(data: list) -> int:\n    if data == []: return 0\n    return max(data)" },
      { label: "b", text: "def max_positive_int(data: list) -> int:\n    data = [item for item in data if item > 0]\n    if data == []: return 0\n    return max(data)" },
      { label: "c", text: "def max_positive_int(data: list) -> int:\n    data = [item for item in data if type(item) == int]\n    if data == []: return 0\n    return max(data)" },
      { label: "d", text: "None of these" },
    ],
    correctAnswers: ["d"],
    explanation: "None of the implementations checks both required properties: integer type and positive value. The first performs no filtering, the second can include floats or fail on strings, and the third can return a non-positive integer.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w5q3",
    week: 5,
    text: `Use this CodeCheck link to ask the client clarifying questions for this Python function:

def factors(n: int, data: list) -> list:
    """Find all the factors of n among the numbers in data.
    >>> factors(8, [1, 2, 3])
    [1, 2]
    """
    pass

Which implementation (if any) among the options below does the client want?

Hint: Each of the following implementations makes assumptions. You need to:
Recognize these assumptions by reading the code.
Based on these assumptions, identify specific inputs and "ask the client" for the expected behaviour on these inputs using the CodeCheck link above.
Eliminate all implementations below that do not have the desired behaviour.`,
    options: [
      { label: "a", text: "def factors(n: int, data: list) -> list:\n    return [x for x in data if n % x == 0]" },
      { label: "b", text: "def factors(n: int, data: list) -> list:\n    return [x for x in data if type(x) == int and x != 0 and n % x == 0]" },
      { label: "c", text: "def factors(n: int, data: list) -> list:\n    result = []\n    for x in data:\n        if (type(x) in (int, float)) and x != 0 and n % x == 0:\n            result.append(x)\n    return result" },
      { label: "d", text: "def factors(n: int, data: list) -> list:\n    result = []\n    for x in data:\n        try:\n            if n % x == 0:\n                result.append(x)\n        except:\n            pass\n    return result" },
      { label: "e", text: "None of these" },
    ],
    correctAnswers: ["e"],
    explanation: "The supplied answer key is None of these. The implementations make different assumptions about types, zero, duplicates, and error handling; the example alone does not specify all the client's requirements.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w6q1",
    week: 6,
    text: "Recall that Python's print function typically takes one argument of type str and automatically prints a newline after printing it. The print function can also be called with an additional argument end that specifies what should be printed after the given string. For example print('Hello!', end='') will print the string 'Hello!' without adding a newline. Based on this information alone, which of these could be the signature of the print function?",
    options: [
      { label: "a", text: "def print(text: str, end: str) -> str:" },
      { label: "b", text: "def print(text: str, end: str) -> None:" },
      { label: "c", text: "def print(text: str, end: str='\\n') -> str:" },
      { label: "d", text: "def print(text: str, end: str='\\n') -> None:" },
    ],
    correctAnswers: ["d"],
    explanation: "end must have a default newline so the function can be called with just text. print produces output as a side effect and returns None.",
    isMultiSelect: false,
  },
  {
    id: "pgai-w6q2",
    week: 6,
    text: `The following Python function counts the number of even integers in the given list:

def num_even(data: list[int]) -> int:  # Line 1
    i = 0                           # Line 2
    result = 0                      # Line 3
    while i < len(data):             # Line 4
        if data[i] % 2 == 0:         # Line 5
            result += data[i]       # Line 6
        i += 1                      # Line 7
    return result                   # Line 8

Note: You can also view the code on PythonTutor.
Your friend wants to rewrite this function using a for-loop instead of a while-loop. What changes should your friend make?`,
    options: [
      { label: "a", text: "(Line 2) Delete" },
      { label: "b", text: "(Line 2) Replace with: i = 1" },
      { label: "c", text: "(Line 4) Replace with: for i in len(range(data)):" },
      { label: "d", text: "(Line 4) Replace with: for i in range(len(data) - 1):" },
      { label: "e", text: "(Line 4) Replace with: for i in data:" },
      { label: "f", text: "(Line 6) Replace with: data += i" },
      { label: "g", text: "(Line 6) Replace with: result += i" },
      { label: "h", text: "(Line 7) Delete" },
    ],
    correctAnswers: ["a", "e", "g", "h"],
    explanation: "The supplied key replaces manual indexing with iteration over elements. Note: Line 5 would also need to become if i % 2 == 0. The shown code sums even values rather than counting them; counting would require result += 1.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w6q3",
    week: 6,
    text: `Your friend has written the following Python function to find the number of unique integers in a list:

def num_unique(data: list[int]):           # Line 1
    result = 0                           # Line 2
    i = 0                                # Line 3
    while i < len(data) - 1:              # Line 4
        if data[i] not in data[i + 1:]:   # Line 5
            result += 1                  # Line 6
        i += 1                           # Line 7
    return result                        # Line 8

Note: You can also view the code on PythonTutor.
Identify all true statements from the options below:`,
    options: [
      { label: "a", text: "(Line 1) The return type-hint int should be added" },
      { label: "b", text: "(Line 1) The return type-hint list[int] should be added" },
      { label: "c", text: "When we call num_unique([]), Line 4 is executed once." },
      { label: "d", text: "When we call num_unique([]), Line 4 is never executed." },
      { label: "e", text: "When we call num_unique([7]), Line 5 is executed once." },
      { label: "f", text: "When we call num_unique([7]), Line 5 is never executed." },
      { label: "g", text: "When we call num_unique([7, 8]), Line 6 is executed once." },
      { label: "h", text: "When we call num_unique([7, 8]), Line 6 is executed twice." },
      { label: "i", text: "When we call num_unique([7, 7]), Line 6 is never executed." },
    ],
    correctAnswers: ["a", "c", "f", "g", "i"],
    explanation: "The function returns an integer. Even for an empty list, the while condition on Line 4 is evaluated once. A one-item list never enters the body. For [7, 8], the first 7 is absent from the remaining slice so result is incremented once; for [7, 7], it is present so result is never incremented.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w6q4",
    week: 6,
    text: `Your friend has written the following Python function to sort a list of integers in ascending order:

def sort_ascending(data: list[int]):              # Line 1
    i = 0                                       # Line 2
    while i < len(data) - 1:                     # Line 3
        if data[i] > data[i + 1]:                # Line 4
            data[i], data[i + 1] = data[i + 1], data[i]  # Line 5
        i += 1                                  # Line 6

Suppose all the integers in data are either 0 or 1. Identify the shortest list data that the above function does not sort correctly.`,
    options: [],
    correctAnswers: ["[1, 1, 0]"],
    explanation: "For [1, 1, 0], the first pair is unchanged and the second pair is swapped, leaving [1, 0, 1], which is not sorted. All lists of length at most two are sorted by this single pass.",
    isMultiSelect: false,
    kind: "text",
    textAnswerFormat: "integer-list",
    placeholder: "Enter a list, e.g. [0, 1, 0]",
  },
  {
    id: "pgai-w6q5",
    week: 6,
    text: `Your friend used this CodeCheck link to ask the client certain clarifying questions. Based on these clarifications, your friend wrote the following function:

def next_month(month: str) -> str:
    """Find the month after the given month."""
    next = {
        'january': 'February', 'february': 'March', 'march': 'April',
        'april': 'May', 'may': 'June', 'june': 'July',
        'july': 'August', 'august': 'September', 'september': 'October',
        'october': 'November', 'november': 'December', 'december': 'January'
    }
    month = month.casefold()
    return next[month]

Identify all additional clarifying questions that your friend may have forgotten to ask from the options below.`,
    options: [
      { label: "a", text: "Should I ignore the difference between upper-case and lower-case month names (e.g., 'may' vs. 'MAY')?" },
      { label: "b", text: "Should the return value have the same case as the input (e.g., should 'MAY' return 'JUNE')?" },
      { label: "c", text: "Should I handle short-form month names (e.g., 'Jan' for 'January')?" },
      { label: "d", text: "What should I do with illegal month names (e.g., 'junk')?" },
    ],
    correctAnswers: ["c", "d"],
    explanation: "The supplied key identifies abbreviations and illegal month names as the remaining clarifications. The dictionary only contains full month names; an abbreviation or unknown name raises KeyError.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w7q1",
    week: 7,
    text: `First read this blog post to understand the difference between the isdigit, isnumeric, and isdecimal methods. Now consider the following AI-generated body for the Python function below:

def unique_digits(s: str) -> int:
    """Count the number of unique digits in s.
    >>> unique_digits('15 Aug 1947')
    5
    """
    return len(set(c for c in s if c.isdigit()))  # AI suggestion

Our client wants the function to satisfy the following doctests:
>>> unique_digits('The equation is x ** 2 = y')
1
>>> unique_digits('The equation is x² = y')
0
>>> unique_digits('We had 5 subjects in Class 5')
1
>>> unique_digits('We had 5 subjects in Class V')
1
>>> unique_digits('We had 5 subjects in Class Ⅴ')
2

What change (if any) needs to be made to the AI suggestion to satisfy all doctests?`,
    options: [
      { label: "a", text: "No changes" },
      { label: "b", text: "Replace c.isdigit() with c.isnumeric()" },
      { label: "c", text: "Replace c.isdigit() with c.isdecimal()" },
      { label: "d", text: "Replace c.isdigit() with '0' <= c <= '9'" },
      { label: "e", text: "Replace set with list" },
      { label: "f", text: "Replace set with tuple" },
    ],
    correctAnswers: ["c", "d"],
    explanation: "The supplied key selects isdecimal() and the ASCII digit range; both exclude superscript ². There is an inconsistency in the last doctest: both also exclude Roman numeral Ⅴ and return 1, not 2. isnumeric() includes Ⅴ but also includes ², so none of the listed changes satisfies every doctest as written.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w7q2",
    week: 7,
    text: `Your friend wants this C program to print: x = 0 followed by a new-line.

1: #include ;
2: int main() {
3:     int x;
4:     printf("x = %d/n", x);
5:
6: }

Select all changes that your friend should make to improve this program.`,
    options: [
      { label: "a", text: "(Line 1) Delete ; at the end of the line" },
      { label: "b", text: "(Line 1) Delete line" },
      { label: "c", text: "(Line 1) Modify to: import" },
      { label: "d", text: "(Line 2) Rewrite as: def main() -> int {" },
      { label: "e", text: "(Line 2) Rewrite as: void main() {" },
      { label: "f", text: "(Line 2) Rewrite as: def main(int) {" },
      { label: "g", text: "(Line 3) Rewrite as: x = 0;" },
      { label: "h", text: "(Line 3) Rewrite as: x: int = 0;" },
      { label: "i", text: "(Line 3) Rewrite to declare and initialize x" },
      { label: "j", text: "(Line 4) Rewrite as: printf(\"x = {x}\");" },
      { label: "k", text: "(Line 4) Rewrite as: printf(\"x = %d\\n\");" },
      { label: "l", text: "(Line 4) Rewrite as: printf(\"x = %d\\n\", x);" },
      { label: "m", text: "(Line 5) Add: return;" },
      { label: "n", text: "(Line 5) Add: return 0;" },
      { label: "o", text: "(Line 5): Delete" },
    ],
    correctAnswers: ["a", "i", "l", "n"],
    explanation: "Initialize x with int x = 0;, use the newline escape \\n and pass x for %d, and return 0 from main. The supplied key also removes the semicolon from the include directive. The provided excerpt omits the header name; printf requires #include <stdio.h>.",
    isMultiSelect: true,
  },
  {
    id: "pgai-w7q3",
    week: 7,
    text: `Consider the following Python program:

def num_digits(n: int) -> int:
    if -9 <= n <= 9:
        return 1
    return 1 + num_digits(n // 10)

if __name__ == '__main__':
    n = 4
    print(num_digits(n))

Your friend has tried to translate this program into C (PythonTutor). First fix the warning in this program. (Hint: If you cannot spot the problem, click on Visualize Execution and scroll down to see the warning. If you cannot fix this problem yourself, seek help from PythonTutor's AI Tutor.)

After fixing the C program, identify the largest negative integer n for which the Python program and the C program produce different answers.`,
    options: [],
    correctAnswers: ["-91"],
    explanation: "Python floor division gives -91 // 10 = -10, so the recursive function returns 3. C integer division truncates toward zero, giving -91 / 10 = -9 and a result of 2. Values -90 through -1 give matching digit counts.",
    isMultiSelect: false,
    kind: "text",
    placeholder: "Enter a negative integer",
  },
  {
    id: "pgai-w7q4",
    week: 7,
    text: `Consider the following Python program:

def num_digits(n: int) -> int:
    if n < 0:
        n = -n
    result = 1
    while n >= 10:
        result += 1
        n //= 10
    return result

if __name__ == '__main__':
    n = -100
    print(num_digits(n))

Your friend has tried to translate this program into C (PythonTutor). In PythonTutor, integers in C are represented using 32 bits. You can read about the range of representable C integers here. First fix the error in your friend's program. (Hint: If you cannot spot the error, click on Visualize Execution and see the line that causes the error. If you cannot fix this error yourself, seek help from PythonTutor's AI Tutor.)

After fixing the C program, identify the only integer n that is representable in C for which the Python program and the C program produce different answers.`,
    options: [],
    correctAnswers: ["-2147483648"],
    explanation: "The minimum signed 32-bit integer is -2147483648. Its positive counterpart, 2147483648, is outside that C int range, so negation causes signed overflow (undefined behaviour in C). Python integers can represent that positive value and count its 10 digits.",
    isMultiSelect: false,
    kind: "text",
    placeholder: "Enter an integer",
  },
];

export const programmingGenerativeAiQuestions: Question[] = programmingGenerativeAiQuestionData.map(
  (question) => ({ ...question, textFormat: "programming" })
);
