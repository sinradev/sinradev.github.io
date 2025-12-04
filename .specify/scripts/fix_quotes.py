#!/usr/bin/env python3
"""
Replace straight double quotes with English typographic curly quotes.
Opening quote: U+201C (")
Closing quote: U+201D (")
"""

import re
import sys
from pathlib import Path

# Define the Unicode characters explicitly
LEFT_DOUBLE_QUOTE = '\u201C'   # "
RIGHT_DOUBLE_QUOTE = '\u201D'  # "
STRAIGHT_QUOTE = '"'           # "

def replace_quotes_smart(text):
    """
    Replace straight quotes with curly quotes intelligently.
    """
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

        # Skip front matter lines (preserve straight quotes for YAML syntax)
        if in_front_matter and front_matter_count < 2:
            result_lines.append(line)
            continue

        # Process line
        processed = line

        # Protect HTML attributes
        html_protected = []
        def protect_html(match):
            html_protected.append(match.group(0))
            return f"__HTML_PROTECTED_{len(html_protected)-1}__"

        processed = re.sub(r'<[^>]+>', protect_html, processed)

        # Replace quotes:
        # 1. Opening quote: after space, start of line, or opening punctuation
        processed = re.sub(
            rf'(^|[\s\(\[\{{—–-]){re.escape(STRAIGHT_QUOTE)}',
            rf'\1{LEFT_DOUBLE_QUOTE}',
            processed
        )

        # 2. Closing quote: before space, punctuation, end of line, or closing punctuation
        processed = re.sub(
            rf'{re.escape(STRAIGHT_QUOTE)}([\s\.\,\!\?\:\;\)\]\}}—–-]|$)',
            rf'{RIGHT_DOUBLE_QUOTE}\1',
            processed
        )

        # 3. Handle remaining quotes (alternating open/close)
        if STRAIGHT_QUOTE in processed:
            parts = processed.split(STRAIGHT_QUOTE)
            if len(parts) > 1:
                result = [parts[0]]
                for i, part in enumerate(parts[1:], 1):
                    if i % 2 == 1:  # odd = opening
                        result.append(LEFT_DOUBLE_QUOTE + part)
                    else:  # even = closing
                        result.append(RIGHT_DOUBLE_QUOTE + part)
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
        if STRAIGHT_QUOTE not in content:
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
        print("Usage: python fix_quotes.py <file_pattern>")
        sys.exit(1)

    pattern = sys.argv[1]
    base_dir = Path('/Users/thomas/Apps/sinra-website')

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
