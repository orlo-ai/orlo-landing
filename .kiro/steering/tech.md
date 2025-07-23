# Technology Stack

## Frontend Technologies

- **HTML5**: Semantic markup with proper meta tags and structured data
- **CSS**: Tailwind CSS 2.2.19 via CDN for styling
- **JavaScript**: Vanilla ES6+ for functionality and analytics
- **Fonts**: Inter font family from Google Fonts
- **Icons**: Font Awesome 6.0.0 for UI icons

## External Dependencies

- **Tailwind CSS**: `https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
- **Google Fonts**: Inter font family
- **Google Analytics**: GA4 with measurement ID `G-J6HLEC8EJZ`

## Build System

- **Static Site**: No build process required - direct HTML/CSS/JS files
- **Deployment**: GitHub Pages with custom domain (orlo.cc)
- **No Package Manager**: All dependencies loaded via CDN

## Development Workflow

Since this is a static site with CDN dependencies, development is straightforward:

1. Edit HTML/CSS/JS files directly
2. Test locally by opening HTML files in browser
3. Commit changes to git
4. GitHub Pages automatically deploys from main branch

## Analytics & Tracking

- **Google Analytics 4**: Configured with custom event tracking
- **Custom Analytics**: `window.orloAnalytics` object for tracking user interactions
- **Event Types**: Page views, button clicks, form submissions, external links

## Performance Considerations

- All external resources loaded via CDN
- Minimal JavaScript footprint
- Optimized images in `/img` directory
- Proper favicon implementation with multiple sizes
