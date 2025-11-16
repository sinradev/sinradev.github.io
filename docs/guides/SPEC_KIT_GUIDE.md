# Spec-Kit Usage Guide for Sinra-Website

Welcome to Spec-Kit development! This guide explains how to use Spec-Kit commands with Claude Code to develop features for Sinra-website.

## Quick Start

The Spec-Kit workflow is straightforward:

```
/speckit.specify
   ↓
/speckit.clarify (optional)
   ↓
/speckit.plan
   ↓
/speckit.checklist (optional)
   ↓
/speckit.tasks
   ↓
/speckit.analyze (optional)
   ↓
/speckit.implement
```

Each step builds on the previous one, ensuring clarity and reducing surprises.

---

## 1. `/speckit.specify` — Define the Feature

**Purpose:** Answer WHAT and WHY before discussing HOW.

**Your task:** Write a clear specification that includes:
- **Problem Statement:** What real problem does this solve?
- **Who Benefits:** Which users/teams benefit?
- **Success Criteria:** How will we know it works?
- **Constraints/Considerations:** Any limitations or special cases?
- **Multilingual Impact:** What changes in EN/FR?
- **Brand Alignment:** How does this reinforce Pragmatisme Élégant?

**Example for a blog feature:**
```
Specification: Add blog post category filtering

PROBLEM: Blog readers struggle to find posts in specific categories
(methodology, capacity planning, etc.). No filtering exists.

WHO BENEFITS: Technical readers looking for posts on specific topics;
SEO benefits from category-based navigation.

SUCCESS CRITERIA:
- Category pages exist for each blog category (EN/FR)
- Blog index shows "Filter by Category" with all categories
- Clicking category shows only posts in that category
- Category pages are indexed by search engines
- No broken links between blog and categories

MULTILINGUAL: EN categories map to FR categories; translations in
_data/en/blog_categories.yml and _data/fr/blog_categories.yml

BRAND ALIGNMENT: Shows operational clarity (clear organization) and
customer focus (helping readers find what they need). Pragmatisme Élégant.
```

---

## 2. `/speckit.clarify` — Resolve Ambiguities (Optional)

**Purpose:** Ask structured questions before planning to de-risk ambiguous areas.

**When to use:** If the specification leaves questions unanswered.

**Example questions Claude Code might ask:**
- Should old category pages 404 or redirect?
- How many posts minimum to create a category page?
- Should category pages show pagination?
- Should search results be category-filtered?

**Your task:** Answer directly and clearly. These answers inform the plan.

---

## 3. `/speckit.plan` — Architecture & Approach

**Purpose:** Describe HOW you'll build it. Architectural decisions, file changes, dependencies.

**Your task:** Claude Code will propose a plan. Review it for:
- **Technical Approach:** Does it fit Jekyll's architecture?
- **File Structure:** Where will new files go? (_includes, _data, _pages, _posts, etc.)
- **Multilingual Handling:** How does EN/FR parity happen?
- **Testing Approach:** How will we validate this locally?
- **Dependencies:** Any new gems or tools needed?
- **Rollout:** Any migration needed for existing data?

**Example plan section:**
```
ARCHITECTURE:
- Create _pages/blog-category-*.en.html and _pages/blog-category-*.fr.html for each category
- Update _data/en/blog_categories.yml and _data/fr/blog_categories.yml to list all categories
- Modify _includes/blog.html to add category filter UI
- Update index.html or blog.html Liquid to support category parameter

FILES TO CREATE/MODIFY:
- Create: _pages/blog-category-methodology.en.html
- Create: _pages/blog-category-methodology.fr.html
- Modify: _data/en/blog_categories.yml (add categories if missing)
- Modify: _data/fr/blog_categories.yml (FR equivalents)
- Modify: _includes/blog.html (add category filter)

TESTING:
- jekyll serve; navigate to /en/blog-category/methodology/
- Verify only methodology posts appear
- Switch to FR; verify /fr/blog-category/methodologie/
- Cross-browser test (Chrome, Firefox, Safari)
```

---

## 4. `/speckit.checklist` — Quality Validation (Optional)

**Purpose:** Generate quality checklists to verify requirements completeness and clarity.

**When to use:** Before planning if you want extra confidence; after planning if the plan is complex.

**Example checklist:**
```
SPECIFICATION COMPLETENESS:
☐ Problem statement is clear and specific
☐ Success criteria are measurable
☐ Multilingual considerations documented
☐ Brand alignment verified against TONE_CONSISTENCY_REPORT.md

PLAN VALIDATION:
☐ File changes are clear and scoped
☐ Dependencies (gems, tools) identified
☐ Multilingual parity plan exists
☐ Testing approach defined
☐ No breaking changes to existing pages
```

---

## 5. `/speckit.tasks` — Actionable Steps

**Purpose:** Generate concrete, ordered tasks you (or Claude Code) will execute.

**Your task:** Review the task list. Should be:
- **Specific:** "Create blog-category-methodology.en.html" (not "create pages")
- **Ordered:** Dependencies respected (data files before pages using them)
- **Testable:** Each task has a clear "done" state
- **Scoped:** Not too big (each task ~30-60 minutes of work)

**Example task:**
```
Task 1: Create YAML data for blog categories
- File: _data/en/blog_categories.yml
- Add entries: methodology, capacity-planning, qa-testing, release-management, team-scaling, compliance
- Verify YAML syntax is valid

Task 2: Create French translations
- File: _data/fr/blog_categories.yml
- Add FR equivalents for each category
- Ensure keys match EN file

Task 3: Create category page template (EN)
- File: _pages/blog-category-methodology.en.html
- Include pagination, post listing for category
- Link back to /en/blog/

... (more tasks)
```

---

## 6. `/speckit.analyze` — Consistency Review (Optional)

**Purpose:** Cross-check artifact consistency & alignment.

**When to use:** Before `/speckit.implement` if the feature is complex.

**Looks for:**
- Spec → Plan alignment (plan addresses all spec requirements)
- Plan → Tasks alignment (tasks implement all plan items)
- Multilingual consistency (EN/FR balanced)
- Tone consistency (content matches Pragmatisme Élégant)
- No contradictions or missing pieces

---

## 7. `/speckit.implement` — Execute

**Purpose:** Claude Code executes the tasks and writes code/content.

**What happens:**
1. Claude Code creates files, updates YAML, modifies templates
2. For each task, it explains what it's doing
3. After all tasks complete, it runs `jekyll build` to validate
4. If there are errors, it fixes them
5. Finally, it commits to git with a clear commit message

**Your task:**
- Monitor the implementation
- Test locally after completion: `jekyll serve`
- Verify multilingual parity (EN and FR working)
- Verify tone alignment (read new content)
- Approve for merge

---

## Constitution Reference

All Spec-Kit work must comply with the **Sinra-Website Constitution** (`.specify/memory/constitution.md`). Key principles:

| Principle | What It Means |
|-----------|---------------|
| **Pragmatisme Élégant** | Content is professional, solution-focused, operationally grounded |
| **Specification-Driven** | Every feature starts with clear WHAT/WHY |
| **Multilingual-First** | EN and FR are equally supported |
| **V-Model + Agile Hybrid** | Use Sinra terminology (issues, capabilities, releases, cycles) |
| **Manual Testing** | No automated tests; validate via jekyll serve + browser |
| **Operational Grounding** | Show confidence through substance, not hype |
| **Jekyll Simplicity** | No complex build tools, linters, or frameworks |

---

## Examples: Using Spec-Kit for Common Tasks

### Add a New Blog Post Category

1. **Specify:** "We need a new blog category for 'Advanced Workflows' to help readers find posts on custom statuses, automation, etc."
2. **Plan:** "Add new YAML entries in _data/*/blog_categories.yml, create category pages, update navigation."
3. **Tasks:** Specific YAML edits, file creates, template updates.
4. **Implement:** Claude Code executes all tasks, tests, and commits.

### Fix a Tone Issue

1. **Specify:** "Testimonial from Sarah M. uses 'incredible' which conflicts with Pragmatisme Élégant. Replace with operational language."
2. **Plan:** "Update _data/en/testimonials.yml and _data/fr/testimonials.yml."
3. **Tasks:** Edit specific testimonial body in both files; test tone consistency.
4. **Implement:** Claude Code updates files, commits.

### Refactor Pricing Page

1. **Specify:** "Pricing page lacks value narrative. Add brief paragraph explaining flexibility and per-seat pricing alignment with team growth."
2. **Plan:** "Update _includes/pricing.html with new intro section; maintain tone consistency."
3. **Tasks:** Write new intro paragraph; review tone; test layout; commit.
4. **Implement:** Claude Code makes changes, validates, commits.

---

## Tips for Success

### ✅ DO
- Write clear, complete specifications (answer WHAT + WHY)
- Include multilingual considerations early
- Reference TONE_CONSISTENCY_REPORT.md for brand voice
- Use Constitution as your north star
- Ask clarifying questions if specs are ambiguous
- Test locally after implementation: `jekyll serve`

### ❌ DON'T
- Skip the specification step (vague requirements = rework)
- Forget multilingual implications (create EN without FR)
- Use hype language ("revolutionary," "game-changing," "disrupt")
- Hardcode strings (use YAML translations)
- Commit without testing locally
- Ignore Constitution principles

---

## Common Gotchas

### **Multilingual Parity**
- If you add a key to `_data/en/strings.yml`, you MUST add it to `_data/fr/strings.yml`
- Use Liquid: `{{ site.data[page.lang].section.key }}`
- Never hardcode strings in templates

### **Tone Consistency**
- Check new testimonials, case studies, and marketing copy against TONE_CONSISTENCY_REPORT.md
- Avoid superlatives; embrace operational grounding
- When in doubt, reference the blog post "V-Model vs Agile" for tone examples

### **Testing Coverage**
- Always run `jekyll build` to ensure no errors
- Always test with `jekyll serve` locally (Chrome, Firefox, Safari)
- Manually verify both `/en/` and `/fr/` routes
- Check that all internal links work

### **Git Cleanliness**
- Commit frequently with clear messages
- Use conventional commit format (🎨 style, ✨ feature, 🐛 fix, 📝 docs)
- Reference spec or issue number if applicable
- Keep commits atomic (one logical change per commit)

---

## Getting Help

- **For Constitution questions:** Refer to `.specify/memory/constitution.md`
- **For brand voice questions:** Refer to `TONE_CONSISTENCY_REPORT.md`
- **For development guidance:** Refer to `CLAUDE.md`
- **For methodology examples:** Read the blog post "V-Model vs Agile: Why False Choices Kill Projects"
- **For ambiguity:** Use `/speckit.clarify` to ask structured questions

---

## Quick Reference: Spec-Kit Commands

```
/speckit.specify      — Define requirements (WHAT + WHY)
/speckit.clarify      — Ask structured questions (optional)
/speckit.plan         — Plan architecture and approach
/speckit.checklist    — Generate quality checklists (optional)
/speckit.tasks        — Break into actionable steps
/speckit.analyze      — Check consistency (optional)
/speckit.implement    — Execute implementation
```

Start with `/speckit.specify` for your next feature. Good luck! 🚀

---

**Last Updated:** 2025-11-14
**For:** Sinra-Website with Spec-Kit
