# Yogendra Chukka — AI Engineer Portfolio

A modern, interactive portfolio website built with vanilla HTML, CSS, and JavaScript. Features ambient animations, scroll progress indicator, reveal animations, magnetic buttons, and spotlight card effects.

## Features

- **Scroll Progress Bar** — Visual indicator at top of page
- **Ambient Background** — Animated gradient orbs with blur
- **Cursor Glow** — Interactive cursor follower (desktop only)
- **Reveal Animations** — IntersectionObserver-based scroll reveals
- **Active Navigation** — Highlights current section in nav
- **Spotlight Cards** — Radial gradient follows cursor on hover
- **Magnetic Buttons** — Subtle attraction effect on hover
- **Fully Responsive** — Mobile-first, breakpoints at 850px and 560px
- **Accessible** — Respects `prefers-reduced-motion`, semantic HTML, ARIA labels

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid/Flexbox, animations
- **Vanilla JS** — IntersectionObserver, pointer events
- **Inter Font** — Google Fonts

## Project Structure

```
Yogendra-Portfolio/
├── index.html      # Main HTML structure
├── style.css       # Complete stylesheet
├── app.js          # Interactive behaviors
└── README.md       # This file
```

## Sections

1. **Hero** — Headline, intro copy, CTAs, meta tags
2. **About** — Bio card + identity list
3. **Focus** — Four technical direction cards
4. **Projects** — Featured project + three additional cards
5. **Skills** — Four categorized tag groups
6. **Career** — Direction statement + pillars
7. **Connect** — GitHub + Email links

## Local Development

Open `index.html` directly in a browser, or serve with a local server:

```bash
npx serve
# or
python3 -m http.server 8000
```

## Deployment

Deploy to any static hosting:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

## Customization

Update these in `index.html`:
- Email in Connect section (`your-email@example.com`)
- Project links and descriptions
- Social links in footer

Update in `style.css`:
- Color palette via CSS custom properties (`:root`)
- Spacing, typography scale

## Performance

- No build step, no dependencies
- All animations use `transform`/`opacity` for GPU acceleration
- Passive event listeners for scroll/pointer
- `will-change` hints on animated elements
- Reduced motion support

## Browser Support

Modern browsers (last 2 versions):
- Chrome/Edge
- Firefox
- Safari

## License

MIT — Free to use and modify.