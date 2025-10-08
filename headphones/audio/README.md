# Audio Directory

This directory contains audio files for the Headphones landing page.

## Supported Audio Formats:

- **MP3** - Most widely supported (recommended)
- **OGG** - Open format, good browser support
- **WAV** - High quality, larger file size
- **M4A** - Good quality, AAC encoding

## Recommended Audio Files:

1. **product-demo.mp3** - Product demonstration audio
2. **background-music.mp3** - Background music for hero section
3. **testimonial-audio.mp3** - Customer testimonial audio clips

## Usage in HTML:

```html
<audio controls>
  <source src="audio/product-demo.mp3" type="audio/mpeg">
  <source src="audio/product-demo.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

## Best Practices:

- Keep file sizes under 5MB for web performance
- Use MP3 format (128-192 kbps) for best compatibility
- Provide multiple formats for browser compatibility
- Always include controls for accessibility
- Add captions/transcripts for accessibility

## Optimization Tips:

- Compress audio files before uploading
- Use tools like Audacity or online compressors
- Optimize bitrate (128-192 kbps is usually sufficient)
- Normalize audio levels for consistency

