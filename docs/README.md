# INT Creative Hub Documentation

## 📂 Documentation Structure

### 🧠 Claude Memory System
Essential context files for Claude Code sessions:
- [`claude-memory/CLAUDE.md`](claude-memory/CLAUDE.md) - Main project guide and architecture
- [`claude-memory/portfolio-context.md`](claude-memory/portfolio-context.md) - Portfolio system implementation details
- [`claude-memory/recent-changes.md`](claude-memory/recent-changes.md) - Latest updates and current status
- [`claude-memory/quick-reference.md`](claude-memory/quick-reference.md) - Commands, URLs, and troubleshooting

### 🎯 Feature Documentation
Detailed guides for specific features:
- [`features/SERVICES_ARCHITECTURE.md`](features/SERVICES_ARCHITECTURE.md) - Services system design and implementation
- [`features/PORTFOLIO_COMPONENT_GUIDE.md`](features/PORTFOLIO_COMPONENT_GUIDE.md) - Portfolio system usage and components
- [`features/PORTFOLIO_SUMMARY.md`](features/PORTFOLIO_SUMMARY.md) - Portfolio project summaries
- [`features/LEGAL_COMPLIANCE_AUDIT.md`](features/LEGAL_COMPLIANCE_AUDIT.md) - Legal compliance and disclaimer requirements
- [`features/COMPONENT_REFERENCE.md`](features/COMPONENT_REFERENCE.md) - Reusable component library

### 🏗️ Architecture Documentation
Technical architecture and structure:
- [`architecture/PROJECT_STRUCTURE.md`](architecture/PROJECT_STRUCTURE.md) - File organization and patterns
- [`architecture/navigation-design.md`](architecture/navigation-design.md) - Navigation system architecture

### 👨‍💻 Development Documentation
Development guides and workflows:
- [`development/DEVELOPMENT_GUIDE.md`](development/DEVELOPMENT_GUIDE.md) - Development workflows and best practices
- [`development/component-patterns.md`](development/component-patterns.md) - Component development patterns

### 🚀 Deployment Documentation
Deployment and verification:
- [`deployment/verification-checklist.md`](deployment/verification-checklist.md) - Pre-deployment checklist

### 📚 Additional Resources
- [`visual-assets/`](visual-assets/) - Visual asset specifications and prompts
- [`changelog/`](changelog/) - Version history and change logs

## 🎯 Quick Start for Claude

When starting a new Claude session:

1. **Read the main guide**: [`claude-memory/CLAUDE.md`](claude-memory/CLAUDE.md)
2. **Check recent changes**: [`claude-memory/recent-changes.md`](claude-memory/recent-changes.md)
3. **Use quick reference**: [`claude-memory/quick-reference.md`](claude-memory/quick-reference.md)

## 🚨 Critical Information

### Current Project Status
- **Stage**: Pre-launch with demonstration portfolio
- **Legal Status**: All portfolio content is fictional and properly labeled
- **Portfolio System**: 12 demonstration projects with working filtering
- **Compliance**: Full FTC compliance with clear disclaimers

### Essential Commands
```bash
npm run dev              # Start development server
npm run build            # Production build
npm run check            # TypeScript validation
npm run lint             # Code quality check
```

### Key URLs
- Development: http://localhost:4321/
- Portfolio: http://localhost:4321/portfolio
- Filter example: http://localhost:4321/portfolio?filter=website-development

## 📞 Emergency Reference

### Portfolio Issues
1. Check `src/data/portfolio.ts` for data structure
2. Verify filtering logic in `PortfolioFilter.astro`
3. Test all service category filters

### Legal Compliance
1. Never remove demonstration disclaimers
2. All fictional content must be labeled
3. Maintain FTC compliance throughout

### Build Issues
1. Run `npm run check` for TypeScript errors
2. Check imports and file paths
3. Verify all required dependencies