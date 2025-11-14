# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Sinra website** - a multilingual static site built with **Jekyll 4.3.4** (Ruby-based static site generator). The site promotes Sinra, a project management tool with a modern approach to work organization. Unlike traditional Agile or Waterfall methodologies, Sinra uses concrete, straightforward naming: issues, capabilities, releases, and cycles instead of abstract terms like user stories, epics, or sprints. The site supports English (en) and French (fr) languages and draws inspiration from modern SaaS tools like Notion and Airtable.

**Tech Stack:**
- Jekyll 4.3.4 (static site generator)
- Ruby 3.4.5
- Plain CSS (no preprocessor)
- Vanilla JavaScript (no build tools)
- YAML for data/translations

## Common Development Commands

```bash
# Install dependencies (required on first setup or after Gemfile changes)
bundle install

# Start development server with live reload (http://localhost:4000)
bundle exec jekyll serve

# Start development server with draft posts visible
bundle exec jekyll serve --drafts

# Build static site for production (outputs to _site/)
bundle exec jekyll build

# Build with draft posts included
bundle exec jekyll build --drafts
```

## Architecture & Structure

### Multilingual Setup
The site uses **jekyll-polyglot** for multilingual support:
- **Language data:** `/Users/thomas/Apps/sinra-website/_data/en/` and `_data/fr/` contain YAML files with translations and content
  - `navigation.yml` - Navigation menu items
  - `strings.yml` - General translation strings
  - `index_sections.yml`, `index_features.yml`, `pricing.yml`, `testimonials.yml`, `contact_faq.yml`, `footer.yml` - Section-specific content
- **Pages:** `/Users/thomas/Apps/sinra-website/_pages/` contains multilingual page templates (e.g., `about.en.html`, `about.fr.html`)
- **Default language:** English (en) configured in `_config.yml`

### Key Directories

- **`_layouts/`** - HTML page templates. `default.html` is the base template with common header/footer/structure
- **`_includes/`** - Reusable HTML components (header, navigation, footer, sections for homepage/pricing/contact/blog)
- **`assets/css/`** - Stylesheets organized by feature (theme.css, layout.css, blog.css, plan.css, contact.css)
- **`assets/js/`** - Contains swiper-bundle.min.js (carousel) and custom script.js
- **`assets/images/`** - Image assets (SVG logos, PNG/WebP feature images)
- **`_posts/`** - Blog posts (currently empty; Jekyll expects YYYY-MM-DD-title.md format)
- **`_drafts/`** - Draft posts (not published)
- **`_site/`** - Generated output (do not edit manually)

### Data Flow

1. **Content sources:** `_data/en/` and `_data/fr/` YAML files
2. **Templates:** `_includes/` components assembled by `_layouts/`
3. **Pages:** `_pages/` and `index.html` use the layouts and includes
4. **Output:** Jekyll generates `_site/` directory with final HTML

### Important Configuration Files

- **`_config.yml`** - Jekyll configuration:
  - Defines languages (en, fr), default language (en)
  - Enables Jekyll plugins (jekyll-feed, jekyll-polyglot, jekyll-paginate, jekyll-archives)
  - Sets site title, URL, pagination settings
- **`Gemfile` & `Gemfile.lock`** - Ruby dependencies (Jekyll and plugins)
- **`.ruby-version`** - Specifies Ruby 3.4.5 (use RVM to manage)

## Development Notes

### Adding New Pages
1. Create a page in `_pages/page.en.html` and `_pages/page.fr.html`
2. Add data to `/Users/thomas/Apps/sinra-website/_data/en/page.yml` and `_data/fr/page.yml` if needed
3. Use `{% assign data = site.data[page.lang].page %}` to access translations
4. Run `bundle exec jekyll serve` to test

### Adding Blog Posts
1. Create a file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Use Front Matter for metadata (layout, title, date, lang, category, etc.)
3. Run `bundle exec jekyll serve --drafts` to preview

### Working with Translations
- All English translations are in `_data/en/`
- Corresponding French translations are in `_data/fr/` (same file structure)
- Use Liquid templating to reference: `site.data[page.lang].navigation.menu_item`
- Ensure all YAML keys match between en/ and fr/ directories

### Asset Management
- SVG logos and images are in `assets/images/`
- CSS is organized by component in `assets/css/`
- JavaScript is minimal (custom script.js + swiper carousel library)
- No build step or minification process

### Current Build Status
The site is actively in development. Recent work includes content updates and competitive positioning improvements. Check git status or recent commits for current branch and modified files.

## SINRA Concepts Glossary

When working on content related to SINRA, always use the following concepts:

- **capabilities** - Features or initiatives tracked in your releases. Organize work at a higher level than issues.
- **categories** - Organize your pages by categories to structure documentation and knowledge base.
- **current_capabilities** - Features and initiatives assigned to the current release. Track high-level objectives.
- **current_testings** - Quality assurance work for the current release. Manage test cases and QA activities.
- **cycles** - Time-boxed periods for organizing and tracking work. Plan iterations and manage progress over defined timeframes.
- **issues** - Individual work items, bugs, and tasks. The core unit of work in SINRA.
- **labels** - Tags for organizing and filtering issues, capabilities, and other resources.
- **next_cycles** - Upcoming cycles in your organization. Plan future iterations.
- **pages** - Documentation and knowledge base. Create pages and organize them by categories.
- **platforms** - Target platforms for your software. Define where your product runs.
- **projects** - Organize issues and work into projects. Group related work by project.
- **releases** - Versions of your product. Group capabilities and issues into releases.
- **roles** - Define roles and permissions for team members. Control access and responsibilities.
- **statuses** - Workflow states for writing and development. Track progress of issues and capabilities.
- **teams** - Group team members by team. Organize collaboration and ownership.
- **templates** - Reusable templates for pages, issues, and tests. Speed up creation of recurring items.
- **testings** - Quality assurance and testing management. Organize test cases and track test execution.
- **users** - Team members in your organization. Manage users, permissions, and account settings.

## No Additional Tools Configured

- **No linting:** No ESLint, RuboCop, or other linters
- **No formatting tools:** No Prettier or StyleLint
- **No testing framework:** Testing is manual via browser or Jekyll serve
- **No custom cursor/copilot rules:** Use this CLAUDE.md as the primary guidance
- Use mise instead rvm, and bundle instead of gem

## SINRA Terminology Guidelines

**When discussing SINRA features or concepts:** Always use the SINRA terminology from the glossary above. You may compare SINRA concepts to Agile or Waterfall terms to highlight differences, but avoid describing SINRA using Agile terminology.

**Terminology Context:**
- Use SINRA terminology when describing the Sinra product or features
- You can reference Agile/Waterfall when explaining general project management methodologies
- Comparisons are acceptable to show how Sinra differs

**Examples of correct usage:**
- ✅ "Sinra uses issues for individual work items (unlike user stories in Agile)"
- ✅ "Capabilities in Sinra organize features at a higher level, similar to epics but with more direct naming"
- ✅ "While Agile uses sprints, Sinra uses cycles for time-boxed work periods"
- ❌ "Sinra has user stories"
- ❌ "Sinra uses epics"

**Why it matters - SINRA's concrete naming:**
- **issues** → Direct, not "user stories" (which are often vague requirements)
- **capabilities** → Clear features, not abstract "epics"
- **releases** → Concrete product versions, not ambiguous "increments"
- **cycles** → Defined time periods, not "sprints" (Agile jargon)

SINRA naming is more direct and reflects actual work artifacts, not planning abstractions.

## Spec-Kit Integration

This project now uses **Spec-Kit** for spec-driven development with Claude Code. See `SPEC_KIT_GUIDE.md` for detailed usage instructions.

**Key resources:**
- `.specify/memory/constitution.md` - Project constitution and governance
- `SPEC_KIT_GUIDE.md` - Complete Spec-Kit workflow guide
- `.claude/commands/speckit.*.md` - Slash commands for each step

**Basic workflow:**
```
/speckit.specify      → Define requirements (WHAT + WHY)
/speckit.plan         → Plan architecture (HOW)
/speckit.tasks        → Generate actionable steps
/speckit.implement    → Claude Code executes
```

All development on Sinra-website must comply with the Spec-Kit Constitution (English) and TONE_CONSISTENCY_REPORT.md (brand voice).