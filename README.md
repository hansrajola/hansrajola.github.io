# 🚀 Modern Developer Portfolio Website

A sleek, responsive, and high-performance personal portfolio website built with **Modern HTML5, Tailwind CSS, and Vanilla JavaScript**. Designed specifically for easy, 100% free hosting on **GitHub Pages**.

---

## ✨ Features

- 🌓 **Dark / Light Mode Toggle**: Smooth theme transition with automatic system preference detection and `localStorage` persistence.
- 📱 **100% Mobile Responsive**: Sticky glassmorphic navbar with an interactive slide-in mobile drawer menu.
- ⚡ **Zero-Build & Ultra Fast**: No `npm install`, no build pipelines, no `node_modules` breaking down the road. Pure, blazing-fast static assets.
- 🎨 **Modern Design System**: Plus Jakarta Sans typography, ambient background glow, subtle grid pattern, and smooth scroll animations.
- 📂 **Centralized Data File (`assets/js/projects.js`)**: Update your name, bio, skills, experience, and project cards in one simple JS file without touching complex HTML!
- 🏷️ **Interactive Project Filtering**: Filter projects by categories (*All, Web Apps, Mobile & UI, Open Source*) with dynamic rendering.
- ✉️ **Interactive Contact Form**: Client-side validation with animated toast feedback, ready to connect with Formspree, Web3Forms, or EmailJS.
- 🚀 **GitHub Pages Ready**: Optimized for instant free hosting on GitHub.

---

## 📁 Project Structure

```
PersonalWeb/
├── index.html              # Main HTML5 semantic layout
├── assets/
│   ├── css/
│   │   └── style.css       # Custom animations, fonts, and dark mode styles
│   ├── js/
│   │   ├── projects.js     # 👈 EDIT YOUR DETAILS HERE (Bio, Projects, Skills)
│   │   └── main.js         # Theme toggle, filters, mobile menu, form logic
│   └── images/             # Place your profile picture and project thumbnails here
└── README.md               # Setup and deployment documentation
```

---

## 🛠️ How to Customize Your Information

All your personal information is organized in `assets/js/projects.js`. Open it in any text editor to customize:

1. **Profile Info**: Name, title, bio, location, email, and social links.
2. **Projects**: Add, remove, or modify project titles, tags, live URLs, and GitHub links.
3. **Skills**: Group your technical skills (Frontend, Backend, DevOps, Tools).
4. **Experience**: Add your roles, company names, dates, and descriptions.

---

## 🌐 How to Preview Locally

Double-click `index.html` or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**.

---

## 🚢 How to Deploy to GitHub Pages for FREE

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **New Repository**.
3. Name it:
   - `<your-username>.github.io` (e.g., if your username is `rahul`, name it `rahul.github.io`).
   - Set the repository to **Public**.
   - Do **NOT** initialize with a README (we already have one).
4. Click **Create repository**.

### Step 2: Push Your Code
Open your terminal inside this folder (`c:\Users\Office\PersonalWeb`) and run:

```bash
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

*(Replace `<your-username>` with your actual GitHub username).*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root folder `/ (root)`.
4. Click **Save**.

Your site will be live at `https://<your-username>.github.io` within 1-2 minutes! 🎉

