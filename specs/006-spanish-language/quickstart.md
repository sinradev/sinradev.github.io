# Quickstart: Add Spanish Language Support

**Feature**: 006-spanish-language
**Date**: 2025-12-10

## Prerequisites

- Ruby 3.4.5 installed (via mise)
- Bundle dependencies installed (`bundle install`)
- Access to existing `_data/en/` files for translation reference

## Quick Verification Steps

### 1. Check Current Languages

```bash
grep "languages:" _config.yml
# Expected: languages: ["en", "fr"]
```

### 2. Add Spanish to Config

Edit `_config.yml`:
```yaml
languages: ["en", "fr", "es"]
```

### 3. Create Spanish Data Directory

```bash
mkdir -p _data/es
```

### 4. Copy English Files as Templates

```bash
for file in _data/en/*.yml; do
  cp "$file" "_data/es/$(basename "$file")"
done
```

### 5. Translate Each YAML File

Replace English content with Spanish translations in each file under `_data/es/`.

### 6. Create Spanish Page Templates

For each English page, create a Spanish variant:
```bash
# Example for about page
cp _pages/about.en.html _pages/about.es.html
# Edit to set lang: es and Spanish description
```

### 7. Create Spanish Blog Posts

For each English blog post:
```bash
# Example
cp _posts/2024-11-13-vmodel-vs-agile-choose-both.en.md \
   _posts/2024-11-13-vmodel-vs-agile-choose-both.es.md
# Edit to set lang: es and translate content
```

### 8. Test Locally

```bash
bundle exec jekyll serve
```

Navigate to:
- http://localhost:4000/es/ (Spanish homepage)
- http://localhost:4000/es/about/ (Spanish about page)
- http://localhost:4000/es/blog/ (Spanish blog)

### 9. Verify Language Selector

Click the language dropdown in the header. Should show:
- EN
- FR
- ES

### 10. Build for Production

```bash
bundle exec jekyll build
```

## File Checklist

### Configuration
- [ ] `_config.yml` - Add "es" to languages array

### Data Files (14 total)
- [ ] `_data/es/navigation.yml`
- [ ] `_data/es/strings.yml`
- [ ] `_data/es/index_features.yml`
- [ ] `_data/es/index_sections.yml`
- [ ] `_data/es/pricing.yml`
- [ ] `_data/es/pricing_faq.yml`
- [ ] `_data/es/testimonials.yml`
- [ ] `_data/es/contact_faq.yml`
- [ ] `_data/es/footer.yml`
- [ ] `_data/es/blog_categories.yml`
- [ ] `_data/es/case_studies.yml`
- [ ] `_data/es/comparisons.yml`
- [ ] `_data/es/promotion.yml`
- [ ] `_data/es/trusted_clients.yml`

### Page Templates (15 total)
- [ ] `_pages/about.es.html`
- [ ] `_pages/blog.es.html`
- [ ] `_pages/pricing.es.html`
- [ ] `_pages/contact.es.html`
- [ ] `_pages/contact-success.es.html`
- [ ] `_pages/compare.es.html`
- [ ] `_pages/compare-jira.es.html`
- [ ] `_pages/compare-asana.es.html`
- [ ] `_pages/compare-monday.es.html`
- [ ] `_pages/blog-category-methodology.es.html`
- [ ] `_pages/blog-category-release-management.es.html`
- [ ] `_pages/blog-category-team-scaling.es.html`
- [ ] `_pages/blog-category-qa-testing.es.html`
- [ ] `_pages/blog-category-compliance.es.html`
- [ ] `_pages/blog-category-capacity-planning.es.html`

### Blog Posts (5 total)
- [ ] `_posts/2024-11-13-vmodel-vs-agile-choose-both.es.md`
- [ ] `_posts/2025-11-21-why-we-abandoned-sprints-for-cycles.es.md`
- [ ] `_posts/2025-11-26-from-issue-to-release.es.md`
- [ ] `_posts/2025-12-01-release-driven-development.es.md`
- [ ] `_posts/2025-12-03-tools-flexibility-trap.es.md`

## Common Issues

### Issue: Spanish pages return 404

**Cause**: Language not added to `_config.yml` or Jekyll server not restarted.

**Fix**:
1. Verify `languages: ["en", "fr", "es"]` in `_config.yml`
2. Restart Jekyll server

### Issue: Missing translations show blank

**Cause**: YAML key missing in Spanish data file.

**Fix**: Compare `_data/es/file.yml` with `_data/en/file.yml` to find missing keys.

### Issue: Language switcher doesn't show ES

**Cause**: Jekyll-polyglot not rebuilding after config change.

**Fix**: Stop server, run `bundle exec jekyll clean`, restart server.

### Issue: Blog posts not showing in Spanish

**Cause**: Blog post filename doesn't match pattern or `lang: es` missing.

**Fix**: Ensure filename is `YYYY-MM-DD-slug.es.md` and front matter includes `lang: es`.
