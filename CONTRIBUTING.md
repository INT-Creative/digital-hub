# Contributing to INT Creative Hub

Thank you for your interest in contributing to the INT Creative Hub website! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed and configured
- Basic knowledge of Astro, HTML, CSS, and JavaScript

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/intcreative-hub.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

## Development Workflow

### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Making Changes

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards:
   - Use TypeScript where possible
   - Follow the existing code style
   - Write meaningful commit messages
   - Test your changes locally

3. **Run quality checks**:
   ```bash
   npm run lint        # Check for linting errors
   npm run format      # Format code with Prettier
   npm run check       # Run Astro checks
   npm run build       # Test production build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new contact form component"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** with a clear description

## Code Style Guidelines

### HTML/Astro
- Use semantic HTML elements
- Include proper alt text for images
- Ensure accessibility compliance (WCAG 2.1 AA)

### CSS/Tailwind
- Use Tailwind utility classes when possible
- Create custom components for repeated patterns
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

### JavaScript/TypeScript
- Use TypeScript for type safety
- Follow ESLint configuration
- Write clear, descriptive function names
- Add JSDoc comments for complex functions

### File Organization
```
src/
├── components/         # Reusable UI components
├── layouts/           # Page layouts
├── pages/             # Route pages
├── styles/            # Global styles
└── utils/             # Helper functions
```

## Content Guidelines

### Writing Style
- Use clear, professional language
- Focus on benefits over features
- Include call-to-actions where appropriate
- Maintain consistent tone and voice

### Images
- Optimize images before adding (use WebP when possible)
- Include descriptive alt text
- Use consistent aspect ratios
- Store in `public/images/` directory

### SEO Best Practices
- Include meta descriptions for all pages
- Use proper heading hierarchy (h1 → h6)
- Add structured data where relevant
- Optimize page loading speeds

## Testing

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile responsiveness
- Check accessibility with screen readers
- Test form functionality

### Performance Testing
- Run Lighthouse audits
- Check Core Web Vitals
- Verify image optimization
- Test loading speeds

## Pull Request Process

1. **Fill out the PR template** completely
2. **Request review** from maintainers
3. **Address feedback** promptly
4. **Ensure CI checks pass** (linting, building, testing)
5. **Wait for approval** before merging

### PR Requirements
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated if needed
- [ ] No breaking changes (or clearly documented)
- [ ] Performance impact considered

## Issue Reporting

### Bug Reports
Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information

### Feature Requests
Include:
- Problem description
- Proposed solution
- Alternative approaches considered
- Use cases and benefits

## Questions and Support

- Create an issue for bugs or feature requests
- Use discussions for questions and ideas
- Contact jake@intcreative.co for urgent matters

## Code of Conduct

Please be respectful and professional in all interactions:
- Be welcoming to newcomers
- Focus on constructive feedback
- Respect different viewpoints
- Help maintain a positive environment

Thank you for contributing to INT Creative Hub!