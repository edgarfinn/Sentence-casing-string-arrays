# Sentence-casing-string-arrays
A helper function for converting arrays of strings into sentence-case format

Style rulings:

- The first letter of the first word in any string will be returned toUpperCase
- Camel-case words will be assumed to be brand-names (and therefore not affected)
- All-caps words will be assumed to be initials (and therefore not affected)
- Special characters will be ignored
