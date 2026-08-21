# Yogendra Chukka — AI Engineer Portfolio

A dependency-free, single-page portfolio for an AI & ML engineer. The experience is built with semantic HTML, modern CSS, and small vanilla JavaScript enhancements—no framework or build step required.

## Highlights

- Refined editorial visual system with responsive typography, light/dark themes, and subtle ambient depth.
- Accessible sticky navigation with active-section state and a keyboard-friendly mobile menu.
- `Cmd/Ctrl + K` command palette for fast section navigation and theme switching.
- IntersectionObserver-powered reveal system, scroll progress indicator, and motion-safe magnetic primary CTAs.
- Interactive AI request pipeline that communicates an intentional approach to routing, agents, retrieval, and tools.
- Case-study-style project cards with preserved GitHub repository links.
- Expandable, grouped technical stack and a concise engineering journey timeline.

## Local development

The project can be opened directly in a browser. To serve it locally:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Project structure

```text
├── index.html  # Semantic content and accessible interaction controls
├── style.css   # Design tokens, responsive layout, themes, and motion styles
├── app.js      # Navigation, command palette, theme persistence, and enhancements
└── README.md
```

## Accessibility and performance

- The experience honors `prefers-reduced-motion`; reveal effects are immediately visible and motion interactions are disabled.
- Controls have labels, keyboard focus styles, and native interactive elements.
- Theme preference is stored in `localStorage` and defaults to the system preference.
- No runtime dependencies, images, canvas, or scroll polling are used. Scroll state uses a passive listener, and reveal/active navigation use `IntersectionObserver`.

## Customization

Update content, project links, and the email call-to-action in `index.html`. Palette and spacing tokens live at the top of `style.css`.
