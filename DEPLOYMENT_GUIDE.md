# 🚀 GitHub Pages Deployment Guide

## Portfolio Website for Shivakiran Nandala

This guide will help you deploy your professional portfolio website to GitHub Pages as a static site.

---

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your repository on GitHub

---

## 🎯 Quick Deployment Options

### **Option 1: Automatic Deployment (Recommended)**

1. **Push code to GitHub** using Emergent's "Save to GitHub" button
2. **Install gh-pages locally** (if needed):
   ```bash
   cd frontend
   yarn install
   ```
3. **Deploy to GitHub Pages**:
   ```bash
   cd frontend
   yarn deploy
   ```

This will automatically build and deploy your site to `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

### **Option 2: Manual Build & Deploy**

If you prefer manual control:

#### Step 1: Build the Production Files
```bash
cd frontend
yarn build
```

This creates a `build/` folder with all static files.

#### Step 2: Deploy to GitHub Pages

**Method A: Using gh-pages (Easy)**
```bash
yarn deploy
```

**Method B: Manual Upload**
1. Create a `gh-pages` branch in your repository
2. Copy all files from `frontend/build/` to the root of `gh-pages` branch
3. Push to GitHub

#### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

### **Option 3: Using GitHub Actions (Advanced)**

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd frontend
        yarn install
        
    - name: Build
      run: |
        cd frontend
        yarn build
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./frontend/build
```

---

## 🔧 Configuration Details

### Package.json Settings

Your `package.json` is already configured with:

```json
{
  "homepage": ".",
  "scripts": {
    "build": "craco build",
    "deploy": "gh-pages -d build",
    "predeploy": "yarn build"
  }
}
```

- `"homepage": "."` - Makes the app work from any path (root or subdirectory)
- `"predeploy"` - Automatically builds before deploying
- `"deploy"` - Publishes to gh-pages branch

---

## 📂 What Gets Deployed

The production build includes:
- ✅ Optimized React application (65.94 KB gzipped)
- ✅ Professional portfolio with all sections
- ✅ All your documents (PDFs) linked correctly
- ✅ Responsive design for all devices
- ✅ Fast loading and SEO-friendly

---

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `shivakiran.com`):

1. **In your repository**, create a file named `CNAME` in `frontend/public/`:
   ```
   shivakiran.com
   ```

2. **In your domain registrar**, add DNS records:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   
   Type: A
   Name: @
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. **In GitHub Pages settings**, enter your custom domain

---

## ✅ Verify Your Deployment

After deployment, check:
- [ ] Website loads correctly
- [ ] All sections display properly (Hero, About, Experience, Projects, etc.)
- [ ] Navigation works smoothly
- [ ] Document preview/download links work
- [ ] Contact links (email, phone, LinkedIn) are clickable
- [ ] Mobile responsive design works

---

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment
**Solution:** Check that `"homepage": "."` is in package.json

### Issue: 404 Error on Refresh
**Solution:** GitHub Pages doesn't support client-side routing by default. Add a `404.html` that redirects to `index.html`

### Issue: Assets Not Loading
**Solution:** Make sure all image URLs are absolute (starting with `https://`)

### Issue: PDF Links Not Working
**Solution:** PDFs are hosted on Emergent CDN, they should work. If not, check the URLs in the document section.

---

## 📱 Test Your Live Site

Once deployed, test on multiple devices:
- 💻 Desktop browsers (Chrome, Firefox, Safari, Edge)
- 📱 Mobile devices (iOS, Android)
- 🖥️ Tablets

---

## 🎉 Your Portfolio is Ready!

Share your portfolio link when applying for jobs:
- GitHub Pages URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- Or your custom domain if configured

---

## 📞 Need Help?

If you encounter issues:
1. Check GitHub Pages status in repository Settings
2. Review browser console for errors (F12 → Console)
3. Verify all URLs are correct in the code

---

**Built with ❤️ using Emergent AI**
