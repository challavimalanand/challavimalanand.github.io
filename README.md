# Advocate Challa Vimalanand Portfolio

This is a NextJS portfolio website for Advocate Challa Vimalanand, configured for deployment on GitHub Pages.

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository
```bash
# Option A: Using GitHub CLI (if authenticated)
gh repo create advocate_portfolio --public --source=. --remote=origin --push

# Option B: Manual setup
# 1. Go to https://github.com/new
# 2. Create repository named "advocate_portfolio"
# 3. Add remote and push:
git remote add origin https://github.com/YOUR_USERNAME/advocate_portfolio.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger and deploy your site

### Step 3: Access Your Website
Your website will be available at:
```
https://YOUR_USERNAME.github.io/advocate_portfolio/
```

## 🔧 Configuration Details

The website is configured with:
- ✅ Static export enabled
- ✅ GitHub Pages compatible paths (`basePath: '/advocate_portfolio'`)
- ✅ Optimized images for static hosting
- ✅ GitHub Actions workflow for automatic deployment
- ✅ `.nojekyll` file for proper asset serving

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npx serve out -s
```

## 📁 Project Structure

```
app/
├── .github/workflows/pages.yml  # GitHub Actions deployment
├── app/                         # Next.js app directory
├── components/                  # React components
├── lib/                        # Utility functions
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔄 Automatic Deployment

Every push to the `main` branch will automatically:
1. Build the NextJS application
2. Generate static files
3. Deploy to GitHub Pages
4. Update your live website

## 📞 Support

For any issues with deployment, check:
1. GitHub Actions tab for build logs
2. Repository Settings > Pages for configuration
3. Browser console for any runtime errors

---

**Note**: The first deployment may take a few minutes. Subsequent deployments are typically faster.
