#!/usr/bin/env bash
# migrate-posts.sh - Migrate Jekyll blog posts to Hugo format
#
# Transformations performed on each post:
#   1. Copy from _posts/YYYY-MM-DD-slug.lang.md to content/blog/posts/YYYY-MM-DD-slug.lang.md
#   2. Remove "layout: post" line (Hugo uses layouts directory, not front matter)
#   3. Convert permalink placeholders to resolved url:
#      permalink: /category/:year/:month/:day/slug.html
#      → url: /category/YYYY/MM/DD/slug.html
#      (date extracted from the filename YYYY-MM-DD-slug.lang.md)
#   4. Convert "category: Foo" → "categories: [\"Foo\"]" (Hugo uses arrays for taxonomies)
#   5. Remove "lang:" field (Hugo uses file suffix .en.md/.fr.md/.es.md for language)
#   6. Format date to ISO 8601 (e.g., 2025-12-01 → 2025-12-01T00:00:00+00:00)
#      If date already has time component, preserve it

set -e

POSTS_DIR="${1:-_posts}"
OUTPUT_DIR="${2:-content/blog/posts}"

mkdir -p "$OUTPUT_DIR"

MIGRATED=0
SKIPPED=0
ERRORS=0

for src_file in "$POSTS_DIR"/*.md; do
    [ -f "$src_file" ] || continue

    filename=$(basename "$src_file")

    # Extract date from filename: YYYY-MM-DD-slug.lang.md
    if [[ "$filename" =~ ^([0-9]{4})-([0-9]{2})-([0-9]{2})-(.+)$ ]]; then
        file_year="${BASH_REMATCH[1]}"
        file_month="${BASH_REMATCH[2]}"
        file_day="${BASH_REMATCH[3]}"
        rest="${BASH_REMATCH[4]}"
    else
        echo "SKIP (no date prefix): $filename"
        ((SKIPPED++))
        continue
    fi

    dst_file="$OUTPUT_DIR/$filename"

    # Read file content
    content=$(cat "$src_file")

    # 1. Remove "layout: post" line
    content=$(echo "$content" | sed 's/^layout: post$//')

    # 2. Convert permalink to url with resolved placeholders
    # Match lines like: permalink: /category/:year/:month/:day/slug.html
    if echo "$content" | grep -q "^permalink:"; then
        permalink=$(echo "$content" | grep "^permalink:" | head -1 | sed 's/^permalink: *//')
        # Resolve placeholders
        resolved_url=$(echo "$permalink" \
            | sed "s/:year/$file_year/g" \
            | sed "s/:month/$file_month/g" \
            | sed "s/:day/$file_day/g" \
            | sed "s/:title/$rest/g")
        # Remove old permalink line and add url
        content=$(echo "$content" | sed '/^permalink:/d')
        content=$(echo "$content" | sed "s|^---$|---\nurl: $resolved_url|1")
    fi

    # 3. Convert "category: Foo" → "categories: [\"Foo\"]"
    if echo "$content" | grep -q "^category:"; then
        category_val=$(echo "$content" | grep "^category:" | head -1 | sed 's/^category: *//')
        # Skip if already looks like an array
        if [[ "$category_val" != \[* ]]; then
            content=$(echo "$content" | sed "s/^category: .*/categories: [\"$category_val\"]/")
        fi
    fi

    # 4. Remove "lang:" field
    content=$(echo "$content" | sed '/^lang:/d')

    # 5. Format date to ISO 8601
    # Match "date: YYYY-MM-DD" (without time) and add T00:00:00+00:00
    content=$(echo "$content" | sed -E 's/^date: ([0-9]{4}-[0-9]{2}-[0-9]{2})$/date: \1T00:00:00+00:00/')

    # Write output file
    echo "$content" > "$dst_file"
    ((MIGRATED++))
    echo "OK: $filename"
done

echo ""
echo "Migration complete: $MIGRATED migrated, $SKIPPED skipped, $ERRORS errors"
