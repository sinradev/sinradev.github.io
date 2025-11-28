# Data Model: DaisyUI Navbar Component

**Feature ID:** 004-daisyui-navbar
**Created:** 2025-11-28

---

## Entity: Navbar

### Description
The Navbar is a responsive header component that provides site navigation and user actions (language switching, sign up).

### Fields

| Field | Type | Validation | Required | Notes |
|-------|------|-----------|----------|-------|
| `id` | string | Unique identifier | Yes | Always "navbar" |
| `logo` | object | { url: string, alt: string } | Yes | Company logo/brand link |
| `items` | array | Non-empty collection of NavItem | Yes | At least 4 items |
| `language_switcher` | object | { enabled: boolean, languages: [] } | Yes | Language selection |
| `cta_button` | object | { text: string, href: string, class: string } | Yes | Sign up button |

### Properties

#### logo
```yaml
logo:
  url: /
  alt: Sinra
  title: Sinra Logo
```

#### items (NavigationItem array)
```yaml
items:
  - name: About
    link: about/
    target: _top
    klass: ""
  - name: Pricing
    link: pricing/
    target: _top
    klass: ""
  - name: Blog
    link: blog/
    target: _top
    klass: ""
  - name: Contact
    link: contact/
    target: _top
    klass: ""
  - name: Login
    link: https://app.sinra.dev/users/sign_in
    target: _blank
    klass: ""
  - name: Sign up
    link: https://app.sinra.dev/users/sign_up
    target: _blank
    klass: highlight
```

#### language_switcher
```yaml
language_switcher:
  enabled: true
  languages:
    - code: en
      label: English
      url: /page_path
    - code: fr
      label: Français
      url: /fr/page_path
```

#### cta_button
```yaml
cta_button:
  text: Sign up
  href: https://app.sinra.dev/users/sign_up
  klass: btn-primary
```

---

## Entity: NavigationItem

### Description
A single navigation link in the navbar menu.

### Fields

| Field | Type | Validation | Required | Notes |
|-------|------|-----------|----------|-------|
| `name` | string | Non-empty, max 20 chars | Yes | Display text for link |
| `link` | string | Valid URL or path | Yes | Target URL or relative path |
| `target` | string | "_top", "_blank", "_self" | Yes | Link target attribute |
| `klass` | string | Valid CSS class | No | Additional CSS classes (e.g., "highlight") |

### Constraints
- `name` must be translatable (EN and FR versions)
- `link` must be either:
  - Relative path (e.g., "about/", "pricing/")
  - Absolute external URL (e.g., "https://app.sinra.dev/...")
- `target` must be valid HTML target attribute
- `klass` should be DaisyUI or project-specific classes

### Relationships
- Belongs to: Navbar.items array
- Can appear in: Mobile dropdown or desktop menu
- Associated with: Navigation menu state

---

## Entity: NavbarState

### Description
Tracks the visual state of the navbar during user interaction and page scrolling.

### Fields

| Field | Type | Validation | Required | Notes |
|-------|------|-----------|----------|-------|
| `id` | string | Enum value | Yes | Unique state identifier |
| `background` | string | CSS color value | Yes | Background color in state |
| `text_color` | string | CSS color value | Yes | Text color in state |
| `border` | string | "none" \| "visible" | Yes | Border visibility |
| `shadow` | string | "none" \| "light" \| "medium" | Yes | Shadow elevation |
| `transition_time` | number | Milliseconds (0-300) | Yes | Transition duration |

### Valid States

#### initial (Top of page)
```yaml
initial:
  id: initial
  background: transparent
  text_color: oklch(82.901% 0.031 222.959)  # Light text
  border: none
  shadow: none
  transition_time: 300
```

#### scrolled (User scrolled down)
```yaml
scrolled:
  id: scrolled
  background: var(--gray-50)  # Dark background
  text_color: oklch(82.901% 0.031 222.959)  # Light text
  border: visible
  shadow: medium
  transition_time: 300
```

### Triggers
- **initial → scrolled:** When `window.scrollY > 0`
- **scrolled → initial:** When `window.scrollY <= 0`

---

## Entity: ResponsiveLayout

### Description
Defines navbar layout variations across different screen sizes.

### Fields

| Field | Type | Validation | Required | Notes |
|-------|------|-----------|----------|-------|
| `breakpoint` | string | "mobile" \| "tablet" \| "desktop" | Yes | Screen size category |
| `width_min` | number | Pixels | Yes | Minimum width for this layout |
| `width_max` | number | Pixels | Yes | Maximum width for this layout |
| `menu_type` | string | "dropdown" \| "horizontal" | Yes | Navigation display type |
| `logo_visible` | boolean | - | Yes | Logo visibility |
| `language_switcher` | string | "navbar-end" \| "dropdown" \| "hidden" | Yes | Language switcher position |

### Valid Layouts

#### mobile (< 768px)
```yaml
mobile:
  breakpoint: mobile
  width_min: 320
  width_max: 767
  menu_type: dropdown
  logo_visible: true
  language_switcher: navbar-end
```

#### tablet (768px - 1023px)
```yaml
tablet:
  breakpoint: tablet
  width_min: 768
  width_max: 1023
  menu_type: dropdown
  logo_visible: true
  language_switcher: navbar-end
```

#### desktop (>= 1024px)
```yaml
desktop:
  breakpoint: desktop
  width_min: 1024
  width_max: null
  menu_type: horizontal
  logo_visible: true
  language_switcher: navbar-end
```

### Display Rules
- Mobile: Show hamburger button, hide horizontal menu
- Tablet: Show hamburger button, hide horizontal menu
- Desktop: Hide hamburger button, show horizontal menu

---

## Data Relationships

```
Navbar
├── logo (object)
├── items[] (NavigationItem array)
│   ├── name (string)
│   ├── link (string)
│   ├── target (string)
│   └── klass (string)
├── language_switcher (object)
│   ├── enabled (boolean)
│   └── languages[] (array)
├── cta_button (object)
│   ├── text (string)
│   ├── href (string)
│   └── klass (string)
├── current_state (NavbarState)
│   └── id (initial | scrolled)
└── responsive_layout (ResponsiveLayout)
    └── current_breakpoint (mobile | tablet | desktop)
```

---

## State Transitions

```
NavbarState Transitions:

                 User scrolls down (scrollY > 0)
             ┌─────────────────────────────────┐
             │                                 │
          ┌──▼──────────┐             ┌────────▼──┐
          │   initial   │             │ scrolled  │
          │ transparent │             │   dark    │
          └──▲──────────┘             └────────▲──┘
             │                                 │
             └─────────────────────────────────┘
                  User scrolls up (scrollY = 0)
```

---

## Validation Rules

### NavigationItem Validation
1. `name` is not empty and length <= 20 characters
2. `link` is valid URL or relative path format
3. `target` is one of: "_top", "_blank", "_self"
4. `klass` contains only valid CSS class names
5. External links start with "http://" or "https://"

### NavbarState Validation
1. `id` is one of: "initial", "scrolled"
2. `background` is valid CSS color value or "transparent"
3. `text_color` is valid CSS color value
4. `border` is one of: "none", "visible"
5. `shadow` is one of: "none", "light", "medium"
6. `transition_time` is between 0 and 500 milliseconds

### ResponsiveLayout Validation
1. `breakpoint` is one of: "mobile", "tablet", "desktop"
2. `width_min` <= `width_max` (when both defined)
3. `menu_type` is one of: "dropdown", "horizontal"
4. `language_switcher` is one of: "navbar-end", "dropdown", "hidden"
5. Breakpoints don't overlap or have gaps

---

## Performance Considerations

### Data Size
- Navigation items: 6 items (minimal size)
- Language switcher: 2 languages (minimal size)
- Total data: < 1KB in YAML

### Rendering Performance
- Navbar component is inline (no lazy loading)
- CSS classes use DaisyUI utilities (pre-compiled)
- State transitions use CSS (not JavaScript animations)
- Scroll detection: Single event listener, throttled

### Storage
- No database required (static Jekyll site)
- Data stored in YAML files (`_data/en/` and `_data/fr/`)
- No caching needed (static generation)

---

## Data Sources & Updates

### YAML Data Files
- **`_data/en/navigation.yml`** - English navigation items
- **`_data/fr/navigation.yml`** - French navigation items

### Jekyll Processing
- YAML data loaded into `site.data` at build time
- Accessed via Liquid: `{{ site.data[page.lang].navigation }}`
- No runtime data fetching (static site)

### Update Process
1. Modify YAML data file
2. Run `bundle exec jekyll build` or `jekyll serve`
3. Jekyll regenerates HTML with new data
4. No manual cache clearing needed

---

## Testing Scenarios

### Data Validation Testing
1. ✅ All navigation items have required fields
2. ✅ External links are properly formatted
3. ✅ Language switcher has both EN and FR
4. ✅ CSS classes are valid

### State Testing
1. ✅ Initial state displays on page load
2. ✅ Scrolled state activates when scrollY > 0
3. ✅ Transition between states is smooth
4. ✅ State persists across scroll events

### Responsive Testing
1. ✅ Mobile layout at 320px
2. ✅ Tablet layout at 768px
3. ✅ Desktop layout at 1024px+
4. ✅ Smooth transition between layouts

### Multilingual Testing
1. ✅ English navigation displays correctly
2. ✅ French navigation displays correctly
3. ✅ Language switching updates navbar
4. ✅ Links point to correct language pages

---

## Related Documents

- **Specification:** `specs/004-daisyui-navbar/spec.md`
- **Implementation Plan:** `specs/004-daisyui-navbar/plan.md`
- **Navigation Data (EN):** `_data/en/navigation.yml`
- **Navigation Data (FR):** `_data/fr/navigation.yml`
