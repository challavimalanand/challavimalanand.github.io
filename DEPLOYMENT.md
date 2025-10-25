# GitHub Pages Deployment Instructions

## Manual Deployment Steps:

1. Create a GitHub repository named "advocate_portfolio"
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. The GitHub Actions workflow will automatically build and deploy

## Repository Setup:
```bash
# If you have GitHub CLI installed and authenticated:
gh repo create advocate_portfolio --public --source=. --remote=origin --push

# Or manually:
# 1. Create repository on GitHub.com
# 2. Add remote: git remote add origin https://github.com/YOUR_USERNAME/advocate_portfolio.git
# 3. Push: git push -u origin main
```

## GitHub Pages Configuration:
1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main branch

## Final URL:
https://YOUR_USERNAME.github.io/advocate_portfolio/

## Local Testing:
```bash
npm run build
npx serve out -s
```
