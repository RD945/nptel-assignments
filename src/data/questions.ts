export interface QuestionOption {
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
  {
    id: "w1q1",
    week: 1,
    text: "Consider the word \"paper\" in the following sentences: She submitted her research paper. He wrapped the gift in paper. The word \"paper\" is an example of:",
    options: [
      { label: "a", text: "Homonymy" },
    { label: "b", text: "Synonymy" },
    { label: "c", text: "Polysemy" },
    { label: "d", text: "Antonymy" }
    ],
    correctAnswers: ["c"],
    explanation: "The word 'paper' has multiple related meanings (research paper vs wrapping material), which is polysemy.",
    isMultiSelect: false
  },
  {
    id: "w1q2",
    week: 1,
    text: "Based on Distributional Semantics, which of the following statements is/are true? (i) The meaning of a word is defined by its relationship to other words. (ii) The meaning of a word does not rely on its surrounding context.",
    options: [
      { label: "a", text: "Both (i) and (ii) are correct" },
    { label: "b", text: "Only (ii) is correct" },
    { label: "c", text: "Only (i) is correct" },
    { label: "d", text: "Neither (i) nor (ii) is correct" }
    ],
    correctAnswers: ["d"],
    explanation: "According to Distributional Semantics, the meanings of words can be derived from their distributional properties in a large corpora of text. It relies on the context in which words appear.",
    isMultiSelect: false
  },
  {
    id: "w1q3",
    week: 1,
    text: "The sentence \"Ravi saw the man with the binoculars.\" is ambiguous because of:",
    options: [
      { label: "a", text: "Lexical ambiguity" },
    { label: "b", text: "Morphological ambiguity" },
    { label: "c", text: "Syntactic ambiguity" },
    { label: "d", text: "Pragmatic ambiguity" }
    ],
    correctAnswers: ["c"],
    explanation: "The prepositional phrase 'with the binoculars' can attach to either Ravi or the man, hence the type of ambiguity is syntactic.",
    isMultiSelect: false
  },
  {
    id: "w1q4",
    week: 1,
    text: "Consider the sentences: Anita met Kavya after work. She was tired. Who does \"she\" most likely refer to?",
    options: [
      { label: "a", text: "Anita" },
    { label: "b", text: "Kavya" },
    { label: "c", text: "Both equally" },
    { label: "d", text: "Cannot be determined" }
    ],
    correctAnswers: ["d"],
    explanation: "It is difficult to resolve whether the pronoun 'she' refers to Anita or Kavya without additional context.",
    isMultiSelect: false
  },
  {
    id: "w1q5",
    week: 1,
    text: "What is the correct morpheme breakdown of the word \"unhappiness\"?",
    options: [
      { label: "a", text: "un + happy + ness" },
    { label: "b", text: "unhappi + ness" },
    { label: "c", text: "un + happi + ness" },
    { label: "d", text: "unhappiness" }
    ],
    correctAnswers: ["a"],
    explanation: "The correct morpheme breakdown is un (prefix) + happy (root) + ness (suffix).",
    isMultiSelect: false
  },
  {
    id: "w1q6",
    week: 1,
    text: "In the sentence: \"The chef cooked pasta for the guests.\" What is the semantic role of \"the guests\"?",
    options: [
      { label: "a", text: "Agent" },
    { label: "b", text: "Patient" },
    { label: "c", text: "Beneficiary" },
    { label: "d", text: "Instrument" }
    ],
    correctAnswers: ["c"],
    explanation: "The guests are the beneficiaries — the ones for whom the action was performed.",
    isMultiSelect: false
  },
  {
    id: "w1q7",
    week: 1,
    text: "Below is a sentence with lexical ambiguity: Rose rose to put rose roes on her rows of roses. How many senses of rose are present in the sentence?",
    options: [
      { label: "a", text: "2" },
    { label: "b", text: "3" },
    { label: "c", text: "1" },
    { label: "d", text: "4" }
    ],
    correctAnswers: ["d"],
    explanation: "Rose has four senses: 1. Proper Noun (a person named Rose), 2. Verb (stood), 3. Adjective (pink-colored describing roes), 4. Noun (flower).",
    isMultiSelect: false
  },
  {
    id: "w1q8",
    week: 1,
    text: "What issues can be observed in the following text? 'On a much-needed #workcation in beautiful Goa. Workin & chillin by d waves!'",
    options: [
      { label: "a", text: "Idioms" },
    { label: "b", text: "Non-standard English" },
    { label: "c", text: "Tricky Entity Names" },
    { label: "d", text: "Neologisms" }
    ],
    correctAnswers: ["b", "d"],
    explanation: "We can observe usage of non-standard English such as 'workin' and 'chillin', and neologisms such as 'workcation' in the text.",
    isMultiSelect: true
  },
  {
    id: "w1q9",
    week: 1,
    text: "Sentence 1: Arjun bought a brand-new laptop. Sentence 2: Arjun owns a laptop. What is the relationship?",
    options: [
      { label: "a", text: "Entailed" },
    { label: "b", text: "Contradicted" },
    { label: "c", text: "Neutral" }
    ],
    correctAnswers: ["a"],
    explanation: "Sentence 1 entails Sentence 2 — if Arjun bought a laptop, he must own one.",
    isMultiSelect: false
  },
  {
    id: "w1q10",
    week: 1,
    text: "Which relation holds between \"engine\" and \"car\"?",
    options: [
      { label: "a", text: "Synonymy" },
    { label: "b", text: "Antonymy" },
    { label: "c", text: "Meronymy" },
    { label: "d", text: "Hyponymy" }
    ],
    correctAnswers: ["c"],
    explanation: "An engine is a part of a car — this is a part-whole (meronymy) relationship.",
    isMultiSelect: false
  },
  {
    id: "w2q1",
    week: 2,
    text: "A language model that conditions each word on the previous three words is equivalent to which Markov model?",
    options: [
      { label: "a", text: "First-order" },
    { label: "b", text: "Second-order" },
    { label: "c", text: "Third-order" },
    { label: "d", text: "Fourth-order" }
    ],
    correctAnswers: ["c"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w2q2",
    week: 2,
    text: "Which smoothing technique leverages the number of unique contexts a word appears in?",
    options: [
      { label: "a", text: "Good-Turing" },
    { label: "b", text: "Add-k" },
    { label: "c", text: "Kneser-Ney" },
    { label: "d", text: "Absolute Discounting" }
    ],
    correctAnswers: ["c"],
    explanation: "Kneser-Ney uses continuation probability which counts the number of unique left contexts.",
    isMultiSelect: false
  },
  {
    id: "w2q3",
    week: 2,
    text: "Using a language model inside a machine translation system to measure BLEU score is an example of:",
    options: [
      { label: "a", text: "Intrinsic evaluation" },
    { label: "b", text: "Extrinsic evaluation" },
    { label: "c", text: "Perplexity evaluation" },
    { label: "d", text: "Likelihood estimation" }
    ],
    correctAnswers: ["b"],
    explanation: "Performance is measured on a downstream task, hence extrinsic evaluation.",
    isMultiSelect: false
  },
  {
    id: "w2q4",
    week: 2,
    text: "For Question 4 to 6, consider corpus: <s> the wizard sees the dragon </s>, <s> the dragon breathes fire </s>, <s> the wizard casts a spell </s>. Assuming a bi-gram language model, calculate the probability of the sentence: <s> the dragon casts fire </s>. Ignore the unigram probability of P(<s>) in your calculation.",
    options: [
      { label: "a", text: "2/37" },
    { label: "b", text: "1/27" },
    { label: "c", text: "0" },
    { label: "d", text: "1/36" }
    ],
    correctAnswers: ["c"],
    explanation: "P(casts|dragon) = P(fire|casts) = 0, so the entire sentence probability = 0.",
    isMultiSelect: false
  },
  {
    id: "w2q5",
    week: 2,
    text: "Using add-one smoothing, compute the probability of the sentence: <s> the dragon casts fire </s>. Assume vocabulary size V includes all unique words (excluding <s>, </s>).",
    options: [
      { label: "a", text: "1/7150" },
    { label: "b", text: "1/35" },
    { label: "c", text: "1/67" },
    { label: "d", text: "1/9900" }
    ],
    correctAnswers: ["a"],
    explanation: "V=9. P(the|<s>)=1/3, P(dragon|the)=3/13, P(casts|dragon)=1/11, P(fire|casts)=1/10, P(</s>|fire)=1/5. Product = 1/7150.",
    isMultiSelect: false
  },
  {
    id: "w2q6",
    week: 2,
    text: "Using the smoothed probability, compute the perplexity of: <s> the dragon casts fire </s> (Exclude <s> and </s> from word count.)",
    options: [
      { label: "a", text: "9000^(1/5)" },
    { label: "b", text: "7150^(1/4)" },
    { label: "c", text: "(1/35)^(1/5)" },
    { label: "d", text: "(1/9900)^(1/4)" }
    ],
    correctAnswers: ["b"],
    explanation: "Sentence length N=4. Perplexity = (1/7150)^(-1/4) = 7150^(1/4).",
    isMultiSelect: false
  },
  {
    id: "w3q1",
    week: 3,
    text: "Which component of a neural network introduces non-linearity into the model?",
    options: [
      { label: "a", text: "Weights" },
    { label: "b", text: "Bias" },
    { label: "c", text: "Activation function" },
    { label: "d", text: "Loss function" }
    ],
    correctAnswers: ["c"],
    explanation: "Activation functions introduce non-linearity, enabling neural networks to learn complex patterns beyond linear relationships.",
    isMultiSelect: false
  },
  {
    id: "w3q2",
    week: 3,
    text: "If all activation functions in an MLP are linear, what will be the effect on the network?",
    options: [
      { label: "a", text: "It becomes equivalent to logistic regression" },
    { label: "b", text: "It becomes equivalent to a single linear transformation" },
    { label: "c", text: "It will not converge" },
    { label: "d", text: "It will overfit" }
    ],
    correctAnswers: ["b"],
    explanation: "A composition of linear functions is still linear, so multiple layers collapse into one linear transformation.",
    isMultiSelect: false
  },
  {
    id: "w3q3",
    week: 3,
    text: "Which activation function is least likely to suffer from vanishing gradients?",
    options: [
      { label: "a", text: "Tanh" },
    { label: "b", text: "Sigmoid" },
    { label: "c", text: "ReLU" }
    ],
    correctAnswers: ["c"],
    explanation: "Its gradient is 1 for positive input and 0 for negative input, so it allows gradients to flow effectively.",
    isMultiSelect: false
  },
  {
    id: "w3q4",
    week: 3,
    text: "What happens to dropout during inference?",
    options: [
      { label: "a", text: "Dropout is applied with higher probability" },
    { label: "b", text: "Dropout is applied with lower probability" },
    { label: "c", text: "Dropout is disabled" },
    { label: "d", text: "Dropout is replaced by L2 regularization" }
    ],
    correctAnswers: ["c"],
    explanation: "Dropout is only used during training.",
    isMultiSelect: false
  },
  {
    id: "w3q5",
    week: 3,
    text: "Why can a single-layer perceptron not solve the XOR problem?",
    options: [
      { label: "a", text: "XOR requires probabilistic outputs" },
    { label: "b", text: "XOR is non-linear and not linearly separable" },
    { label: "c", text: "XOR has more than two classes" },
    { label: "d", text: "XOR requires backpropagation" }
    ],
    correctAnswers: ["b"],
    explanation: "XOR cannot be separated by a single straight line, so it requires at least one hidden layer.",
    isMultiSelect: false
  },
  {
    id: "w3q6",
    week: 3,
    text: "Among the following options, select the statements that are TRUE about backpropagation.",
    options: [
      { label: "a", text: "It updates weights using only forward pass" },
    { label: "b", text: "It is used to randomly update the weights of a neural network" },
    { label: "c", text: "It applies the chain rule from output to input layers" },
    { label: "d", text: "It works only for sigmoid activations" }
    ],
    correctAnswers: ["c"],
    explanation: "Backpropagation efficiently computes gradients by applying the chain rule backward through the network.",
    isMultiSelect: false
  },
  {
    id: "w3q7",
    week: 3,
    text: "Which type of regularization encourages sparsity in the weights?",
    options: [
      { label: "a", text: "L1 regularization" },
    { label: "b", text: "L2 regularization" },
    { label: "c", text: "Dropout" },
    { label: "d", text: "Early stopping" }
    ],
    correctAnswers: ["a"],
    explanation: "L1 regularization encourages sparsity in the weights.",
    isMultiSelect: false
  },
  {
    id: "w3q8",
    week: 3,
    text: "What can one observe during the training of a neural network if the learning rate in gradient descent is set too high?",
    options: [
      { label: "a", text: "Loss decreases smoothly" },
    { label: "b", text: "Loss oscillates or diverges" },
    { label: "c", text: "The loss always stays zero" },
    { label: "d", text: "None of these" }
    ],
    correctAnswers: ["b"],
    explanation: "A too-high learning rate causes the optimizer to overshoot minima, leading to oscillation or divergence.",
    isMultiSelect: false
  },
  {
    id: "w3q9",
    week: 3,
    text: "State the reason for softmax being commonly used in multi-class classification.",
    options: [
      { label: "a", text: "Outputs values in [-1, 1]" },
    { label: "b", text: "Produces probabilities that sum to 1" },
    { label: "c", text: "Avoids overfitting" },
    { label: "d", text: "Eliminates the need for regularization" }
    ],
    correctAnswers: ["b"],
    explanation: "Softmax converts raw scores into a probability distribution that sums to 1.",
    isMultiSelect: false
  },
  {
    id: "w3q10",
    week: 3,
    text: "What is the primary goal of regularization in machine learning?",
    options: [
      { label: "a", text: "To speed up the training process and help in faster convergence" },
    { label: "b", text: "To reduce overfitting and improve generalization" },
    { label: "c", text: "To help increase the model complexity" },
    { label: "d", text: "None of these" }
    ],
    correctAnswers: ["b"],
    explanation: "Regularization reduces overfitting by penalizing complex models, improving generalization to unseen data.",
    isMultiSelect: false
  },
  {
    id: "w4q1",
    week: 4,
    text: "State True or False. The Continuous Bag of Words (CBOW) model predicts the surrounding context words given a center target word.",
    options: [
      { label: "a", text: "True" },
    { label: "b", text: "False" }
    ],
    correctAnswers: ["b"],
    explanation: "CBOW uses a window of surrounding words to predict the target word whereas the Skip-gram model uses a target word to predict surrounding context words.",
    isMultiSelect: false
  },
  {
    id: "w4q2",
    week: 4,
    text: "What is the main drawback of representing words as one-hot vectors?",
    options: [
      { label: "a", text: "They cannot capture semantic similarity between words." },
    { label: "b", text: "They are computationally inefficient." },
    { label: "c", text: "They cannot incorporate word order effectively." },
    { label: "d", text: "They are not robust to unseen words." }
    ],
    correctAnswers: ["a"],
    explanation: "One-hot vectors are orthogonal and do not capture relationships or similarities between words.",
    isMultiSelect: false
  },
  {
    id: "w4q3",
    week: 4,
    text: "A toy corpus has an initial base vocabulary of 6 unique characters: {a, b, c, g, s, t}. If the BPE algorithm performs exactly three merge operations, what will be the final size of the vocabulary?",
    options: [
      { label: "a", text: "6" },
    { label: "b", text: "3" },
    { label: "c", text: "9" },
    { label: "d", text: "10" }
    ],
    correctAnswers: ["c"],
    explanation: "Starting with 6 characters and adding 3 new merged tokens results in a vocabulary size of 9.",
    isMultiSelect: false
  },
  {
    id: "w4q4",
    week: 4,
    text: "Which formula is used by WordPiece to compute the score of a pair of tokens (Token A and Token B) to determine if they should be merged?",
    options: [
      { label: "a", text: "Score = Frequency(A, B) + Frequency(A) + Frequency(B)" },
    { label: "b", text: "Score = Frequency(A, B) / (Frequency(A) x Frequency(B))" },
    { label: "c", text: "Score = Frequency(A, B) x (Frequency(A) + Frequency(B))" },
    { label: "d", text: "Score = (Frequency(A) x Frequency(B)) / Frequency(A, B)" }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w4q5",
    week: 4,
    text: "How does the WordPiece algorithm identify tokens during the tokenization of a new word?",
    options: [
      { label: "a", text: "It applies merge rules successively in the exact order they were learned during training." },
    { label: "b", text: "It identifies the longest subword starting from the beginning of the word that exists in the vocabulary." },
    { label: "c", text: "It uses the Viterbi algorithm to find the most probable sequence of tokens." },
    { label: "d", text: "It randomly splits the word into subwords and calculates the frequency of each." }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w4q6",
    week: 4,
    text: "Which of the following statements are true about subword tokenization?",
    options: [
      { label: "a", text: "Frequently used words should be decomposed into smaller subwords to save space." },
    { label: "b", text: "Rare words should be decomposed into meaningful subwords." },
    { label: "c", text: "It serves as a middle ground between word-based and character-based tokenization." },
    { label: "d", text: "It consists of two components: a token learner to generate a vocabulary and a token segmenter to process raw text." }
    ],
    correctAnswers: ["b", "c", "d"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: true
  },
  {
    id: "w4q7",
    week: 4,
    text: "For tf-idf weighting, if a word t appears in every single document in a collection of size N, what is its idf_t value?",
    options: [
      { label: "a", text: "1" },
    { label: "b", text: "N" },
    { label: "c", text: "log10 N" },
    { label: "d", text: "0" }
    ],
    correctAnswers: ["d"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w4q8",
    week: 4,
    text: "What does the term \"self-supervision\" mean in the context of Word2Vec?",
    options: [
      { label: "a", text: "Using labels provided by human annotators" },
    { label: "b", text: "Automatically generating labels based on the relationship between words and their context" },
    { label: "c", text: "Supervising the training process manually" },
    { label: "d", text: "Employing external datasets for additional supervision" }
    ],
    correctAnswers: ["b"],
    explanation: "Self-supervision in Word2Vec refers to the use of context words as labels to train the model without manual annotations.",
    isMultiSelect: false
  },
  {
    id: "w4q9",
    week: 4,
    text: "What is the key concept underlying Word2Vec?",
    options: [
      { label: "a", text: "Ontological semantics" },
    { label: "b", text: "Decompositional semantics" },
    { label: "c", text: "Distributional semantics" },
    { label: "d", text: "Morphological analysis" }
    ],
    correctAnswers: ["c"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w5q1",
    week: 5,
    text: "State True or False. Increasing the temperature parameter during the decoding process makes the probability distribution sharper, resulting in a more confident and deterministic output.",
    options: [
      { label: "a", text: "True" },
    { label: "b", text: "False" }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w5q2",
    week: 5,
    text: "Given the following encoder and decoder hidden states, compute the attention scores. (Use dot product as the scoring function) Encoder hidden states: h1=[2,1], h2=[0,3], h3=[4,2]. Decoder hidden state: s=[1,2].",
    options: [
      { label: "a", text: "0.015, 0.843, 0.141" },
    { label: "b", text: "0.843, 0.015, 0.141" },
    { label: "c", text: "0.141, 0.843, 0.015" },
    { label: "d", text: "0.016, 0.117, 0.867" }
    ],
    correctAnswers: ["d"],
    explanation: "e1=4, e2=6, e3=8. α1=e^4/(e^4+e^6+e^8)=0.016, α2=e^6/(e^4+e^6+e^8)=0.117, α3=e^8/(e^4+e^6+e^8)=0.867.",
    isMultiSelect: false
  },
  {
    id: "w5q3",
    week: 5,
    text: "What improvement does attention bring to the basic Seq2Seq model?",
    options: [
      { label: "a", text: "Reduces training time" },
    { label: "b", text: "Removes the need for an encoder" },
    { label: "c", text: "Allows access to all encoder states during decoding" },
    { label: "d", text: "Reduces the number of model parameters" }
    ],
    correctAnswers: ["c"],
    explanation: "Attention allows the decoder to access all encoder hidden states at each decoding step.",
    isMultiSelect: false
  },
  {
    id: "w5q4",
    week: 5,
    text: "Which gate in an LSTM is responsible for deciding how much of the cell state to keep?",
    options: [
      { label: "a", text: "Output gate" },
    { label: "b", text: "Input gate" },
    { label: "c", text: "Forget gate" },
    { label: "d", text: "Cell candidate gate" }
    ],
    correctAnswers: ["c"],
    explanation: "The forget gate determines what fraction of the previous cell state should be retained in the current timestep.",
    isMultiSelect: false
  },
  {
    id: "w5q5",
    week: 5,
    text: "What is the benefit of using multiple attention heads in a Transformer model?",
    options: [
      { label: "a", text: "It reduces the number of computations required." },
    { label: "b", text: "It allows attending to multiple parts of the sequence from different representation subspaces." },
    { label: "c", text: "It increases model sparsity." },
    { label: "d", text: "It replaces the need for positional encodings." }
    ],
    correctAnswers: ["b"],
    explanation: "Each head can learn to focus on different types of relationships or dependencies within the input sequence.",
    isMultiSelect: false
  },
  {
    id: "w5q6",
    week: 5,
    text: "Why is masking used in the decoder part of a Transformer during training?",
    options: [
      { label: "a", text: "To prevent gradient explosion" },
    { label: "b", text: "To ensure the model does not attend to future tokens" },
    { label: "c", text: "To avoid overfitting" },
    { label: "d", text: "To normalize attention weights" }
    ],
    correctAnswers: ["b"],
    explanation: "Causal masking ensures the decoder predicts one token at a time by masking out future positions.",
    isMultiSelect: false
  },
  {
    id: "w5q7",
    week: 5,
    text: "Why are RNNs preferred over fixed-window neural models?",
    options: [
      { label: "a", text: "They have a smaller parameter size." },
    { label: "b", text: "They can process sequences of arbitrary length." },
    { label: "c", text: "None of the above." }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w5q8",
    week: 5,
    text: "Which of the following is true about Seq2Seq models? (i) Seq2Seq models are always conditioned on the source sentence. (ii) The encoder compresses the input sequence into a fixed-size vector representation. (iii) Seq2Seq models cannot handle variable-length sequences.",
    options: [
      { label: "a", text: "(i) and (ii)" },
    { label: "b", text: "(ii) only" },
    { label: "c", text: "(iii) only" },
    { label: "d", text: "(i), (ii), and (iii)" }
    ],
    correctAnswers: ["a"],
    explanation: "Seq2Seq models are designed to encode variable-length sequences but compress them into fixed-size vector representations.",
    isMultiSelect: false
  },
  {
    id: "w6q1",
    week: 6,
    text: "State True or False: In Transformers, masking is used only during inference to prevent looking at future tokens.",
    options: [
      { label: "a", text: "True" },
    { label: "b", text: "False" }
    ],
    correctAnswers: ["b"],
    explanation: "Masking is used during both training and inference in autoregressive models to ensure that predictions depend only on past tokens.",
    isMultiSelect: false
  },
  {
    id: "w6q2",
    week: 6,
    text: "In self-attention, which of the following is true?",
    options: [
      { label: "a", text: "Queries and values are always equal" },
    { label: "b", text: "Each token attends only to the previous token" },
    { label: "c", text: "The output of each token is a weighted sum over all values" },
    { label: "d", text: "The key vectors are fixed after initialization" }
    ],
    correctAnswers: ["c"],
    explanation: "In self-attention, the output for each token is a weighted sum over the value vectors of all tokens.",
    isMultiSelect: false
  },
  {
    id: "w6q3",
    week: 6,
    text: "What is the purpose of masked decoding in Transformers?",
    options: [
      { label: "a", text: "Prevents attention lookups into the future" },
    { label: "b", text: "Discards irrelevant tokens from the sequence" },
    { label: "c", text: "Applies dropout to the attention weights" },
    { label: "d", text: "Limits the attention span of the model" }
    ],
    correctAnswers: ["a"],
    explanation: "Please refer to the slides.",
    isMultiSelect: false
  },
  {
    id: "w6q4",
    week: 6,
    text: "For Rotary Position Embedding (RoPE), which of the following statements are true?",
    options: [
      { label: "a", text: "Combines relative and absolute positional information" },
    { label: "b", text: "Applies a multiplicative rotation matrix to encode positions" },
    { label: "c", text: "Eliminates the need for positional encodings" },
    { label: "d", text: "All of the above" }
    ],
    correctAnswers: ["a", "b"],
    explanation: "Please refer to the slides.",
    isMultiSelect: true
  },
  {
    id: "w6q5",
    week: 6,
    text: "Which of the following statements is NOT true?",
    options: [
      { label: "a", text: "Self-attention allows tokens to attend to every other token in the sequence." },
    { label: "b", text: "Multi-head attention increases the overall dimensionality of the transformer model." },
    { label: "c", text: "Relative positional encoding captures the distance between tokens rather than their absolute positions." },
    { label: "d", text: "Positional encoding is necessary because self-attention alone is permutation invariant." }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to the slides.",
    isMultiSelect: false
  },
  {
    id: "w6q6",
    week: 6,
    text: "What is the primary motivation behind using transformers instead of RNNs or LSTMs?",
    options: [
      { label: "a", text: "To improve computational efficiency by avoiding sequential processing" },
    { label: "b", text: "To reduce the need for large datasets" },
    { label: "c", text: "To improve generalization to unseen data" },
    { label: "d", text: "To reduce the number of model parameters" }
    ],
    correctAnswers: ["a"],
    explanation: "Transformers process all tokens in parallel rather than sequentially, making them more computationally efficient.",
    isMultiSelect: false
  },
  {
    id: "w6q7",
    week: 6,
    text: "What is the primary reason for using layer normalization in transformers instead of batch normalization?",
    options: [
      { label: "a", text: "Layer normalization is faster than batch normalization." },
    { label: "b", text: "Batch normalization is not effective for sequence models." },
    { label: "c", text: "Layer normalization reduces overfitting." },
    { label: "d", text: "Batch normalization does not work with positional encodings." }
    ],
    correctAnswers: ["b"],
    explanation: "Batch normalization depends on batch statistics which are unstable for variable-length sequences; layer norm operates per sample.",
    isMultiSelect: false
  },
  {
    id: "w6q8",
    week: 6,
    text: "Fill in the blank: The sinusoidal positional encoding uses sine for even dimensions and ___ for odd dimensions.",
    options: [
      { label: "a", text: "sine" },
    { label: "b", text: "cosine" },
    { label: "c", text: "tangent" },
    { label: "d", text: "None of these" }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w6q9",
    week: 6,
    text: "You are given a self-attention layer with input dimension 2048, using 64 heads. What is the output dimension per head?",
    options: [
      { label: "a", text: "64" },
    { label: "b", text: "128" },
    { label: "c", text: "32" },
    { label: "d", text: "256" }
    ],
    correctAnswers: ["c"],
    explanation: "Each head processes 2048/64 = 32 dimensions.",
    isMultiSelect: false
  },
  {
    id: "w6q10",
    week: 6,
    text: "___________ maps the values of a feature in the range [0,1].",
    options: [
      { label: "a", text: "Standardization" },
    { label: "b", text: "Normalization" },
    { label: "c", text: "Transformation" },
    { label: "d", text: "Scaling" }
    ],
    correctAnswers: ["b"],
    explanation: "Normalization works by mapping all values of a feature to be in the range [0,1].",
    isMultiSelect: false
  },
  {
    id: "w7q1",
    week: 7,
    text: "ELMo and BERT represent two different pre-training strategies for language models. Which of the following statement(s) about these approaches is/are true?",
    options: [
      { label: "a", text: "ELMo uses a bi-directional LSTM to pre-train word representations, while BERT uses a transformer encoder with masked language modeling." },
    { label: "b", text: "ELMo provides context-independent word representations, whereas BERT provides context-dependent representations." },
    { label: "c", text: "Pre-training of both ELMo and BERT involve next token prediction." },
    { label: "d", text: "Both ELMo and BERT produce contextual embeddings usable for downstream tasks." }
    ],
    correctAnswers: ["a", "d"],
    explanation: "(a) True: ELMo uses bidirectional LSTMs, BERT uses Transformer encoder with MLM+NSP. (d) True: Both produce contextual embeddings for downstream tasks. (b) False: ELMo is also context-dependent. (c) False: BERT uses masked LM, not next-token prediction.",
    isMultiSelect: true
  },
  {
    id: "w7q2",
    week: 7,
    text: "Which model family is natively designed for conditional sequence-to-sequence tasks of the form P(y|x) without architectural modification?",
    options: [
      { label: "a", text: "Decoder-only language models" },
    { label: "b", text: "Encoder-only models" },
    { label: "c", text: "Encoder-decoder models" },
    { label: "d", text: "Character-CNN models" }
    ],
    correctAnswers: ["c"],
    explanation: "Encoder-decoder architectures (e.g., T5, BART) are built for seq2seq tasks natively.",
    isMultiSelect: false
  },
  {
    id: "w7q3",
    week: 7,
    text: "Which of the following corruption strategies was/were explored in the pre-training of BART?",
    options: [
      { label: "a", text: "Token masking, i.e., random tokens replaced by mask markers" },
    { label: "b", text: "Token deletion" },
    { label: "c", text: "Sentence permutation" },
    { label: "d", text: "Text infilling, i.e., replacing spans with a single sentinel and tasking decoder to generate the spans." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "BART explored token masking, token deletion, sentence permutation, and text infilling.",
    isMultiSelect: true
  },
  {
    id: "w7q4",
    week: 7,
    text: "What were the major changes introduced in GPT-2 family of models, compared to GPT-1?",
    options: [
      { label: "a", text: "Addition of layer normalization between sub-blocks" },
    { label: "b", text: "Increased vocabulary size" },
    { label: "c", text: "Increased context size" },
    { label: "d", text: "Addition of Rotary Positional Embedding (RoPE)" }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "GPT-2 introduced different layer-norm placement, larger vocabulary (~50k), and larger context window (up to 1024 tokens). RoPE was introduced later.",
    isMultiSelect: true
  },
  {
    id: "w7q5",
    week: 7,
    text: "Which of the following architectures are most suited for the sentiment classification task and the machine translation task, respectively?",
    options: [
      { label: "a", text: "Sentiment Classification: Encoder-Decoder; Machine-Translation: Encoder-only" },
    { label: "b", text: "Sentiment Classification: Decoder-only; Machine-Translation: Encoder-only" },
    { label: "c", text: "Sentiment Classification: Encoder-only; Machine-Translation: Decoder-only" },
    { label: "d", text: "Sentiment Classification: Encoder-only; Machine-Translation: Encoder-Decoder" }
    ],
    correctAnswers: ["d"],
    explanation: "Encoder-only (e.g., BERT) for classification; Encoder-decoder (e.g., BART/T5) for machine translation.",
    isMultiSelect: false
  },
  {
    id: "w7q6",
    week: 7,
    text: "The chain-rule factorization used when training an autoregressive language model for a sentence s={t1,t2,...,tn} leads to the log probability of s being expressed as:",
    options: [
      { label: "a", text: "log P(s) = sum log P(ti) for i=1 to n" },
    { label: "b", text: "log P(s) = log P(t1) + sum log P(t_{i+1}|t1,...,ti) for i=1 to n-1" },
    { label: "c", text: "log P(s) = log P(t1) x product log P(t_{i+1}|t1,...,ti) for i=1 to n-1" },
    { label: "d", text: "log P(s) = product log P(ti) for i=1 to n" }
    ],
    correctAnswers: ["b"],
    explanation: "Please refer to the lecture slides.",
    isMultiSelect: false
  },
  {
    id: "w7q7",
    week: 7,
    text: "Why does ELMo build its input token representations from a character-level CNN instead of fixed word embeddings?",
    options: [
      { label: "a", text: "To reduce training time by sharing parameters" },
    { label: "b", text: "To avoid UNK tokens and generate representations for any string" },
    { label: "c", text: "To compress embeddings to 128 dimensions" },
    { label: "d", text: "To ensure the same vector for a word in every context" }
    ],
    correctAnswers: ["b"],
    explanation: "Character-level CNN allows ELMo to avoid OOV/UNK tokens and capture morphological patterns.",
    isMultiSelect: false
  },
  {
    id: "w7q8",
    week: 7,
    text: "In the ELMo task-specific combination formula, what is the role of the scalar gamma_task?",
    options: [
      { label: "a", text: "It enforces a unit norm on the combined vector." },
    { label: "b", text: "It selects which of forward/backward LSTMs to use." },
    { label: "c", text: "It is an embedding for the task label." },
    { label: "d", text: "It allows the downstream task to scale the overall magnitude of the combined representation." }
    ],
    correctAnswers: ["d"],
    explanation: "The learned scalar gamma allows the downstream task to adjust the overall magnitude of the combined ELMo representation.",
    isMultiSelect: false
  },
  {
    id: "w7q9",
    week: 7,
    text: "Consider two matrices A = [[3,0],[1,-1]] and B = [[-2,8],[7,-7]]. What is the output of numpy.einsum('ij,ji->', A, B)?",
    options: [
      { label: "a", text: "0" },
    { label: "b", text: "9" },
    { label: "c", text: "-9" },
    { label: "d", text: "14" }
    ],
    correctAnswers: ["b"],
    explanation: "numpy.einsum('ij,ji->', A, B) computes the Frobenius inner product between A and B^T: (3*-2) + (0*7) + (1*8) + (-1*-7) = -6+0+8+7 = 9.",
    isMultiSelect: false
  },
  {
    id: "w8q1",
    week: 8,
    text: "Which factors influence the effectiveness of instruction tuning?",
    options: [
      { label: "a", text: "The number of instruction templates used in training." },
    { label: "b", text: "The tokenization algorithm used by the model." },
    { label: "c", text: "The diversity of tasks in the fine-tuning dataset." },
    { label: "d", text: "The order in which tasks are presented during fine-tuning." }
    ],
    correctAnswers: ["a", "c", "d"],
    explanation: "Template variety, task diversity, and task presentation order all influence instruction tuning. Tokenization algorithm is not a primary factor.",
    isMultiSelect: true
  },
  {
    id: "w8q2",
    week: 8,
    text: "What are key challenges of soft prompts in prompt-based learning?",
    options: [
      { label: "a", text: "Forward pass with them is computationally inefficient compared to that with hard prompts." },
    { label: "b", text: "They require additional training, unlike discrete prompts." },
    { label: "c", text: "They cannot be interpreted or used effectively by non-expert users." },
    { label: "d", text: "They require specialized architectures that differ from standard transformers." }
    ],
    correctAnswers: ["b", "c"],
    explanation: "Soft prompts require gradient-based training and are non-interpretable vectors, making them inaccessible to non-experts.",
    isMultiSelect: true
  },
  {
    id: "w8q3",
    week: 8,
    text: "Which statement best describes the impact of fine-tuning versus prompting in LLMs?",
    options: [
      { label: "a", text: "Fine-tuning is always superior to prompting in generalization tasks." },
    { label: "b", text: "Prompting requires gradient updates, while fine-tuning does not." },
    { label: "c", text: "Fine-tuning modifies the model weights permanently, while prompting does not." },
    { label: "d", text: "Prompting performs better on in-domain tasks compared to fine-tuning." }
    ],
    correctAnswers: ["c"],
    explanation: "Fine-tuning permanently updates model weights; prompting does not change the core model parameters.",
    isMultiSelect: false
  },
  {
    id: "w8q4",
    week: 8,
    text: "Which of the following aspects of the model outputs are captured by POSIX?",
    options: [
      { label: "a", text: "Diversity in the responses to intent-preserving prompt variations" },
    { label: "b", text: "Entropy of the distribution of response frequencies" },
    { label: "c", text: "Time required to generate responses for intent-preserving prompt variations" },
    { label: "d", text: "Variance in the log-likelihood of the same response for different input prompt variations" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "POSIX measures response diversity, entropy of response frequencies, and variance in log-likelihood. Inference time is not part of POSIX.",
    isMultiSelect: true
  },
  {
    id: "w8q5",
    week: 8,
    text: "Which key mechanism makes Tree-of-Thought (ToT) prompting more effective than Chain-of-Thought (CoT)?",
    options: [
      { label: "a", text: "ToT uses reinforcement learning for better generalization." },
    { label: "b", text: "ToT allows backtracking to explore multiple reasoning paths." },
    { label: "c", text: "ToT reduces hallucination by using domain-specific heuristics." },
    { label: "d", text: "ToT eliminates the need for manual prompt engineering." }
    ],
    correctAnswers: ["b"],
    explanation: "ToT structures reasoning as a tree, enabling backtracking and exploration of multiple solution paths.",
    isMultiSelect: false
  },
  {
    id: "w8q6",
    week: 8,
    text: "What is a key limitation of measuring accuracy alone when evaluating LLMs?",
    options: [
      { label: "a", text: "Accuracy is always correlated with model size." },
    { label: "b", text: "Accuracy cannot be measured on open-ended tasks." },
    { label: "c", text: "Accuracy is independent of the training dataset size." },
    { label: "d", text: "Accuracy does not account for prompt sensitivity." }
    ],
    correctAnswers: ["d"],
    explanation: "Accuracy metrics do not capture whether model performance is stable across different prompt phrasings.",
    isMultiSelect: false
  },
  {
    id: "w8q7",
    week: 8,
    text: "Why is instruction tuning not sufficient for aligning large language models?",
    options: [
      { label: "a", text: "It does not generalize to unseen tasks." },
    { label: "b", text: "It cannot prevent models from generating undesired responses." },
    { label: "c", text: "It reduces model performance on downstream tasks." },
    { label: "d", text: "It makes models less capable of learning from new data." }
    ],
    correctAnswers: ["b"],
    explanation: "Instruction tuning improves task-following but cannot fully prevent harmful, biased, or factually incorrect outputs without additional alignment techniques like RLHF.",
    isMultiSelect: false
  },
  {
    id: "w8q8",
    week: 8,
    text: "Why is KL divergence minimized in regularized reward maximization?",
    options: [
      { label: "a", text: "To maximize the probability of generating high-reward responses." },
    { label: "b", text: "To make training more computationally efficient." },
    { label: "c", text: "To prevent the amplification of bias in training data." },
    { label: "d", text: "To ensure models do not diverge too far from the reference model." }
    ],
    correctAnswers: ["d"],
    explanation: "Minimizing KL divergence constrains the updated policy to remain close to the reference model, preventing catastrophic deviations.",
    isMultiSelect: false
  },
  {
    id: "w8q9",
    week: 8,
    text: "What is the primary advantage of using the log-derivative trick in REINFORCE?",
    options: [
      { label: "a", text: "Reducing data requirements" },
    { label: "b", text: "Expanding the token vocabulary" },
    { label: "c", text: "Simplifying gradient computation" },
    { label: "d", text: "Improving sampling diversity" }
    ],
    correctAnswers: ["c"],
    explanation: "The log-derivative trick allows computing gradients of an expectation without differentiating a non-differentiable reward function directly.",
    isMultiSelect: false
  },
  {
    id: "w8q10",
    week: 8,
    text: "Which method combines reward maximization and minimizing KL divergence?",
    options: [
      { label: "a", text: "REINFORCE" },
    { label: "b", text: "Monte Carlo Approximation" },
    { label: "c", text: "Proximal Policy Optimization" },
    { label: "d", text: "Constitutional AI" }
    ],
    correctAnswers: ["c"],
    explanation: "PPO maximizes a reward function while explicitly minimizing KL divergence between the updated and old policy.",
    isMultiSelect: false
  },
  {
    id: "w9q1",
    week: 9,
    text: "Which of the following statement best describes why knowledge graphs (KGs) are considered more powerful than a traditional relational knowledge base (KB)?",
    options: [
      { label: "a", text: "KGs require no schema, whereas KBs must have strict schemas." },
    { label: "b", text: "KGs store data only in the form of hypergraphs, eliminating redundancy." },
    { label: "c", text: "KGs allow flexible, graph-based connections and typed edges, enabling richer relationships and inferences compared to KBs." },
    { label: "d", text: "KGs completely replace the need for textual sources by storing all possible facts." }
    ],
    correctAnswers: ["c"],
    explanation: "KGs store entities as nodes with typed edges (relations), allowing richer and more flexible relationships and supporting inference by traversing connections.",
    isMultiSelect: false
  },
  {
    id: "w9q2",
    week: 9,
    text: "Entity alignment and relation alignment are crucial between KGs of different languages. Which of the following factors contribute to effective alignment?",
    options: [
      { label: "a", text: "Aligning relations solely by their lexical similarity, ignoring semantic context" },
    { label: "b", text: "Transliteration or language-based string matching for entity labels" },
    { label: "c", text: "Ensuring all language aliases are represented identically in each KG" },
    { label: "d", text: "Matching neighbours, or connected entities, across different KGs" }
    ],
    correctAnswers: ["b", "d"],
    explanation: "Transliteration/string matching for cross-language labels and matching graph neighbours are key for effective alignment.",
    isMultiSelect: true
  },
  {
    id: "w9q3",
    week: 9,
    text: "In the context of knowledge graph completion (KGC), which statement best describes the role of the scoring function f(s,r,o)?",
    options: [
      { label: "a", text: "It determines whether two entities refer to the same real-world concept." },
    { label: "b", text: "It produces a raw confidence score indicating how plausible a triple (s,r,o) is." },
    { label: "c", text: "It explicitly encodes only the subject's embedding, ignoring the relation and object embeddings." },
    { label: "d", text: "It ensures that every negative triple gets a higher score than any positive triple." }
    ],
    correctAnswers: ["b"],
    explanation: "The scoring function evaluates a triple (s,r,o) to determine how likely it is to be true according to learned embeddings.",
    isMultiSelect: false
  },
  {
    id: "w9q4",
    week: 9,
    text: "One key difference between the differentiable KG approach and the semantic interpretation approach to KGQA is:",
    options: [
      { label: "a", text: "Differentiable KG approaches are fully rule-based, while semantic interpretation is purely neural." },
    { label: "b", text: "Differentiable KG approaches do not require any graph embeddings, relying instead on explicit logical forms." },
    { label: "c", text: "Semantic interpretation is more transparent or interpretable, whereas differentiable KG is end-to-end trainable but less interpretable." },
    { label: "d", text: "Both approaches use logical forms; the primary difference is the type of question they can answer." }
    ],
    correctAnswers: ["c"],
    explanation: "Semantic interpretation builds explicit logical forms (interpretable); differentiable KGQA uses end-to-end neural embeddings (less interpretable).",
    isMultiSelect: false
  },
  {
    id: "w9q5",
    week: 9,
    text: "Considering the differentiable KG approach, which elements are typically learned jointly when training an end-to-end KGQA model?",
    options: [
      { label: "a", text: "The textual question representation (e.g., BERT embeddings)" },
    { label: "b", text: "The graph structure encoding (e.g., GCN or transformer-based graph embeddings)" },
    { label: "c", text: "Predefined logical forms to ensure interpretability" },
    { label: "d", text: "The final answer selection mechanism that identifies which node(s) in the graph satisfy the question" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "End-to-end KGQA jointly learns question representation, graph encoding, and answer selection. Predefined logical forms are characteristic of semantic parsing, not differentiable KGQA.",
    isMultiSelect: true
  },
  {
    id: "w9q6",
    week: 9,
    text: "Uniform negative sampling can have high variance and may require large number of samples. Why is that the case?",
    options: [
      { label: "a", text: "Because the margin-based loss cannot converge without big mini-batches." },
    { label: "b", text: "Because randomly picking negative entities does not guarantee close or challenging negatives, causing unstable training estimates." },
    { label: "c", text: "Because negative sampling must ensure every possible negative triple is covered." },
    { label: "d", text: "Because the number of relations in the KG is too large for small number of samples." }
    ],
    correctAnswers: ["b"],
    explanation: "Random negatives are often too easy, providing limited learning signal and causing high variance in training estimates.",
    isMultiSelect: false
  },
  {
    id: "w9q7",
    week: 9,
    text: "In testing embedding and score quality for KG completion, mean rank and hits@K are typical metrics. What does hits@K specifically measure in this context?",
    options: [
      { label: "a", text: "The percentage of queries for which the correct answer appears in the top-K of the ranked list." },
    { label: "b", text: "The reciprocal of the rank of the correct answer." },
    { label: "c", text: "The probability of the correct answer appearing as the highest scored candidate." },
    { label: "d", text: "The margin of the correct triple score relative to all negative triples." }
    ],
    correctAnswers: ["a"],
    explanation: "Hits@K = percentage of queries for which the correct entity is in the top-K predictions.",
    isMultiSelect: false
  },
  {
    id: "w9q8",
    week: 9,
    text: "In the TransE model, the scoring function for a triple (s,r,o) is f(s,r,o)=||e_s + e_r - e_o||. Which statement best explains what a low value of f(s,r,o) indicates?",
    options: [
      { label: "a", text: "That (s,r,o) is an invalid triple according to the learned embeddings." },
    { label: "b", text: "That e_s and e_o must be orthogonal." },
    { label: "c", text: "That the relation embedding e_r is zero." },
    { label: "d", text: "That (s,r,o) has a high likelihood of being a true fact in the knowledge graph." }
    ],
    correctAnswers: ["d"],
    explanation: "In TransE, s+r ≈ o for valid triples. A small norm ||s+r-o|| means the embeddings line up well, indicating the triple is likely true.",
    isMultiSelect: false
  },
  {
    id: "w9q9",
    week: 9,
    text: "In RotatE, if a relation r is intended to be symmetric, how would that typically manifest in the complex plane?",
    options: [
      { label: "a", text: "The relation embedding e_r must always equal zero." },
    { label: "b", text: "The angle of e_r must be pi/2." },
    { label: "c", text: "The relation embedding e_r is its own inverse (i.e., a 180° rotation when squared)." },
    { label: "d", text: "The magnitude of e_r must be greater than 1." }
    ],
    correctAnswers: ["c"],
    explanation: "For a symmetric relation in RotatE, applying the relation twice yields the original entity: r^2=1. A 180° rotation satisfies this.",
    isMultiSelect: false
  },
  {
    id: "w9q10",
    week: 9,
    text: "Which main advantage do rotation-based models (like RotatE) have over translation-based ones (like TransE) when it comes to complex multi-relational patterns in a KG?",
    options: [
      { label: "a", text: "Rotation-based models cannot model any symmetry or inverse patterns, so they are simpler." },
    { label: "b", text: "Rotation-based models handle a broader set of relation properties (symmetry, anti-symmetry, inverses, composition) more naturally." },
    { label: "c", text: "Rotation-based models have no hyperparameters to tune, unlike TransE." },
    { label: "d", text: "Rotation-based models are guaranteed to yield perfect link prediction." }
    ],
    correctAnswers: ["b"],
    explanation: "RotatE naturally supports symmetric, anti-symmetric, inverse, and compositional relations via rotations in the complex plane.",
    isMultiSelect: false
  },
  {
    id: "w10q1",
    week: 10,
    text: "How do Prefix Tuning and Adapters differ in terms of where they inject new task-specific parameters in the Transformer architecture?",
    options: [
      { label: "a", text: "Prefix Tuning adds new feed-forward networks after every attention block, while Adapters prepend tokens." },
    { label: "b", text: "Both approaches modify only the final output layer but in different ways." },
    { label: "c", text: "Prefix Tuning learns trainable \"prefix\" hidden states at each layer's input, whereas Adapters insert small bottleneck modules inside the Transformer blocks." },
    { label: "d", text: "Both approaches rely entirely on attention masks to inject new task-specific knowledge." }
    ],
    correctAnswers: ["c"],
    explanation: "Prefix Tuning prepends trainable prefix embeddings at each layer; Adapters insert small bottleneck modules inside Transformer blocks.",
    isMultiSelect: false
  },
  {
    id: "w10q2",
    week: 10,
    text: "The Structure-Aware Intrinsic Dimension (SAID) improves over earlier low-rank adaptation approaches by:",
    options: [
      { label: "a", text: "Ignoring the network structure entirely" },
    { label: "b", text: "Learning one scalar per layer for layer-wise scaling" },
    { label: "c", text: "Sharing the same random matrix across all layers" },
    { label: "d", text: "Using adapters within self-attention layers" }
    ],
    correctAnswers: ["b"],
    explanation: "SAID learns a small set of parameters including one scalar per layer to scale or adjust each layer while leveraging network structure.",
    isMultiSelect: false
  },
  {
    id: "w10q3",
    week: 10,
    text: "Which of the following are correct about the extensions of LoRA?",
    options: [
      { label: "a", text: "LongLoRA supports inference on longer sequences using global attention" },
    { label: "b", text: "QLoRA supports low-rank adaptation on 4-bit quantized models" },
    { label: "c", text: "DyLoRA automatically selects the optimal rank during training" },
    { label: "d", text: "LoRA+ introduces gradient clipping to stabilize training" }
    ],
    correctAnswers: ["b", "c"],
    explanation: "QLoRA applies LoRA to 4-bit quantized models. DyLoRA dynamically selects the optimal rank during training.",
    isMultiSelect: true
  },
  {
    id: "w10q4",
    week: 10,
    text: "Which pruning technique specifically removes weights with the smallest absolute values first, potentially followed by retraining to recover accuracy?",
    options: [
      { label: "a", text: "Magnitude Pruning" },
    { label: "b", text: "Structured Pruning" },
    { label: "c", text: "Random Pruning" },
    { label: "d", text: "Knowledge Distillation" }
    ],
    correctAnswers: ["a"],
    explanation: "Magnitude Pruning removes weights with the smallest absolute values. Optionally, retraining recovers lost accuracy.",
    isMultiSelect: false
  },
  {
    id: "w10q5",
    week: 10,
    text: "In Post-Training Quantization (PTQ) for LLMs, why is a calibration dataset used?",
    options: [
      { label: "a", text: "To precompute the entire attention matrix for all tokens." },
    { label: "b", text: "To remove outlier dimensions before applying magnitude-based pruning." },
    { label: "c", text: "To fine-tune the entire model on a small dataset and store the new weights." },
    { label: "d", text: "To estimate scale factors for quantizing weights and activations under representative data conditions." }
    ],
    correctAnswers: ["d"],
    explanation: "The calibration dataset provides representative examples to observe activation distributions and set appropriate quantization scale factors.",
    isMultiSelect: false
  },
  {
    id: "w10q6",
    week: 10,
    text: "Which best summarizes the function of the unembedding matrix W_U?",
    options: [
      { label: "a", text: "It merges the queries and keys for each token before final classification." },
    { label: "b", text: "It converts the final residual vector into vocabulary logits for next-token prediction." },
    { label: "c", text: "It is used for normalizing the QK and OV circuits so that their norms match." },
    { label: "d", text: "It acts as a second attention layer that aggregates multiple heads." }
    ],
    correctAnswers: ["b"],
    explanation: "The unembedding matrix maps the final hidden state to a distribution over the vocabulary for next-token prediction.",
    isMultiSelect: false
  },
  {
    id: "w10q7",
    week: 10,
    text: "Which definition best matches an induction head as discovered in certain Transformer circuits?",
    options: [
      { label: "a", text: "A head that specifically attends to punctuation tokens to determine sentence boundaries" },
    { label: "b", text: "A feed-forward sub-layer specialized for outputting next-token probabilities for out-of-distribution tokens" },
    { label: "c", text: "A head that looks for previous occurrences of a token A, retrieves the token B that followed it last time, and then predicts B again" },
    { label: "d", text: "A masking head that prevents the model from looking ahead at future tokens" }
    ],
    correctAnswers: ["c"],
    explanation: "Induction heads implement the pattern: if token A appeared before, predict the token B that followed it last time.",
    isMultiSelect: false
  },
  {
    id: "w10q8",
    week: 10,
    text: "In mechanistic interpretability, how can we define 'circuit'?",
    options: [
      { label: "a", text: "A data pipeline for collecting training examples in an autoregressive model" },
    { label: "b", text: "A small LSTM module inserted into a Transformer for additional memory" },
    { label: "c", text: "A device external to the neural network used to fine-tune certain parameters after training" },
    { label: "d", text: "A subgraph of the neural network hypothesized to implement a specific function or behaviour" }
    ],
    correctAnswers: ["d"],
    explanation: "A circuit is a subgraph of the neural network — specific components that collectively implement an interpretable function.",
    isMultiSelect: false
  },
  {
    id: "w10q9",
    week: 10,
    text: "Which best describes the role of Double Quantization in QLoRA?",
    options: [
      { label: "a", text: "It quantizes the attention weights twice to achieve 1-bit representations." },
    { label: "b", text: "It reinitializes parts of the model with random bit patterns for improved regularization." },
    { label: "c", text: "It quantizes the quantization constants themselves for additional memory savings." },
    { label: "d", text: "It systematically reverts partial quantized weights back to FP16 whenever performance degrades." }
    ],
    correctAnswers: ["c"],
    explanation: "Double Quantization in QLoRA stores the scaling factors (quantization constants) in lower precision, yielding additional memory compression.",
    isMultiSelect: false
  },
  {
    id: "w10q10",
    week: 10,
    text: "Which of the following are true about sequence-level distillation for LLMs?",
    options: [
      { label: "a", text: "It trains a student model by matching the teacher's sequence outputs (e.g., predicted token sequences) rather than just individual token distributions." },
    { label: "b", text: "It requires storing only the top-1 predictions from the teacher model for each token." },
    { label: "c", text: "It can be combined with word-level distillation to transfer both local and global knowledge." },
    { label: "d", text: "It forces the teacher to produce a chain-of-thought explanation for each example." }
    ],
    correctAnswers: ["a", "c"],
    explanation: "Sequence-level distillation matches full output sequences (not just per-token distributions) and can be combined with word-level distillation.",
    isMultiSelect: true
  },
  {
    id: "w11q1",
    week: 11,
    text: "What is the main modification that SimplE makes to DistMult-like models to handle asymmetric relations?",
    options: [
      { label: "a", text: "Replacing entity embeddings with random fixed vectors" },
    { label: "b", text: "Introducing separate entity embeddings for subject and object roles, along with inverse relations" },
    { label: "c", text: "Restricting the rank of the relation tensor to 1" },
    { label: "d", text: "Using negative sampling for half of the triple set" }
    ],
    correctAnswers: ["b"],
    explanation: "SimplE uses two embeddings per entity (head and tail roles) and learns inverse relation embeddings to handle asymmetric relations.",
    isMultiSelect: false
  },
  {
    id: "w11q2",
    week: 11,
    text: "Which statements correctly characterize the basic DistMult approach for knowledge graph completion?",
    options: [
      { label: "a", text: "Each relation r is parameterized by a full D×D matrix that can capture asymmetric relations." },
    { label: "b", text: "The relation embedding is a diagonal matrix, leading to a multiplicative interaction of entity embeddings." },
    { label: "c", text: "DistMult struggles with non-symmetric relations because score(s,r,o) is inherently symmetric in s and o." },
    { label: "d", text: "DistMult's performance is typically tested only on fully symmetric KGs." }
    ],
    correctAnswers: ["b", "c"],
    explanation: "DistMult uses a diagonal relation matrix (b), which causes symmetric scoring — it struggles with asymmetric relations (c).",
    isMultiSelect: true
  },
  {
    id: "w11q3",
    week: 11,
    text: "Which statements about the ComplEx extension of DistMult are true?",
    options: [
      { label: "a", text: "It uses complex-valued embeddings to better capture asymmetric or anti-symmetric relations." },
    { label: "b", text: "It replaces the multiplication in DistMult with element-wise addition of real-valued vectors." },
    { label: "c", text: "For a perfectly symmetric relation, one could set the imaginary part of the relation embedding to zero." },
    { label: "d", text: "ComplEx requires each entity vector to be unit norm in the complex plane." }
    ],
    correctAnswers: ["a", "c"],
    explanation: "ComplEx uses complex embeddings to capture asymmetry (a). Setting imaginary part to zero makes it behave like symmetric DistMult (c).",
    isMultiSelect: true
  },
  {
    id: "w11q4",
    week: 11,
    text: "Which best describes the main advantage of using a factorized representation (e.g., DistMult, ComplEx) for large KGs?",
    options: [
      { label: "a", text: "It enforces that every relation in the KG be perfectly symmetric." },
    { label: "b", text: "It ensures each entity is stored as a one-hot vector, simplifying nearest-neighbour queries." },
    { label: "c", text: "It collapses the entire KG into a single scalar value." },
    { label: "d", text: "It significantly reduces parameters and enables generalization to unseen triples by capturing low-rank structure." }
    ],
    correctAnswers: ["d"],
    explanation: "Low-rank factorized embeddings drastically reduce parameters and help generalize to unseen triples.",
    isMultiSelect: false
  },
  {
    id: "w11q5",
    week: 11,
    text: "Which statement best describes the reshaping of a 3D KG tensor X ∈ R^(|E|×|R|×|E|) into a matrix factorization problem?",
    options: [
      { label: "a", text: "One axis remains for subject, one axis remains for object, and relations are combined into a single expanded axis." },
    { label: "b", text: "The subject dimension is repeated to match the relation dimension, resulting in a 2D matrix." },
    { label: "c", text: "Each subject–relation pair is collapsed into a single dimension, while objects remain as separate entries." },
    { label: "d", text: "The entire KG is vectorized into a 1D array and then factorized with an SVD approach." }
    ],
    correctAnswers: ["c"],
    explanation: "Subject-relation pairs are collapsed into one dimension and objects remain separate, creating a 2D matrix factorization problem.",
    isMultiSelect: false
  },
  {
    id: "w11q6",
    week: 11,
    text: "Which key property of hierarchical relationships (e.g. is-a, transitivity) motivates the exploration of specialized embedding methods over standard Euclidean KG embeddings?",
    options: [
      { label: "a", text: "Symmetry in the relation (A, is-a, B) implying (B, is-a, A)" },
    { label: "b", text: "Frequent presence of cycles in hierarchical graphs" },
    { label: "c", text: "Transitivity in the form (camel, is-a, mammal) and (mammal, is-a, animal) => (camel, is-a, animal)" },
    { label: "d", text: "The high dimensionality of the entity embeddings" }
    ],
    correctAnswers: ["c"],
    explanation: "Hierarchical is-a relations exhibit transitivity which standard Euclidean embeddings do not naturally capture. Specialized methods like hyperbolic embeddings handle this better.",
    isMultiSelect: false
  },
  {
    id: "w11q7",
    week: 11,
    text: "Which of the following statements correctly describe hyperbolic (Poincaré) embeddings for hierarchical data?",
    options: [
      { label: "a", text: "They map nodes onto a disk (or ball) such that large branching factors can be represented with lower distortion than in Euclidean space." },
    { label: "b", text: "Distance grows slowly near the centre and becomes infinite near the boundary, making it naturally suited for tree-like structures." },
    { label: "c", text: "They require each node to be embedded on the surface of the Poincaré disk of radius 1." },
    { label: "d", text: "They can achieve arbitrarily low distortion embeddings for trees with the same dimension as Euclidean space." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "Poincaré embeddings represent large branching structures compactly (a) and distances blow up near the boundary enabling tree-like depth (b).",
    isMultiSelect: true
  },
  {
    id: "w11q8",
    week: 11,
    text: "Why might a partial-order-based approach (like order embeddings) be beneficial for modelling 'is-a' relationships compared to purely distance-based approaches?",
    options: [
      { label: "a", text: "They explicitly encode the ancestor–descendant relation as a coordinate-wise inequality or containment." },
    { label: "b", text: "They can represent negative correlations (i.e., sibling vs. ancestor) more easily than distance metrics." },
    { label: "c", text: "They inherently guarantee transitive closure of the hierarchy in the learned embedding space." },
    { label: "d", text: "They do not rely on pairwise distances but use a notion of coordinate-wise ordering or interval containment." }
    ],
    correctAnswers: ["a", "d"],
    explanation: "Order embeddings encode is-a as coordinate-wise constraints (a) and use containment/ordering rather than pairwise distances (d).",
    isMultiSelect: true
  },
  {
    id: "w11q9",
    week: 11,
    text: "Which statement about box embeddings in hierarchical modelling is most accurate?",
    options: [
      { label: "a", text: "Each entity or type is assigned a single real-valued vector, ignoring bounding volumes." },
    { label: "b", text: "Containment I_x ⊆ I_y in all dimensions encodes x ≺ y." },
    { label: "c", text: "They rely on spherical distances around a central node to measure tree depth." },
    { label: "d", text: "They cannot be used to represent set intersections or partial overlap." }
    ],
    correctAnswers: ["b"],
    explanation: "Box embeddings assign each concept a box. If box X is contained within box Y on every coordinate dimension, it encodes an is-a relationship.",
    isMultiSelect: false
  },
  {
    id: "w11q10",
    week: 11,
    text: "What is a key challenge with axis-aligned open-cone (order) embeddings for hierarchical KG data?",
    options: [
      { label: "a", text: "They enforce that all sibling categories have identical cone apices, which causes overlap." },
    { label: "b", text: "They require symmetrical relationships for all edges." },
    { label: "c", text: "They do not allow partial orders to be extended to total orders." },
    { label: "d", text: "The volume (measure) of cones is the same regardless of how broad or narrow the cone is, making sub-categories indistinguishable by volume." }
    ],
    correctAnswers: ["d"],
    explanation: "The volume of open cones does not reflect how big or small a category is, making it hard to distinguish sub-categories by volume.",
    isMultiSelect: false
  },
];