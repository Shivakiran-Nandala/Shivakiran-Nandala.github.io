# 💼 Professional Portfolio - Shivakiran Nandala

A modern, professional portfolio website showcasing experience in Quality Management, Data Analysis, and Engineering.

## 🌐 Live Demo

**Preview URL:** https://info-first-1.preview.emergentagent.com

**GitHub Pages:** https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/ (after deployment)

---

## ✨ Features

- 🎨 **Modern Design** - Professional blue/navy theme
- 📱 **Fully Responsive** - Works on all devices
- 🚀 **Fast Loading** - Optimized production build (65.94 KB gzipped)
- 📄 **Document Management** - Preview and download PDFs
- 🔗 **Social Integration** - LinkedIn, email, phone links
- 🎯 **SEO Friendly** - Optimized for search engines
- ⚡ **Smooth Navigation** - Animated scroll effects

---

## 📋 Portfolio Sections

1. **Hero** - Introduction with profile photo and key skills
2. **About Me** - Professional summary and contact information
3. **Experience** - Timeline of work history with detailed responsibilities
4. **Education** - Academic qualifications
5. **Projects** - Key projects with descriptions
6. **Skills** - Technical and professional competencies
7. **Certifications** - Professional certifications
8. **Documents** - Downloadable references and certificates
9. **Contact** - Multiple ways to get in touch

---

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS + Custom CSS
- **Icons:** Lucide React
- **Router:** React Router DOM
- **Build Tool:** Create React App with CRACO
- **Deployment:** GitHub Pages

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone YOUR-REPO-URL
   cd YOUR-REPO-NAME
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Build for Production

```bash
cd frontend
yarn build
```

This creates an optimized production build in the `build/` folder.

---

## 🌐 Deploy to GitHub Pages

### Option 1: Quick Deploy (Recommended)

```bash
# From project root
./deploy.sh
```

### Option 2: Manual Deploy

```bash
cd frontend
yarn deploy
```

### Option 3: Step by Step

1. **Build the project**
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   yarn deploy
   ```

3. **Configure GitHub Pages**
   - Go to repository **Settings → Pages**
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click **Save**

📖 **Full deployment guide:** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📁 Project Structure

```
.
├── frontend/                  # React application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── App.js           # Main portfolio component
│   │   ├── App.css          # Styles
│   │   └── index.js         # Entry point
│   ├── package.json         # Dependencies
│   └── build/               # Production build (after build)
├── backend/                  # Backend API (optional)
├── DEPLOYMENT_GUIDE.md      # Detailed deployment instructions
├── deploy.sh                # Automated deployment script
└── README.md                # This file
```

---

## 🎨 Customization

### Update Portfolio Content

Edit `/app/frontend/src/App.js`:

```javascript
// Update personal information
const experiences = [...];
const projects = [...];
const skills = {...};
const certifications = [...];
const documents = [...];
```

### Change Color Theme

Edit `/app/frontend/src/App.css`:

```css
/* Main colors */
--primary-blue: #1e3a8a;
--accent-blue: #3b82f6;
```

### Update Profile Photo

Replace the image URL in `App.js`:

```javascript
src="YOUR-IMAGE-URL"
```

---

## 📄 Documents & References

All documents are hosted on Emergent CDN and accessible via:
- ✅ Work Reference
- ✅ Enrollment Certificate
- ✅ Transcript
- ✅ Certificates
- ✅ Service Letter

Each document has:
- 👁️ **Preview** button (opens in new tab)
- ⬇️ **Download** button

---

## 🔗 Contact Information

- 📧 **Email:** shivakirannandala@gmail.com
- 📱 **Phone:** +49 163 5312765
- 🔗 **LinkedIn:** [linkedin.com/in/n-shivakiran](https://www.linkedin.com/in/n-shivakiran/)
- 📍 **Location:** Weimar, Thuringia, Germany

---

## 🧪 Testing

Test your deployed site:

```bash
# Check all sections load
✓ Hero section with photo
✓ About section with contact info
✓ Experience timeline
✓ Projects cards
✓ Skills categories
✓ Certifications
✓ Documents with preview/download
✓ Contact section

# Test functionality
✓ Navigation buttons work
✓ Smooth scrolling
✓ PDF links open correctly
✓ Contact links work (mailto:, tel:, https://)
✓ Mobile responsive
```

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Deployment Issues

```bash
# Ensure gh-pages is installed
yarn add -D gh-pages

# Check git configuration
git config user.name
git config user.email
```

### Preview Issues

- Clear browser cache
- Try incognito/private mode
- Check browser console for errors (F12)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Lucide Icons](https://lucide.dev)

---

## 📝 License

This portfolio is private and belongs to Shivakiran Nandala.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)
- Developed using [Emergent AI](https://emergent.sh)

---

## 📞 Support

For issues or questions about this portfolio:
- Open an issue in this repository
- Contact via email: shivakirannandala@gmail.com

---

**Last Updated:** February 2025

**Version:** 1.0.0

---

Made with ❤️ by Shivakiran Nandala
