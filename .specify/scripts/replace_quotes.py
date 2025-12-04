#!/usr/bin/env python3
"""
Replace straight double quotes with English typographic curly quotes.
Opening quote: " (U+201C)
Closing quote: " (U+201D)
"""

import re
import sys
from pathlib import Path

def replace_quotes_smart(text):
    """
    Replace straight quotes with curly quotes intelligently.
    Rules:
    - After space, start of line, or opening brackets → opening quote "
    - Before space, punctuation, end of line, or closing brackets → closing quote "
    - In YAML front matter (between ---), preserve straight quotes for keys
    - In HTML attributes, preserve straight quotes
    """

    # Split by lines to handle YAML front matter
    lines = text.split('\n')
    result_lines = []
    in_front_matter = False
    front_matter_count = 0

    for line in lines:
        # Detect YAML front matter boundaries
        if line.strip() == '---':
            front_matter_count += 1
            if front_matter_count <= 2:
                in_front_matter = not in_front_matter
            result_lines.append(line)
            continue

        # Skip front matter lines (preserve straight quotes)
        if in_front_matter and front_matter_count < 2:
            result_lines.append(line)
            continue

        # Process line
        processed = line

        # Protect HTML attributes (don't change quotes in class="foo", src="bar", etc.)
        # We'll do a simple approach: protect anything inside HTML tags
        html_protected = []
        def protect_html(match):
            html_protected.append(match.group(0))
            return f"__HTML_PROTECTED_{len(html_protected)-1}__"

        processed = re.sub(r'<[^>]+>', protect_html, processed)

        # Now replace quotes in the remaining text
        # Opening quote: after space, start of line, opening bracket, or dash
        processed = re.sub(r'(^|[\s\(\[\{—–-])"', r'\1"', processed)

        # Closing quote: before space, punctuation, end of line, closing bracket
        processed = re.sub(r'"([\s\.\,\!\?\:\;\)\]\}—–-]|$)', r'"\1', processed)

        # Handle remaining quotes (pairs in middle of text)
        # If we still have straight quotes, assume they alternate open/close
        parts = processed.split('"')
        if len(parts) > 1:
            result = [parts[0]]
            for i, part in enumerate(parts[1:], 1):
                if i % 2 == 1:  # odd positions = opening
                    result.append('"' + part)
                else:  # even positions = closing
                    result.append('"' + part)
            processed = ''.join(result)

        # Restore HTML protected content
        for i, html in enumerate(html_protected):
            processed = processed.replace(f"__HTML_PROTECTED_{i}__", html)

        result_lines.append(processed)

    return '\n'.join(result_lines)

def process_file(filepath):
    """Process a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file contains straight quotes
        if '"' not in content:
            return False, "No straight quotes found"

        new_content = replace_quotes_smart(content)

        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        return True, "Processed successfully"
    except Exception as e:
        return False, f"Error: {str(e)}"

def main():
    if len(sys.argv) < 2:
        print("Usage: python replace_quotes.py <file_pattern>")
        print("Example: python replace_quotes.py '_posts/*.en.md'")
        sys.exit(1)

    pattern = sys.argv[1]
    base_dir = Path('/Users/thomas/Apps/sinra-website')

    # Find files matching pattern
    files = sorted(base_dir.glob(pattern))

    if not files:
        print(f"No files found matching: {pattern}")
        sys.exit(1)

    print(f"Found {len(files)} files to process:")

    processed = 0
    skipped = 0
    errors = 0

    for filepath in files:
        success, message = process_file(filepath)
        rel_path = filepath.relative_to(base_dir)

        if success:
            print(f"✓ {rel_path}")
            processed += 1
        elif "No straight quotes" in message:
            print(f"⊘ {rel_path} - {message}")
            skipped += 1
        else:
            print(f"✗ {rel_path} - {message}")
            errors += 1

    print(f"\nSummary: {processed} processed, {skipped} skipped, {errors} errors")

if __name__ == '__main__':
    main()
