export const termDefinitionsContent = `Linguistics and NLP Fundamentals

Homonymy — Two words share the same spelling/pronunciation but have completely unrelated meanings. Example: "bat" (animal) vs. "bat" (cricket bat). NLP models must use context to disambiguate.

Synonymy — Words that share the same or very similar meaning. Example: "happy" and "joyful." Important for semantic similarity tasks.

Polysemy — A single word has multiple closely related meanings. Example: "man" = adult male OR human species. Unlike homonymy, meanings share a common origin.

Antonymy — Words with opposite meanings. Example: "hot" and "cold." Two types: gradable (hot/cold) and complementary (alive/dead).

Distributional Semantics — The idea that words with similar meanings appear in similar contexts ("you shall know a word by the company it keeps"). Basis for word embeddings like Word2Vec.

Corpus / Corpora — A large structured collection of text used for training or evaluating NLP models. Corpora is the plural.

Lexical Ambiguity — Ambiguity arising from a word having multiple meanings (homonymy/polysemy). Example: "I went to the bank" — financial or river bank?

Syntactic Ambiguity — When a sentence has multiple valid parse trees. Example: "I saw the man with the telescope" — who has the telescope?

Morphological Ambiguity — A word form is ambiguous due to morphology. Example: "flies" = plural noun or verb (present tense of "fly").

Pragmatic Ambiguity — Ambiguity arising from context or speaker intent beyond literal meaning. Example: "Can you pass the salt?" is literally a yes/no question but pragmatically a request.

Morpheme — The smallest meaningful unit of language. Example: "unhappy" has three morphemes: "un-", "happy", and zero. Free morphemes stand alone; bound morphemes attach to others.

Semantic Role — The functional role a noun phrase plays with respect to a verb:
Agent: The doer of the action.
Patient: The entity affected by the action.
Beneficiary: The entity that benefits from the action.
Instrument: The tool used for an action.

Neologism — A newly coined word or expression. Example: "selfie", "tweet" as a verb.

Non-standard English — Dialects, slang, or grammatical forms that deviate from formal written English. A challenge for NLP systems trained on formal text.

Entailment — In Natural Language Inference (NLI), sentence A entails B if B must be true whenever A is true.

Contradiction — In NLI, A and B cannot both be true at the same time.

Neutral (NLI context) — A and B are neither entailed nor contradictory; B might or might not be true given A.

Meronymy — A part-whole relationship between words. Example: "wheel" is a meronym of "car." The reverse (car -> wheel) is holonymy.

Hyponymy — A word is a specific type of a more general word. Example: "poodle" is a hyponym of "dog." The general word ("dog") is the hypernym.

Language Models and Probabilistic Concepts

Language Model — A model that assigns probabilities to sequences of words or predicts the next word given previous words.

Markov Model — A probabilistic model that assumes the future state depends only on the current state (the Markov assumption).

First-order Markov Model — The probability of a word depends only on the immediately preceding word (bigram model).

Second-order Markov Model — Word probability depends on the two preceding words (trigram model).

Third-order Markov Model — Word probability depends on the three preceding words (4-gram model).

N-gram Model — A language model that predicts the next word based on the previous N−1 words.

Bigram Model — A specific N-gram where N=2.

Probability Estimation — Computing the probability of a word or sequence from observed counts in a corpus.

Likelihood Estimation — The probability of observed data given model parameters.

Intrinsic Evaluation — Evaluating a model directly on a language modeling metric like perplexity, without using it on a downstream task.

Extrinsic Evaluation — Evaluating a model indirectly via performance on a real downstream task.

BLEU Score — Measures n-gram overlap between model output and reference translations.

Perplexity — A measure of how surprised a language model is by test data.
PP(W) = [product over i=1..N of 1 / P(w_i | w_{i-1})]^(1/N).
Lower perplexity means better model.

Vocabulary — The complete set of unique tokens a model knows.

Token — The basic unit the model processes — word, subword, or character.

Sentence Probability — The probability assigned to an entire sentence, computed as the product of conditional word probabilities.

Smoothing Techniques

These techniques redistribute probability mass to avoid assigning zero probability to unseen n-grams.

Add-one (Laplace) Smoothing — Adds 1 to every n-gram count, including unseen ones.

Add-k Smoothing — A generalization of add-one; adds a fractional constant k < 1 instead of 1.

Good-Turing Smoothing — Estimates counts for unseen n-grams by borrowing probability mass from n-grams seen once.

Kneser-Ney Smoothing — Uses continuation probability — how likely a word is to appear in a new context, not just how often it appears.

Absolute Discounting — Subtracts a fixed amount (discount D, usually around 0.75) from all observed counts and redistributes that mass.

Continuation Probability — Probability based on number of unique contexts a word appears in, not raw frequency.

Neural Networks and Deep Learning

Neural Network — A layered computational model of interconnected neurons.

Weights — Learnable parameters that scale inputs.

Bias — Additional learnable offset before activation.

Activation Function — Non-linear function enabling complex mappings.

Loss Function — Measures prediction error to optimize.

MLP (Multi-Layer Perceptron) — Feedforward neural network with hidden layers.

Linear Transformation — y = Wx + b.

Non-linearity — Required to avoid collapse to a single linear mapping.

Vanishing Gradient — Gradients become tiny in deep or recurrent networks.

Gradient Flow — Backward propagation of learning signal.

Dropout — Randomly zeroes activations during training.

Inference — Using trained model for predictions.

Training — Updating model parameters to reduce loss.

XOR Problem — Not linearly separable by a single-layer perceptron.

Linear Separability — Classes separable by a hyperplane.

Hidden Layer — Intermediate feature-extraction layer.

Backpropagation — Chain-rule-based gradient computation through layers.

Chain Rule — Derivative rule for composed functions.

Gradient Descent — Iterative optimization: theta <- theta - eta * gradient.

Learning Rate (eta) — Step size hyperparameter.

Loss Oscillation — Loss fluctuates, often due to high learning rate.

Divergence — Loss rises instead of falling.

Regularization and Optimization

Regularization — Techniques to reduce overfitting.

L1 Regularization (Lasso) — L + lambda * sum |w_i|. Encourages sparse weights.

L2 Regularization (Ridge) — L + lambda * sum w_i^2. Encourages small but non-zero weights.

Early Stopping — Stop when validation performance stops improving.

Overfitting — Good training performance, poor unseen performance.

Generalization — Performance on unseen data.

Classification and Output Layers

Softmax — Converts logits to a probability distribution summing to 1.

Multi-class Classification — Assign input to one among multiple classes.

Probability Distribution — Outcome probabilities summing to 1.

Word Representations and Tokenization

One-hot Encoding — Sparse identity vectors with no semantic similarity.

Word Embedding — Dense vectors capturing semantic relations.

Word2Vec — Learns embeddings via CBOW or Skip-gram.

CBOW — Predicts target from context.

Skip-gram — Predicts context from target.

Self-supervision — Learning from data-internal signals without manual labels.

Tokenization — Splitting text into processable units.

Subword Tokenization — Uses smaller units to handle rare words.

Character-based Tokenization — Character-level units.

Word-based Tokenization — Word-level units.

Tokenization Algorithms

BPE (Byte Pair Encoding) — Iteratively merges frequent adjacent symbols.

WordPiece — Merges subwords based on corpus likelihood criteria.

Viterbi Algorithm — Dynamic programming for most probable state or segmentation sequence.

Text Processing and IR Concepts

TF-IDF — TF(t,d) * IDF(t), highlights document-specific terms.

IDF — log(N / df(t)), downweights common terms.

Sequence Models

Seq2Seq — Maps one sequence to another via encoder and decoder.

Encoder — Encodes input sequence.

Decoder — Generates output sequence.

Encoder-Decoder Model — Combined architecture for conditional generation.

Hidden State — Internal recurrent representation.

Context Vector — Fixed-size encoded summary in basic seq2seq.

Fixed-size Representation — Bottleneck of vanilla seq2seq.

Variable-length Sequence — Arbitrary-length input or output.

Attention Mechanisms

Attention — Lets decoder focus on relevant encoder outputs per step.

Attention Score — Relevance scalar for each source state.

Dot Product Attention — score(Q,K) = QK^T.

Softmax Normalization — Converts scores to weights.

Attention Weights — Normalized relevance coefficients.

Multi-head Attention — Parallel attention heads over different subspaces.

Attention Heads — Individual specialized attention computations.

Query (Q), Key (K), Value (V) — Output = softmax(QK^T / sqrt(d_k))V.

Self-attention — Q, K, V from same sequence.

Masking — Blocks attention to disallowed positions.

Causal Masking — Prevents access to future tokens in autoregressive decoding.

RNN and Variants

RNN — Sequential model with recurrent hidden state.

LSTM — Gated RNN variant for long dependencies.

Forget Gate — Controls retention from prior cell state.

Input Gate — Controls writing new information.

Output Gate — Controls exposed hidden output.

Cell State — Long-term memory pathway.

Transformers

Transformer — Attention-only architecture without recurrence.

Transformer Encoder — Bidirectional self-attention stack.

Transformer Decoder — Autoregressive stack with causal masking.

Positional Encoding — Injects token order information.

Sinusoidal Encoding — Sine and cosine frequency-based positional scheme.

RoPE — Rotary positional embedding for relative-position effects in attention.

Relative Positional Encoding — Encodes token distance relationships.

Permutation Invariance — Attention without positional info is order-agnostic.

Layer Normalization — Per-sample feature normalization.

Batch Normalization — Batch-wise normalization.

Advanced LLM Architectures

ELMo — Contextual embeddings from bidirectional LSTM language models.

BERT — Encoder-only transformer with MLM pretraining.

GPT — Decoder-only autoregressive transformer.

GPT-2 — Larger GPT variant with improved generation coherence.

BART — Denoising encoder-decoder transformer.

T5 — Text-to-text encoder-decoder framework.

Encoder-only Model — Best for understanding and classification.

Decoder-only Model — Best for generation.

Encoder-decoder Model — Best for sequence-to-sequence tasks.

Masked Language Modeling — Predict masked tokens.

Next Sentence Prediction — Predict whether sentence B follows sentence A.

Autoregressive Model — Predict next token from previous tokens.

Bidirectional LSTM — Context from both forward and backward passes.

Contextual Embeddings — Word vectors vary by surrounding context.

Pretraining and Fine-tuning

Pre-training — Large-scale unsupervised language learning.

Fine-tuning — Task-specific adaptation on labeled data.

Instruction Tuning — Fine-tuning on instruction-response pairs.

Prompting — Steering behavior through input design only.

Hard Prompt — Discrete text prompt.

Soft Prompt — Learned continuous vectors prepended to input.

Prompt Engineering — Crafting prompts for target behavior.

Prompting Techniques

Chain-of-Thought — Explicit intermediate reasoning.

Tree-of-Thought — Branching multi-path reasoning search.

Prompt Sensitivity — Output variability due to small prompt phrasing changes.

Evaluation and Metrics

Accuracy — Correct predictions over total predictions.

Entropy — H(X) = -sum p(x) log p(x). Measures uncertainty.

Log-likelihood — Log probability of observed data under model.

Variance — Spread in predictions; high variance often indicates overfitting.

POSIX (evaluation context) — Position-based structured prediction metric.

Reinforcement Learning and Alignment

RLHF — Reinforcement Learning from Human Feedback.

Reward Maximization — Optimize expected cumulative reward.

KL Divergence — Measures distribution difference; used to constrain policy drift.

Policy — Mapping from context/state to action/token distribution.

REINFORCE — Policy-gradient algorithm.

Log-derivative Trick — Gradient identity for stochastic policy optimization.

PPO — Stable clipped policy optimization, used in RLHF.

Monte Carlo Approximation — Estimate expectations by sample averaging.

Knowledge Graphs

Knowledge Graph — Entity-relation graph representation.

Knowledge Base — General structured knowledge repository class.

Node — Entity vertex.

Edge — Relation connection.

Relation — Type label of an edge.

Entity — Real-world object/concept node.

Triple (s, r, o) — Subject-relation-object fact.

Entity Alignment — Match equivalent entities across KGs.

Relation Alignment — Match equivalent relation types across KGs.

Knowledge Graph Completion — Predict missing triples.

Scoring Function — Plausibility scoring for triples.

Embedding — Dense vector representation.

KG Embedding Models

TransE — Translation model, s + r approximately equals o.

RotatE — Complex-space rotation relation modeling.

DistMult — Diagonal bilinear model, symmetric bias.

ComplEx — Complex-valued extension for asymmetry.

SimplE — Separate role embeddings with improved expressiveness.

Graph Concepts

Graph Embedding — Low-dimensional representation of graph structure.

GCN — Graph neural network aggregating neighborhood information.

Typed Edges — Relation-labeled edges.

Hypergraph — Edges may connect more than two nodes.

KG Evaluation Metrics

Mean Rank — Average rank of correct entity, lower is better.

Hits@K — Fraction where correct entity is in top-K.

Mean Reciprocal Rank — Average inverse rank, higher is better.

Training Techniques

Negative Sampling — Generate false triples for discriminative training.

Uniform Negative Sampling — Randomly replace subject/object.

Margin-based Loss — max(0, gamma - f(pos) + f(neg)).

Mini-batch — Train on small random subsets each step.

Model Optimization and Efficiency

Quantization — Lower precision for memory and speed improvements.

Post-Training Quantization — Quantize model after training.

Calibration Dataset — Small representative set to tune quantization scales.

Scale Factor — Maps full-precision values to quantized values.

Double Quantization — Quantize quantization constants themselves.

FP16 — Half-precision floating point.

4-bit Quantization — Very low precision for high compression.

Parameter-efficient Fine-tuning

LoRA — Low-rank adaptation with frozen base weights.

QLoRA — LoRA applied on quantized base models.

DyLoRA — Dynamic-rank LoRA.

Prefix Tuning — Trainable prefix vectors in attention states.

Adapters — Small trainable modules inserted between transformer blocks.

SAID — Structure-aware intrinsic-dimension guided adaptation.

Model Compression

Pruning — Remove parameters for smaller/faster models.

Magnitude Pruning — Remove small-magnitude weights.

Structured Pruning — Remove full neurons/heads/layers.

Random Pruning — Random-removal baseline.

Knowledge Distillation — Student model learns from teacher outputs.

Sequence-level Distillation — Distill from teacher-generated sequences.

Mechanistic Interpretability

Circuit — Subgraph implementing a specific behavior.

Induction Head — Attention head that copies repeated continuation patterns.

Attention Head Pattern — Specialized per-head attention behavior.

Mathematical and Tensor Operations

Einstein Summation (einsum) — Compact index notation for tensor operations.

Frobenius Inner Product — Sum of element-wise products of matrices.

Tensor Multiplication — Generalized multiplication over higher-order tensors.`;

export const lectureNotesContent = `Lecture Notes for Weeks 1 to 11

Week 1: NLP foundations, language, meaning, and ambiguity

Natural Language Processing begins with the idea that text is not just a sequence of words, but a structured signal carrying form, meaning, and context. A language model assigns a probability to a sequence of tokens, where a token may be a word, character, or subword. A corpus is the text collection you study; a vocabulary is the set of unique token types extracted from it. In the course material, this is introduced as the starting point for thinking about why some sentences are fluent and meaningful while others are rare, awkward, or impossible. The lecture notes emphasize that a language model should prefer grammatical and semantically plausible sequences over nonsensical ones.

A major early topic is meaning. Distributional semantics says that words with similar meanings appear in similar contexts and that words get meaning from usage context. You should know the difference between homonymy, polysemy, synonymy, and antonymy. Homonymy means the same word form has unrelated meanings; polysemy means related senses share one form; synonymy means different forms have similar meaning; antonymy means opposite meaning. The course also touches lexical ambiguity, syntactic ambiguity, morphological ambiguity, and pragmatic ambiguity.

Morphology and semantic roles are also essential. A morpheme is the smallest meaningful unit of language. For example, unhappy can be broken into un + happy + derivational ending. Semantic roles tell the function of each participant in an event: agent, patient, beneficiary, and instrument. Relations between words matter too: meronymy is part-whole relation, and hyponymy captures specific-to-general class relations.

Coreference is another basic notion: pronouns may refer back to earlier entities but may be underspecified without more context. The notes also show how non-standard English, abbreviations, and newly coined forms are part of real text and must be handled by NLP systems.

Week 2: Statistical language models, n-grams, smoothing, and evaluation

Statistical language models estimate sequence probability using the chain rule:
P(x1, x2, ..., xL) = P(x1) P(x2|x1) P(x3|x1,x2) ... P(xL|x1,...,xL-1).

The n-gram assumption limits context to previous n−1 tokens. A bigram model uses one previous token, trigram uses two. Longer context is more expressive but increases data sparsity.

Smoothing fixes zero-probability problems. Unseen n-grams get zero probability without smoothing. Add-one adds 1 to counts, add-k generalizes with fractional k. Kneser-Ney uses continuation information and is often stronger than simple count-based smoothing.

Evaluation is both intrinsic and extrinsic. Intrinsic uses perplexity and likelihood, while extrinsic measures downstream impact (for example translation BLEU).

Week 3: Deep learning basics for NLP

Deep learning introduces hierarchical function composition. A neuron applies linear transformation followed by non-linear activation. Without non-linearity, deep stacks collapse to a single linear map. ReLU helps reduce vanishing-gradient issues relative to saturating activations in many settings.

Backpropagation computes gradients efficiently using chain rule. Gradient descent updates parameters in negative-gradient direction. Learning rate controls step size; too high can oscillate/diverge, too low can slow convergence.

Regularization prevents overfitting. L1 encourages sparse weights. L2 shrinks weights smoothly. Dropout randomly disables units during training and is turned off during inference. Softmax converts logits to class probabilities.

Week 4: Word representations and tokenization

One-hot vectors represent identity but do not encode semantic similarity. Dense word embeddings address this limitation. Word2Vec uses self-supervision through context prediction objectives: CBOW predicts target from context, and Skip-gram predicts context from target.

GloVe uses global co-occurrence statistics. TF-IDF is a sparse weighting baseline where IDF downweights frequent corpus-wide terms.

Tokenization is a core design decision. Word-level tokenization has large vocab and OOV issues. Character-level avoids OOV but yields long sequences. Subword approaches are practical middle ground. BPE merges frequent adjacent symbol pairs iteratively. WordPiece uses a likelihood-oriented merge criterion and longest-match segmentation behavior.

Week 5: Neural language models, RNNs, LSTMs, GRUs, seq2seq, and decoding

Neural language models replace count tables with trainable neural representations. RNNs process arbitrary-length sequences with hidden state memory but struggle with long-range dependencies. LSTM and GRU improve this via gating.

In LSTM, forget gate decides retention, input gate controls writing new information, and output gate controls exposed hidden output. These gates improve gradient flow and long-context retention.

Seq2seq models map source sequence to target sequence via encoder-decoder. The major weakness of fixed-vector seq2seq is information bottleneck for long inputs.

Decoding methods include greedy search, beam search, and sampling. Temperature controls distribution sharpness: higher means more randomness, lower means more determinism.

Week 6: Attention and Transformers

Attention lets decoder inspect all encoder states and focus dynamically by relevance. Dot-product attention computes scores and softmax normalizes them into attention weights.

Transformers replace recurrence with self-attention and support parallel processing. Multi-head attention attends to different relationship subspaces in parallel.

Causal masking prevents attention to future tokens in autoregressive decoding. Positional encoding is required because attention alone is order-agnostic.

Sinusoidal encoding uses sine/cosine functions by dimension. RoPE injects relative position through vector rotations in query/key space. Layer normalization is standard in transformers.

Week 7: Pretraining strategies and model families

ELMo, BERT, and GPT represent different pretraining philosophies. ELMo uses bidirectional LSTM contextualization. BERT is encoder-only with masked language modeling (and originally NSP). GPT is decoder-only autoregressive next-token prediction.

Encoder-only models are strongest for understanding tasks. Decoder-only models are strongest for generation. Encoder-decoder models are strongest for conditional sequence generation.

BART combines denoising objectives with encoder-decoder architecture. T5 frames all tasks as text-to-text.

Week 8: Instruction tuning, prompting, and alignment

Instruction tuning improves instruction-following but does not by itself guarantee full alignment. Prompting influences outputs without changing model weights.

Hard prompts are discrete text; soft prompts are learned continuous vectors. Prompt engineering is the practice of finding robust, effective prompts.

Chain-of-Thought and Tree-of-Thought are reasoning-oriented prompting strategies. Prompt sensitivity means small wording changes can significantly alter outputs.

Alignment methods include RLHF, where reward-guided optimization is constrained for stability, commonly with KL-regularized PPO.

Week 9: Knowledge graphs, KG completion, and KGQA

Knowledge graphs represent entities and relations as typed triples (subject, relation, object). KG completion predicts missing triples via scoring functions.

TransE models translation relations, DistMult has symmetry limitations, ComplEx supports asymmetry, and RotatE captures rich relational patterns.

Evaluation uses metrics like Mean Rank, Hits@K, and MRR. Negative sampling quality matters for training efficiency and learning signal.

KGQA approaches include interpretable semantic parsing pipelines and end-to-end differentiable KG methods.

Week 10: PEFT, compression, residual stream, and interpretability

PEFT methods reduce trainable parameters while adapting large models: LoRA, QLoRA, adapters, and prefix tuning.

Compression techniques include quantization, pruning, and distillation. PTQ uses calibration data to estimate quantization scales.

Mechanistic interpretability analyzes internal computation. Circuits and induction heads are core examples.

Week 11: Multiplicative KG models, hierarchies, and temporal KGs

Different KG embedding model families capture different relation properties such as symmetry, asymmetry, inverse, and composition.

Hierarchy modeling captures taxonomic and partial-order structures more naturally than plain Euclidean similarity.

Temporal KGs add time validity, requiring modeling not only which relation holds but also when it holds.

High-yield formulas and distinctions

Language model probability:
P(x1,...,xL) = product over i of P(x_i | x_1,...,x_{i-1}).

Perplexity:
PP = P(sentence)^(-1/N) = exp(-(1/N) * sum log p_i).

Add-one smoothing:
(count(context, word) + 1) / (count(context) + V).

Transformer head size:
model dimension / number of heads.

TransE relation rule:
e_s + e_r approximately equals e_o.

Hits@K:
correct answer appears in top K ranked predictions.

PPO:
reward optimization with KL-based trust-region style constraint to limit drift from reference.`;