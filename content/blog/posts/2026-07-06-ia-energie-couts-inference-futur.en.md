---

title: "AI costs a fortune to run: what if we could cut the bill by 1000x?"
subtitle: "The hidden cost of artificial intelligence, the coming energy crisis, and how a new architecture could change everything"
description: "Understanding the real costs of AI in 2026: inference, energy, compute. And why Unconventional AI's oscillator architecture (ex-Databricks) could democratize access to AI by cutting consumption by a factor of 1000."
categories: ["Artificial Intelligence", "Engineering"]
excerpt: "Every time you ask ChatGPT a question, a datacenter somewhere in the world burns electricity for a few cents. Multiply by billions of requests per day. AI, as it is built today, has a fundamental problem nobody is really solving: it consumes an absurd amount of energy."
date: 2026-07-06 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-06-ia-energie-couts-inference-futur-featured.png

---

Every time you ask ChatGPT a question, a datacenter somewhere in the world spins up thousands of GPUs for a fraction of a second. The cost to you: zero. The real infrastructure cost: several cents, sometimes more, depending on the complexity of the request.

Now multiply by billions of requests per day, by hundreds of models deployed in production, by agentic pipelines that chain dozens of consecutive calls to complete a single task.

AI, as it is built today, burns an amount of energy that few industries can match. And nobody has really solved this problem. Not yet.

In June 2026, Naveen Rao, former AI chief at Databricks, announced the creation of **Unconventional AI** with a bold promise: cut the energy consumption of AI inference by a factor of one thousand, using a radically different architecture based on physical oscillators. ([Source: TechCrunch, June 25, 2026](https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/))

This is the kind of announcement that comes around often in tech and is forgotten six months later. But to understand why this one deserves attention, you first need to understand the scale of the problem it claims to solve.

## The real cost of AI: what nobody puts front and center

### Training: the visible part

When media talk about the cost of AI, they mostly focus on training. GPT-4 reportedly cost between $50M and $100M to train. Meta is said to have spent several hundred million across its Llama models. These numbers are impressive, and they are real.

But training is a one-time cost. It is visible, quantifiable, and large companies have the means to absorb it. The real problem hides elsewhere.

### Inference: the invisible part

Inference is what happens when a model answers a request. Every question asked of an LLM, every generated image, every API call triggers a forward pass through billions of parameters. For a model the size of GPT-4, this mobilizes dozens of GPUs for a fraction of a second.

Multiplied by usage at scale, inference represents the majority of operational AI costs in production. OpenAI estimated, at the peak of ChatGPT in 2023, inference costs in the range of $700,000 per day. That figure has evolved, but the underlying mechanics remain the same.

Public model APIs hide this reality behind pricing grids in dollars per million tokens. It is easy to forget what those tokens physically represent: electricity, machines, cooling.

### Energy: the systemic problem

The datacenters running the world's AI consume amounts of energy comparable to entire nations. The International Energy Agency estimated in 2024 that datacenters would consume more than 1,000 TWh per year by 2026, a figure sharply rising since the explosion of AI workloads.

Microsoft, Google, and Amazon are investing heavily in nuclear plants and dedicated solar farms for their datacenters. This is not environmental altruism: it is an operational necessity.

The fundamental problem is architectural. GPUs are massively parallel processors, excellent at the matrix multiplications at the core of deep learning. But they were designed for video games, not AI inference. Their energy consumption is colossal because their design is not optimized for this task.

## The hidden costs that benchmarks do not show

### Cost per token in real production

Models are often evaluated on response quality: MMLU, HumanEval, and other technical benchmarks. What these evaluations do not capture is the real cost per inference in a production context.

A model that is twice as good on a benchmark but ten times more expensive to run is not necessarily the right choice. Yet competition in the AI space has long prioritized raw quality metrics without sufficiently weighting energy efficiency.

### The agent multiplier

The rise of agentic architectures makes the problem worse. An agent completing a complex task does not make a single LLM call: it chains dozens, sometimes hundreds. Each decision, each check, each iteration generates an inference request.

If the cost of a single inference is already significant, the cost of a complete agentic pipeline can be tens to hundreds of times that amount. For large-scale automated professional use cases, API budgets can explode within days.

### The long context cost

Modern models offer context windows of 128,000 to 1 million tokens. Technically impressive. But every token in the context has a cost: quadratic attention means that processing a 100,000-token context is exponentially more expensive than processing a 1,000-token context.

Teams that inject large amounts of documentation into RAGs, maintain long conversation histories, or use models to analyze entire documents can find themselves with surprisingly large API bills.

### The cost of running your own infrastructure

Beyond APIs, teams deploying their own models (open source or fine-tuned) must manage their own infrastructure. A single inference node for a 70-billion-parameter model requires 4 to 8 A100 GPUs. A single A100 consumes 400W. One hour of compute on 8 A100s: about 3,200 Wh, not counting cooling.

For a startup wanting to deploy a proprietary model in production 24/7, the electricity and infrastructure rental bill can quickly exceed the product budget.

## Why GPU architecture is fundamentally limited for AI

The deep reason AI inference is so expensive comes from the mismatch between the hardware used and the task being performed.

An LLM doing inference essentially performs high-precision matrix multiplications (fp16, bf16, or int8) across millions of parameters, for every token generated. GPUs excel at this task. But they do so with massive energy consumption because they keep thousands of cores simultaneously active, high-bandwidth memory caches running, and a clock ticking at high frequencies continuously.

It is a bit like using a jet to deliver a letter to the next town over. The tool works. It is just not optimized for the problem.

Google's TPUs, Amazon's Trainium chips, and Intel's Gaudi are attempts at optimization within this spectrum. But they remain in the same paradigm: digital electronic circuits, clocked by a timer, performing discrete operations step by step.

## Unconventional AI's approach: stepping outside the paradigm

This is where Naveen Rao's announcement gets interesting. His system **Un-0** does not rely on transistors clocked by a timer. It uses **oscillators**: physical components whose natural oscillation frequencies encode and process information.

The idea is not new in research. Neuromorphic computers and oscillator-based architectures have for years explored the possibility of computing with physics rather than against it. The human brain, after all, is a network of biological oscillators that consumes about 20 watts to perform cognitive tasks that no modern LLM can yet match at that level of efficiency.

What is new is that Unconventional AI claims to have made this approach mature enough to generate images, and targets a 1,000x reduction in inference energy consumption.

Today, Un-0 runs in software simulation. Physical chips are in development. The distance between a simulation and a commercially viable product is considerable. But the principle, if validated at scale, would be transformative.

## The opportunity window: when performance is good enough

There is an important point to grasp in the current AI market dynamics.

In 2023 and 2024, the race was for raw performance. Who answers a math problem best? Who understands code best? Who hallucinates least? In that phase, energy efficiency was secondary. Large companies had the means to ignore costs.

But in 2025-2026, something changed. Open source models caught up with proprietary models on most common tasks. Llama, Mistral, Qwen reach performance levels that satisfy the majority of professional use cases. The race for absolute performance is slowing down on standard applications.

This is precisely the moment when **efficiency becomes the differentiator**.

When models are good enough for the task - and on many tasks, they already are - the question that naturally follows is: can we run them cheaper? Faster? With less energy?

This is the window where technologies like Unconventional AI's can gain a foothold. Not replacing GPUs during the training phase, where raw performance remains critical. But for inference - where a model with fixed parameters simply needs to respond efficiently to requests - a less power-hungry but sufficiently performant architecture changes the equation entirely.

## What this would change concretely

### AI access for everyone

Today, deploying a competitive LLM in production is financially out of reach for most startups and independent teams. Infrastructure costs force either relying on large provider APIs (with the dependency and cost constraints that implies), or drastically limiting use cases.

If inference cost a thousand times less, this calculation would change radically. Models currently inaccessible could run on modest servers. AI embedded in local devices would become a commercial reality for use cases far beyond basic voice assistants.

### The end of energy monopoly as a barrier to entry

One of the most durable competitive advantages large tech companies have in AI is not their algorithm. It is their infrastructure. Google, Microsoft, Amazon have long-term energy agreements, proprietary datacenters, custom chips. This infrastructure represents billions in investment that no startup can replicate.

A technology that radically reduces energy needs also reduces that advantage. If capable model inference becomes achievable on ordinary hardware, the concentration of the AI market can redistribute.

### AI in emerging countries

Access to high-quality AI today is strongly correlated with access to high-quality electrical and internet infrastructure. Countries with limited energy or connectivity resources are structurally excluded from the productivity gains AI brings to businesses in developed nations.

A massive reduction in energy consumption would change this reality too. Local, low-power AI, running on less sophisticated hardware, would open access to markets and populations currently out of reach.

### Sustainability as a commercial argument

As environmental regulation tightens, the carbon footprint of digital infrastructure is becoming a selection criterion for enterprises. AI currently has a poor reputation on this point, and rightly so. A radically less power-hungry inference technology is also a commercial argument for clients with ESG commitments to meet.

## What to keep in mind

Naveen Rao is credible: his track record at Intel, Nervana Systems (sold to Intel), then Databricks shows genuine expertise in AI hardware. The oscillator-based approach has real scientific foundations.

But there remains considerable distance between Un-0 in software simulation and a commercially viable physical chip. Neuromorphic research has decades of partially fulfilled promises. And even if the technology works, adoption in an ecosystem dominated by GPUs will take time.

What is certain is that the problem is real, urgent, and not yet solved. Rao is right about the diagnosis: "energy will be the fundamental challenge of the coming years" for the AI industry. Whether the solution comes from oscillators, photonics, analog computing, or a combination of these approaches remains to be seen.

## What this means for product teams

For teams integrating AI into their product today, the practical message is this.

**Now:** think energy efficiency from the design stage. Choose the least expensive model that satisfies your use case. Measure your inference costs per feature. Avoid redundant calls, bloated contexts, and complex agentic pipelines without clear justification.

**In two to five years:** some of today's constraints will have disappeared. More efficient architectures, smaller distilled models, and perhaps technologies like Unconventional AI's will make AI inference far less expensive. Use cases that seem economically impossible today will become trivial.

The right posture is to integrate AI where it delivers value now, while keeping an eye on the hardware developments that will reshape constraints in the years ahead.

---

AI is not slowing down. But the economic and energy model it runs on today is not sustainable at the scale of its ambitions. Something has to change. The question is not whether a technological breakthrough will come, but which one will come first.

Unconventional AI is just one player among those working on this breakthrough. But their core intuition - that once models are good enough, efficiency becomes the new competitive frontier - is right. And that intuition should also guide how product teams think about their AI usage today.
