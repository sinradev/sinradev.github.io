# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Sinra website** - a multilingual static site built with **Jekyll 4.3.4** (Ruby-based static site generator). The site promotes Sinra, a project management tool combining V-methodology (Waterfall) and Agile approaches. The site supports English (en) and French (fr) languages. The website unify lot of features
inspiring itself from Notion, Airtable and others new modern Saas.

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
The site is actively in development (branch: feature/new-theme). Recent commits show work on styling and imagery improvements. Modified files include:
- `.ruby-version`
- `assets/images/` (multiple feature images updated)

## No Additional Tools Configured

- **No linting:** No ESLint, RuboCop, or other linters
- **No formatting tools:** No Prettier or StyleLint
- **No testing framework:** Testing is manual via browser or Jekyll serve
- **No custom cursor/copilot rules:** Use this CLAUDE.md as the primary guidance
- Use mise instead rvm, and bundle instead of gem
- Never speak about user stories or other thinks linked to agility, Sinra must be different.
- Sinra use issues, capabilities, releases, sync instead of user stories, epics, standup ... Sinra use natural and comprehensive naming
