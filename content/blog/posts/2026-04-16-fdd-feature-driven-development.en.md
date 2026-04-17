---

title: "FDD (Feature Driven Development): Deliver Features, Not Processes"
subtitle: "Feature Driven Development: the agile method centered on features for large teams"
description: "FDD (Feature Driven Development) is an agile method organizing development around short, deliverable features. Discover its 5 processes, best practices and why it excels for large teams."
categories: ["Methodology"]
date: 2026-05-08 09:00:00 +0100
excerpt: "While Scrum organizes work in sprints, FDD organizes it in features. One feature = 2 days maximum. This simple constraint transforms how teams think and deliver."
featured_image: /assets/images/blog/2026-04-16-fdd-feature-driven-development-featured.png
---

## What is FDD?

**FDD** (Feature Driven Development) is an agile development method created by Jeff De Luca and Peter Coad in 1997 for a banking project in Singapore (150 developers). It is described in "Java Modeling in Color with UML" (1999) and popularized in "A Practical Guide to Feature-Driven Development" (2002).

Its central proposition is simple but powerful: **organize all development around short, deliverable features**. A feature is defined as "a client-valued action, as small as possible". The golden rule: **a feature must be developable in 2 weeks maximum** (ideally 2-5 days).

## The 5 FDD Processes

**Process 1: Develop an Overall Model**
A team of domain experts and architects develops a high-level object model of the system. This model guides all future design decisions. It is built in collaborative workshops in 1-2 weeks.

**Process 2: Build a Feature List**
The global model is decomposed into a feature list organized in hierarchy:
- **Domain**: main business area (e.g. "Customer Management")
- **Activity Set**: group of features (e.g. "Create a Customer")
- **Feature**: individual feature (e.g. "Create a particular customer account")

**Process 3: Plan by Feature**
Features are prioritized and assigned to teams. Feature Owners and Class Owners are designated.

**Process 4: Design by Feature**
For each feature group, a Chief Programmer plans a design iteration. The team creates sequence diagrams, detailed design artifacts.

**Process 5: Build by Feature**
Developers implement features per designs created. Each feature goes through code inspection, unit testing, and integration before being marked complete.

## FDD Best Practices

FDD defines 6 "best practices" specific to it:

1. **Domain Object Modeling**: model business domain through colored objects (FDD-specific notation)
2. **Developing by Feature**: all development happens in context of a feature
3. **Individual Class (Code) Ownership**: each code class has an owner responsible for it
4. **Feature Teams**: small dynamic teams formed for each feature
5. **Inspections**: formal code reviews per Fagan process
6. **Regular Builds**: regular builds with always-available reference version
7. **Configuration Management**: rigorous version control
8. **Reporting/Visibility**: clear, regular progress reporting

## FDD vs Scrum: What's the Difference?

| Criterion | FDD | Scrum |
|---------|-----|-------|
| Unit of work | Feature (2 weeks max) | User story / Sprint |
| Roles | Architect, Dev Manager, Class Owner, Feature Owner, Domain Expert | Product Owner, Scrum Master, Dev Team |
| Planning | Long term possible (complete feature list) | Progressive backlog |
| Team size | Scalable (large teams) | Small teams (5-9) |
| Modeling | UML + Domain Modeling | Rare, often informal |
| Documentation | Domain model | User stories |

## FDD for Large Teams

FDD is one of the rare agile methods explicitly designed for **large teams** (50-200+ developers). Where Scrum recommends teams of 5-9 (and uses Scrum of Scrums for scaling), FDD natively organizes work for large teams through its domain/activity set/feature hierarchy.

## FDD and Sinra

The FDD hierarchy (domain, activity set, feature) maps naturally to Sinra structure. **Capabilities** correspond to FDD Activity Sets, **issues** to individual features. **Releases** group completed features, and **cycles** correspond to Design and Build iterations per feature.

FDD's "Class Owner" notion resonates with **roles** and assignments in Sinra, where each issue can have a clearly designated owner.

The FDD Feature List, built in phase 2 as complete catalog of all features to develop, corresponds precisely to a Sinra **project**: a set of capabilities organized in Gantt view giving long-term visibility on everything the team wants to build, before development cycles even start.

## Conclusion

FDD is an underestimated agile method, particularly for organizations managing large teams needing more structure than Scrum without RUP's weight. Its strict feature definition (deliverable in 2 weeks maximum) is a helpful discipline forcing teams to decompose work into tangible, measurable units.
