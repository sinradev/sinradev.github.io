#!/usr/bin/env python3
import re

text = 'Example: An agency took an "pure Agile" approach to a CMS rebuild. No specifications. Just "build a dashboard."'
print('Before:', text)
print('Bytes:', text.encode('utf-8').hex())

# Opening quote
text = re.sub(r'(^|[\s\(\[\{—–-])"', r'\1"', text)
print('\nAfter opening:', text)

# Closing quote
text = re.sub(r'"([\s\.\,\!\?\:\;\)\]\}—–-]|$)', r'"\1', text)
print('After closing:', text)
print('Bytes:', text.encode('utf-8').hex())
