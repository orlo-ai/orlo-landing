# Project Structure

## Root Directory Layout

```
/
├── index.html              # Main landing page
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── footer.html             # Reusable footer component
├── CNAME                   # GitHub Pages custom domain config
├── js/                     # JavaScript files
├── img/                    # Images and assets
└── .kiro/                  # Kiro AI assistant configuration
```

## JavaScript Organization (`/js/`)

- **analytics.js**: Google Analytics GA4 setup and custom event tracking
- **footer-loader.js**: Utility for dynamically loading footer component

## Assets Organization (`/img/`)

- **favicon_io/**: Complete favicon package with multiple sizes and formats
- **orlo-logo.png**: Main brand logo
- **orlo-logo-w.png**: White version of logo
- **orlo-social-share.png**: Social media sharing image
- **Captures.png**: Screenshot or demo image

## Page Structure Conventions

### HTML Structure

- All pages use semantic HTML5 markup
- Consistent header with logo and navigation
- Footer loaded via JavaScript or included directly
- Proper meta tags for SEO and social sharing

### CSS Conventions

- Tailwind CSS utility classes for styling
- Custom CSS in `<style>` blocks within HTML files
- Consistent color scheme using CSS custom properties:
  - Primary gradient: `#3B82F6` to `#8B5CF6`
  - Background: `#FAFAFA`
  - Text: `#333`

### Component Patterns

- **Header**: Logo, navigation, and CTA buttons
- **Hero Section**: Main value proposition with gradient text
- **Feature Sections**: Grid layouts with icons and descriptions
- **Footer**: Contact info, social links, legal pages

## Naming Conventions

- **Files**: kebab-case for HTML files (`privacy-policy.html`)
- **CSS Classes**: Tailwind utility classes + custom classes with descriptive names
- **JavaScript**: camelCase for variables and functions
- **Images**: descriptive names with hyphens (`orlo-logo.png`)

## Development Guidelines

- Keep all dependencies external (CDN-based)
- Maintain consistent Inter font usage across all pages
- Use Font Awesome icons consistently
- Implement proper analytics tracking on interactive elements
- Ensure responsive design with mobile-first approach
