# 🗂️ INT Creative Website - Project Structure

## 🎯 Quick Access - Key Files You'll Edit Most

### 📄 Pages (What users see)
```
src/pages/
├── index.astro          # 🏠 Homepage - main landing page
├── about.astro          # ℹ️ About page  
├── services.astro       # 🛠️ Services page
├── portfolio.astro      # 💼 Portfolio/work showcase
├── contact.astro        # 📞 Contact form & info
├── blog.astro          # 📝 Blog listing page
├── privacy.astro        # 📋 Privacy policy
└── terms.astro         # 📋 Terms of service
```

### 🧩 Components (Reusable pieces)
```
src/components/
├── Footer.astro         # 🦶 Website footer (appears on all pages)
├── Navigation.astro     # 🧭 Top navigation menu
├── SocialProof.astro   # 👥 Social media proof section
├── SocialIcons.astro   # 📱 Social media icons
├── SocialShare.astro   # 🔄 Social sharing buttons
└── SocialFeed.astro    # 📺 Social media feed display
```

### 🎨 Layouts (Page templates)
```
src/layouts/
├── BaseLayout.astro     # 📐 Main page template (header, footer)
└── BlogPostLayout.astro # 📝 Blog post template
```

### ⚙️ Configuration
```
src/config/
└── social.ts           # 🔧 Social media accounts & settings
```

### 🎨 Styles
```
src/styles/
└── global.css          # 🎨 Global CSS styles
```

## 📁 Project Root Files

### 🚀 Development & Deployment
- `package.json` - Project dependencies & scripts
- `astro.config.mjs` - Astro framework configuration
- `tailwind.config.mjs` - TailwindCSS styling configuration  
- `vercel.json` - Deployment settings for Vercel

### 📚 Documentation
- `README.md` - Main project overview
- `SETUP.md` - Development setup instructions
- `DEPLOYMENT.md` - How to deploy the website
- `LAUNCH_CHECKLIST.md` - Pre-launch checklist
- `CONTENT_GUIDE.md` - How to update website content

## 🎯 Most Important Files to Know

### For Content Updates:
1. **Homepage**: `src/pages/index.astro`
2. **Services**: `src/pages/services.astro` 
3. **About**: `src/pages/about.astro`
4. **Contact**: `src/pages/contact.astro`
5. **Social Media**: `src/config/social.ts`

### For Design/Layout:
1. **Footer**: `src/components/Footer.astro`
2. **Navigation**: `src/components/Navigation.astro`
3. **Main Layout**: `src/layouts/BaseLayout.astro`
4. **Global Styles**: `src/styles/global.css`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Check for errors
npm run check
```

## 📂 Folders You Can Ignore
- `node_modules/` - Dependencies (auto-generated)
- `dist/` - Built website files (auto-generated)
- `.git/` - Version control files
- `.github/` - GitHub automation files