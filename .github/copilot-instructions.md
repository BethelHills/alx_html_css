# Copilot Instructions for TechCon_HTML

## Project Overview
This repository is a static website project for TechCon 2024, built with pure HTML and CSS (no JavaScript frameworks or external libraries). The main focus is on clean, W3C-compliant markup and maintainable CSS.

## Key Structure
- All source files are in the `css_basic/` directory.
- Main files:
  - `index.html`: Conference homepage
  - `tweets.html`: Example tweets page
  - `base.css`: Base styles (reset, typography, layout)
  - `styles.css`: Custom styles (empty by default)
- A `README.md` at the project root documents requirements and usage.

## Conventions & Patterns
- **No external dependencies**: Do not use Bootstrap, React, Vue, or any JS/CSS library.
- **W3C compliance**: All HTML and CSS must validate with the W3C Validator.
- **File endings**: Every file must end with a newline.
- **CSS inclusion**: Both `base.css` and `styles.css` must be linked in the `<head>` of every HTML file, e.g.:
  ```html
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <link href="base.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
  </head>
  ```
- **No build step**: This is a static site; no build tools or package managers are used.
- **No JavaScript**: Unless explicitly added, all interactivity is via HTML/CSS only.

## Developer Workflow
- To preview locally, run:
  ```sh
  python3 -m http.server 8000 --directory css_basic
  # Then open http://localhost:8000/
  ```
- To validate HTML/CSS, use:
  - https://validator.w3.org/
  - https://jigsaw.w3.org/css-validator/
- To push changes:
  ```sh
  git add .
  git commit -m "<message>"
  git push
  ```

## Examples & References
- See `index.html` and `tweets.html` for markup structure and CSS inclusion.
- See `base.css` for reset and base style patterns.

---
If you add new HTML files, always include both CSS links in the `<head>`. For any questions, check `README.md` or existing files for examples.
