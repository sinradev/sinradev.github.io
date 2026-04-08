---

title: "Tech Will Have to Slow Down: Depleted Resources, Bloated Software, and the Return of Low-Level Languages"
categories: ["Technology Future"]
featured_image: /assets/images/blog/2026-03-23-tech-slowdown-resources-featured.png
---

We've been sold the idea that technology is infinite. Servers everywhere. Applications bigger, richer, faster. AI for everything. Unlimited cloud. Just add RAM, add cores, add datacenters.

Except the resources that power all of this are not infinite.

And what nobody in the tech industry wants to say out loud is that we are going to have to slow down. Not because we want to. Because we won't have a choice.

## The Myth of Infinite Growth

Tech has been built on an implicit assumption: computing power doubles every 18 months (Moore's Law), costs fall, capabilities grow. So we can afford to write software that's heavier, more abstract, more resource-hungry. Why optimize if hardware will eventually catch up to software anyway?

This assumption has produced an entire generation of developers who have never had to think about resources. You spin up a Docker container. You add a microservice. You ship Electron for a simple note-taking app. You deploy JavaScript on a Node.js server that consumes 512MB of RAM to serve three users.

Call it software obesity: applications that get slower and slower on increasingly powerful hardware, because nobody has ever been held accountable for the resources they consume.

But the physical foundations of all this are beginning to crack.

## The Resources Running Out

### Oil and Energy

Datacenters today consume between 1 and 2% of global electricity. And that figure is exploding. A single hyperscale datacenter can consume as much electricity as a city of 50,000 people. The majority of that electricity still comes from fossil fuels, directly or indirectly.

Training a large language model like GPT-4 produces CO2 emissions equivalent to several hundred transatlantic flights. A single ChatGPT query consumes roughly 10 times more energy than a standard Google search. Multiply that by billions of queries per day.

Generative AI, as currently deployed, is energetically unsustainable at scale.

### Rare Earth Elements

Lithium, cobalt, neodymium, indium, gallium, germanium: these materials sit at the heart of every modern electronic device, from processors to batteries to displays to sensors. Their extraction is concentrated in a handful of countries (Congo, China, Chile, Australia), subject to growing geopolitical tensions, and produces massive environmental damage.

Demand for these materials is projected to triple by 2050 according to the International Energy Agency, driven primarily by the energy transition and... tech.

Semiconductors are already at the center of trade wars between the US and China. Taiwan manufactures over 90% of the world's most advanced chips. The fragility of this supply chain is no longer theoretical.

### Water

Cooling a datacenter requires considerable quantities of water. Some large datacenters consume several million liters per day. In regions already facing water stress, this creates direct conflicts with local populations.

Microsoft, Google, and Amazon are building datacenters in arid regions, intensifying competition for an already scarce resource.

### Electronic Manufacturing

Manufacturing a new smartphone generates 70kg of CO2 equivalent. Manufacturing a server: several tonnes. The hardware refresh cycle has dramatically accelerated, fueled by applications that grow ever more demanding and render devices "obsolete" after three years.

It's a perfect vicious circle: software gets heavier, hardware has to keep up, more resources are consumed, more electronic waste is produced.

## AI Is Making Everything Far Worse

Generative artificial intelligence represents the largest resource consumption acceleration the tech industry has ever seen.

Goldman Sachs estimated in 2024 that AI datacenters could represent up to 8% of US electricity consumption by 2030. Projections from other analysts go further still.

And the worst part: the majority of these resources are spent on tasks we don't actually need. Automatic email summaries. AI-generated images for presentations. Chatbots answering questions that a Google search would have handled.

We are burning rare, finite resources for marginal convenience.

## Bloated Applications: A Structural Problem

Look at the numbers. A modern web browser like Chrome can easily consume 2GB of RAM on a desktop. An Electron app like Slack or VSCode ships a full Chromium engine just to display text and images.

A "simple" mobile app often weighs 200 to 500MB. Messaging apps constantly consume CPU and battery in the background. Websites that should weigh 200KB serve 10MB of JavaScript to display an article.

The trend is clear: with each new generation of frameworks, each new layer of abstraction, applications get slower and heavier, even when the actual feature set hasn't changed.

This isn't a problem of developer bad faith. It's a structural problem: modern tools optimize for development speed, not runtime efficiency. And nobody pays the real cost of the resources consumed.

## The Inevitable Return of Low-Level Languages

Faced with these constraints, something is changing in the industry. Gradually, then suddenly.

Low-level languages are making a strong comeback. Not out of nostalgia. Out of necessity.

### Rust

Rust is the language that best embodies this return. Designed to be as performant as C, but without the memory management pitfalls that caused decades of bugs and security vulnerabilities. Rust has no garbage collector: it manages memory at compile time, making it extremely efficient at runtime.

Microsoft, Google, Amazon, and the Linux kernel have adopted it. The NSA officially recommends migrating to "memory-safe" languages like Rust. Android is rewriting critical components in Rust. The reasons: security, performance, resource consumption.

A web server written in Rust can handle thousands of times more requests per second than a Node.js equivalent, using a fraction of the memory.

### Zig

Zig is newer, more radical. Designed by Andrew Kelley as a spiritual successor to C, but with a clear philosophy: no hidden magic, total control over what the compiler actually does, perfectly predictable resource consumption.

Zig is gaining attention for embedded systems, critical applications, and any context where every byte and every CPU cycle counts. Bun, the new ultra-fast JavaScript runtime, is written in Zig.

### Go, C, C++

Go isn't new, but its efficient concurrency model and lean memory management make it an increasingly popular choice for backend services that need to run on minimal resources. C and C++ remain indispensable in embedded systems, network equipment, and real-time systems.

### WebAssembly

WebAssembly (WASM) is another underlying trend: running code compiled from low-level languages directly in the browser or server-side, with near-native performance and a much smaller memory footprint than JavaScript.

## This Is Not a Step Backward: It's an Evolution

You often hear the objection: "going back to low-level means sacrificing developer productivity."

That's a short-term view.

Rust today is not C from the 1970s. Modern tooling, package managers (Cargo for Rust), development environments, and active communities make these languages far more accessible than they once were. The learning curve is real, but the gains are structural.

Moreover, not every layer of the stack needs to be rewritten in low-level code. The point is identifying the critical layers: services that run continuously, mobile apps that drain batteries, algorithms that execute millions of times a day. That's where low-level efficiency changes everything.

The automotive industry went through exactly this transition. For decades, power trumped efficiency. Then resource constraints (oil, regulations, cost) forced a revolution: direct injection engines, hybridization, electrification. Modern cars are far more technically complex than those of the 1970s, but they consume two to three times less fuel.

Tech will go through the same transition. Tools that are more complex to build, but which consume infinitely less.

## The Signals Are Already There

This isn't distant speculation. The signals are already visible.

**Cloud costs are exploding.** Many startups that bet everything on AWS or GCP are discovering monthly bills of several hundred thousand euros. The "cloud repatriation" movement is growing: companies are bringing workloads back onto owned hardware to regain cost control.

**Regulators are moving.** The European Union is pushing directives on datacenter energy consumption. The European Green Taxonomy is beginning to classify tech investments by environmental impact. Companies will have to account for their digital emissions.

**Chip makers are plateauing.** Moore's Law is officially dead according to most experts. Performance gains no longer come automatically: they have to be won in software, not waited for from hardware.

**Devices are lasting longer.** Regulatory pressure (right to repair, planned obsolescence) and economic pressure is pushing users to keep their devices longer. Applications that are too resource-hungry and slow down three-year-old devices are becoming a market problem, not just an ethical one.

## What This Means for Developers

This transition will reshape the skills valued in the tech industry.

Knowing how to write functional code in a trendy framework will remain useful. But knowing how to measure the real resource consumption of an application, identify bottlenecks, choose the right level of abstraction for the right problem, and master at least one low-level language: those are the skills that will become differentiating.

Developers who have only ever worked in highly abstracted environments (React, Rails, Django, Node.js) will need to broaden their toolkit. Not to abandon these tools. But to know when to use them and when not to.

The next decade belongs to developers who understand what's really happening beneath the layers of abstraction.

## Conclusion

Tech isn't going to stop. But it's going to have to grow up.

Growing up means accepting that infinite growth is a fiction. That resources have a real cost. That efficiency isn't an old-school constraint: it's an engineering virtue.

Low-level languages like Rust and Zig aren't a nostalgic step backward. They're the rational response of an industry that is beginning to measure the consequences of its excesses. One response among others, but an important one.

The era of bloated software had its decade. The era of lean software is starting now.
