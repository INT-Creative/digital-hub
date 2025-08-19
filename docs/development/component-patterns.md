# Component Development Patterns

## Component Creation Guidelines

### File Structure
- Use PascalCase for component filenames
- Place components in appropriate subdirectories
- Follow single responsibility principle

### TypeScript Integration
- Always define interfaces for component props
- Use strict type checking
- Avoid `any` types

### Service Component Pattern
When creating service-related components:
1. Import service data from `src/data/services.ts`
2. Use ServiceDetail interface for type safety
3. Implement responsive design with TailwindCSS
4. Include proper accessibility attributes

### Styling Conventions
- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Implement hover states for interactive elements
- Maintain consistency with forest/sage/beige color palette