#!/bin/bash

# HTML Class Usage Scanner
# Scans all HTML files in the project for component classes
# Generates a report of current component usage

REPO_ROOT="/Users/thomas/Apps/sinra-website"
OUTPUT_FILE="$REPO_ROOT/specs/005-simplify-theme-css/audit/html-usage.txt"

echo "=== HTML Component Class Usage Report ===" > "$OUTPUT_FILE"
echo "Generated: $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count button usage
echo "### Button Classes" >> "$OUTPUT_FILE"
grep -r 'class.*btn' "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" --include="*.html" 2>/dev/null | wc -l >> "$OUTPUT_FILE"
echo "Button class usages found" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count card usage
echo "### Card Classes" >> "$OUTPUT_FILE"
grep -r 'class.*card' "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" --include="*.html" 2>/dev/null | wc -l >> "$OUTPUT_FILE"
echo "Card class usages found" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count badge usage
echo "### Badge Classes" >> "$OUTPUT_FILE"
grep -r 'class.*badge' "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" --include="*.html" 2>/dev/null | wc -l >> "$OUTPUT_FILE"
echo "Badge class usages found" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count form usage
echo "### Form Classes" >> "$OUTPUT_FILE"
grep -r 'class.*form\|class.*input' "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" --include="*.html" 2>/dev/null | wc -l >> "$OUTPUT_FILE"
echo "Form-related class usages found" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Scan all class attributes
echo "### All Unique Classes (Sample)" >> "$OUTPUT_FILE"
grep -rho 'class="[^"]*"' "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" --include="*.html" 2>/dev/null | sort | uniq | head -50 >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# File count
echo "### Files Scanned" >> "$OUTPUT_FILE"
find "$REPO_ROOT/_includes" "$REPO_ROOT/_pages" "$REPO_ROOT" -name "*.html" -type f 2>/dev/null | wc -l | xargs echo "Total HTML files:" >> "$OUTPUT_FILE"

echo "Scan complete. Report saved to $OUTPUT_FILE"
cat "$OUTPUT_FILE"
