# Tasks: Add Spanish Language Support

**Input**: Design documents from `/specs/006-spanish-language/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Not requested for this feature (static site with manual verification)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Configuration changes that enable Spanish language support

- [ ] T001 Update _config.yml to add "es" to languages array (change line 57 from `languages: ["en", "fr"]` to `languages: ["en", "fr", "es"]`)
- [ ] T002 Create _data/es/ directory for Spanish translation files
- [ ] T003 Verify Jekyll server restarts successfully after config change

---

## Phase 2: User Story 1 - Spanish-Speaking Visitor Browses Website (Priority: P1) 🎯 MVP

**Goal**: Enable Spanish-speaking visitors to browse all main website pages (home, about, pricing, contact, comparisons) in Spanish with fully translated content

**Independent Test**: Navigate to /es/ and verify all main pages display Spanish content. Test language selector shows EN/FR/ES options.

**Acceptance Criteria**:
1. Visitor selects Spanish from language selector → redirected to Spanish homepage
2. Direct navigation to /es/ → complete homepage in Spanish
3. Navigation between Spanish pages maintains Spanish language context

### Spanish Data Files for User Story 1

- [ ] T004 [P] [US1] Create _data/es/strings.yml with AI-generated Spanish translations of _data/en/strings.yml (hero, about, pricing, contact, blog, common, meta sections)
- [ ] T005 [P] [US1] Create _data/es/navigation.yml with Spanish navigation menu labels from _data/en/navigation.yml
- [ ] T006 [P] [US1] Create _data/es/index_features.yml with Spanish feature descriptions from _data/en/index_features.yml
- [ ] T007 [P] [US1] Create _data/es/index_sections.yml with Spanish homepage sections from _data/en/index_sections.yml
- [ ] T008 [P] [US1] Create _data/es/pricing.yml with Spanish pricing page content from _data/en/pricing.yml
- [ ] T009 [P] [US1] Create _data/es/pricing_faq.yml with Spanish pricing FAQs from _data/en/pricing_faq.yml
- [ ] T010 [P] [US1] Create _data/es/contact_faq.yml with Spanish contact FAQs from _data/en/contact_faq.yml
- [ ] T011 [P] [US1] Create _data/es/footer.yml with Spanish footer content from _data/en/footer.yml
- [ ] T012 [P] [US1] Create _data/es/testimonials.yml with Spanish testimonials from _data/en/testimonials.yml (translate quotes and roles, keep author/company names)
- [ ] T013 [P] [US1] Create _data/es/case_studies.yml with Spanish case studies from _data/en/case_studies.yml
- [ ] T014 [P] [US1] Create _data/es/comparisons.yml with Spanish competitor comparison content from _data/en/comparisons.yml
- [ ] T015 [P] [US1] Create _data/es/promotion.yml with Spanish promotional content from _data/en/promotion.yml
- [ ] T016 [P] [US1] Create _data/es/trusted_clients.yml with client names from _data/en/trusted_clients.yml (keep company names unchanged)

### Spanish Page Templates for User Story 1

- [ ] T017 [P] [US1] Create _pages/about.es.html with page_id: about, lang: es, Spanish description, include about.html
- [ ] T018 [P] [US1] Create _pages/pricing.es.html with page_id: pricing, lang: es, Spanish description, include pricing.html
- [ ] T019 [P] [US1] Create _pages/contact.es.html with page_id: contact, lang: es, Spanish description, include contact.html
- [ ] T020 [P] [US1] Create _pages/contact-success.es.html with page_id: contact-success, lang: es, Spanish description, include contact-success.html
- [ ] T021 [P] [US1] Create _pages/compare.es.html with page_id: compare, lang: es, Spanish description, include comparison.html
- [ ] T022 [P] [US1] Create _pages/compare-jira.es.html with page_id: compare-jira, lang: es, Spanish description, include comparison.html
- [ ] T023 [P] [US1] Create _pages/compare-asana.es.html with page_id: compare-asana, lang: es, Spanish description, include comparison.html
- [ ] T024 [P] [US1] Create _pages/compare-monday.es.html with page_id: compare-monday, lang: es, Spanish description, include comparison.html

### Manual Verification for User Story 1

- [ ] T025 [US1] Start Jekyll server with bundle exec jekyll serve
- [ ] T026 [US1] Verify /es/ homepage loads with Spanish content (check hero, features, sections)
- [ ] T027 [US1] Verify /es/about/ loads with Spanish content
- [ ] T028 [US1] Verify /es/pricing/ loads with Spanish pricing plans and FAQ
- [ ] T029 [US1] Verify /es/contact/ loads with Spanish contact form and FAQ
- [ ] T030 [US1] Verify /es/compare/ and comparison pages load in Spanish
- [ ] T031 [US1] Verify language selector shows EN, FR, ES options
- [ ] T032 [US1] Test language switching from Spanish to English and French
- [ ] T033 [US1] Verify no broken links or missing images on Spanish pages
- [ ] T034 [US1] Verify SINRA terminology (issues, capabilities, releases, cycles) remains in English per CLAUDE.md guidelines

**Checkpoint**: At this point, User Story 1 should be fully functional - all main website pages accessible in Spanish

---

## Phase 3: User Story 2 - Spanish-Speaking Visitor Reads Blog Posts (Priority: P2)

**Goal**: Enable Spanish-speaking visitors to access and read all blog posts in Spanish

**Independent Test**: Navigate to /es/blog/ and click on any article to verify Spanish content. Verify blog categories display in Spanish.

**Acceptance Criteria**:
1. Spanish blog index page shows list of blog posts with Spanish titles and excerpts
2. Clicking a Spanish blog post → full article content displays in Spanish
3. Blog categories display in Spanish on blog posts

### Spanish Data Files for User Story 2

- [ ] T035 [US2] Create _data/es/blog_categories.yml with Spanish category names and descriptions from _data/en/blog_categories.yml (keep slugs unchanged)

### Spanish Page Templates for User Story 2

- [ ] T036 [P] [US2] Create _pages/blog.es.html with page_id: blog, lang: es, Spanish description, include blog.html
- [ ] T037 [P] [US2] Create _pages/blog-category-methodology.es.html with page_id: blog-category-methodology, lang: es, Spanish description
- [ ] T038 [P] [US2] Create _pages/blog-category-release-management.es.html with page_id: blog-category-release-management, lang: es, Spanish description
- [ ] T039 [P] [US2] Create _pages/blog-category-team-scaling.es.html with page_id: blog-category-team-scaling, lang: es, Spanish description
- [ ] T040 [P] [US2] Create _pages/blog-category-qa-testing.es.html with page_id: blog-category-qa-testing, lang: es, Spanish description
- [ ] T041 [P] [US2] Create _pages/blog-category-compliance.es.html with page_id: blog-category-compliance, lang: es, Spanish description
- [ ] T042 [P] [US2] Create _pages/blog-category-capacity-planning.es.html with page_id: blog-category-capacity-planning, lang: es, Spanish description

### Spanish Blog Posts for User Story 2

- [ ] T043 [P] [US2] Create _posts/2024-11-13-vmodel-vs-agile-choose-both.es.md with AI-generated Spanish translation of _posts/2024-11-13-vmodel-vs-agile-choose-both.en.md (translate title, subtitle, description, excerpt, full content; keep lang: es)
- [ ] T044 [P] [US2] Create _posts/2025-11-21-why-we-abandoned-sprints-for-cycles.es.md with AI-generated Spanish translation of _posts/2025-11-21-why-we-abandoned-sprints-for-cycles.en.md
- [ ] T045 [P] [US2] Create _posts/2025-11-26-from-issue-to-release.es.md with AI-generated Spanish translation of _posts/2025-11-26-from-issue-to-release.en.md
- [ ] T046 [P] [US2] Create _posts/2025-12-01-release-driven-development.es.md with AI-generated Spanish translation of _posts/2025-12-01-release-driven-development.en.md
- [ ] T047 [P] [US2] Create _posts/2025-12-03-tools-flexibility-trap.es.md with AI-generated Spanish translation of _posts/2025-12-03-tools-flexibility-trap.en.md

### Manual Verification for User Story 2

- [ ] T048 [US2] Verify /es/blog/ shows list of 5 blog posts with Spanish titles and excerpts
- [ ] T049 [US2] Verify each Spanish blog post loads with full Spanish content
- [ ] T050 [US2] Verify blog category names display in Spanish on posts
- [ ] T051 [US2] Verify blog category pages load in Spanish
- [ ] T052 [US2] Verify no broken links in Spanish blog posts

**Checkpoint**: At this point, User Story 2 should be fully functional - all blog content accessible in Spanish

---

## Phase 4: User Story 3 - Seamless Language Switching (Priority: P3)

**Goal**: Enable visitors to switch between English, French, and Spanish on any page

**Independent Test**: Switch languages on any page and verify the equivalent page loads in the selected language

**Acceptance Criteria**:
1. Spanish page → select English → redirected to equivalent English page
2. Spanish blog post → select French → redirected to French version of same post
3. Page exists only in Spanish → select other language → redirected to homepage of selected language (graceful fallback)

### Verification for User Story 3

- [ ] T053 [US3] Test language switching from /es/ homepage to /fr/ and / (English)
- [ ] T054 [US3] Test language switching from /es/about/ to /about/ and /fr/about/
- [ ] T055 [US3] Test language switching from /es/pricing/ to /pricing/ and /fr/pricing/
- [ ] T056 [US3] Test language switching from Spanish blog posts to EN/FR versions
- [ ] T057 [US3] Verify graceful fallback if page exists in ES but not in selected language
- [ ] T058 [US3] Verify language switcher maintains context (same page_id across languages)

**Checkpoint**: At this point, User Story 3 should be fully functional - seamless language switching works across all pages

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and quality checks across all user stories

- [ ] T059 [P] Run bundle exec jekyll build to verify production build succeeds
- [ ] T060 [P] Verify all 14 YAML files in _data/es/ have no missing keys compared to _data/en/
- [ ] T061 Verify Spanish content uses proper Spanish grammar, accents (á, é, í, ó, ú, ñ, ü), and punctuation (¿? ¡!)
- [ ] T062 Verify SINRA terminology consistency across all Spanish files (issues, capabilities, releases, cycles remain in English)
- [ ] T063 [P] Test responsive design on Spanish pages (320px, 768px, 1024px, 1440px)
- [ ] T064 [P] Cross-browser testing (Chrome, Firefox, Safari) on Spanish pages
- [ ] T065 Run Lighthouse CI on /es/ and /es/about/ to verify scores ≥90
- [ ] T066 Review AI-generated translations for quality and cultural adaptation
- [ ] T067 Update CLAUDE.md if needed to document Spanish language addition

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Depends on Setup completion
- **User Story 2 (Phase 3)**: Depends on Setup completion + US1 blog_categories.yml (for blog category references)
- **User Story 3 (Phase 4)**: Depends on US1 and US2 completion (needs pages to exist for switching)
- **Polish (Phase 5)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Setup (Phase 1) - No dependencies on other stories - Creates main website pages
- **User Story 2 (P2)**: Depends on blog_categories.yml from US1, otherwise independent - Creates blog content
- **User Story 3 (P3)**: Depends on US1 and US2 completion - Verifies language switching works across all pages

### Within Each User Story

**User Story 1**:
- All data files (T004-T016) can run in parallel [P]
- All page templates (T017-T024) can run in parallel [P]
- Verification tasks (T025-T034) must run sequentially after implementation

**User Story 2**:
- blog_categories.yml (T035) must complete first
- All page templates (T036-T042) can run in parallel [P] after T035
- All blog posts (T043-T047) can run in parallel [P] after T035
- Verification tasks (T048-T052) must run sequentially after implementation

**User Story 3**:
- All verification tasks (T053-T058) must run after US1 and US2 are complete

### Parallel Opportunities

- **Phase 1**: All setup tasks can run sequentially (only 3 tasks)
- **Phase 2 (US1)**:
  - All 13 data files (T004-T016) can be created in parallel
  - All 8 page templates (T017-T024) can be created in parallel
- **Phase 3 (US2)**:
  - All 6 blog category pages (T037-T042) can be created in parallel
  - All 5 blog posts (T043-T047) can be created in parallel
- **Phase 5 (Polish)**: Tasks T059, T060, T063, T064 can run in parallel

---

## Parallel Example: User Story 1 Data Files

```bash
# Launch all Spanish data file translations together:
Task: "Create _data/es/strings.yml"
Task: "Create _data/es/navigation.yml"
Task: "Create _data/es/index_features.yml"
Task: "Create _data/es/index_sections.yml"
Task: "Create _data/es/pricing.yml"
Task: "Create _data/es/pricing_faq.yml"
Task: "Create _data/es/contact_faq.yml"
Task: "Create _data/es/footer.yml"
Task: "Create _data/es/testimonials.yml"
Task: "Create _data/es/case_studies.yml"
Task: "Create _data/es/comparisons.yml"
Task: "Create _data/es/promotion.yml"
Task: "Create _data/es/trusted_clients.yml"
```

## Parallel Example: User Story 1 Page Templates

```bash
# Launch all Spanish page template creation together:
Task: "Create _pages/about.es.html"
Task: "Create _pages/pricing.es.html"
Task: "Create _pages/contact.es.html"
Task: "Create _pages/contact-success.es.html"
Task: "Create _pages/compare.es.html"
Task: "Create _pages/compare-jira.es.html"
Task: "Create _pages/compare-asana.es.html"
Task: "Create _pages/compare-monday.es.html"
```

## Parallel Example: User Story 2 Blog Posts

```bash
# Launch all Spanish blog post translations together:
Task: "Create _posts/2024-11-13-vmodel-vs-agile-choose-both.es.md"
Task: "Create _posts/2025-11-21-why-we-abandoned-sprints-for-cycles.es.md"
Task: "Create _posts/2025-11-26-from-issue-to-release.es.md"
Task: "Create _posts/2025-12-01-release-driven-development.es.md"
Task: "Create _posts/2025-12-03-tools-flexibility-trap.es.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: User Story 1 (T004-T034)
3. **STOP and VALIDATE**: Test Spanish main pages independently
4. Deploy/demo if ready - website browsable in Spanish

### Incremental Delivery

1. Complete Setup (Phase 1) → Spanish enabled in config
2. Add User Story 1 (Phase 2) → Test main pages in Spanish → Deploy/Demo (MVP!)
3. Add User Story 2 (Phase 3) → Test blog in Spanish → Deploy/Demo
4. Add User Story 3 (Phase 4) → Test language switching → Deploy/Demo
5. Polish (Phase 5) → Final quality checks → Production ready

### Parallel Team Strategy

With multiple team members:

1. Complete Setup together (Phase 1)
2. After Setup:
   - Team Member A: US1 data files (T004-T016) - 13 files in parallel
   - Team Member B: US1 page templates (T017-T024) - 8 files in parallel
3. After US1 verification:
   - Team Member A: US2 blog category pages (T036-T042) - 6 files in parallel
   - Team Member B: US2 blog posts (T043-T047) - 5 files in parallel
4. After US2: Team Member A handles US3 verification (T053-T058)
5. Both: Polish tasks in parallel (T059-T067)

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [US1], [US2], [US3] labels map tasks to specific user stories for traceability
- Each user story is independently completable and testable
- Translation approach: AI-generated (Claude) with quality review
- SINRA terminology (issues, capabilities, releases, cycles) must remain in English
- Commit after each task or logical group of parallel tasks
- Stop at any checkpoint to validate story independently before proceeding
- Total files to create: 1 config change + 14 data files + 15 page templates + 5 blog posts = 35 files
