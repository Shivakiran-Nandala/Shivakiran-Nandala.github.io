# 🚀 Quick Deployment Reference

## For Shivakiran's Portfolio

---

## ⚡ Super Quick Deploy

1. **Push to GitHub** (use Emergent's "Save to GitHub" button)
2. **Run this command** from your project folder:
   ```bash
   cd frontend && yarn deploy
   ```
3. **Enable GitHub Pages**:
   - Go to: Repository → Settings → Pages
   - Source: `gh-pages` branch
   - Folder: `/ (root)`
   - Save

✅ **Done!** Your site will be live in 2-5 minutes.

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] All personal information is correct
- [ ] Profile photo displays properly  
- [ ] All document links work
- [ ] Contact information is accurate
- [ ] LinkedIn URL is correct
- [ ] All sections display properly

---

## 🔗 Important URLs

- **Development:** http://localhost:3000
- **Emergent Preview:** https://info-first-1.preview.emergentagent.com
- **GitHub Pages:** https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

---

## 🛠️ Common Commands

```bash
# Start development server
cd frontend && yarn start

# Build production version
cd frontend && yarn build

# Deploy to GitHub Pages
cd frontend && yarn deploy

# Or use the script
./deploy.sh
```

---

## 📱 After Deployment

**Test these:**
1. Open your GitHub Pages URL
2. Check all sections load
3. Test navigation buttons
4. Click document preview/download links
5. Test on mobile device
6. Share with friends!

---

## 🐛 Quick Fixes

**Site not loading?**
- Wait 5 minutes after first deploy
- Check Settings → Pages shows green checkmark
- Clear browser cache

**Blank page?**
- Verify `"homepage": "."` in package.json
- Rebuild and redeploy

**404 errors?**
- Use the hash router (already configured)
- 404.html is included for fallback

---

## 📞 Need Help?

1. Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions
2. Check [README.md](./README.md) for full documentation
3. Email: shivakirannandala@gmail.com

---

**Happy Deploying! 🎉**
