# Blog Styling - Quick Reference Guide

## Etat Actuel vs Recommandations

```
CURRENT                               RECOMMENDED
─────────────────────────────────────────────────────────────

blog.css (99 lines)          →   blog.css (150+ lines) + enhancements
  - Basic list styles              - Modern cards
  - Simple borders                 - Featured images
  - Minimal spacing                - Rich typography
  - Gray color scheme              - Color-coded elements

post.html (25 lines)         →   post.html (80+ lines)
  - Title + metadata               - Featured image hero
  - Content                        - Enhanced metadata
  - Prev/Next links                - Author bio
                                   - Related posts
                                   - Post navigation cards
                                   - CTA section

Palette: Gray scale          →   Full design system
  - #eee, #888, #555              - Primary (mint green)
  - Limited contrast               - Secondary (orange)
  - No accent colors               - Accent (rose)
                                   - Success/Warning/Error
                                   - Neon colors for highlights

Grid Layout: Basic           →   Modern Grid
  - Inline text                    - 3-column responsive
  - Simple lists                   - Auto-fill minmax
  - No visual hierarchy             - Proper spacing

Images: None                 →   Featured images
  - No image support               - 1200x630px cards
  - Text only                      - Captions & alt text
  - Plain appearance               - Box shadows
                                   - Proper aspect ratio
```

## CSS Additions Checklist

### Section 1: Cards & Featured Images
```
☐ .post-card styling (hover, shadow, gradient top border)
☐ .featured-image support (height, object-fit)
☐ .post-image-placeholder (gradient fallback)
```

### Section 2: Typography & Content
```
☐ .post-meta redesign (flex layout, badges)
☐ .post-title styling (font-size, hover)
☐ .post-excerpt color & line-height
☐ .read-more link styling
☐ .post-content h2/h3 spacing & borders
```

### Section 3: Content Elements
```
☐ blockquote styling (border-left, background)
☐ code & pre styling (colors, padding, font-family)
☐ table styling (headers, borders, hover)
☐ ul/ol/li styling (markers color, spacing)
```

### Section 4: Grid & Layout
```
☐ .posts-grid (3-column responsive)
☐ .blog-hero section styling
☐ .blog-posts container
☐ .pagination layout & styling
```

### Section 5: Interactive Elements
```
☐ .blog-filter tags (pills design)
☐ Hover effects on all links
☐ Transitions & animations
```

### Section 6: Advanced Sections
```
☐ .author-bio (flex, image, links)
☐ .related-posts grid
☐ .post-navigation (prev/next cards)
☐ .post-cta section
☐ .case-study blocks
```

### Section 7: Responsive
```
☐ Mobile: 1 column grid
☐ Tablet: 2 column grid
☐ Desktop: 3 column grid
☐ Font size adjustments
☐ Spacing adjustments
```

## Layout Post.html Structure

```html
<article class="blog-post">
  <div class="text-container">
    
    <!-- 1. HEADER SECTION -->
    <header class="post-header">
      <div class="post-meta">
        <span class="date">...</span>
        <span class="category">...</span>
        <span class="reading-time">...</span>
      </div>
      <h1>{{ page.title }}</h1>
      <p class="subtitle">{{ page.subtitle }}</p>
      <figure class="featured-image-container">
        <img class="featured-image" ... />
        <figcaption>...</figcaption>
      </figure>
    </header>

    <!-- 2. MAIN CONTENT -->
    <div class="post-content">
      {{ content }}
    </div>

    <!-- 3. AUTHOR BIO -->
    <section class="author-bio">
      <img src="..." />
      <div class="author-bio-content">
        <strong>Author Name</strong>
        <p>Bio text...</p>
        <div class="author-bio-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- 4. RELATED POSTS -->
    <section class="related-posts">
      <h3>Related Articles</h3>
      <div class="posts-grid-mini">
        <!-- Related post cards -->
      </div>
    </section>

    <!-- 5. NAVIGATION -->
    <nav class="post-navigation">
      <a class="nav-prev" href="...">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Previous Post Title</span>
      </a>
      <a class="nav-next" href="...">
        <span class="nav-label">Next</span>
        <span class="nav-title">Next Post Title</span>
      </a>
    </nav>

    <!-- 6. CTA FINAL -->
    <section class="post-cta">
      <h3>Ready to Transform?</h3>
      <p>Call to action text</p>
      <a href="#" class="button primary">CTA Button</a>
    </section>

  </div>
</article>
```

## Markdown Pattern Quick Guides

### Pattern 1: Highlight Blocks
```markdown
> **Important:** Critical information
> **Note:** Additional info
> **Warning:** Careful attention needed
```

### Pattern 2: Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |
```

### Pattern 3: Lists with Emphasis
```markdown
**Bold Heading:**
- Important point 1
- Important point 2

**Another Heading:**
- Detailed explanation 1
- Detailed explanation 2
```

### Pattern 4: Images with Captions
```markdown
![Alt Text](image-path.png)
*Figure X: Description of the image*
```

### Pattern 5: Code Blocks
```markdown
```language
// Code here
```
```

### Pattern 6: Definition Lists
```markdown
**Term 1**
: Definition of term 1

**Term 2**
: Definition of term 2
```

## Frontmatter Template

```yaml
---
layout: post
title: "Post Title (50-60 chars)"
subtitle: "Compelling subtitle (10-15 words)"
description: "Meta description (150-160 chars)"
date: 2025-01-XX
lang: en
category: Methodology  # or Capacity Planning, Release Management, etc.
excerpt: "30-50 word excerpt for previews"
featured_image: /assets/images/image.png
featured_image_alt: "Descriptive alt text"
author: "Author Full Name"
author_bio: "2-3 sentence bio"
author_social:
  twitter: "twitter_handle"
  linkedin: "linkedin_profile"
reading_time: "8 min read"
tags: [tag1, tag2, tag3]
---
```

## Color Usage in Blog

```
Primary (Mint Green):
  - Links
  - Hover states
  - Category badges
  - Call-to-action buttons
  - Borders on hover
  - Accent text

Secondary (Orange):
  - Case study borders
  - Metric highlights
  - Alternative CTAs

Accent (Rose/Mauve):
  - Key takeaway sections
  - Alternate highlights

Gray Scale:
  - Text body: oklch(82.901% 0.031 222.959)
  - Meta text: oklch(82.901% 0.031 222.959) 70% opacity
  - Backgrounds: var(--gray-100) to var(--gray-900)
  - Borders: var(--gray-300)

Success/Warning/Error:
  - Success: Green highlights
  - Warning: Yellow highlights
  - Error: Red highlights
```

## Spacing Standards

```
Hero section padding: 80px vertical, var(--container-padding) horizontal
Post header spacing: 48px margin-bottom, 48px padding-bottom
Section spacing: 40px margin-top, 16px margin-bottom
Element spacing: 24px between major elements
Content padding: 16-24px for card content
Gap in flex: 16px (meta), 12px (links), 32px (grid)
```

## Typography Standards

```
H1 (Hero/Post Title): 3em (mobile 2em)
H2 (Section): 1.8em
H3 (Subsection): 1.3em
Body text: 1em (line-height 1.6)
Small text: 0.9em
Meta/date: 0.9em
Tags/pills: 0.85em
Code: 0.9em (font-family: var(--font-mono))
```

## Responsive Breakpoints

```
Desktop (1024px+):
  - .posts-grid: 3 columns
  - .post-navigation: 2 columns
  - Hero h1: 3em

Tablet (768px - 1023px):
  - .posts-grid: 2 columns
  - .post-navigation: 2 columns
  - Hero h1: 2.5em

Mobile (< 768px):
  - .posts-grid: 1 column
  - .post-navigation: 1 column
  - Hero h1: 2em
  - Padding: var(--container-padding) on all sides
  - Gap reduced: 24px → 16px
```

## Image Requirements

| Type | Dimensions | Format | Use |
|------|-----------|--------|-----|
| Featured | 1200x630px | PNG/WebP | Open Graph, cards |
| Hero | 1200x400px | PNG/WebP | Post header |
| Inline | 800px max width | PNG/SVG | In content |
| Thumbnail | 300x200px | PNG/WebP | Related posts |
| SVG Diagrams | Any (responsive) | SVG | Methodology, process |

## SEO Checklist

```
☐ Title: 50-60 chars, contains keywords
☐ Meta description: 150-160 chars, unique per post
☐ Featured image with alt text
☐ Internal links to related posts
☐ Structured data (Schema.org BlogPosting)
☐ Open Graph tags (title, description, image)
☐ Reading time estimate
☐ Author information
☐ Tags/categories relevant
☐ Unique excerpt (30-50 words)
☐ Headers hierarchy (H1 → H2 → H3)
☐ Image alt texts descriptive
☐ Links have anchor text
```

## Performance Considerations

```
Image optimization:
  - Use WebP with PNG fallback
  - Lazy load images
  - Compress featured images
  - Max image width: 800px

CSS:
  - Combine all blog CSS into one file
  - Remove unused styles
  - Use CSS variables for colors

JavaScript:
  - Smooth scroll for TOC (optional)
  - Copy-to-clipboard for code (optional)
  - Lazy load related posts (optional)
```

## Testing Checklist

```
Desktop:
  ☐ Hero section displays correctly
  ☐ Featured image loads
  ☐ Post meta properly formatted
  ☐ Content readable (line-height, font-size)
  ☐ Tables responsive
  ☐ Code blocks scrollable
  ☐ Links underline on hover
  ☐ Related posts grid 3 columns
  ☐ Navigation cards display correctly
  ☐ CTA button clickable

Mobile:
  ☐ Hero responsive (2em font)
  ☐ Featured image scales
  ☐ Content readable (no overflow)
  ☐ Tables scroll horizontally
  ☐ Code blocks scroll
  ☐ Related posts 1 column
  ☐ Navigation buttons stack
  ☐ Touch-friendly button size

Accessibility:
  ☐ All images have alt text
  ☐ Links have descriptive text
  ☐ Color contrast sufficient
  ☐ Heading hierarchy logical
  ☐ Form inputs labeled (if any)
```

## Files to Create/Modify

```
CREATE:
  ☐ /BLOG_STRATEGY.md (27KB - full strategy)
  ☐ /BLOG_CSS_SNIPPETS.css (13KB - all CSS)
  ☐ /BLOG_EXAMPLE_POST.md (example structure)
  ☐ /BLOG_QUICK_REFERENCE.md (this file)

MODIFY:
  ☐ /assets/css/blog.css (extend with enhancements)
  ☐ /_layouts/post.html (add sections, improve structure)
  ☐ /_posts/*.md (add frontmatter fields, enhance content)

OPTIONAL:
  ☐ /assets/css/blog-enhanced.css (separate file for new styles)
  ☐ /assets/js/blog.js (smooth scroll, code copy, etc.)
  ☐ /_includes/author-bio.html (reusable component)
  ☐ /_includes/post-card.html (reusable component)
```

## Timeline for Implementation

```
Phase 1 (1-2 days):
  - Add CSS to blog.css
  - Update post.html layout
  - Test basic styling

Phase 2 (3-7 days):
  - Create SVG diagrams
  - Update existing posts
  - Add featured images
  - Enhance frontmatter

Phase 3 (2-3 weeks):
  - Create graphics library
  - Add interactivity (optional)
  - Optimize SEO
  - Publish more posts

Phase 4 (Monthly):
  - Add advanced features
  - Optimize performance
  - User feedback incorporation
```

