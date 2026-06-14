# Personal Portfolio Website — Technical Report
### Andamdas Keshav Karthikeya | Developer Arena Internship — Week 1

---

## INDEX

1. [Project Overview](#1-project-overview)
   - 1.1 Background & Problem Statement
   - 1.2 Objectives
   - 1.3 Deliverables
2. [Development Environment & Tools](#2-development-environment--tools)
   - 2.1 Tech Stack
   - 2.2 Tools Used
   - 2.3 Version Control Workflow
3. [Project Structure](#3-project-structure)
   - 3.1 File Hierarchy
   - 3.2 Role of Each File / Module
   - 3.3 CSS Architecture
4. [Technical Implementation](#4-technical-implementation)
   - 4.1 Design System
   - 4.2 Layout — CSS Grid & Flexbox
   - 4.3 JavaScript Modules
   - 4.4 Responsive Design
   - 4.5 Accessibility & SEO
5. [Features & Functionality](#5-features--functionality)
   - 5.1 Hero Section
   - 5.2 Sticky Navigation & Mobile Menu
   - 5.3 About Section
   - 5.4 Technical Skills Grid
   - 5.5 Projects Showcase
   - 5.6 Experience & Achievements Timeline
   - 5.7 Contact Section & Form Validation
6. [Setup & Deployment](#6-setup--deployment)
7. [Testing & Quality Assurance](#7-testing--quality-assurance)
8. [Challenges & Solutions](#8-challenges--solutions)
9. [Outcomes & Key Learnings](#9-outcomes--key-learnings)

---

## 1. Project Overview

### 1.1 Background & Problem Statement

In today's competitive tech industry, developers need a strong online presence to showcase their skills and projects to potential employers and clients. A personal portfolio website serves as a live, interactive resume — one that goes beyond a PDF by demonstrating actual coding ability through the product itself.

Traditional resumes fail to capture the real depth of a developer's skill set. Employers and recruiters increasingly look for live, accessible proof of work — something they can interact with directly. A well-built portfolio website solves this problem by combining professional presentation with functional demonstration.

This project was assigned as part of the **Developer Arena internship program** to build a fully functional, professional-grade portfolio website from scratch using only core web technologies — no frameworks, no libraries. The challenge was not just to build something that looks good, but to build something that is **fast, accessible, responsive, and maintainable**.

As a second-year B.Tech Computer Science & Engineering (Cyber Security) student at Geethanjali College of Engineering and Technology, Hyderabad, this project also served as a real-world application of programming fundamentals, UI/UX principles, and software development practices learned in the academic environment.

---

### 1.2 Objectives

- Design and develop a fully responsive personal portfolio website without relying on any external CSS or JavaScript frameworks
- Implement modern UI/UX practices including dark mode aesthetics, smooth gradient backgrounds, glassmorphism-style navbar, and intuitive navigation with scroll-aware behaviour
- Present real personal information — academic background, technical skills, actual projects (Sentinel AI, Smart Bluetooth Pendrive, QR Attendance System), internship experience, and achievements
- Demonstrate proficiency in HTML5, CSS3, and vanilla JavaScript through a real-world, deployable deliverable
- Follow professional code organization practices including modular CSS architecture and semantic HTML5 structure
- Ensure the website works smoothly across all device sizes — from small phones (320px) to large desktops (1440px+)
- Optimize the website for SEO using proper meta tags and semantic markup

---

### 1.3 Deliverables

- A fully functional multi-section portfolio website (`index.html`) covering Hero, About, Technical Skills, Projects, Experience & Achievements, and Contact sections
- Modular CSS architecture split across three files — `variables.css`, `style.css`, and `responsive.css`
- A single JavaScript file (`navigation.js`) handling all interactivity including navigation toggle, auto-close on link click, and scroll-aware header behaviour
- A structured image directory containing profile photo, project screenshots, and skill icons
- A complete README (`README.md`) covering setup, folder structure, and browser testing results
- This technical report documenting the full development process

---

## 2. Development Environment & Tools

### 2.1 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | Latest | Page structure, semantic markup, and accessibility attributes |
| CSS3 | Latest | Styling, layout systems, animations, and design tokens |
| JavaScript | ES6+ | DOM manipulation, event handling, and interactive behaviour |
| Google Fonts — Inter | Latest | Professional typography replacing browser default fonts |
| Git | Latest | Version control and source management |

> No external frameworks, CSS libraries, or JavaScript plugins were used at any point in this project. The entire codebase is built on native browser technologies from the ground up. This decision demonstrates a strong foundational understanding of how the web works without relying on abstractions.

---

### 2.2 Tools Used

**Visual Studio Code**
Primary code editor used throughout the project. Extensions used include Live Server for real-time browser preview, Prettier for consistent code formatting, and IntelliSense for faster development.

**Google Chrome DevTools**
Used extensively for responsive design testing across different viewport sizes, debugging JavaScript, inspecting CSS properties, and simulating various mobile devices including iPhone SE, iPhone 14, and Samsung Galaxy S20.

**Python HTTP Server**
Used to serve the static portfolio locally on the same WiFi network, enabling real-device testing on a physical mobile phone by navigating to `http://192.168.29.96:8000` from the phone's browser.

**Git & GitHub**
Git was used for local version control with structured commits at every major milestone. The repository is hosted on GitHub for remote backup and deployment readiness via GitHub Pages.

---

### 2.3 Version Control Workflow

The project followed a structured Git workflow with clear, meaningful commit messages at every major development milestone.

| Stage | Commit Message | What Was Done |
|---|---|---|
| 1 | `Initial commit` | Folder structure, blank HTML, .gitignore setup |
| 2 | `Add HTML structure` | Full semantic HTML with all sections |
| 3 | `Add CSS variables and base styles` | Design tokens, typography, color palette in `variables.css` |
| 4 | `Add component styles` | Hero, nav, about, skills, projects, timeline, contact styles in `style.css` |
| 5 | `Add responsive styles` | All media queries and breakpoint overrides in `responsive.css` |
| 6 | `Add JavaScript interactivity` | Navigation toggle, scroll-aware header, auto-close menu |
| 7 | `Update content from resume` | Real personal data, real projects, real achievements |
| 8 | `Final polish and README` | UI refinements, meta tags, SEO, documentation |

---

## 3. Project Structure

### 3.1 File Hierarchy

```
week1-portfolio/
├── index.html                  ← Main page (all sections)
├── css/
│   ├── variables.css           ← Design tokens
│   ├── style.css               ← Component styles
│   └── responsive.css          ← Breakpoints
├── js/
│   └── navigation.js           ← All interactivity
├── images/
│   ├── profile.png             ← Profile photo
│   ├── hero-bg.png             ← Hero background (AI-generated)
│   ├── project1.jpeg           ← Sentinel AI thumbnail
│   ├── project2.jpeg           ← Smart Bluetooth Pendrive thumbnail
│   ├── project3.jpeg           ← QR Attendance System thumbnail
│   └── icons/
│       ├── html5.jpeg
│       ├── css3.jpeg
│       ├── javascript.jpeg
│       ├── python.jpeg
│       ├── java.jpeg
│       └── github.jpeg
├── README.md
└── .gitignore
```

---

### 3.2 Role of Each File / Module

| File | Responsibility |
|---|---|
| `index.html` | Core document — all sections, semantic structure |
| `css/variables.css` | Design tokens — colors, fonts, spacing defined once |
| `css/style.css` | Main stylesheet — all component styles (720 lines) |
| `css/responsive.css` | Media queries — layout adjustments at 992px, 768px, 480px |
| `js/navigation.js` | Burger toggle, auto-close on nav click, scroll-aware header |
| `images/` | Profile photo, project screenshots, and skill icons |
| `README.md` | Project overview, setup instructions, browser testing results |
| `.gitignore` | Excludes `.DS_Store` and system files from Git tracking |

---

### 3.3 CSS Architecture

The CSS is split into three files following a scaled-down version of the **ITCSS (Inverted Triangle CSS)** methodology:

**`variables.css` — Settings Layer**

Every color, font, spacing value, shadow, border-radius, and transition is defined here as a CSS Custom Property. No raw values appear anywhere else in the codebase.

```css
:root {
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --primary-light: rgba(37,99,235,0.12);
    --dark: #0f172a;
    --secondary: #1e293b;
    --font: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --shadow: 0 4px 20px rgba(0,0,0,0.08);
    --shadow-hover: 0 12px 40px rgba(37,99,235,0.15);
    --radius: 12px;
    --section-padding: 100px 10%;
    --transition: all 0.3s ease;
}
```

**`style.css` — Components Layer**
Defines styles for every section of the website. Uses CSS custom properties throughout — no hardcoded raw values. 720 lines covering: reset, navbar, hero, about, skills, project cards, timeline, contact form, footer, and animations.

**`responsive.css` — Overrides Layer**
Contains only media queries that progressively adjust the layout for tablet, mobile, and small phone screens. Three breakpoints: `992px`, `768px`, and `480px`.

---

## 4. Technical Implementation

### 4.1 Design System

**Color Palette**

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#2563eb` | Buttons, highlights, active states |
| `--primary-hover` | `#1d4ed8` | Button hover states |
| `--primary-light` | `rgba(37,99,235,0.12)` | Badge backgrounds, tag backgrounds |
| `--dark` | `#0f172a` | Hero background, footer |
| `--secondary` | `#1e293b` | Navbar, dark card tones |
| `--light` | `#f8fafc` | Alternating section backgrounds |
| `--text-primary` | `#1f2937` | Main body text |
| `--text-secondary` | `#6b7280` | Supporting text, descriptions |

**Typography**

Google Fonts **Inter** is loaded via `<link>` in the `<head>` with weights 300, 400, 500, 600, 700, and 800. Chosen for its exceptional readability on screens and professional appearance in modern tech products.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**Spacing**

Section padding controlled by `--section-padding: 100px 10%` on desktop, stepping down to `50px 4%` on small phones via responsive overrides.

---

### 4.2 Layout — CSS Grid & Flexbox

- **CSS Grid** — skills grid and project cards grid (two-dimensional, rows and columns)
- **Flexbox** — navbar, hero buttons, about container, contact wrapper, footer (one-dimensional alignment)

```css
/* Skills — auto-fill, minimum 140px per card */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
}

/* Projects — auto-fill, minimum 320px per card */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 28px;
}

/* Contact — two-column layout */
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 50px;
}
```

---

### 4.3 JavaScript Modules

All JavaScript lives in `navigation.js` with three logical blocks:

**Block 1 — Mobile Menu Toggle**
```js
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
```

**Block 2 — Auto-close Menu on Link Click**
```js
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
```
Solves the common mobile UX problem where the overlay blocks content after navigation.

**Block 3 — Scroll-Aware Header**
```js
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
```
Adding `.scrolled` triggers the frosted-glass CSS via:
```css
header.scrolled {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
```

---

### 4.4 Responsive Design

The site is functional from **320px to 1440px+**.

| Breakpoint | Target | Key Behaviours |
|---|---|---|
| `max-width: 992px` | Tablet | 3-column skills, 2-column projects, stacked contact |
| `max-width: 768px` | Mobile | Hamburger menu, stacked hero buttons, single-column projects |
| `max-width: 480px` | Small phones | Scaled typography, reduced padding, 2-column skills |

Key mobile decisions:
- `min-height: 100svh` — accounts for iOS Safari dynamic toolbar, prevents content clip
- `background-attachment: scroll` on mobile — fixed attachment causes iOS performance issues
- `-webkit-backdrop-filter` — required for frosted glass in older Safari iOS
- `word-break: break-word` — prevents long email address from causing horizontal scroll
- All touch targets minimum **44×44px**

---

### 4.5 Accessibility & SEO

**Accessibility:**
- All images have meaningful `alt` text
- Burger button: `aria-label="Toggle Navigation"`
- Footer links include `aria-label` attributes
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Single `<h1>` per page with correct heading hierarchy
- Full keyboard navigation supported

**SEO:**
- `<title>Keshav Karthikeya | Portfolio</title>`
- `<meta name="description">` with professional summary
- `lang="en"` on `<html>`
- `rel="noopener"` on all external links

---

## 5. Features & Functionality

### 5.1 Hero Section

**Background:** Custom AI-generated dark circuit-board image (`hero-bg.png`) with three CSS gradient layers on top — a linear overlay for text legibility and two radial gradients for depth.

**Name Typography — Gradient Text Effect:**
```css
.hero-content h1 {
    background: linear-gradient(135deg, #ffffff 30%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

**Entry Animation:**
```css
.hero-content {
    animation: fadeInUp 0.9s ease both;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
}
```

**CTA Buttons:** Two — `View My Work` (solid primary) and `Contact Me` (outline with hover fill).

---

### 5.2 Sticky Navigation & Mobile Menu

- Header starts transparent over the hero; gains frosted glass on scroll via `.scrolled` class
- `KK` monogram logo in a 46×46px blue rounded tile
- Nav link hover underline animation via `::after` pseudo-element
- Mobile hamburger menu below 768px — toggles `.active` class, auto-closes on link tap

---

### 5.3 About Section

Two-column Flexbox layout:
- **Left:** Profile photo in a circle with blue ring
- **Right:** Professional summary from resume + five strength badge pills (Problem Solver, Creative Thinker, Quick Learner, Adaptable, Hands-on Builder)

Stacks to single column on mobile.

---

### 5.4 Technical Skills Grid

6 skills in CSS auto-fill grid (`minmax(140px, 1fr)`):

| Skill | Icon |
|---|---|
| HTML5 | `icons/html5.jpeg` |
| CSS3 | `icons/css3.jpeg` |
| JavaScript | `icons/javascript.jpeg` |
| Python | `icons/python.jpeg` |
| Java | `icons/java.jpeg` |
| Git & GitHub | `icons/github.jpeg` |

Cards lift on hover: `transform: translateY(-6px)` + blue border.

---

### 5.5 Projects Showcase

Three real projects as `<article>` cards with thumbnail, tech tags, title, and description:

**Sentinel AI** — Android / Kotlin / Google ML Kit
Real-time QR malicious URL detection with dynamic Risk Evaluation Engine.

**Smart Bluetooth Pendrive** — ESP32-CAM / WiFi / Web Server / C
Browser-based wireless file transfer. Won 1st Prize at ROBOGEN Hackathon 2025.

**Quick Attend — QR Attendance System** — QR Code / JavaScript / SQLite / Face Recognition
Faculty generate session QR codes; students scan + face verify. Real-time SQLite logging, automated reporting, anti-proxy.

Card hover: `transform: translateY(-8px)` + image `scale(1.05)` (clipped by `overflow: hidden`).

---

### 5.6 Experience & Achievements Timeline

Vertical timeline with three entries:

| Entry | Date | Dot Color |
|---|---|---|
| AI Image Annotation Intern — Student Tribe | March 2026 | Blue |
| 🏆 1st Prize — ROBOGEN Hackathon — IEEE Club, GCET | August 2025 | Gold |
| Google Kaggle — 5-Day AI Agents Intensive Certification | December 2025 | Green |

Left vertical line uses `::before` with a blue-to-grey gradient. Coloured dots distinguish entry types.

---

### 5.7 Contact Section & Form Validation

**Info panel:** Three contact cards — Phone (+91 8790523785), Email, Location — with hover lift effect.

**Form:** Three fields with HTML5 native validation:
```html
<input type="text" id="name" required minlength="3">
<input type="email" id="email" required>
<textarea id="message" required></textarea>
```

Focus ring: `box-shadow: 0 0 0 3px rgba(37,99,235,0.1)`. Submit button full-width on mobile.

---

## 6. Setup & Deployment

### 6.1 Local Setup

```bash
git clone https://github.com/yourusername/week1-portfolio.git
cd week1-portfolio
open index.html        # macOS — direct file open
```

**Recommended — Python server for real mobile testing:**
```bash
python3 -m http.server 8000
# Desktop: http://localhost:8000
# Phone on same WiFi: http://192.168.29.96:8000
```

### 6.2 Deployment

| Platform | Method | Notes |
|---|---|---|
| GitHub Pages | Settings → Pages → main / root | Free, `yourusername.github.io/week1-portfolio` |
| Netlify | Drag project folder onto dashboard | Instant URL assigned |
| Vercel | Import GitHub repo | Auto-redeploys on every push |

All three are free with HTTPS.

---

## 7. Testing & Quality Assurance

### 7.1 Browser Compatibility

| Browser | Result |
|---|---|
| Google Chrome (latest) | ✅ Fully functional |
| Mozilla Firefox (latest) | ✅ Fully functional |
| Microsoft Edge (latest) | ✅ Fully functional |
| Safari macOS (latest) | ✅ Fully functional |
| Chrome Android (latest) | ✅ Fully functional |
| Safari iOS (latest) | ✅ Fully functional |

> `-webkit-backdrop-filter` added for Safari iOS frosted glass compatibility.

### 7.2 Responsive Testing

| Viewport | Layout Result |
|---|---|
| 320px – 480px | ✅ Single column, hamburger, stacked buttons |
| 481px – 768px | ✅ Comfortable spacing, readable |
| 769px – 992px | ✅ 2-column projects, 3-column skills |
| 993px – 1280px | ✅ Full nav, auto-fill grids |
| 1280px+ | ✅ Balanced whitespace |

**Real-device test:** Accessed at `http://192.168.29.96:8000` on physical Android device.

### 7.3 Accessibility

- All images: meaningful `alt` text ✅
- Burger button: `aria-label` ✅
- Semantic HTML5 landmarks ✅
- Single `<h1>`, correct heading hierarchy ✅
- Full keyboard navigation ✅

### 7.4 Performance

- CSS animations use only `transform` and `opacity` (GPU compositor thread) ✅
- JavaScript at bottom of `<body>` — non-blocking ✅
- Google Fonts `<link rel="preconnect">` — DNS pre-resolution ✅
- Zero third-party JS or CSS libraries ✅
- `background-attachment: scroll` on mobile — avoids iOS repaint cost ✅

---

## 8. Challenges & Solutions

### 8.1 Hero Background — Choosing the Right Visual

**Challenge:** The original `hero.jpeg` was a standard photograph that clashed with the professional dark tech aesthetic of the rest of the design.

**Solution:** A custom background image was generated using AI tools, producing a dark navy (#0f172a) circuit-board pattern with subtle geometric lines and soft blue glow orbs. Saved as `hero-bg.png`. Three CSS gradient layers (linear + two radial) were applied on top to control depth and ensure text legibility at all times.

---

### 8.2 Frosted Glass Navbar on Safari iOS

**Challenge:** `backdrop-filter: blur(12px)` was not rendering on older Safari iOS versions, showing a flat opaque box instead.

**Solution:** Added `-webkit-backdrop-filter: blur(12px)` alongside the standard property in both the `.scrolled` header and the mobile nav dropdown. This vendor prefix is included wherever `backdrop-filter` is used.

---

### 8.3 Long Email Address Overflow on Small Phones

**Challenge:** `andamdaskeshavkarthikeya@gmail.com` (38 characters) overflowed its container on screens below 380px, causing horizontal page scroll.

**Solution:** Added `word-break: break-word` to `.contact-item p` in the 480px responsive breakpoint, allowing the email to wrap mid-word within the container without any horizontal overflow.

---

### 8.4 Hero Height on iOS — Address Bar Overlap

**Challenge:** `min-height: 100vh` caused hero content to be hidden behind Safari's dynamic address bar on iPhones. The visible viewport is shorter than `100vh` when browser chrome is visible.

**Solution:** Changed to `min-height: 100svh` at the 768px breakpoint. The `svh` (small viewport height) unit accounts for the smallest possible viewport including dynamic browser UI, ensuring content always fits within the visible screen area on iOS.

---

## 9. Outcomes & Key Learnings

### 9.1 Project Outcomes

The goal was met in full — a production-ready portfolio that:
- Accurately represents real academic background, skills, and projects
- Works across all major browsers and screen sizes from 320px to 1440px+
- Has a professional visual identity — dark navy palette, Inter typography, blue accents, gradient hero, frosted navbar
- Includes a full vertical timeline, project cards with hover effects, and a validated contact form
- Is structured for easy maintenance via CSS custom properties

---

### 9.2 Technical Learnings

**CSS Custom Properties as a Design System**
Centralizing all values in `variables.css` made the entire codebase dramatically easier to maintain. Changing the primary color across 720+ lines required editing one line.

**`100svh` vs `100vh` for Mobile iOS**
Understanding the difference between `vh`, `svh`, `dvh`, and `lvh` was a valuable lesson. `svh` is now the default for full-screen hero sections in mobile-first builds.

**`-webkit-backdrop-filter` for Safari**
Vendor prefixes are still necessary for some modern CSS properties in Safari. Checking `caniuse.com` before using a property and including the prefixed fallback is a non-negotiable step in cross-browser development.

**Real-Device Testing is Irreplaceable**
Chrome DevTools' emulator catches layout issues quickly, but it does not replicate real touch behaviour, scroll inertia, or Safari-specific rendering. Testing on a physical device over a local network caught the iOS address bar overflow and the frosted glass bug that the emulator missed.

**Semantic HTML from the Start**
Writing semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) from the first line — rather than retrofitting it — made accessibility attributes natural and kept the document outline clean and logical throughout the project.

---

*Technical Report — Andamdas Keshav Karthikeya | Developer Arena Internship Week 1*
*Geethanjali College of Engineering and Technology, Hyderabad | 2026*
