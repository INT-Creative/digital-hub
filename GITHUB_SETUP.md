# 🚀 GitHub Repository Setup Instructions

Your code is ready and committed locally! Follow these steps to create your GitHub repository:

## Step 1: Create Repository on GitHub

1. **Go to GitHub.com** and sign in to your account
2. **Click the green "New" button** or go to: https://github.com/new
3. **Fill in the repository details:**
   - **Repository name:** `intcreative-hub`
   - **Description:** "Professional marketing agency website for INT Creative - focused on helping startups grow"
   - **Visibility:** Choose "Public" (free hosting works with public repos)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create repository"**

## Step 2: Connect Your Local Code to GitHub

After creating the repository, GitHub will show you setup instructions. Run these commands in your terminal:

```bash
cd /home/intadmin/intcreative-hub

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/intcreative-hub.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md should display automatically

## Step 4: Enable GitHub Pages (Optional)

If you want free hosting through GitHub Pages:

1. Go to **Settings** tab in your repository
2. Scroll down to **Pages** section
3. Under **Source**, select "Deploy from a branch"
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

## Alternative: If You Prefer Creating a New GitHub Account

If you need a new GitHub account:

1. Go to https://github.com/signup
2. Create a new account with your email
3. Verify your email address
4. Then follow the steps above

## Troubleshooting

### If you get "permission denied" errors:
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/YOUR_USERNAME/intcreative-hub.git

# You'll be prompted for your GitHub username and password
# For password, use a Personal Access Token (create at github.com/settings/tokens)
```

### If you need to create a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "intcreative-hub"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. Copy the token and use it as your password when pushing

## ✅ Success Indicators

You'll know it worked when:
- Your code appears on GitHub.com in your repository
- The URL will be: `https://github.com/YOUR_USERNAME/intcreative-hub`
- You see all your files and folders
- The commit history shows your initial commit

## Next Steps

Once your repository is on GitHub:
1. Follow the deployment guide to connect to Vercel/Netlify
2. Set up automatic deployments
3. Connect your intcreative.co domain

---

**Need help?** The code is ready and committed locally. You just need to create the repository on GitHub and push!