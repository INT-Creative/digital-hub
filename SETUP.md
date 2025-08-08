# INT Creative Hub - Repository Setup Instructions

## Manual GitHub Repository Creation

Since the GitHub repository couldn't be created automatically, follow these steps to set up the repository manually:

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" or go to https://github.com/new
3. Fill out the repository details:
   - **Repository name**: `intcreative-hub`
   - **Description**: `Professional marketing agency website for startup-focused lead generation - Built with Astro`
   - **Visibility**: Public (recommended for better SEO and showcasing work)
   - **Initialize**: Leave unchecked (we already have files ready)

### 2. Connect Local Repository

```bash
cd /home/intadmin/intcreative-hub

# Add GitHub remote (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/intcreative-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Set Up Branch Protection

Go to your repository on GitHub → Settings → Branches → Add rule:

- **Branch name pattern**: `main`
- **Protect matching branches**:
  - ✅ Require a pull request before merging
  - ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - ✅ Include administrators
  - ✅ Restrict pushes that create files larger than 100 MB

### 4. Configure Deployment (Choose One)

#### Option A: Netlify (Recommended)
1. Go to [Netlify](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Deploy site and get your site URL

#### Option B: Vercel
1. Go to [Vercel](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Astro settings
5. Deploy and get your site URL

### 5. Set Up Environment Variables

In your deployment platform, add these environment variables:

- `SITE_URL`: Your production URL (e.g., https://intcreative.co)
- Any API keys for forms, analytics, etc.

### 6. Configure GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions:

**For Netlify deployment:**
- `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
- `NETLIFY_SITE_ID`: Your site ID from Netlify dashboard

**For Vercel deployment:**
- `VERCEL_TOKEN`: Your Vercel access token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 7. Set Up Development Environment

```bash
cd /home/intadmin/intcreative-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Content Management for Beginners

### Adding New Pages
1. Create a new `.astro` file in `src/pages/`
2. Use the BaseLayout component for consistent styling
3. Follow the existing page structure

### Updating Content
- **Homepage**: Edit `src/pages/index.astro`
- **Services**: Create files in `src/pages/services/`
- **Portfolio**: Create files in `src/pages/portfolio/`
- **Blog**: Create files in `src/pages/blog/`

### Adding Images
1. Add images to `public/images/`
2. Reference them as `/images/filename.jpg`
3. Always include alt text for accessibility

### Making Changes Safely
1. Create a new branch: `git checkout -b update/page-name`
2. Make your changes
3. Test locally: `npm run dev`
4. Commit and push: `git add . && git commit -m "Description" && git push`
5. Create a Pull Request on GitHub
6. Review the preview deployment
7. Merge when ready

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build locally
npm run lint         # Check for code issues
npm run format       # Format code with Prettier
npm run check        # Run Astro type checking
```

## Project Structure

```
intcreative-hub/
├── .github/                 # GitHub templates and workflows
├── public/                  # Static assets (images, favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Website pages (auto-routed)
│   ├── styles/            # Global CSS
│   └── utils/             # Helper functions
├── package.json           # Dependencies and scripts
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Support

- **Technical Issues**: Create an issue on GitHub
- **Content Questions**: Review the CONTRIBUTING.md file
- **Emergency Contact**: jake@intcreative.co

## Next Steps

1. Complete the GitHub repository setup above
2. Set up your chosen deployment platform
3. Install dependencies and test local development
4. Start customizing the content for your agency
5. Add your actual portfolio projects and case studies
6. Set up Google Analytics and other tracking
7. Configure contact forms and lead capture

Your professional marketing agency website is ready to launch! 🚀