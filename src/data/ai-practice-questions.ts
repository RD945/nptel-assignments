export interface PracticeQuestionOption {
  label: string;
  text: string;
}

export interface PracticeQuestion {
  id: string;
  text: string;
  options: PracticeQuestionOption[];
  correctAnswers: string[];
  explanation: string | null;
  isMultiSelect: boolean;
}

export const aiPracticeQuestions: PracticeQuestion[] = [
  {
    id: "aiq1",
    text: "Consider two sentences: S1: \"The bank approved the loan.\" S2: \"He sat by the bank of the river.\" Which statement is correct?",
    options: [
      { label: "a", text: "Example of synonymy" },
      { label: "b", text: "Example of polysemy" },
      { label: "c", text: "Example of homonymy" },
      { label: "d", text: "Example of antonymy" }
    ],
    correctAnswers: ["c"],
    explanation: "The same surface form 'bank' has unrelated meanings (financial institution vs river edge), which is homonymy.",
    isMultiSelect: false
  },
  {
    id: "aiq2",
    text: "Which statement about distributional semantics is FALSE?",
    options: [
      { label: "a", text: "Words with similar contexts tend to have similar meanings" },
      { label: "b", text: "It ignores syntactic structure completely" },
      { label: "c", text: "It relies on large corpora" },
      { label: "d", text: "It enables learning embeddings" }
    ],
    correctAnswers: ["b"],
    explanation: "Distributional semantics can use syntactic context patterns; it does not completely ignore syntax.",
    isMultiSelect: false
  },
  {
    id: "aiq3",
    text: "A trigram language model approximates:",
    options: [
      { label: "a", text: "P(wi | wi-1)" },
      { label: "b", text: "P(wi | wi-2, wi-1)" },
      { label: "c", text: "P(wi | all previous words)" },
      { label: "d", text: "P(wi)" }
    ],
    correctAnswers: ["b"],
    explanation: "A trigram predicts each token from the two previous tokens.",
    isMultiSelect: false
  },
  {
    id: "aiq4",
    text: "Which scenario leads to zero probability in a vanilla n-gram model?",
    options: [
      { label: "a", text: "Rare word" },
      { label: "b", text: "Unseen n-gram" },
      { label: "c", text: "Frequent word" },
      { label: "d", text: "High vocabulary" }
    ],
    correctAnswers: ["b"],
    explanation: "If an n-gram is unseen, its count is zero, so the unsmoothed probability becomes zero.",
    isMultiSelect: false
  },
  {
    id: "aiq5",
    text: "Why is Kneser-Ney better than Add-one smoothing?",
    options: [
      { label: "a", text: "It increases counts uniformly" },
      { label: "b", text: "It uses continuation probability" },
      { label: "c", text: "It reduces vocabulary size" },
      { label: "d", text: "It ignores rare words" }
    ],
    correctAnswers: ["b"],
    explanation: "Kneser-Ney uses continuation statistics (number of distinct contexts), which improves probability estimates.",
    isMultiSelect: false
  },
  {
    id: "aiq6",
    text: "Which metric is MOST suitable for comparing language models directly?",
    options: [
      { label: "a", text: "BLEU" },
      { label: "b", text: "Accuracy" },
      { label: "c", text: "Perplexity" },
      { label: "d", text: "F1-score" }
    ],
    correctAnswers: ["c"],
    explanation: "Perplexity is the standard intrinsic metric for next-token predictive quality in language models.",
    isMultiSelect: false
  },
  {
    id: "aiq7",
    text: "If a model assigns probability 1/10000 to a sentence of length 4, perplexity is:",
    options: [
      { label: "a", text: "10" },
      { label: "b", text: "100" },
      { label: "c", text: "10^(1/4)" },
      { label: "d", text: "10000^(1/4)" }
    ],
    correctAnswers: ["d"],
    explanation: "Perplexity = P^(-1/N), so (1/10000)^(-1/4) = 10000^(1/4).",
    isMultiSelect: false
  },
  {
    id: "aiq8",
    text: "Which statement is TRUE if all layers of an MLP are linear?",
    options: [
      { label: "a", text: "Model becomes non-linear" },
      { label: "b", text: "Model collapses to a single linear function" },
      { label: "c", text: "Model overfits always" },
      { label: "d", text: "Model cannot train" }
    ],
    correctAnswers: ["b"],
    explanation: "A composition of linear mappings is still linear.",
    isMultiSelect: false
  },
  {
    id: "aiq9",
    text: "Why does ReLU reduce vanishing gradients?",
    options: [
      { label: "a", text: "Output is bounded" },
      { label: "b", text: "Gradient is constant for positive inputs" },
      { label: "c", text: "It normalizes input" },
      { label: "d", text: "It removes bias" }
    ],
    correctAnswers: ["b"],
    explanation: "For positive activations, ReLU has derivative 1, which helps gradient flow through deep layers.",
    isMultiSelect: false
  },
  {
    id: "aiq10",
    text: "Which regularization technique promotes sparsity?",
    options: [
      { label: "a", text: "L2" },
      { label: "b", text: "Dropout" },
      { label: "c", text: "L1" },
      { label: "d", text: "BatchNorm" }
    ],
    correctAnswers: ["c"],
    explanation: "L1 regularization encourages many weights to become exactly zero.",
    isMultiSelect: false
  },
  {
    id: "aiq11",
    text: "Why are one-hot vectors ineffective for semantic similarity?",
    options: [
      { label: "a", text: "Too small" },
      { label: "b", text: "Orthogonal representation" },
      { label: "c", text: "High memory" },
      { label: "d", text: "Slow computation" }
    ],
    correctAnswers: ["b"],
    explanation: "One-hot vectors are orthogonal and do not encode semantic closeness between words.",
    isMultiSelect: false
  },
  {
    id: "aiq12",
    text: "In Word2Vec Skip-gram:",
    options: [
      { label: "a", text: "Predict center from context" },
      { label: "b", text: "Predict context from center" },
      { label: "c", text: "Predict next word" },
      { label: "d", text: "Predict sentence" }
    ],
    correctAnswers: ["b"],
    explanation: "Skip-gram predicts surrounding context words given a center word.",
    isMultiSelect: false
  },
  {
    id: "aiq13",
    text: "Which property makes subword tokenization useful?",
    options: [
      { label: "a", text: "Reduces dataset size" },
      { label: "b", text: "Handles rare words" },
      { label: "c", text: "Eliminates vocabulary" },
      { label: "d", text: "Removes ambiguity" }
    ],
    correctAnswers: ["b"],
    explanation: "Subword units help represent rare or unseen words by composing them from known pieces.",
    isMultiSelect: false
  },
  {
    id: "aiq14",
    text: "Why do RNNs struggle with long dependencies?",
    options: [
      { label: "a", text: "Too many parameters" },
      { label: "b", text: "Sequential processing" },
      { label: "c", text: "Vanishing gradients" },
      { label: "d", text: "No memory" }
    ],
    correctAnswers: ["c"],
    explanation: "Repeated multiplication through time can shrink gradients, making distant dependencies hard to learn.",
    isMultiSelect: false
  },
  {
    id: "aiq15",
    text: "In LSTM, which component controls memory retention?",
    options: [
      { label: "a", text: "Input gate" },
      { label: "b", text: "Output gate" },
      { label: "c", text: "Forget gate" },
      { label: "d", text: "Activation function" }
    ],
    correctAnswers: ["c"],
    explanation: "The forget gate decides how much of the previous cell state to keep.",
    isMultiSelect: false
  },
  {
    id: "aiq16",
    text: "What is the main limitation of basic Seq2Seq?",
    options: [
      { label: "a", text: "Cannot handle variable length" },
      { label: "b", text: "Fixed-size context bottleneck" },
      { label: "c", text: "No learning" },
      { label: "d", text: "No decoding" }
    ],
    correctAnswers: ["b"],
    explanation: "Compressing all source information into one fixed vector creates an information bottleneck.",
    isMultiSelect: false
  },
  {
    id: "aiq17",
    text: "In attention mechanism, weights are computed using:",
    options: [
      { label: "a", text: "Euclidean distance" },
      { label: "b", text: "Dot product + softmax" },
      { label: "c", text: "Cross entropy" },
      { label: "d", text: "Gradient descent" }
    ],
    correctAnswers: ["b"],
    explanation: "Attention scores are often dot products that are normalized with softmax.",
    isMultiSelect: false
  },
  {
    id: "aiq18",
    text: "Why are Transformers more efficient than RNNs?",
    options: [
      { label: "a", text: "Less parameters" },
      { label: "b", text: "Parallel computation" },
      { label: "c", text: "No training needed" },
      { label: "d", text: "Smaller memory" }
    ],
    correctAnswers: ["b"],
    explanation: "Transformers process tokens in parallel, unlike sequential RNN computation.",
    isMultiSelect: false
  },
  {
    id: "aiq19",
    text: "Why is positional encoding required in Transformers?",
    options: [
      { label: "a", text: "Reduce computation" },
      { label: "b", text: "Capture token order" },
      { label: "c", text: "Normalize data" },
      { label: "d", text: "Improve attention" }
    ],
    correctAnswers: ["b"],
    explanation: "Self-attention alone is permutation-invariant, so positional signals are needed for order.",
    isMultiSelect: false
  },
  {
    id: "aiq20",
    text: "Which model is best suited for classification tasks?",
    options: [
      { label: "a", text: "Decoder-only" },
      { label: "b", text: "Encoder-only" },
      { label: "c", text: "Encoder-decoder" },
      { label: "d", text: "RNN" }
    ],
    correctAnswers: ["b"],
    explanation: "Encoder-only models (for example BERT-style) are commonly used for classification.",
    isMultiSelect: false
  },
  {
    id: "aiq21",
    text: "Which pretraining objective is used in BERT?",
    options: [
      { label: "a", text: "Next-token prediction" },
      { label: "b", text: "Masked language modeling" },
      { label: "c", text: "Reinforcement learning" },
      { label: "d", text: "Contrastive loss" }
    ],
    correctAnswers: ["b"],
    explanation: "BERT is trained with masked language modeling to predict masked tokens from bidirectional context.",
    isMultiSelect: false
  },
  {
    id: "aiq22",
    text: "Which statement about prompting is correct?",
    options: [
      { label: "a", text: "It updates model weights" },
      { label: "b", text: "It changes model architecture" },
      { label: "c", text: "It modifies input only" },
      { label: "d", text: "It retrains model" }
    ],
    correctAnswers: ["c"],
    explanation: "Prompting changes only the input formulation at inference time, not model parameters.",
    isMultiSelect: false
  },
  {
    id: "aiq23",
    text: "Why is KL divergence used in RLHF?",
    options: [
      { label: "a", text: "Increase reward" },
      { label: "b", text: "Control model deviation" },
      { label: "c", text: "Reduce computation" },
      { label: "d", text: "Improve accuracy" }
    ],
    correctAnswers: ["b"],
    explanation: "A KL penalty keeps the updated policy close to the reference model to avoid unstable drift.",
    isMultiSelect: false
  },
  {
    id: "aiq24",
    text: "In TransE, a valid triple satisfies:",
    options: [
      { label: "a", text: "es = er + eo" },
      { label: "b", text: "es + er ≈ eo" },
      { label: "c", text: "es × er = eo" },
      { label: "d", text: "es = eo" }
    ],
    correctAnswers: ["b"],
    explanation: "TransE models relations as translations so subject plus relation is close to object embedding.",
    isMultiSelect: false
  },
  {
    id: "aiq25",
    text: "What does Hits@K measure?",
    options: [
      { label: "a", text: "Accuracy of model" },
      { label: "b", text: "Probability distribution" },
      { label: "c", text: "Top-K correctness rate" },
      { label: "d", text: "Loss function" }
    ],
    correctAnswers: ["c"],
    explanation: "Hits@K measures the fraction of queries where the correct answer appears within the top K predictions.",
    isMultiSelect: false
  },
  {
    id: "aiq26",
    text: "Which statement about perplexity is TRUE?",
    options: [
      { label: "a", text: "It increases when model probability increases" },
      { label: "b", text: "It is independent of sentence length" },
      { label: "c", text: "It is exponential of average negative log probability" },
      { label: "d", text: "It is used only for classification" }
    ],
    correctAnswers: ["c"],
    explanation: "Perplexity is exp of average negative log probability; better models assign higher sequence probability and lower perplexity.",
    isMultiSelect: false
  },
  {
    id: "aiq27",
    text: "Which of the following will MOST likely increase perplexity?",
    options: [
      { label: "a", text: "Increasing training data" },
      { label: "b", text: "Better smoothing" },
      { label: "c", text: "Removing rare words" },
      { label: "d", text: "Assigning lower probability to correct sequence" }
    ],
    correctAnswers: ["d"],
    explanation: "Lower probability assigned to true sequences increases negative log-likelihood and therefore perplexity.",
    isMultiSelect: false
  },
  {
    id: "aiq28",
    text: "In an n-gram model, increasing n leads to:",
    options: [
      { label: "a", text: "Lower sparsity" },
      { label: "b", text: "Better generalization always" },
      { label: "c", text: "Higher sparsity" },
      { label: "d", text: "Lower computational cost" }
    ],
    correctAnswers: ["c"],
    explanation: "Larger context windows create many more possible n-grams, increasing sparsity.",
    isMultiSelect: false
  },
  {
    id: "aiq29",
    text: "Which smoothing technique redistributes probability mass using frequency-of-frequency?",
    options: [
      { label: "a", text: "Add-k" },
      { label: "b", text: "Kneser-Ney" },
      { label: "c", text: "Good-Turing" },
      { label: "d", text: "Laplace" }
    ],
    correctAnswers: ["c"],
    explanation: "Good-Turing uses count-of-counts (frequency of frequency) to re-estimate probabilities.",
    isMultiSelect: false
  },
  {
    id: "aiq30",
    text: "Which scenario best illustrates pragmatic ambiguity?",
    options: [
      { label: "a", text: "I saw her duck" },
      { label: "b", text: "Can you pass the salt? (request vs ability)" },
      { label: "c", text: "bank (river vs finance)" },
      { label: "d", text: "unhappiness" }
    ],
    correctAnswers: ["b"],
    explanation: "Pragmatic ambiguity depends on speaker intent and conversational context rather than just lexical form.",
    isMultiSelect: false
  },
  {
    id: "aiq31",
    text: "In backpropagation, gradients flow:",
    options: [
      { label: "a", text: "Input → Output" },
      { label: "b", text: "Output → Input" },
      { label: "c", text: "Randomly" },
      { label: "d", text: "Only hidden layers" }
    ],
    correctAnswers: ["b"],
    explanation: "Backpropagation applies the chain rule from output layer back toward input.",
    isMultiSelect: false
  },
  {
    id: "aiq32",
    text: "If learning rate is extremely small:",
    options: [
      { label: "a", text: "Divergence" },
      { label: "b", text: "Oscillation" },
      { label: "c", text: "Slow convergence" },
      { label: "d", text: "Overfitting" }
    ],
    correctAnswers: ["c"],
    explanation: "Very small learning rates make optimization updates tiny, so convergence is slow.",
    isMultiSelect: false
  },
  {
    id: "aiq33",
    text: "Which statement about dropout is FALSE?",
    options: [
      { label: "a", text: "Applied during training" },
      { label: "b", text: "Reduces overfitting" },
      { label: "c", text: "Active during inference" },
      { label: "d", text: "Randomly drops neurons" }
    ],
    correctAnswers: ["c"],
    explanation: "Dropout is typically disabled at inference time.",
    isMultiSelect: false
  },
  {
    id: "aiq34",
    text: "Which property is NOT captured by one-hot encoding?",
    options: [
      { label: "a", text: "Identity" },
      { label: "b", text: "Vocabulary size" },
      { label: "c", text: "Semantic similarity" },
      { label: "d", text: "Presence" }
    ],
    correctAnswers: ["c"],
    explanation: "One-hot vectors encode token identity but not semantic relationships.",
    isMultiSelect: false
  },
  {
    id: "aiq35",
    text: "Which statement about CBOW is correct?",
    options: [
      { label: "a", text: "Predicts context from target" },
      { label: "b", text: "Uses sequential memory" },
      { label: "c", text: "Predicts target from context" },
      { label: "d", text: "Uses attention" }
    ],
    correctAnswers: ["c"],
    explanation: "CBOW predicts the center/target word from surrounding context words.",
    isMultiSelect: false
  },
  {
    id: "aiq36",
    text: "Why is BPE preferred over word-level tokenization?",
    options: [
      { label: "a", text: "Faster training" },
      { label: "b", text: "Smaller embedding size" },
      { label: "c", text: "Handles rare words via subwords" },
      { label: "d", text: "Eliminates ambiguity" }
    ],
    correctAnswers: ["c"],
    explanation: "BPE decomposes words into frequent subword units, improving robustness to rare words.",
    isMultiSelect: false
  },
  {
    id: "aiq37",
    text: "Which is a limitation of RNN compared to Transformer?",
    options: [
      { label: "a", text: "Cannot model sequences" },
      { label: "b", text: "Cannot learn" },
      { label: "c", text: "Sequential computation prevents parallelization" },
      { label: "d", text: "Too many parameters" }
    ],
    correctAnswers: ["c"],
    explanation: "RNN timesteps are sequentially dependent, which limits parallel hardware utilization.",
    isMultiSelect: false
  },
  {
    id: "aiq38",
    text: "In attention mechanism, normalization is done using:",
    options: [
      { label: "a", text: "Sigmoid" },
      { label: "b", text: "ReLU" },
      { label: "c", text: "Softmax" },
      { label: "d", text: "Tanh" }
    ],
    correctAnswers: ["c"],
    explanation: "Softmax converts raw attention scores into a normalized probability distribution.",
    isMultiSelect: false
  },
  {
    id: "aiq39",
    text: "Which statement about multi-head attention is TRUE?",
    options: [
      { label: "a", text: "All heads learn identical patterns" },
      { label: "b", text: "Each head captures different relationships" },
      { label: "c", text: "Reduces parameters" },
      { label: "d", text: "Removes need for positional encoding" }
    ],
    correctAnswers: ["b"],
    explanation: "Different heads can specialize in different dependency types or representation subspaces.",
    isMultiSelect: false
  },
  {
    id: "aiq40",
    text: "Why is masking used in decoder self-attention?",
    options: [
      { label: "a", text: "Reduce computation" },
      { label: "b", text: "Prevent attending to future tokens" },
      { label: "c", text: "Normalize inputs" },
      { label: "d", text: "Improve embeddings" }
    ],
    correctAnswers: ["b"],
    explanation: "Causal masking prevents information leakage from future tokens during autoregressive decoding.",
    isMultiSelect: false
  },
  {
    id: "aiq41",
    text: "Which architecture is BEST for text generation?",
    options: [
      { label: "a", text: "Encoder-only" },
      { label: "b", text: "Decoder-only" },
      { label: "c", text: "CNN" },
      { label: "d", text: "Autoencoder" }
    ],
    correctAnswers: ["b"],
    explanation: "Decoder-only architectures are naturally suited for autoregressive next-token generation.",
    isMultiSelect: false
  },
  {
    id: "aiq42",
    text: "Which pretraining task forces understanding of context bidirectionally?",
    options: [
      { label: "a", text: "Next token prediction" },
      { label: "b", text: "Masked language modeling" },
      { label: "c", text: "RLHF" },
      { label: "d", text: "Beam search" }
    ],
    correctAnswers: ["b"],
    explanation: "Masked language modeling uses both left and right context around masked tokens.",
    isMultiSelect: false
  },
  {
    id: "aiq43",
    text: "Which factor most affects prompt sensitivity?",
    options: [
      { label: "a", text: "Model size" },
      { label: "b", text: "Minor wording changes" },
      { label: "c", text: "Training hardware" },
      { label: "d", text: "Vocabulary size" }
    ],
    correctAnswers: ["b"],
    explanation: "Small phrasing changes can shift model behavior, which is the essence of prompt sensitivity.",
    isMultiSelect: false
  },
  {
    id: "aiq44",
    text: "In RLHF, PPO is used because:",
    options: [
      { label: "a", text: "Maximizes likelihood" },
      { label: "b", text: "Keeps policy close to original via KL constraint" },
      { label: "c", text: "Removes reward model" },
      { label: "d", text: "Reduces dataset size" }
    ],
    correctAnswers: ["b"],
    explanation: "PPO provides stable policy updates and commonly includes KL regularization toward a reference policy.",
    isMultiSelect: false
  },
  {
    id: "aiq45",
    text: "Which model can represent asymmetric relations in knowledge graphs?",
    options: [
      { label: "a", text: "DistMult" },
      { label: "b", text: "TransE" },
      { label: "c", text: "ComplEx" },
      { label: "d", text: "Both b and c" }
    ],
    correctAnswers: ["d"],
    explanation: "DistMult is symmetric by design, while TransE and ComplEx can model asymmetric relations.",
    isMultiSelect: false
  }
];
