# Juan José Pérez - Mega Man Cyberpunk Style Portfolio

A futuristic, cyberpunk-themed portfolio website built with Astro, featuring Mega Man-inspired design elements, animated particles, and interactive effects.

## Features

- **Cyberpunk Aesthetic**: Mega Man-inspired design with neon colors and futuristic elements
- **Animated Particles**: 50 floating particles with glow effects
- **Energy Bar**: Scroll-based progress indicator with pulsing animation
- **Glass Morphism**: Translucent cards with backdrop blur effects
- **Interactive Animations**: Hover effects, gradient animations, and liquid flow backgrounds
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Orbitron Typography**: Futuristic monospace font throughout

## Sections

- **Hero**: Animated title with gradient text effects and cyberpunk styling
- **Skills**: 6 skill cards with icons, hover animations, and glow effects
- **Projects**: Glass-morphism project cards with animated backgrounds
- **Contact**: Cyberpunk-styled contact form with neon inputs
- **Navigation**: Fixed header with energy effects and smooth scrolling

## Project Structure

```
portfolio/src/
├── components/          # Astro components
│   ├── Hero.astro      # Cyberpunk hero section
│   ├── Skills.astro    # Animated skill cards
│   ├── Projects.astro  # Glass-morphism project grid
│   └── Contact.astro   # Neon contact form
├── content/
│   └── megaman-text.ts # Centralized content for Mega Man theme
├── layouts/
│   └── Layout.astro    # Main layout with particles and energy bar
├── scripts/
│   └── megaman.ts      # Particle system and interactions
├── styles/
│   └── megaman.css     # Complete cyberpunk styling
└── assets/
    └── megaman_dev_portfolio.html # Original template reference
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:4321`

## Customization

### Personal Information
Update the content files with your personal information:

- `src/content/text.ts` - Spanish content
- `src/content/text-en.ts` - English content

### Adding New Languages
1. Create a new content file (e.g., `text-fr.ts`)
2. Update the `i18n.ts` utility to include the new language
3. Add the language option to the `Language` type

### Styling
- Component-specific styles are in `src/styles/`
- Global styles are in `src/layouts/Layout.astro`
- Carousel styles are separated in `src/styles/carousel.css`

### Adding Images
1. Add your images to the `public/` folder
2. Update the image references in the content files
3. Replace the placeholder divs with actual `<img>` tags

## Cyberpunk Features

- **Animated Grid Background**: Moving cyber grid pattern
- **Particle System**: 50 floating particles with glow effects
- **Energy Bar**: Scroll-based progress indicator
- **Glass Morphism**: Translucent cards with backdrop blur
- **Gradient Animations**: Color-shifting title and borders
- **Liquid Flow**: Animated gradient overlays in project section
- **Hover Effects**: Cards lift and glow on interaction
- **Neon Typography**: Orbitron font with text shadows and glows

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment to any static hosting service.

## Technologies Used

- **Astro** - Static site generator
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Advanced animations, gradients, and effects
- **Google Fonts** - Orbitron cyberpunk typography
- **HTML5** - Semantic markup with accessibility features

## Profile Information

This portfolio is customized for Juan José Pérez, a Full-Stack Developer & Software Architect with 8+ years of experience specializing in:

- Modern web technologies (React, Node.js, Python)
- Cloud architectures (AWS, Azure)
- Scalable solutions and microservices
# Juan José Pérez — Portfolio (Astro)

This is a personal portfolio built with Astro. It uses a neon/cyber aesthetic, glass-morphism cards, and fast static rendering.

Quick summary
- Projects/cards are driven by content in `src/content/texts-es.ts` and `src/content/texts-en.ts`.
- Logos and images should live in `public/logos/` and are referenced like `/logos/your-image.png` from content.
- Main styles are in `src/styles/portafolio.css`.

## Quick start

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

3. Open http://localhost:4321 in your browser.

## Project layout (important files)

- `src/components/Projects.astro` — project grid; project items use the content definitions and render image tags when `icon` starts with `/`.
- `src/content/texts-en.ts` and `src/content/texts-es.ts` — project and UI text; update these to change cards, icons, links and copy.
- `src/styles/portafolio.css` — main styling for the site (cards, hero, footer, etc.).
- `public/logos/` — drop logos here and reference them from the content files as `/logos/filename.ext`.

## Managing project logos

1. Put your images in `public/logos/` (e.g. `public/logos/mylogo.png`).
2. In the content file (`src/content/texts-en.ts` or `texts-es.ts`) set the project's `icon` to the public path, for example:

```ts
icon: '/logos/mylogo.png'
```

The `Projects.astro` component will render an `<img>` when the `icon` string begins with `/`.

## Optional: Flip-card interaction (how-to)

The project cards currently render static image + content. To add a flip-on-click interaction, you can:

1. Create a small client script in `public/scripts/projectFlip.js` that toggles a class like `is-flipped` on card elements when clicked.
2. Add a 3D flip CSS block (use `perspective` on the container, `transform-style: preserve-3d` on the inner wrapper, and `transform: rotateY(180deg)` for the flipped state).
3. Update `Projects.astro` card markup to include a front/back wrapper for the flip.

This repository previously experimented with a flip implementation — the code was removed to restore the stable layout. If you'd like, I can add a small, accessible flip implementation and wire it up.

## Contributing / Development notes

- Use `src/content/*` for copy and project configuration.
- Keep large images in `public/` so Astro serves them statically.
- Styles are plain CSS; feel free to extract components into smaller files under `src/styles/` if desired.

## Build & deploy

```powershell
npm run build
```

Then serve the `dist/` directory using your hosting provider.
test....

## License

MIT
