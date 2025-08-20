/**
 * Astro Jest Transformer
 * Transforms Astro components for Jest testing
 */

const { transformSync } = require('@babel/core');

module.exports = {
  process(sourceText, sourcePath) {
    // Basic Astro component transformation for testing
    // Extract the frontmatter and script content
    const frontmatterMatch = sourceText.match(/^---([\s\S]*?)---/);
    const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
    
    // Extract the template content
    const templateContent = sourceText.replace(/^---([\s\S]*?)---/, '').trim();
    
    // Create a testable JavaScript representation
    const transformedCode = `
      // Astro component mock for testing
      const AstroComponent = {
        frontmatter: \`${frontmatter}\`,
        template: \`${templateContent.replace(/`/g, '\\`')}\`,
        props: {},
        
        // Mock render function for testing
        render(props = {}) {
          this.props = props;
          
          // Execute frontmatter as JavaScript (simplified)
          try {
            const frontmatterFunc = new Function('Astro', 'props', \`
              const { props: astroProps } = Astro;
              Object.assign(this, astroProps);
              \${this.frontmatter}
              return { 
                // Return any variables that might be used in template
              };
            \`);
            
            const astroContext = {
              props: props,
              request: { url: 'http://localhost:4321/test' },
              url: new URL('http://localhost:4321/test'),
              site: 'http://localhost:4321'
            };
            
            frontmatterFunc.call(props, astroContext, props);
          } catch (e) {
            console.warn('Frontmatter execution failed in test:', e.message);
          }
          
          return this.template;
        },
        
        // Helper methods for testing
        getProps() {
          return this.props;
        },
        
        hasClass(className) {
          return this.template.includes(\`class="\${className}"\`) || 
                 this.template.includes(\`class='\${className}'\`);
        },
        
        hasAttribute(attrName) {
          return this.template.includes(\`\${attrName}=\`);
        },
        
        getAttributeValue(attrName) {
          const match = this.template.match(new RegExp(\`\${attrName}=["']([^"']+)["']\`));
          return match ? match[1] : null;
        },
        
        containsText(text) {
          return this.template.includes(text);
        }
      };
      
      export default AstroComponent;
      
      // For CommonJS compatibility
      module.exports = AstroComponent;
    `;
    
    // Transform the code with Babel if needed
    const result = transformSync(transformedCode, {
      filename: sourcePath,
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-typescript', { allowNamespaces: true }]
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs'
      ]
    });
    
    return {
      code: result.code
    };
  }
};