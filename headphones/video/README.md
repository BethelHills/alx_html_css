# Video Directory

This directory contains video files for the Headphones landing page.

## Supported Video Formats:

- **MP4** - Most widely supported (recommended)
- **WebM** - Open format, excellent compression
- **OGG** - Open format, good for web
- **MOV** - High quality, larger file size

## Recommended Video Files:

1. **product-showcase.mp4** - Product demonstration video
2. **hero-background.mp4** - Background video for hero section
3. **testimonial-video.mp4** - Customer testimonial videos
4. **how-it-works.mp4** - Tutorial/instruction videos

## Usage in HTML:

```html
<video controls width="100%">
  <source src="video/product-showcase.mp4" type="video/mp4">
  <source src="video/product-showcase.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

## Background Video Example:

```html
<video autoplay muted loop playsinline class="hero-video">
  <source src="video/hero-background.mp4" type="video/mp4">
</video>
```

## Best Practices:

- Keep file sizes under 10-20MB for web performance
- Use MP4 (H.264 codec) for best compatibility
- Provide multiple formats for browser support
- Always include `controls` for user accessibility
- Use `poster` attribute for thumbnail image
- Add captions/subtitles for accessibility
- Use `preload="metadata"` to save bandwidth

## Optimization Tips:

- Compress videos before uploading (use Handbrake, FFmpeg, or online tools)
- Recommended resolution: 1920x1080 or 1280x720
- Use H.264 codec with AAC audio
- Bitrate: 2-5 Mbps for web videos
- Consider hosting large videos on YouTube/Vimeo and embedding
- Use lazy loading for videos below the fold

## Responsive Video:

```css
video {
  max-width: 100%;
  height: auto;
}
```

## Accessibility:

- Always provide captions/subtitles
- Include transcript for important content
- Ensure videos can be paused and controlled
- Don't autoplay videos with sound

