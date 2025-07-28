# Release Notes Template

Copy this template when creating new release notes:

## File Naming Convention
`YYYY-MM-DD-vX-X-X-short-description.mdx`

Example: `2025-07-28-v0-7-0-improved-scheduling.mdx`

## Template Content

```markdown
---
# Basic Information
title: "Your Release Title Here"
slug: "v0-7-0-short-description"
version: "v0.7.0"
publishedAt: "2025-07-28"

# Content Classification
category: "minor"  # major | minor | patch
tags: ["feature-name", "improvement"]

# SEO Optimization
excerpt: "Brief description of this release for SEO and social sharing (1-2 sentences)."
keywords: ["ORLO", "specific-feature", "productivity app", "v0.7.0"]

# Author Information
author: "ORLO Product Team"
---

# Your Release Title Here

Write your release content here using standard Markdown.

## What's New

Describe the main features or improvements.

## What This Means for You

Explain the user benefits and impact.

[Try New Feature](https://my.orlo.cc) - Available now in your ORLO app

---

**Version:** v0.7.0  
**Release Date:** July 28, 2025  
**Type:** Minor Feature Update
```

## Quick Start Guide

1. Copy the template above
2. Replace placeholder values with actual content
3. Save as `.mdx` file in `/content/release-notes/`
4. The system will automatically:
   - Generate static pages
   - Create SEO meta tags
   - Add to RSS feed
   - Display in release list

## Required Fields
- `title`: Display title of the release
- `slug`: URL-friendly identifier  
- `version`: Version number (with 'v' prefix)
- `publishedAt`: Publication date (YYYY-MM-DD)
- `category`: Impact level (major | minor | patch)
- `excerpt`: Brief SEO description
- `author`: Author name

## Optional Fields
- `tags`: Simple feature tags
- `keywords`: SEO keywords array

## Simple Guidelines
- **`category`**: Choose based on user impact
  - `major`: Big new features or changes
  - `minor`: New features, improvements  
  - `patch`: Bug fixes, small updates
- **Keep it simple**: Focus on what users care about, not technical details