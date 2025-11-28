# Quickstart: DaisyUI Navbar Implementation

**Feature ID:** 004-daisyui-navbar
**Created:** 2025-11-28
**Last Updated:** 2025-11-28

---

## Overview

This document provides a quick reference for implementing the DaisyUI navbar refactor. For detailed information, see `plan.md` and `spec.md`.

---

## Files to Modify

### 1. `_includes/navigation.html` (Primary)
**What:** Replace custom navbar with DaisyUI component
**Where:** Lines 1-15 (entire file)
**Complexity:** Medium

**Key Changes:**
- Replace custom `<nav>` structure with `<div class="navbar">`
- Create `navbar-start`, `navbar-center`, `navbar-end` sections
- Add DaisyUI dropdown for mobile menu
- Add DaisyUI horizontal menu for desktop
- Keep navigation data iteration logic

### 2. `assets/css/theme.css` (Primary)
**What:** Add navbar styling for transparent and scrolled states
**Where:** Append new section at end
**Complexity:** Low

**Key Changes:**
- Add transparent background override
- Define scrolled state styling
- Implement smooth transitions (300ms)
- Ensure proper text color contrast

### 3. `_data/en/navigation.yml` (Minor)
**What:** Verify navigation items are complete
**Where:** Review entire file
**Complexity:** None (data file)

**Key Changes:**
- Verify all 6 navigation items present
- No structural changes needed

### 4. `_data/fr/navigation.yml` (Minor)
**What:** Verify French translation complete
**Where:** Review entire file
**Complexity:** None (data file)

**Key Changes:**
- Verify all 6 items have French translations
- No structural changes needed

### 5. `assets/js/script.js` (Verification Only)
**What:** Verify scroll detection and mobile dropdown handling
**Where:** Review scroll event listeners
**Complexity:** Low

**Key Changes:**
- Verify scroll detection adds `scrolled` class to header
- Add mobile dropdown close-on-click handler if needed

---

## DaisyUI Classes Reference

### Main Container
```html
<div class="navbar bg-base-100">
  <!-- Content -->
</div>
```

### Layout Sections
```html
<div class="navbar-start">...</div>   <!-- Logo -->
<div class="navbar-center">...</div>  <!-- Menu -->
<div class="navbar-end">...</div>     <!-- Language + CTA -->
```

### Mobile Dropdown
```html
<div class="dropdown lg:hidden">
  <button class="btn btn-ghost" aria-label="Toggle menu">
    <!-- Hamburger icon SVG -->
  </button>
  <ul class="dropdown-content menu bg-base-100 rounded-box">
    <!-- Menu items -->
  </ul>
</div>
```

### Desktop Menu
```html
<ul class="menu menu-horizontal hidden lg:flex px-1">
  <!-- Menu items -->
</ul>
```

### Navigation Items
```html
<li><a href="/page/">Page Name</a></li>
```

### Buttons
```html
<button class="btn btn-ghost">Ghost Button</button>
<a class="btn btn-primary">Primary Button</a>
```

---

## CSS Styling Checklist

### Transparent State (Initial)
- [ ] Background: `transparent`
- [ ] Text color: Light (readable on transparent)
- [ ] Border: None
- [ ] Shadow: None
- [ ] Transition: 300ms ease

### Scrolled State
- [ ] Background: `var(--gray-50)` (dark theme)
- [ ] Border: 1px solid `var(--gray-300)`
- [ ] Shadow: `0 1px 3px rgba(0, 0, 0, 0.1)`
- [ ] Text color: Light (same as initial)
- [ ] Transition: 300ms ease

### Responsive Behavior
- [ ] Mobile dropdown visible `< 1024px` (use `lg:hidden`)
- [ ] Desktop menu visible `>= 1024px` (use `hidden lg:flex`)
- [ ] Hamburger button only on mobile
- [ ] No horizontal scrollbar overflow

---

## JavaScript Setup

### Scroll Detection
```javascript
// Add 'scrolled' class when user scrolls
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

### Mobile Dropdown Close-on-Click
```javascript
// Close dropdown when menu item is clicked
const dropdownItems = document.querySelectorAll('.dropdown-content a');
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Close dropdown by clicking toggle
    document.querySelector('.dropdown button').click();
  });
});
```

---

## Responsive Testing Checklist

### Mobile (320px - 767px)
- [ ] Hamburger menu visible
- [ ] Desktop menu hidden
- [ ] Dropdown opens on click
- [ ] Dropdown closes on item selection
- [ ] Language switcher accessible
- [ ] All text readable
- [ ] No horizontal scrollbar

### Tablet (768px - 1023px)
- [ ] Hamburger menu visible
- [ ] Desktop menu hidden
- [ ] Smooth transition from mobile
- [ ] Language switcher accessible
- [ ] All content fits without overflow

### Desktop (1024px+)
- [ ] Hamburger menu hidden
- [ ] Desktop menu visible horizontally
- [ ] Language switcher visible
- [ ] Sign up button visible
- [ ] Proper spacing between items
- [ ] All items aligned horizontally

### Scroll Behavior (All Sizes)
- [ ] Initial: Transparent background at top
- [ ] Scrolled: Dark background when scrolling
- [ ] Transition smooth (no jarring changes)
- [ ] Text readable in both states
- [ ] Performance smooth (no jank)

---

## Browser Testing Checklist

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)

### Mobile Browsers
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android
- [ ] Samsung Internet

### Features to Test
- [ ] Navbar displays correctly
- [ ] Navigation links work
- [ ] Mobile dropdown functions
- [ ] Scroll detection works
- [ ] Language switching works
- [ ] Sign up button functional

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through navbar items (should be accessible)
- [ ] Hamburger button activates on Enter/Space
- [ ] Dropdown opens/closes properly
- [ ] No keyboard trap

### Screen Reader Testing
- [ ] Hamburger button labeled as "Toggle menu"
- [ ] Navigation items announced correctly
- [ ] Language switcher choices clear
- [ ] Sign up button purpose clear

### Color Contrast
- [ ] Text readable on transparent background
- [ ] Text readable on dark scrolled background
- [ ] WCAG AA compliance (4.5:1 minimum)
- [ ] No reliance on color alone

---

## Build & Deploy

### Development
```bash
# Start development server with live reload
bundle exec jekyll serve --drafts

# Test at localhost:4000
```

### Build Verification
```bash
# Build for production
bundle exec jekyll build

# Verify build succeeds (check for errors)
# Output in _site/ directory
```

### Testing Before Commit
```bash
# 1. Run Jekyll build
bundle exec jekyll build

# 2. Test in browser at localhost:4000
# 3. Test all responsive sizes
# 4. Test language switching
# 5. Test scroll behavior
# 6. Check console for errors
# 7. Verify no broken links
```

---

## Common Issues & Fixes

### Issue: Navbar doesn't scroll correctly
**Fix:** Verify scroll detection JavaScript is running
```javascript
// Check in browser console
console.log(document.querySelector('header'));
// Should show <header> element with classes
```

### Issue: Mobile dropdown doesn't close
**Fix:** Add click handler to close dropdown
```javascript
// DaisyUI dropdown close on click
const dropdownToggle = document.querySelector('.dropdown button');
const dropdownItems = document.querySelectorAll('.dropdown a');
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownToggle.click();
  });
});
```

### Issue: Language switcher not working
**Fix:** Verify links in navigation YAML files
- Check `_data/en/navigation.yml`
- Check `_data/fr/navigation.yml`
- Verify href values are correct

### Issue: Text not visible on transparent background
**Fix:** Adjust text color in CSS
```css
nav a {
  color: oklch(82.901% 0.031 222.959); /* Light text for visibility */
}
```

### Issue: Horizontal scrollbar appears on mobile
**Fix:** Ensure navbar doesn't overflow
```css
.navbar {
  width: 100%;
  overflow-x: hidden;
}
```

---

## Performance Notes

### CSS Transitions
- Use `transition: all 0.3s ease` for smooth scroll effect
- Avoid `transition: all` on performance-critical properties
- Keep transition time under 300ms

### JavaScript Optimization
- Throttle scroll event listener (optional, but good practice)
- Use event delegation for dropdown items
- Avoid DOM queries in loops

### Build Performance
- No new dependencies (uses existing DaisyUI)
- No JavaScript transpilation needed
- Static site generation unchanged

---

## Documentation

### Comments in Code
Add comments to clarify structure:
```html
<!-- Navbar container using DaisyUI -->
<header>
  <div class="navbar">
    <!-- Logo section (navbar-start) -->
    <!-- Navigation menu (navbar-center) -->
    <!-- Language switcher and CTA (navbar-end) -->
  </div>
</header>
```

### CSS Comments
```css
/* Navbar styling */
/* Transparent state (top of page) */
header {
  background: transparent;
  transition: all 0.3s ease;
}

/* Scrolled state (after scroll) */
header.scrolled {
  background: var(--gray-50);
  border-bottom: 1px solid var(--gray-300);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

---

## Commit Checklist

Before committing changes:

- [ ] All 5 files modified successfully
- [ ] `bundle exec jekyll build` succeeds
- [ ] No console errors in browser
- [ ] Responsive behavior tested (320px, 768px, 1024px, 1440px)
- [ ] Language switching verified
- [ ] Scroll detection working
- [ ] Mobile dropdown functioning
- [ ] Accessibility tested (keyboard, screen reader)
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Commit message is clear and descriptive

---

## Related Documents

- **Full Specification:** `specs/004-daisyui-navbar/spec.md`
- **Implementation Plan:** `specs/004-daisyui-navbar/plan.md`
- **Data Model:** `specs/004-daisyui-navbar/data-model.md`
- **DaisyUI Navbar Docs:** https://daisyui.com/components/navbar/
- **Current Navbar:** `_includes/navigation.html`
- **Constitution:** `.specify/memory/constitution.md`
