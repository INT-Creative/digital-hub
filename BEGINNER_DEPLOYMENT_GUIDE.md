# Complete Beginner's Guide to Deploying INT Creative Website

## Table of Contents
1. [What You'll Accomplish](#what-youll-accomplish)
2. [Prerequisites](#prerequisites)
3. [Understanding Key Concepts](#understanding-key-concepts)
4. [Step 1: Create GitHub Repository](#step-1-create-github-repository)
5. [Step 2: Connect Local Code to GitHub](#step-2-connect-local-code-to-github)
6. [Step 3: Choose and Set Up Hosting](#step-3-choose-and-set-up-hosting)
7. [Step 4: Connect Your Domain](#step-4-connect-your-domain)
8. [Step 5: Set Up Staging and Production](#step-5-set-up-staging-and-production)
9. [Launch Checklist](#launch-checklist)
10. [Troubleshooting](#troubleshooting)
11. [Post-Launch Maintenance](#post-launch-maintenance)

---

## What You'll Accomplish

By the end of this guide, you will have:
- Your INT Creative website live at `https://intcreative.co`
- Automatic deployments when you make changes
- A staging environment for testing
- Professional hosting with SSL certificates
- A complete understanding of how to maintain your site

**Estimated Time:** 2-3 hours for complete setup

---

## Prerequisites

### Required Items
- [ ] Your website code (already ready in this project)
- [ ] Access to intcreative.co domain management
- [ ] A GitHub account (free)
- [ ] Basic command line knowledge (we'll guide you)

### Required Software
- [ ] Git installed on your computer
- [ ] Node.js 18+ installed
- [ ] A code editor (VS Code recommended)
- [ ] Terminal/Command Prompt access

**Check if you have these installed:**
```bash
git --version
node --version
npm --version
```

If any of these commands fail, install the missing software first.

---

## Understanding Key Concepts

Before we start, let's understand what we're doing:

### **Static Site**
Your website is a "static site" - it's made of HTML, CSS, and JavaScript files that don't need a server to run special code. This makes it fast and cheap to host.

### **Git and GitHub**
- **Git**: Version control system that tracks changes to your code
- **GitHub**: Online service that stores your code and enables collaboration

### **Staging vs Production**
- **Production**: Your live website that visitors see at intcreative.co
- **Staging**: A testing version where you preview changes before they go live

### **Domain and DNS**
- **Domain**: intcreative.co (your web address)
- **DNS**: System that connects your domain to your hosting server

### **SSL Certificate**
Security certificate that enables HTTPS (the padlock in browsers). Required for modern websites.

---

## Step 1: Create GitHub Repository

### 1.1 Sign into GitHub
1. Go to [github.com](https://github.com)
2. Sign in or create a free account
3. Look for the "+" icon in the top right corner

### 1.2 Create New Repository
1. Click the "+" icon, then "New repository"
2. **Repository name:** `intcreative-hub`
3. **Description:** `Professional marketing agency website for INT Creative`
4. **Visibility:** Choose "Private" (recommended for business sites)
5. **Initialize repository:** Leave ALL boxes UNCHECKED
   - ❌ Don't add README
   - ❌ Don't add .gitignore
   - ❌ Don't choose a license
6. Click "Create repository"

### 1.3 Copy Repository URL
After creation, you'll see a page with setup instructions. Copy the HTTPS URL that looks like:
```
https://github.com/YOUR_USERNAME/intcreative-hub.git
```

**Screenshot Note:** Take a screenshot of this page - you'll need the URL in the next step.

---

## Step 2: Connect Local Code to GitHub

### 2.1 Open Terminal in Your Project
1. Navigate to your project folder: `/home/intadmin/intcreative-hub`
2. Right-click in the folder and select "Open Terminal Here" (or use cd command)
3. Verify you're in the right place:
   ```bash
   ls
   ```
   You should see files like `package.json`, `astro.config.mjs`, etc.

### 2.2 Initialize Git Repository
```bash
# Initialize git in your project
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: INT Creative website ready for deployment"
```

### 2.3 Connect to GitHub
Replace `YOUR_GITHUB_URL` with the URL you copied earlier:
```bash
# Connect to your GitHub repository
git remote add origin YOUR_GITHUB_URL

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 2.4 Verify Upload
1. Refresh your GitHub repository page
2. You should now see all your website files
3. The main page should show your README.md content

**Troubleshooting:** If you get an authentication error, you may need to set up a Personal Access Token (see troubleshooting section).

---

## Step 3: Choose and Set Up Hosting

We recommend **Vercel** for beginners because it's:
- Free for small sites
- Automatic deployments
- Built-in SSL certificates
- Excellent performance
- Simple setup

### 3.1 Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Repository
1. On Vercel dashboard, click "New Project"
2. Find "intcreative-hub" in the list
3. Click "Import"
4. **Framework Preset:** Should auto-detect "Astro"
5. **Build Settings:** Leave as default
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### 3.3 Wait for Deployment
1. Vercel will install dependencies and build your site
2. This takes 2-5 minutes for first deployment
3. You'll see a live progress log
4. When complete, you'll get a URL like `https://intcreative-hub-xxx.vercel.app`

### 3.4 Test Your Deployed Site
1. Click the provided URL
2. Your website should load perfectly
3. Test all pages and forms
4. Check mobile responsiveness

**Success Indicator:** If you see your INT Creative website with all styling and content, you're ready for the next step!

---

## Step 4: Connect Your Domain

### 4.1 Add Custom Domain in Vercel
1. In your Vercel project, go to "Settings"
2. Click "Domains" in the sidebar
3. Enter `intcreative.co` in the domain field
4. Click "Add"
5. Vercel will show you DNS records to configure

### 4.2 Configure DNS Records
You'll need to add these records to your domain registrar:

**For Root Domain (intcreative.co):**
```
Type: A
Name: @
Value: 76.76.19.61
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 Access Your Domain Management
This depends on where you registered intcreative.co:

**Common Registrars:**
- **GoDaddy:** DNS Management in your domain dashboard
- **Namecheap:** Advanced DNS settings
- **Cloudflare:** DNS records section
- **Google Domains:** DNS configuration

### 4.4 Add DNS Records
1. Log into your domain registrar
2. Find "DNS Management" or "DNS Records"
3. Add the A record and CNAME record from step 4.2
4. Save changes

**Important:** DNS changes take 15 minutes to 48 hours to fully propagate.

### 4.5 Verify Domain Connection
1. Wait 15-30 minutes after adding DNS records
2. In Vercel, check if the domain shows as "Valid"
3. Visit `https://intcreative.co` to test
4. SSL certificate should be automatically installed

---

## Step 5: Set Up Staging and Production

### What This Achieves
- **Production Branch (main):** Your live website
- **Staging Branch (staging):** Testing environment
- **Preview Deployments:** Automatic previews of all changes

### 5.1 Create Staging Branch
```bash
# Create and switch to staging branch
git checkout -b staging

# Push staging branch to GitHub
git push -u origin staging
```

### 5.2 Configure Branch Deployments in Vercel
1. In Vercel project settings, go to "Git"
2. **Production Branch:** Set to `main`
3. **Preview Deployments:** Enable for all branches
4. Save changes

### 5.3 Set Up Staging Domain
1. In Vercel "Domains" settings
2. Add `staging.intcreative.co` as a custom domain
3. Follow the same DNS setup process as before:
   ```
   Type: CNAME
   Name: staging
   Value: cname.vercel-dns.com
   ```

### 5.4 Test Your Workflow
**Making Changes:**
```bash
# Work on staging branch
git checkout staging

# Make your changes, then:
git add .
git commit -m "Update: description of changes"
git push origin staging

# When ready for production:
git checkout main
git merge staging
git push origin main
```

**Result:**
- Staging changes appear at `staging.intcreative.co`
- Production changes appear at `intcreative.co`
- Each push creates automatic deployments

---

## Launch Checklist

### Pre-Launch Checklist

#### Technical Setup
- [ ] GitHub repository created and connected
- [ ] Vercel deployment working
- [ ] Custom domain connected (intcreative.co)
- [ ] SSL certificate active (HTTPS working)
- [ ] Staging environment set up
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Forms working properly

#### Content Review
- [ ] All contact information accurate
- [ ] Phone numbers and email addresses correct
- [ ] Services and pricing up to date
- [ ] Portfolio/case studies current
- [ ] About page reflects current team
- [ ] Legal pages (privacy, terms) present
- [ ] Copyright year current

#### SEO and Performance
- [ ] All pages have proper meta titles
- [ ] Meta descriptions under 160 characters
- [ ] Images have alt text
- [ ] Site loads in under 3 seconds
- [ ] Google Analytics installed (if desired)
- [ ] Google Search Console set up
- [ ] Sitemap accessible at `/sitemap.xml`

#### Browser and Device Testing
- [ ] Chrome desktop/mobile
- [ ] Safari desktop/mobile
- [ ] Firefox desktop
- [ ] Edge desktop
- [ ] Test all major pages on each

### Launch Day Checklist

#### Final Pre-Launch (1 hour before)
- [ ] Final content review
- [ ] Test all contact forms
- [ ] Check all external links
- [ ] Verify social media links
- [ ] Test phone numbers (click to call)
- [ ] Screenshot perfect version for reference

#### Go Live Process
- [ ] Merge final changes to main branch
- [ ] Verify production deployment completes
- [ ] Test intcreative.co loads perfectly
- [ ] Check SSL certificate (padlock icon)
- [ ] Test from different devices/networks
- [ ] Verify Google Analytics tracking (if installed)

#### Post-Launch (First 24 hours)
- [ ] Monitor website uptime
- [ ] Check for any broken elements
- [ ] Test contact form submissions
- [ ] Monitor any error reports
- [ ] Share launch with team/stakeholders
- [ ] Submit to Google for indexing

---

## Troubleshooting

### Common GitHub Issues

**Problem: "Authentication failed" when pushing to GitHub**

*Solution:* Set up a Personal Access Token
1. GitHub Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Use token as password when prompted

**Problem: "Remote origin already exists"**
```bash
git remote remove origin
git remote add origin YOUR_GITHUB_URL
```

### Common Deployment Issues

**Problem: Vercel build fails with "Command not found"**

*Check:*
- Node.js version compatibility
- All dependencies listed in package.json
- Build command is correct: `npm run build`

**Problem: Site deploys but looks broken (no styling)**

*Solutions:*
- Check if CSS files are building properly
- Verify asset paths in astro.config.mjs
- Check browser console for errors

### Domain Connection Issues

**Problem: Domain not connecting after 24+ hours**

*Steps:*
1. Verify DNS records exactly match Vercel requirements
2. Use DNS checker tool: `nslookup intcreative.co`
3. Clear browser cache and try incognito mode
4. Contact domain registrar support if needed

**Problem: "Invalid Domain" in Vercel**

*Check:*
- Domain spelling is correct
- DNS records propagated (use DNS checker)
- Domain isn't already connected to another service

### Performance Issues

**Problem: Slow loading times**

*Solutions:*
- Optimize images (use WebP format)
- Check for large JavaScript bundles
- Enable Vercel's built-in optimizations
- Use Chrome DevTools Performance tab

---

## Post-Launch Maintenance

### Regular Tasks (Weekly)
- [ ] Check website uptime and performance
- [ ] Review form submissions
- [ ] Update content as needed
- [ ] Check for broken links

### Monthly Tasks
- [ ] Review analytics data
- [ ] Update portfolio with new projects
- [ ] Check all integrations working
- [ ] Backup important data

### Making Updates

**For Small Changes (content updates, bug fixes):**
```bash
git checkout staging
# Make changes
git add .
git commit -m "Update: brief description"
git push origin staging
# Test at staging.intcreative.co
# When satisfied:
git checkout main
git merge staging
git push origin main
```

**For Major Changes (new features, redesigns):**
1. Create feature branch: `git checkout -b feature-name`
2. Develop and test thoroughly
3. Merge to staging for final testing
4. Merge to main for production

### Monitoring Your Site

**Recommended Tools:**
- **Google Analytics:** Track visitors and behavior
- **Google Search Console:** Monitor search performance
- **Uptime Monitoring:** Services like UptimeRobot (free)
- **Performance Monitoring:** Web.dev/measure for regular audits

### Getting Help

**For Technical Issues:**
- Vercel Documentation: vercel.com/docs
- Astro Documentation: astro.build
- GitHub Support: support.github.com

**For Website Updates:**
- Keep this guide handy for reference
- Document any custom changes you make
- Consider setting up automated backups

---

## Success! 🎉

If you've followed this guide completely, you now have:

✅ **Professional Website:** intcreative.co loads perfectly  
✅ **Automatic Deployments:** Changes go live when you push to GitHub  
✅ **Staging Environment:** Safe testing at staging.intcreative.co  
✅ **SSL Security:** HTTPS with valid certificates  
✅ **Performance Optimized:** Fast loading and mobile-friendly  
✅ **SEO Ready:** Properly structured for search engines  

Your INT Creative website is now live and ready to generate leads!

### Next Steps

1. **Share your success:** Let your team know the site is live
2. **Start marketing:** Update social media profiles, business cards, etc.
3. **Monitor performance:** Set up analytics and monitoring tools
4. **Plan updates:** Schedule regular content updates and improvements

**Need help?** Contact jake@intcreative.co or refer back to the troubleshooting section.

---

*This guide was created for INT Creative LLC. Last updated: August 2025*