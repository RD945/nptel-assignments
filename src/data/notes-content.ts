export const termDefinitionsContent = `Complete NLP Term Reference - All Terms, 2 Sentences Each

Linguistics and NLP Fundamentals

Homonymy — Two completely unrelated words happen to share the same spelling or pronunciation. Example: bat (flying animal) vs. bat (cricket bat) are unrelated meanings with the same word form.

Synonymy — Words that have the same or very similar meaning in a language. Example: happy, joyful, and elated are synonyms and can often substitute each other in a sentence.

Polysemy — A single word has multiple meanings that are historically or conceptually related. Example: head can mean the body part, the head of an organization, or the head of a river, all linked by the idea of top or leader.

Antonymy — A semantic relationship between words with opposite meanings. Antonyms can be gradable (hot/cold) or complementary (alive/dead, with no middle ground).

Distributional Semantics — The theory that words occurring in similar contexts tend to have similar meanings, often summarized as you shall know a word by the company it keeps. This is the theoretical foundation for word embeddings like Word2Vec and GloVe.

Corpus / Corpora — A corpus is a large, structured collection of text used to train, evaluate, or study NLP systems; corpora is the plural form. Examples include Wikipedia dumps, the Penn Treebank, or Common Crawl.

Lexical Ambiguity — Ambiguity caused by a word having more than one meaning through homonymy or polysemy. Example: I went to the bank can mean river bank or financial bank, so context is required.

Syntactic Ambiguity — Ambiguity arising when a sentence can be parsed in more than one grammatically valid way. Example: I saw the man with the telescope may mean I used a telescope or the man had a telescope.

Morphological Ambiguity — A single word form has multiple morphological analyses. Example: flies can be a third-person verb (time flies) or a plural noun (flies are insects).

Pragmatic Ambiguity — Ambiguity stemming from speaker intent or discourse context, not only word meaning or grammar. Example: Can you close the window is literally about ability, but pragmatically a request.

Morpheme — The smallest unit of meaning in a language that cannot be divided further without losing meaning. Example: unhappiness has three morphemes: un- + happy + -ness.

Semantic Role — The abstract functional role that a noun phrase plays in the event described by a verb. Roles include Agent, Patient, Beneficiary, and Instrument and capture who did what to whom.

Agent — The entity that intentionally performs or initiates the action described by the verb. Example: In Alice kicked the ball, Alice is the Agent.

Patient — The entity directly affected by or undergoing the action of the verb. Example: In Alice kicked the ball, the ball is the Patient.

Beneficiary — The entity for whose benefit an action is performed. Example: In She baked him a cake, him is the Beneficiary.

Instrument — The tool or means used by the Agent to carry out the action. Example: In He cut the rope with a knife, knife is the Instrument.

Neologism — A newly coined word or expression that has entered usage recently. Examples: selfie, tweet as a verb, googling.

Non-standard English — Language varieties that deviate from formal Standard English, including dialects, slang, and internet language. Example: gonna, wanna, AAVE, and social-media abbreviations.

Entailment — In Natural Language Inference (NLI), sentence A entails sentence B if B must be true whenever A is true. Example: A dog is chasing a cat entails An animal is moving.

Contradiction — In NLI, two sentences are contradictions if they cannot both be true simultaneously. Example: The man is sleeping contradicts The man is running.

Neutral (NLI context) — In NLI, two sentences are neutral if neither entails nor contradicts the other. Example: Alice is a doctor is neutral to Alice is happy.

Meronymy — A lexical relation where one word denotes a part of what the other denotes. Example: wheel is a meronym of car.

Hyponymy — A lexical relation where one word is a more specific type of another word. Example: poodle is a hyponym of dog.

Language Models and Probabilistic Concepts

Language Model — A probabilistic model that assigns probability to sequences or predicts next words from context. It is a foundation of modern NLP systems.

Markov Model — A probabilistic model where each state depends only on a limited context window rather than full history. This simplifies modeling while capturing short-range dependencies.

First-order Markov Model — Each word depends only on the immediately preceding word. This corresponds to a bigram approximation P(w_i | w_1...w_{i-1}) approximately P(w_i | w_{i-1}).

Second-order Markov Model — Each word depends on the previous two words. This corresponds to trigram modeling with richer context than first-order.

Third-order Markov Model — Each word depends on the previous three words, equivalent to a 4-gram model. Higher order can fit training data better but increases sparsity.

N-gram Model — A model that approximates word probabilities using N-1 prior words as context. Unigram ignores context, bigram uses one word, trigram uses two.

Bigram Model — A specific n-gram model where N=2 and each token is conditioned on one previous token. Example: P(cat | the) estimated from count(the cat) over count(the).

Probability Estimation — Estimating conditional probabilities from observed corpus counts. Maximum Likelihood Estimation sets probabilities proportional to observed frequency.

Likelihood Estimation — Computing probability of observed data given model parameters. Maximizing likelihood is equivalent to minimizing cross-entropy.

Intrinsic Evaluation — Evaluating a model directly on language-model metrics such as perplexity. It measures language-model quality without downstream task integration.

Extrinsic Evaluation — Evaluating by downstream task impact, such as MT BLEU or QA performance. It is practically meaningful but often more expensive.

BLEU Score — Bilingual Evaluation Understudy, measuring n-gram precision with brevity penalty against references. Scores range from 0 to 1 and higher is generally better.

Perplexity — A surprise metric over held-out data: PP(W) = (product over i=1..N of 1 / P(w_i | w_{i-1}))^(1/N). Lower perplexity indicates better predictive modeling.

Vocabulary — The set of unique tokens known by the model. OOV words are outside this set and need handling strategies.

Token — The basic processing unit used by a model, such as word, subword, or character. Tokenization choice affects sequence length and generalization.

Sentence Probability — The probability of a full sentence computed as a product of conditional token probabilities. Language models are trained to assign higher probability to natural sentences.

Smoothing Techniques

Add-one Smoothing (Laplace) — Adds 1 to every n-gram count before normalization. It is simple but often over-smooths for large vocabularies.

Add-k Smoothing — Adds a fractional constant k instead of 1. It offers tunable smoothing strength but still lacks context-sensitive plausibility.

Good-Turing Smoothing — Re-estimates counts using frequency-of-frequency statistics. It uses events seen once to estimate unseen probability mass.

Kneser-Ney Smoothing — A strong classical smoother using continuation probability rather than raw frequency. It better reflects whether a word appears in diverse contexts.

Absolute Discounting — Subtracts a fixed discount D from observed counts and redistributes the saved mass. Kneser-Ney extends this with continuation-aware backoff.

Continuation Probability — A word probability based on how many unique left contexts it appears with. In Kneser-Ney this helps distinguish broadly reusable words from context-locked frequent words.

Neural Networks and Deep Learning

Neural Network — A layered function approximator using weighted connections and non-linear activations. It learns representations from data through optimization.

Weights — Learnable scalar parameters on neuron connections. Training updates them to reduce loss.

Bias — A learnable additive offset before activation. It allows shifting decision boundaries beyond the origin.

Activation Function — A non-linear transform applied to pre-activation values. Common choices include ReLU, sigmoid, and tanh.

Loss Function — Quantifies prediction error against targets. Optimization minimizes this objective.

MLP (Multi-Layer Perceptron) — A feedforward network with one or more hidden layers. It combines linear transforms and non-linear activations.

Linear Transformation — Matrix projection y = Wx + b. Stacking only linear transforms remains linear overall.

Non-linearity — Property introduced by activations to model complex functions. Without it deep stacks collapse to a single linear map.

Vanishing Gradient — Backpropagated gradients shrink toward zero across many layers or timesteps. Early layers then learn very slowly.

Gradient Flow — The quality of backward signal propagation through a network. Better flow improves trainability.

Dropout — Randomly zeroes activations during training with probability p. It reduces co-adaptation and overfitting.

Inference — Running a trained model for prediction without parameter updates. It is typically cheaper than training.

Training — Iteratively computing loss and updating parameters via gradients. It can be compute-intensive depending on data and model scale.

XOR Problem — A classic case not solvable by a single-layer perceptron because classes are not linearly separable. A hidden non-linear layer solves it.

Linear Separability — A property where classes can be split by a hyperplane. Linear models only solve linearly separable problems.

Hidden Layer — An intermediate representation layer between input and output. Deeper hidden stacks can learn richer abstractions.

Backpropagation — Efficient gradient computation through layered compositions using the chain rule. It enables practical deep-network training.

Chain Rule — Derivative rule for composed functions. Backprop repeatedly applies it layer by layer.

Gradient Descent — Parameter update rule theta <- theta - eta * gradient_theta(L). Variants include SGD, Adam, and AdamW.

Learning Rate (eta) — Step-size hyperparameter for gradient updates. Too high can diverge, too low can stall learning.

Loss Oscillation — Loss fluctuates sharply instead of decreasing smoothly. Often caused by an overly high learning rate.

Divergence — Training becomes unstable and loss grows. Common causes include too-large learning rate or exploding gradients.

Regularization and Optimization

Regularization — Constraints or penalties that improve generalization. Typical methods include L1, L2, dropout, and early stopping.

L1 Regularization (Lasso) — Adds lambda * sum |w_i| to loss. It promotes sparse parameter solutions.

L2 Regularization (Ridge) — Adds lambda * sum w_i^2 to loss. It shrinks weights smoothly toward zero.

Early Stopping — Stop training when validation performance no longer improves. This prevents late-stage overfitting.

Overfitting — High training performance but weak test performance. The model memorizes training-specific patterns.

Generalization — Ability to perform well on unseen samples from the same distribution. It is the central objective beyond training fit.

Classification and Output Layers

Softmax — Converts logits into a normalized probability distribution. It is standard in multi-class output heads.

Multi-class Classification — Assigning each input to one of many discrete classes. Exactly one class is chosen in single-label settings.

Probability Distribution — Non-negative probabilities over outcomes summing to 1. Language models emit this over vocabulary each step.

Word Representations and Tokenization

One-hot Encoding — Sparse vectors with one active index per token. They encode identity but no semantic similarity.

Word Embedding — Dense low-dimensional vectors capturing semantic structure. Similar words occupy nearby points.

Word2Vec — Learns embeddings from context prediction using CBOW or Skip-gram. It is trained with self-supervised signals.

CBOW — Predicts target token from surrounding context tokens. It is efficient and strong for frequent words.

Skip-gram — Predicts context tokens from a target token. It often works better for rare words.

Self-supervision — Supervision signal derived from input structure itself. No manual labels are required.

Tokenization — Splitting text into model-consumable units. Token granularity influences performance and efficiency.

Subword Tokenization — Splits words into reusable pieces to handle rare terms and limit vocabulary growth. It is widely used in modern LLMs.

Character-based Tokenization — Uses individual characters as tokens. It avoids OOV but creates long sequences.

Word-based Tokenization — Uses full words as tokens. It is simple but vulnerable to OOV and large vocabularies.

Tokenization Algorithms

BPE (Byte Pair Encoding) — Iteratively merges frequent adjacent symbols to build subword vocabulary. Used in GPT-style pipelines.

WordPiece — Chooses merges that maximize corpus likelihood rather than raw frequency. Used in BERT-style pipelines.

Viterbi Algorithm — Dynamic programming for most probable state/segmentation sequence. Used in HMM decoding, tagging, and some tokenization setups.

Text Processing and IR Concepts

TF-IDF — Product of term frequency and inverse document frequency. It emphasizes terms frequent in one document but rare globally.

IDF — Log-scaled rarity across documents, typically log(N/df(t)). Very common terms get low IDF.

Sequence Models

Seq2Seq — Maps variable-length input sequences to variable-length output sequences. Core architecture for translation and summarization.

Encoder — Reads input sequence and builds latent representations. In transformers this is bidirectional contextual encoding.

Decoder — Generates output autoregressively conditioned on prior outputs and encoded input. It is the generation component.

Encoder-Decoder Model — Combined architecture using encoder representations inside decoder generation. It is standard for conditional generation tasks.

Hidden State — Recurrent internal representation at each timestep. It summarizes seen sequence context.

Context Vector — Fixed summary vector from encoder in vanilla seq2seq. It creates bottlenecks for long inputs.

Fixed-size Representation — Constraint where whole input is compressed to one vector. Attention was introduced to alleviate this.

Variable-length Sequence — Input or output with non-fixed token length. Sequence models are designed to handle this naturally.

Attention Mechanisms

Attention — Computes relevance-weighted combination of source information for each target step. It enables dynamic focus instead of fixed bottlenecks.

Attention Score — Scalar compatibility between query and key vectors. Higher scores imply greater relevance.

Dot Product Attention — Uses query-key dot product, typically scaled by sqrt(d_k). It is efficient and GPU-friendly.

Softmax Normalization — Converts raw attention scores into weights summing to 1. This produces interpretable relevance distributions.

Attention Weights — Normalized coefficients applied to value vectors. Their weighted sum yields attention output.

Multi-head Attention — Runs attention in parallel heads with different projections. It captures diverse relational patterns simultaneously.

Attention Heads — Individual parallel attention submodules inside multi-head attention. Different heads often specialize in different dependencies.

Query, Key, Value — Query specifies what to retrieve, key indexes candidates, value carries retrievable content. Output is softmax(QK^T/sqrt(d_k))V.

Self-attention — Attention where Q, K, and V come from the same sequence. Every token can condition on all others.

Masking — Blocking specific positions before softmax by setting scores to negative infinity. Used for padding and causality constraints.

Causal Masking — Prevents tokens from attending to future positions in autoregressive decoding. It enforces left-to-right generation.

RNN and Variants

RNN — Recurrent model that processes sequences timestep-by-timestep with hidden state recurrence. It struggles with long-term dependencies due to vanishing gradients.

LSTM — Gated RNN with cell state designed for longer memory retention. It mitigates vanishing-gradient issues in sequence learning.

Forget Gate — Learns what portion of prior cell state to retain. It controls memory persistence.

Input Gate — Learns what new candidate information to write into cell state. It regulates memory updates.

Output Gate — Controls how much cell-state information is exposed as hidden output. It shapes downstream signal flow.

Cell State — Long-term memory pathway in LSTM that carries information across many timesteps. Gates control its read/write behavior.

Transformers

Transformer — Attention-centric architecture without recurrence. It enables high parallelism and strong long-range modeling.

Transformer Encoder — Stack of self-attention and feedforward layers processing full input bidirectionally. Often used for understanding tasks.

Transformer Decoder — Autoregressive stack using causal self-attention and optional cross-attention to encoder outputs. Used for generation.

Positional Encoding — Injects order information into token representations. Necessary because attention alone is order-agnostic.

Sinusoidal Encoding — Deterministic sin/cos positional features across dimensions. Supports extrapolation to longer lengths in principle.

RoPE — Encodes position via rotational transforms in query/key space. Naturally captures relative offsets in attention.

Relative Positional Encoding — Represents token distances rather than absolute indices. Improves robustness across sequence lengths.

Permutation Invariance — Property of plain attention where token order does not change representation. Position signals break this invariance.

Layer Normalization — Normalizes features within each token representation. Stabilizes optimization in deep transformers.

Batch Normalization — Normalizes across batch statistics. Less common in transformers than layer norm.

Advanced LLM Architectures

ELMo — Bidirectional language-model embeddings from stacked BiLSTMs. Produces context-dependent token representations.

BERT — Encoder-only transformer pretrained with masked language modeling. Strong for understanding-oriented tasks.

GPT — Decoder-only autoregressive transformer predicting next token. Strong for generation-oriented tasks.

GPT-2 — Larger GPT-scale model demonstrating coherent long-form generation at scale. It highlighted the importance of scaling laws.

BART — Denoising encoder-decoder model combining bidirectional encoding and autoregressive decoding. Strong on seq2seq generation tasks.

T5 — Text-to-text encoder-decoder framework casting every NLP task into text I/O format. It unifies task formulation.

Encoder-only Model — Uses only encoder stack with bidirectional context. Best suited for classification and retrieval-style understanding tasks.

Decoder-only Model — Uses only decoder stack with causal masking. Best suited for open-ended generation tasks.

Encoder-decoder Model — Combines both stacks with cross-attention. Best suited for conditional generation tasks.

Masked Language Modeling (MLM) — Predicts masked tokens using surrounding context. Enables bidirectional contextual learning.

Next Sentence Prediction (NSP) — Binary objective predicting whether sentence B follows sentence A. Used in original BERT pretraining.

Autoregressive Model — Generates each token conditioned on previously generated context. It models sequence probability left-to-right.

Bidirectional LSTM — Processes sequences in both forward and backward directions. It captures context from both sides.

Contextual Embeddings — Token vectors that depend on surrounding words. Same surface form can map to different vectors by context.

Pretraining and Fine-tuning

Pre-training — Large-scale training on broad unlabeled data to learn transferable language representations. It provides strong initialization.

Fine-tuning — Task-specific supervised adaptation from pretrained weights. It usually outperforms from-scratch training in low-data settings.

Instruction Tuning — Fine-tunes on instruction-response datasets to improve instruction-following behavior. Common in assistant-style LLMs.

Prompting — Task steering via input text without changing model parameters. Useful for zero-shot and few-shot use.

Hard Prompt — Human-written discrete token prompt. Interpretable but difficult to optimize algorithmically.

Soft Prompt — Learned continuous prompt vectors prepended to model input embeddings. Optimized by gradient descent.

Prompt Engineering — Systematic design and iteration of prompts for better model behavior. Includes formatting, examples, and constraint phrasing.

Prompting Techniques

Chain-of-Thought (CoT) — Prompts models to output intermediate reasoning steps before final answer. Often improves multi-step reasoning tasks.

Tree-of-Thought (ToT) — Explores multiple reasoning branches and evaluates them before committing. Useful for search-like complex problems.

Prompt Sensitivity — Small wording changes in prompts can cause large output shifts. This is a core reliability challenge in deployment.

Evaluation and Metrics

Accuracy — Ratio of correct predictions to total predictions. Simple but can mislead under severe class imbalance.

Entropy — Uncertainty measure H(X) = -sum p(x) log p(x). Higher entropy implies greater uncertainty.

Log-likelihood — Log probability assigned to observed data under model parameters. Maximized during MLE training.

Variance — Dispersion of predictions/estimates around the mean. High model variance is associated with overfitting.

POSIX (evaluation context) — Position-oriented evaluation framing in some structured prediction contexts. It emphasizes positional correctness in outputs.

Reinforcement Learning and Alignment

RLHF — Training paradigm combining human preference data, reward modeling, and RL policy optimization. Widely used for assistant alignment.

Reward Maximization — Objective of maximizing expected cumulative reward under policy. In RLHF reward is typically learned from preferences.

KL Divergence — Distribution divergence measure D_KL(P||Q) = sum P(x) log(P(x)/Q(x)). Used as a regularizer to keep policy near a reference model.

Policy — Mapping from states/contexts to action distributions. In LLM RL this is the token distribution function.

REINFORCE Algorithm — Monte Carlo policy-gradient method using reward-weighted log-probability gradients. Unbiased but often high variance.

Log-derivative Trick — Identity turning gradients of probabilities into gradients of log-probabilities. Enables practical policy-gradient estimators.

PPO — Clipped policy optimization method constraining overly large policy updates. Standard RLHF optimizer due to stability.

Monte Carlo Approximation — Estimating expectations via sample averages. Used for stochastic gradient estimates in RL.

Knowledge Graphs

Knowledge Graph (KG) — Graph of entities connected by typed relations representing factual knowledge. Supports multi-hop reasoning.

Knowledge Base (KB) — Broader structured knowledge repository concept. KGs are one graph-structured subtype.

Node — Graph vertex representing an entity or concept. Nodes are connected by relation edges.

Edge — Graph connection between nodes. In KGs edges are typically directed and typed.

Relation — Semantic label describing edge meaning. Examples include bornIn, partOf, and worksFor.

Entity — Real-world object/concept represented as a node. Can be people, places, organizations, events, etc.

Triple (s, r, o) — Atomic KG fact: subject, relation, object. Entire KGs are sets of such triples.

Entity Alignment — Matching equivalent entities across different KGs. Important for KG integration and multilingual fusion.

Relation Alignment — Matching semantically equivalent relation types across KGs. Needed for cross-graph interoperability.

Knowledge Graph Completion — Predicting missing entities/relations in incomplete triples. Also called link prediction.

Scoring Function — Function assigning plausibility to candidate triples. Higher scores indicate more likely facts.

Embedding — Dense vector representation of entities/relations. Geometry is learned to reflect KG semantics.

KG Embedding Models

TransE — Translation-based model where valid triples satisfy s + r approximately equals o. Simple and efficient baseline.

RotatE — Complex-vector model representing relations as rotations. Captures symmetry, inversion, and composition patterns.

DistMult — Bilinear diagonal model efficient but inherently symmetric in subject/object roles. Poor for strongly asymmetric relations.

ComplEx — Complex-valued extension of DistMult handling asymmetry via conjugation. Strong general-purpose KG baseline.

SimplE — Uses separate head/tail entity embeddings and inverse-relation terms. Improves expressiveness for directed relations.

Graph Concepts

Graph Embedding — Learning compact vectors that preserve graph structure and semantics. Enables downstream ML over graph data.

GCN — Graph Convolutional Network aggregating neighborhood information layer by layer. Learns context-aware node features.

Typed Edges — Edges with explicit relation labels rather than unlabeled adjacency. Core property of knowledge graphs.

Hypergraph — Generalized graph where one edge can connect multiple nodes simultaneously. Useful for higher-order relations.

KG Evaluation Metrics

Mean Rank — Average rank position of true answer among candidates. Lower values indicate better ranking quality.

Hits@K — Fraction of queries where true answer appears in top K predictions. Higher is better.

Mean Reciprocal Rank — Average reciprocal of true-answer rank across queries. Higher values indicate better early ranking.

Training Techniques

Negative Sampling — Generate false triples to contrast against true triples during training. Essential for discriminative KG objectives.

Uniform Negative Sampling — Corrupt subject or object uniformly at random. Simple but may create many easy negatives.

Margin-based Loss — Enforces true triple score to exceed negative score by margin gamma. Common pairwise ranking objective.

Mini-batch — Train using subsets of data per step for efficiency and gradient stability. Standard in large-scale optimization.

Model Optimization and Efficiency

Quantization — Lower-precision representation of weights/activations to reduce memory and increase speed. Often trades small accuracy loss for large efficiency gain.

Post-Training Quantization — Quantize after training without full retraining. Requires calibration to set scales.

Calibration Dataset — Small representative sample used to estimate activation ranges/scales for quantization. It is not a training dataset.

Scale Factor — Numerical mapping between floating-point and quantized integer ranges. Critical for quantization fidelity.

Double Quantization — Quantizing quantization constants themselves for additional memory savings. Used in some low-bit fine-tuning pipelines.

FP16 — 16-bit floating-point format reducing memory and increasing throughput compared with FP32. Common in mixed-precision training.

4-bit Quantization — Extremely low-bit representation for strong compression. Enables larger model deployment on limited hardware.

Parameter-efficient Fine-tuning

LoRA — Low-rank adapter updates while base model weights remain frozen. Greatly reduces trainable parameter count.

QLoRA — LoRA training on top of quantized base weights. Enables efficient fine-tuning of large models on smaller GPUs.

DyLoRA — Dynamic-rank LoRA training strategy reducing need for fixed-rank hyperparameter search. Offers flexible adaptation capacity.

Prefix Tuning — Learns trainable prefix vectors injected into attention computation. Keeps core model parameters fixed.

Adapters — Small bottleneck modules inserted in transformer blocks and trained while backbone stays frozen. Parameter-efficient alternative to full fine-tuning.

SAID — Structure-aware intrinsic-dimension strategy for selecting where/what to adapt efficiently. Aims to maximize adaptation impact per parameter.

Model Compression

Pruning — Removing parameters, heads, or layers to shrink model size and compute. Often followed by fine-tuning for recovery.

Magnitude Pruning — Removes smallest absolute-value weights under contribution assumption. Simple and widely used.

Structured Pruning — Removes whole units (neurons/heads/layers) rather than individual weights. More hardware-friendly than unstructured sparsity.

Random Pruning — Baseline pruning by random removal. Useful for comparing informed pruning strategies.

Knowledge Distillation — Trains smaller student model to match teacher behavior/output distributions. Transfers capability with reduced footprint.

Sequence-level Distillation — Distills from complete teacher-generated sequences rather than token-level targets alone. Useful in generation tasks.

Mechanistic Interpretability

Circuit — Minimal subnetwork responsible for a specific behavior. Helps map model computation to interpretable components.

Induction Head — Attention head pattern that copies continuation after matching prior token pattern. Key mechanism in in-context learning behavior.

Attention Head Pattern — Characteristic attention behavior learned by a head across contexts. Different heads specialize in different functions.

Mathematical and Tensor Operations

Einstein Summation (einsum) — Compact notation for tensor contractions and batched linear algebra. Widely used in deep-learning implementations.

Frobenius Inner Product — Sum of elementwise products between two same-shaped matrices. Equivalent to trace(A^T B).

Tensor Multiplication — Generalized multiplication over higher-order arrays with index contractions. Fundamental to modern deep-learning computation.``;

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