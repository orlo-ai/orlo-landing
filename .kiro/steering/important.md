---
inclusion: always
---

# Critical Project Guidelines

## Code Quality Standards
- Use semantic HTML5 markup with proper accessibility attributes
- Maintain consistent Tailwind CSS utility class usage
- Write vanilla JavaScript ES6+ without external frameworks
- Ensure all interactive elements have proper analytics tracking
- Test responsive design across mobile and desktop breakpoints

## Content & Messaging Rules
- Always align copy with Orlo's core value: "Rebuild your life, not just your schedule"
- Use empathetic, transformation-focused language over productivity jargon
- Highlight key metrics: 5+ hours saved weekly, 46% stress reduction, 73% fewer decisions
- Maintain professional yet approachable tone throughout all content
- Emphasize beta exclusivity and lifetime access value proposition

## Development Constraints
- **No Build Process**: Direct HTML/CSS/JS editing only - no bundlers or preprocessors
- **CDN Dependencies Only**: Never add npm packages or local dependencies
- **Static Site Architecture**: All functionality must work without server-side processing
- **GitHub Pages Deployment**: Ensure compatibility with GitHub Pages hosting

## File Modification Rules
- Update `index.html` for main landing page changes
- Use `footer.html` for shared footer content across pages
- Add new analytics events to `js/analytics.js` using `window.orloAnalytics`
- Place all images in `/img/` directory with descriptive filenames

## Performance Requirements
- Keep JavaScript minimal and focused on essential functionality
- Optimize images before adding to `/img/` directory
- Ensure fast loading with CDN-based dependencies
- Maintain Google PageSpeed scores above 90

## Analytics Implementation
- Track all user interactions with custom events
- Use GA4 measurement ID: `G-J6HLEC8EJZ`
- Implement `window.orloAnalytics` for custom event tracking
- Monitor button clicks, form submissions, and external link clicks

## Brand Consistency
- Use Inter font family exclusively
- Maintain gradient color scheme: `#3B82F6` to `#8B5CF6`
- Use Font Awesome 6.0.0 icons consistently
- Ensure logo usage follows brand guidelines (orlo-logo.png variants)
## 語言規範
- **溝通語言**：與用戶的所有對話必須使用中文（繁體中文）
- **代碼註解**：程式碼註解和文件應保持中文
- **技術討論**：技術概念解釋和方案說明使用中文表達