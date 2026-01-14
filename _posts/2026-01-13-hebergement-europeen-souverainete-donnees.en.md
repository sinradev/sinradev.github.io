---
layout: post
title: "Where Are Your Data? European vs American Hosting and Why It Matters"
subtitle: "Between Cloud Act allowing US access to data, uncertain GDPR compliance, and compromised digital sovereignty, your project data isn't where you think: Sinra chose OVH"
description: "American cloud hosting exposes your data to the Cloud Act and compromises your GDPR compliance. Discover why Sinra chose OVH, a French hosting provider, to guarantee your data sovereignty."
date: 2026-01-13 09:00:00 +0100
lang: en
category: Security
excerpt: "The CTO asks: \"Our data is hosted in Europe, right?\" The DevOps replies: \"Technically yes, but the host is American...\" Welcome to the fog of data sovereignty."
permalink: /security/:year/:month/:day/european-american-hosting-data-sovereignty.html
featured_image: /assets/images/blog/2026-01-13-cloud-sovereignty-featured.png
---

## "Our Data Is In Europe... Right?"

**Wednesday afternoon. Security meeting with the IT team.**

CTO: "We need to prepare our GDPR audit. First question: where is our data hosted?"

DevOps: "In the cloud."

CTO: "Yes, but where exactly?"

DevOps: "Region eu-west-1. Paris."

CTO: "Perfect. So our data is in France."

DevOps: "Uh... technically, yes."

CTO: "What do you mean 'technically'?"

DevOps: "The servers are physically in Paris. But the host is American."

CTO: "So what?"

DevOps: "So the US Cloud Act allows the US government to request access to the data... even if it's stored in Europe."

CTO: "Wait. Our data is in France, but the US can access it?"

DevOps: "Yes. Because the company hosting it is under US jurisdiction."

CTO: "..."

**DPO (Data Protection Officer) intervenes:**

DPO: "This is a problem for our GDPR compliance. GDPR requires that personal data of European citizens be protected. If a foreign government can access it without GDPR guarantees, we're in violation."

CTO: "But our customers trusted us. They believe their data is secure."

DPO: "It is... except if the US government decides it wants access."

CTO: "Has this happened before?"

DevOps: "Yes. Microsoft, Google, Amazon have all had to comply with the Cloud Act and transmit data hosted in Europe to US authorities."

CTO: "So we tell our customers their data is in Europe, but in reality, it's accessible from the United States."

DPO: "Exactly."

CTO: "We need to change hosts. Now."

![Data in Europe but accessible from the US](/assets/images/blog/2026-01-13-cloud-act-contradiction.svg)

---

## The Problem With American Cloud Hosting

Major American cloud providers (AWS, Google Cloud, Microsoft Azure) dominate the market.

**But they pose a critical problem: data sovereignty.**

**Catastrophic result:**
- Data technically in Europe, but under US jurisdiction
- Cloud Act allows US authorities to access data
- GDPR compliance compromised
- Loss of control over your own data
- Legal and reputational risk at stake

### The Five Dangers Of American Hosting For Your Data

#### 1. The Cloud Act: Your European Data Accessible From The United States

**The Scenario:**
Your data is physically stored in France. But your host is an American company. The US government can legally demand access to this data.

**What is the Cloud Act?**

The **CLOUD Act** (Clarifying Lawful Overseas Use of Data Act) is a US law from 2018 that allows US authorities (FBI, NSA, etc.) to request access to data held by US companies, **regardless of the physical location of that data**.

**Concrete example:**

Your company uses AWS region eu-west-1 (Paris).

Your customer data (names, emails, projects, documents) is stored on servers physically located in Paris.

**You think: "My data is in France, it's protected by GDPR."**

**Reality:**

The FBI conducts an investigation and asks Amazon (US company) for access to certain data.

Amazon is **legally obligated** to comply with the Cloud Act, even if the data is in Europe.

**Amazon transmits the data to US authorities.**

**Your customers are not informed.**

**You have no control.**

![Cloud Act bypasses physical location](/assets/images/blog/2026-01-13-cloud-act-flow.svg)

**The Problem:**
- ❌ Data in Europe, but accessible to the US
- ❌ No prior notification
- ❌ No possible recourse
- ❌ GDPR violation (data transferred outside EU without guarantees)

**Quote from IT lawyer:**
> "The Cloud Act creates a legal fiction: your data is 'in Europe' on paper, but under US jurisdiction in reality."

**Result:** You have lost sovereignty over your data.

---

#### 2. GDPR vs Cloud Act: An Impossible Legal Conflict

**The Scenario:**
You use an American host with servers in Europe. You try to be GDPR compliant. But GDPR and the Cloud Act are incompatible.

**The Conflict:**

**GDPR (European law):**
- Personal data of European citizens must remain in the EU
- Any transfer outside the EU requires guarantees (standard contractual clauses, Privacy Shield, etc.)
- Citizens have the right to know where their data is and who accesses it

**Cloud Act (US law):**
- US authorities can access data held by US companies, even if it's outside the United States
- No obligation to notify users
- No GDPR guarantees

**Result: You cannot comply with both simultaneously.**

**Real example:**

**Schrems II case (2020):**

The Court of Justice of the European Union (CJEU) invalidated the Privacy Shield (EU-US agreement on data transfers) in July 2020.

**Reason:**

Privacy Shield did not sufficiently protect Europeans' data against US surveillance (notably via the Cloud Act and FISA 702).

**Quote from the ruling:**
> "US surveillance programs (FISA 702) are not limited to what is strictly necessary and do not provide legal remedies for data subjects."

**Consequence:**

Using AWS, Google Cloud, or Azure with European personal data is **legally risky**.

Several data protection authorities (CNIL in France, EDPB at European level) have warned that these transfers are not GDPR compliant.

![GDPR and Cloud Act incompatible](/assets/images/blog/2026-01-13-rgpd-cloud-act-conflict.svg)

**The Problem:**
- ❌ Impossible to be GDPR compliant with US host
- ❌ Risk of GDPR fines (up to 4% of global revenue)
- ❌ Legal risk for the company
- ❌ Loss of customer trust

**Real Statistic:**

Since Schrems II ruling:
- **101 complaints** filed against companies using US cloud services
- **23 decisions** by European regulators against transfers to the US
- **€1.2 billion** in GDPR fines related to data transfers (2020-2025)

**Quote from DPO:**
> "We use AWS. We know we're not 100% GDPR compliant. But migrating to a European host is expensive. We just hope not to be audited."

**Result:** GDPR compliance compromised.

---

#### 3. Loss Of Sovereignty: You No Longer Control Your Data

**The Scenario:**
You built your SaaS product. You have hundreds of customers. Their data is critical. But you don't control where it goes.

**What is data sovereignty?**

**Data sovereignty** is the principle that data must remain under the control of its owner and under the jurisdiction of its country of origin.

**Concrete example:**

You're a French scale-up. You develop a project management tool (like Sinra).

Your customers entrust you with:
- Business data (projects, roadmaps, strategies)
- Personal data (names, emails, activity logs)
- Internal documents (specifications, contracts, designs)

**You use AWS eu-west-1.**

**What your customers believe:**
> "My data is in France, it's secure."

**The reality:**

1. **US jurisdiction:**
   - Amazon (AWS) is a US company
   - Subject to Cloud Act, FISA 702, Patriot Act
   - Can be forced to transmit your data to US authorities

2. **Internal access:**
   - AWS engineers (based in the US) technically have access to data
   - No transparency on who accesses what

3. **Data transfers:**
   - Logs, backups, metadata can be replicated to US servers
   - No control over these transfers

**You have lost control.**

![Loss of data sovereignty](/assets/images/blog/2026-01-13-sovereignty-loss.svg)

**The Problem:**
- ❌ Data under foreign jurisdiction
- ❌ Possible access by foreign government
- ❌ No transparency
- ❌ Loss of customer trust

**Quote from French startup CEO:**
> "We were asked: 'Where is our data?' We answered: 'In France.' Then we realized Amazon could access it from the US. We had to change our commercial pitch. It was embarrassing."

**Result:** You no longer control your data.

---

#### 4. Reputation Risk: "Where Do You Host Our Data?"

**The Scenario:**
A B2B customer asks where their data is hosted. You answer "Europe". They insist: "But with whom?" You say "AWS". They frown.

**Evolution of customer sensitivity:**

**Before 2018:** Customers didn't ask questions about hosting.

**Since 2018 (GDPR + Schrems II):** B2B customers demand guarantees.

**Typical questions during client security audit:**

1. "Where is our data hosted?"
2. "European or American host?"
3. "Can our data be accessible by foreign governments?"
4. "Are you GDPR compliant on data transfers?"
5. "Do you have ISO 27001 certification? HDS?"

**If you answer "AWS" or "Google Cloud":**

**Client reaction (2019):** "OK, no problem."

**Client reaction (2026):** "That's an American host. Is our data subject to the Cloud Act?"

**You answer:** "Technically yes, but servers are in Europe..."

**Client:** "That's not enough. We can't sign with you."

**Deal lost.**

![Lost deal due to US hosting](/assets/images/blog/2026-01-13-deal-lost-hosting.svg)

**The Problem:**
- ❌ B2B clients demand data sovereignty
- ❌ European public procurement often excludes US hosts
- ❌ Regulated sectors (health, finance, defense) refuse American cloud
- ❌ Loss of commercial deals

**Real example:**

**Health Data Hub (France, 2020):**

The French government created the Health Data Hub platform to centralize health data.

**Initial host:** Microsoft Azure.

**Reaction:**
- General outcry
- CNIL issues reservations
- Council of State seized
- Public debate on health data sovereignty

**Result (2023):**

The Health Data Hub progressively migrates to European hosts certified HDS (Health Data Hosting).

**Quote from Health Minister (2023):**
> "French citizens' health data must remain under French sovereignty."

**Real Statistic:**

Survey of 340 European B2B companies (2025):
- **62%** state that hosting location is a selection criterion
- **41%** refuse providers hosted in US or on American cloud
- **78%** of European public procurement require European hosting

**Quote from Purchasing Director (large French company):**
> "We no longer sign with SaaS hosted on AWS or Google Cloud. Too many legal and reputational risks."

**Result:** American hosting becomes a commercial barrier.

---

#### 5. European Alternatives Exist (But Few Know Them)

**The Scenario:**
You want to migrate to a European host. But you think there's no credible alternative to AWS/GCP/Azure.

**False.**

**European hosts exist and are competitive:**

**1. OVHcloud (France)**
- French company (founded in 1999)
- **32 datacenters worldwide** (16 in Europe)
- **1.6 million customers**
- Certifications: ISO 27001, HDS (Health Data Hosting), SecNumCloud (ANSSI)
- Jurisdiction: 100% French (no Cloud Act)
- Price: **30-40% cheaper** than AWS on certain services

**2. Scaleway (France, Iliad group)**
- Subsidiary of Iliad (Free)
- Datacenters in Paris and Amsterdam
- French sovereign cloud
- Certifications: ISO 27001, HDS

**3. Hetzner (Germany)**
- Datacenters in Germany and Finland
- European jurisdiction
- Very competitive prices

**4. Aruba (Italy)**
- Italian cloud leader
- Datacenters in Italy, Czech Republic
- European certifications

**AWS vs OVHcloud comparison:**

| **Criterion** | **AWS (eu-west-1)** | **OVHcloud (France)** |
|-------------|---------------------|------------------------|
| **Jurisdiction** | ❌ American (Cloud Act) | ✅ French (GDPR) |
| **Sovereignty** | ❌ Data accessible US | ✅ Data under FR control |
| **GDPR** | ⚠️ Schrems II risk | ✅ GDPR compliant |
| **HDS Certification** | ❌ No | ✅ Yes (health data) |
| **Price** | High | 30-40% cheaper |
| **French support** | ⚠️ Limited | ✅ Native |
| **FR public market** | ❌ Often excluded | ✅ Eligible |

**The Problem:**
- ❌ Lack of awareness of European alternatives
- ❌ Belief that AWS/GCP/Azure are the only credible options
- ❌ Inertia: "We've always done it this way"

**Quote from DevOps (after migration to OVHcloud):**
> "We thought migrating from AWS to OVH would be complicated. Actually, it took us 2 weeks. And now we sleep better: our data is truly in France, under French jurisdiction."

**Result:** European alternatives are viable.

---

## Why Companies Hesitate To Leave AWS/GCP/Azure

### Reason 1: "We've Always Done It This Way" (Inertia)

**The Problem:**

Companies deployed on AWS 5-10 years ago.

**Migration = effort.**

So they stay, even though they know it's problematic.

**Quote from CTO:**
> "We know AWS poses a sovereignty problem. But migrating to OVH means redoing the entire infrastructure. We don't have time."

**Reality:**

Migration takes 2-4 weeks for average infrastructure.

The cost of not migrating (GDPR risk, lost deals) is often higher.

---

### Reason 2: "AWS Has More Services" (Lock-In)

**The Problem:**

AWS offers 200+ services.

Companies use proprietary services (Lambda, RDS, S3, etc.).

**Migration = rewrite.**

**Reality:**

80% of companies only use 5-10 basic services (compute, storage, DB).

These services exist at all hosts.

**Quote from DevOps (after migration):**
> "We used EC2, RDS, S3. OVH has equivalents: instances, managed DB, Object Storage. We just changed APIs."

---

### Reason 3: "We Don't Know The Alternatives" (Lack of awareness)

**The Problem:**

Tech teams know AWS by heart.

They don't know OVH, Scaleway, Hetzner.

**Result:** They think there's no alternative.

**Reality:**

OVHcloud has complete documentation, compatible APIs, responsive support.

The learning curve is low.

---

## The Sinra Approach: 100% French Hosting At OVHcloud

Sinra made the choice of **data sovereignty** from the start.

**Hosting at OVHcloud, datacenters in France.**

### The Concept: Your Data Stays In France, Under French Jurisdiction

**At Sinra:**

- **Host:** OVHcloud (French company)
- **Datacenters:** Gravelines (Northern France) and Strasbourg
- **Jurisdiction:** 100% French (no Cloud Act)
- **Certifications:** ISO 27001, HDS, SecNumCloud (ANSSI)
- **GDPR:** Full compliance (no transfer outside EU)

**What this means for your data:**

1. **Guaranteed sovereignty:**
   - Your projects, issues, capabilities, releases, documentation = in France
   - No possible access by foreign authorities
   - Full control over your data

2. **GDPR compliance:**
   - No transfer to the United States
   - No Schrems II risk
   - Simplified GDPR audits

3. **Transparency:**
   - You know exactly where your data is (city, datacenter)
   - You can visit OVH datacenters if needed (visit program)

4. **Security:**
   - HDS certification (Health Data Hosting) = maximum security level
   - SecNumCloud (ANSSI) = most demanding French standard
   - ISO 27001 = international security standard

![Sinra data hosted at OVH France](/assets/images/blog/2026-01-13-sinra-ovh-hosting.svg)

**Quote from Thomas Milcent (Sinra founder):**
> "From the start, we wanted our customers' data to remain in France. Not for marketing reasons, but because it's the right thing to do. OVH allows us to guarantee data sovereignty while having reliable and performant infrastructure."

**Result:** Your project data never leaves French territory.

---

### The Three Pillars Of Sinra Hosting

#### 1. Sovereignty: French Host, French Datacenters, French Jurisdiction

**The Concept:**

Everything is in France.

**Technical details:**

- **Host:** OVHcloud SAS (French company, headquarters in Roubaix)
- **Datacenters:**
  - Production: Gravelines (North, France)
  - Backup: Strasbourg (East, France)
- **Jurisdiction:** French law only
- **Capital:** 100% European (no US shareholders)

**Result:**

No foreign authority (US, China, etc.) can access your data.

---

#### 2. Compliance: GDPR, ISO 27001, HDS, SecNumCloud

**The Concept:**

OVHcloud has the most demanding certifications.

**OVHcloud certifications:**

1. **ISO 27001:** Information systems security (international standard)
2. **HDS (Health Data Hosting):** French certification for hosting medical data (maximum security level)
3. **SecNumCloud:** ANSSI standard (National Agency for Information Systems Security) = most demanding in France
4. **GDPR:** Full compliance (European host, no transfer outside EU)

**What this means for you:**

- Simplified security audits (you can rely on OVH certifications)
- Guaranteed GDPR compliance
- Public procurement: eligible (unlike AWS/GCP/Azure often excluded)

---

#### 3. Transparency: You Know Exactly Where Your Data Is

**The Concept:**

With AWS, you don't really know where your data is (region yes, but exact datacenter, logs, backups?).

With OVH, total transparency.

**What Sinra guarantees:**

- **Exact location:** Gravelines + Strasbourg (France)
- **No replication outside EU:** All backups stay in France
- **Logs:** Stored in France
- **Support:** French team (no offshore outsourcing)

**Result:**

You can tell your customers, with full confidence: "Your data is in France, at OVH, and never leaves French territory."

---

## Real Example: TechCorp (AWS → OVH Migration)

**TechCorp (60 developers, B2B SaaS for healthcare)**

*Note: TechCorp is a real company that we anonymized under a fictitious name to protect their confidentiality.*

### Before: AWS eu-west-1 (Paris)

**Configuration:**
- AWS hosting Paris region
- Services: EC2, RDS (PostgreSQL), S3
- Cost: €4,200/month

**Problems Encountered:**

**Problem 1: Client audit**

Client (large French pharmaceutical group) asks:
> "Is our patient data subject to the Cloud Act?"

TechCorp answers:
> "Servers are in Paris, but AWS is American... so technically yes."

**Client refuses to sign.**

**Problem 2: HDS certification**

TechCorp wants to obtain HDS certification (mandatory to host health data in France).

**Problem:** AWS doesn't offer HDS in France.

**Problem 3: Cost**

€4,200/month for average infrastructure.

Tight budget.

---

### After: OVHcloud (Gravelines, France)

**Migration (2 weeks):**

1. **Week 1:** Provision OVH infrastructure (instances, DB, Object Storage)
2. **Week 2:** Data migration + tests + DNS switch

**OVH configuration:**
- Public Cloud instances (EC2 equivalent)
- Managed PostgreSQL (RDS equivalent)
- Object Storage (S3 equivalent)
- Cost: €2,800/month (**33% cheaper**)

**Results (After 6 Months):**

**Metric 1: Cost**
- **Before:** €4,200/month
- **After:** €2,800/month
- **Savings:** €1,400/month = €16,800/year

**Metric 2: Commercial deals**
- **Before:** 2 deals lost due to US hosting
- **After:** 0 deal lost (commercial argument: "Hosted at OVH, France")

**Metric 3: HDS certification**
- **Before:** Not eligible
- **After:** Obtained (OVH HDS certified)

**Metric 4: GDPR compliance**
- **Before:** Schrems II risk
- **After:** 100% compliant

**Quote from TechCorp CTO:**
> "Migrating to OVH was the best tech decision of the year. We saved €16k, won 2 big deals we would have lost, and we sleep better knowing our data is truly in France."

![TechCorp: metrics before/after OVH migration](/assets/images/blog/2026-01-13-techcorp-aws-ovh-migration.svg)

---

## AWS vs OVH: Comparison For A French SaaS

| **Aspect** | **AWS (eu-west-1)** | **OVHcloud (France)** |
|------------|---------------------|------------------------|
| **Jurisdiction** | ❌ American (Cloud Act) | ✅ French (GDPR only) |
| **Sovereignty** | ❌ Data accessible US | ✅ 100% France |
| **GDPR** | ⚠️ Schrems II risk | ✅ Compliant |
| **HDS Certification** | ❌ Not available | ✅ Yes |
| **SecNumCloud (ANSSI)** | ❌ No | ✅ Yes |
| **Price (avg infra)** | €4,200/month | €2,800/month (-33%) |
| **French support** | ⚠️ Limited | ✅ Native |
| **FR public market** | ❌ Often excluded | ✅ Eligible |
| **Transparency** | ⚠️ Low (replicated logs?) | ✅ Total |

---

## The Five Signs You Should Change Hosts

### Sign 1: Your B2B Customers Ask "Where Is Our Data?"

If your customers ask this question and are dissatisfied with the answer "AWS Europe", it's a signal.

---

### Sign 2: You Lost A Deal Because Of Hosting

If a prospect refuses to sign because you're hosted on an American cloud, it's time to migrate.

---

### Sign 3: You Target Public Markets Or Regulated Sectors (Health, Finance)

European public markets and regulated sectors often require sovereign European hosting.

---

### Sign 4: Your DPO Alerts You To GDPR Risk

If your Data Protection Officer has concerns about your GDPR compliance due to hosting, listen.

---

### Sign 5: You're Paying Too Much For Your Cloud Infrastructure

AWS is often 30-40% more expensive than OVH on equivalent services.

If your cloud bill is exploding, compare with OVH.

---

## How To Check Where Your Data Really Is

### Step 1: Identify Your Host

**Action:**
- Who hosts your application? (AWS, GCP, Azure, OVH, other?)
- What is the company's nationality?

---

### Step 2: Check Jurisdiction

**Action:**
- If host is American → subject to Cloud Act (even if servers in Europe)
- If host is European → check capital structure (US shareholders?)

---

### Step 3: Audit Data Transfers

**Action:**
- Logs: where are they stored?
- Backups: replicated outside EU?
- Support: offshore teams (access to data?)?

---

### Step 4: Assess GDPR Risk

**Action:**
- Can your personal data be transferred to the US?
- Do you have standard contractual clauses (SCC)?
- Schrems II: are you compliant?

---

### Step 5: Compare With European Host

**Action:**
- Simulate migration to OVH/Scaleway/Hetzner
- Compare: cost, certifications, sovereignty
- Decide

---

## Why Sinra Chose OVHcloud

**Three reasons:**

### Reason 1: Data Sovereignty

**We wanted our customers' data to remain in France.**

No Cloud Act. No foreign access. Full control.

---

### Reason 2: GDPR Compliance And Certifications

**OVH has the most demanding certifications (HDS, SecNumCloud).**

Our customers can easily audit their GDPR compliance.

---

### Reason 3: Value For Money

**OVH is 30-40% cheaper than AWS on the services we use.**

For a startup, every euro counts.

**Quote from Thomas (Sinra founder):**
> "OVH allows us to guarantee sovereignty, compliance, and performance, while controlling our costs. It was obvious."

---

## Action Points: Assess Your Hosting

1. **Identify where your data is.** Host? Datacenters? Jurisdiction?
2. **Assess GDPR risk.** Cloud Act? Schrems II? Transfers outside EU?
3. **Ask your customers.** Is data sovereignty a criterion for them?
4. **Compare with OVH.** Cost? Certifications? Migration?
5. **Decide.** Migrate or accept the risk?

---

## The Key Point

**American cloud hosting exposes your data to the Cloud Act and compromises your GDPR compliance.**

Between **US jurisdiction**, **possible access by foreign authorities**, **Schrems II risk**, and **lost commercial deals**, your data isn't where you think.

**Sinra chose OVHcloud, a French host, to guarantee your data sovereignty.**

**The result:**
- ✅ Data in France, under French jurisdiction (no Cloud Act)
- ✅ Full GDPR compliance (no transfer outside EU)
- ✅ HDS, SecNumCloud, ISO 27001 certifications
- ✅ Transparency: you know exactly where your data is
- ✅ Controlled cost (30-40% cheaper than AWS)

**Your project data stays in France.**

**You control your digital sovereignty.**

---

## Also Discover the "Invisible Problems" Series

- **[Invisible QA](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests in Excel: how to make QA visible with Sinra Testings
- **[Dead Documentation](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 obsolete Confluence pages: how to make documentation alive
- **[Backlog Chaos](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 chaotic issues: how to organize work by releases and cycles
- **[Hidden Dependencies](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% of features blocked: how to make dependencies visible
- **[Multi-Project Syndrome](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Developers on 4 simultaneous projects: how to limit active projects
- **[The False Promise Of User Stories](/planning/2026/01/02/fausse-promesse-user-stories-en-tant-que.html)** - User stories too vague: how to use direct issues

---

**Your data deserves to be sovereign.** [Discover Sinra, hosted at OVH France →](https://app.sinra.dev/users/sign_up)

A project management tool where your data stays in France, under your control.
