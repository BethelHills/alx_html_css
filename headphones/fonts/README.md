# Custom Icon Fonts

This directory contains the custom Holberton School icon font files.

## Files Required

The icon font requires the following files:
- `holberton_school-icon.eot` - For older IE browsers
- `holberton_school-icon.ttf` - TrueType Font
- `holberton_school-icon.woff` - Web Open Font Format
- `holberton_school-icon.svg` - SVG Font

## Usage

The fonts are automatically loaded via `@font-face` in `holberton_school-icon.css`.

## Icon Classes

Available icons for the "What we do..." section:
- `holberton_school-icon-ic_sound` - Sound/Frequency icon
- `holberton_school-icon-ic_video` - Video icon
- `holberton_school-icon-ic_music` - Music icon
- `holberton_school-icon-ic_hearing` - Hearing/Ear icon

## Implementation

Icons are used as font icons with the following structure:

```html
<span class="holberton_school-icon-ic_sound feature-icon" aria-hidden="true"></span>
```

The icons are styled with:
- Font size: 94px
- Color: #ff6565
- Display: block
- Centered alignment

